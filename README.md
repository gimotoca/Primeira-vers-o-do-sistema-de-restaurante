# Sistema de Restaurante

Projeto introdutório em TypeScript para controlar pratos, funcionários e entregas. Foi usado o padrão Repository: os repositórios guardam e consultam dados em arrays, sem banco de dados.

## Integrantes

- Nome do integrante: ** [Giovanna]**

## Requisitos

- Node.js instalado
- npm instalado (vem junto com o Node.js)

## Como rodar o sistema

1. Abra um terminal na pasta `restaurante-typescript`.
2. Instale as dependências:

   ```bash
   npm install
   ```

3. Execute o projeto:

   ```bash
   npm start
   ```

Para compilar para JavaScript e executar a versão compilada:

```bash
npm run build
npm run serve
```

## Organização das pastas

```text
src/
├── models/        # Tipos e classes do domínio
├── repositories/  # Acesso aos arrays (padrão Repository)
├── services/      # Regras e relatórios
└── index.ts       # Demonstração de uso
```

## O que o exemplo demonstra

- Cadastro e relatórios de pratos, funcionários e entregas.
- Funcionário contratado com salário fixo e freelancer com valor por hora.
- Relatório de salário: contratado recebe salário fixo; freelancer recebe valor por hora multiplicado pelas horas informadas.
- Consulta de contrato freelancer ativo e cálculo aproximado dos dias restantes.
- O relatório de funcionários trabalhando considera contratos de freelancers ativos na data atual; funcionários contratados são considerados ativos.

Os dados de exemplo ficam na memória e são recriados ao iniciar o programa. Como solicitado, não há banco de dados.

## Publicar no GitHub

Crie um repositório vazio no GitHub. Extraia esta pasta, abra o terminal nela e execute (substituindo a URL pela URL do seu repositório):

```bash
git init
git add .
git commit -m "Primeira versão do sistema de restaurante"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
git push -u origin main
```

Depois, envie o endereço do repositório publicado como entrega. Não esqueça de substituir o nome dos integrantes neste README.
