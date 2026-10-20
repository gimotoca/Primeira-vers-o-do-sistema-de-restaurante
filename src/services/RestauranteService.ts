import { Entrega } from "../models/Entrega";
import { Funcionario, Freelancer } from "../models/Funcionario";
import { Prato } from "../models/Prato";
import { EntregaRepository } from "../repositories/EntregaRepository";
import { FuncionarioRepository } from "../repositories/FuncionarioRepository";
import { PratoRepository } from "../repositories/PratoRepository";

export class RestauranteService {
  constructor(
    private pratoRepository: PratoRepository,
    private funcionarioRepository: FuncionarioRepository,
    private entregaRepository: EntregaRepository
  ) {}

  relatorioPratos(): Prato[] {
    return this.pratoRepository.listar();
  }

  relatorioFuncionarios(): Funcionario[] {
    return this.funcionarioRepository.listar();
  }

  relatorioEntregas(): Entrega[] {
    return this.entregaRepository.listar();
  }

  /** Contratados são considerados trabalhando; freelancers só se o contrato estiver ativo. */
  funcionariosTrabalhando(dataReferencia: Date = new Date()): Funcionario[] {
    return this.funcionarioRepository.listar().filter((funcionario) => {
      if (funcionario instanceof Freelancer) {
        return this.contratoAtivo(funcionario, dataReferencia);
      }
      return true;
    });
  }

  contratoAtivo(freelancer: Freelancer, dataReferencia: Date = new Date()): boolean {
    const limite = this.dataLocal(freelancer.dataLimiteContrato);
    return limite.getTime() >= this.inicioDoDia(dataReferencia).getTime();
  }

  diasRestantesContrato(freelancer: Freelancer, dataReferencia: Date = new Date()): number {
    if (!this.contratoAtivo(freelancer, dataReferencia)) return 0;
    const limite = this.dataLocal(freelancer.dataLimiteContrato);
    const dias = Math.ceil((this.inicioDoDia(limite).getTime() - this.inicioDoDia(dataReferencia).getTime()) / 86400000);
    return Math.max(0, dias);
  }

  salarioDoFuncionario(funcionario: Funcionario, horasTrabalhadas: number): number {
    if (horasTrabalhadas < 0) throw new Error("As horas trabalhadas não podem ser negativas.");
    if (funcionario instanceof Freelancer) return funcionario.salarioHora * horasTrabalhadas;
    return funcionario.salarioFixo;
  }

  private dataLocal(data: string): Date {
    const [ano, mes, dia] = data.split("-").map(Number);
    return new Date(ano, mes - 1, dia);
  }

  private inicioDoDia(data: Date): Date {
    return new Date(data.getFullYear(), data.getMonth(), data.getDate());
  }
}
