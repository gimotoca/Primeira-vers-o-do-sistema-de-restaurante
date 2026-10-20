import { Prato } from "../models/Prato";
import { Repository } from "./Repository";

export class PratoRepository implements Repository<Prato> {
  private pratos: Prato[] = [];

  listar(): Prato[] {
    return [...this.pratos];
  }

  buscarPorId(id: number): Prato | undefined {
    return this.pratos.find((prato) => prato.id === id);
  }

  adicionar(prato: Prato): void {
    this.pratos.push(prato);
  }
}
