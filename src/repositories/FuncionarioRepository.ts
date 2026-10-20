import { Funcionario } from "../models/Funcionario";
import { Repository } from "./Repository";

export class FuncionarioRepository implements Repository<Funcionario> {
  private funcionarios: Funcionario[] = [];

  listar(): Funcionario[] {
    return [...this.funcionarios];
  }

  buscarPorId(id: number): Funcionario | undefined {
    return this.funcionarios.find((funcionario) => funcionario.dados.id === id);
  }

  adicionar(funcionario: Funcionario): void {
    this.funcionarios.push(funcionario);
  }
}
