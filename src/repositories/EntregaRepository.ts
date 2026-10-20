import { Entrega } from "../models/Entrega";
import { Repository } from "./Repository";

export class EntregaRepository implements Repository<Entrega> {
  private entregas: Entrega[] = [];

  listar(): Entrega[] {
    return [...this.entregas];
  }

  buscarPorId(id: number): Entrega | undefined {
    return this.entregas.find((entrega) => entrega.id === id);
  }

  adicionar(entrega: Entrega): void {
    this.entregas.push(entrega);
  }
}
