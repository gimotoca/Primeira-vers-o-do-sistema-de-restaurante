import { Entrega } from "./models/Entrega";
import { FuncionarioContratado, Freelancer } from "./models/Funcionario";
import { Prato } from "./models/Prato";
import { EntregaRepository } from "./repositories/EntregaRepository";
import { FuncionarioRepository } from "./repositories/FuncionarioRepository";
import { PratoRepository } from "./repositories/PratoRepository";
import { RestauranteService } from "./services/RestauranteService";

const pratos = new PratoRepository();
const funcionarios = new FuncionarioRepository();
const entregas = new EntregaRepository();
const restaurante = new RestauranteService(pratos, funcionarios, entregas);

// Dados fictícios para demonstrar o funcionamento.
const prato: Prato = {
  id: 1,
  nome: "Feijoada",
  dataValidade: "2026-10-25",
  nacionalidade: "Brasileira",
};
pratos.adicionar(prato);

const contratado = new FuncionarioContratado(
  { id: 1, nome: "Ana Souza", sexo: "Feminino", dataContratacao: "2024-02-01", cpf: "000.000.000-00", rg: "00.000.000-0" },
  3500
);
const freelancer = new Freelancer(
  { id: 2, nome: "João Lima", sexo: "Masculino", dataContratacao: "2026-10-01", cpf: "111.111.111-11", rg: "11.111.111-1" },
  25,
  "2026-12-31"
);
funcionarios.adicionar(contratado);
funcionarios.adicionar(freelancer);

const entrega: Entrega = {
  id: 1,
  dataHoraSaida: "2026-10-20T18:30:00",
  numeroPedido: 105,
  endereco: "Rua das Flores, 123",
};
entregas.adicionar(entrega);

console.log("=== RELATÓRIO DE PRATOS ===");
console.table(restaurante.relatorioPratos());

console.log("=== RELATÓRIO DE FUNCIONÁRIOS ===");
console.table(restaurante.relatorioFuncionarios().map((f) => ({ tipo: f.tipo, ...f.dados })));

console.log("=== FUNCIONÁRIOS TRABALHANDO ===");
console.table(restaurante.funcionariosTrabalhando().map((f) => ({ tipo: f.tipo, nome: f.dados.nome })));

console.log("=== RELATÓRIO DE SALÁRIOS ===");
const horasPorFuncionario = new Map<number, number>([[1, 160], [2, 80]]);
console.table(restaurante.relatorioFuncionarios().map((f) => ({
  nome: f.dados.nome,
  horasInformadas: horasPorFuncionario.get(f.dados.id) ?? 0,
  salario: restaurante.salarioDoFuncionario(f, horasPorFuncionario.get(f.dados.id) ?? 0),
})));

console.log("=== RELATÓRIO DE ENTREGAS ===");
console.table(restaurante.relatorioEntregas());

console.log("=== SITUAÇÃO DO CONTRATO FREELANCER ===");
console.log({
  funcionario: freelancer.dados.nome,
  ativo: restaurante.contratoAtivo(freelancer),
  diasRestantes: restaurante.diasRestantesContrato(freelancer),
});
