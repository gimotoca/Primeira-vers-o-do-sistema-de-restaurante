/** Contrato genérico para os repositórios que trabalham com arrays. */
export interface Repository<T extends { id: number }> {
  listar(): T[];
  buscarPorId(id: number): T | undefined;
  adicionar(item: T): void;
}
