export type Sexo = "Feminino" | "Masculino" | "Outro";

interface DadosFuncionario {
  id: number;
  nome: string;
  sexo: Sexo;
  dataContratacao: string; // formato AAAA-MM-DD
  cpf: string;
  rg: string;
}

export class FuncionarioContratado {
  readonly tipo = "Contratado";
  constructor(public dados: DadosFuncionario, public salarioFixo: number) {}
}

export class Freelancer {
  readonly tipo = "Freelancer";
  constructor(
    public dados: DadosFuncionario,
    public salarioHora: number,
    public dataLimiteContrato: string // formato AAAA-MM-DD
  ) {}
}

export type Funcionario = FuncionarioContratado | Freelancer;
