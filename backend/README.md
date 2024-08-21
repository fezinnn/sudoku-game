# Documentação da API

## POST /players/register

Esta rota é usada para registrar um novo jogador no sistema.

### Parâmetros de entrada

- `username` (string): O nome de usuário escolhido pelo jogador.
- `password` (string): A senha escolhida pelo jogador.

### Comportamento

- Verifica se o nome de usuário já está em uso.
- Cria um novo jogador no banco de dados com o nome de usuário e senha fornecidos.

### Respostas

- 201: Se o jogador for registrado com sucesso.
  - Corpo da resposta: `{ message: 'Player created', playerId: newPlayer.id }`
- 400: Se o nome de usuário já estiver em uso.
  - Corpo da resposta: `{ message: 'Username already exists' }`
- 500: Se ocorrer um erro durante o processamento da solicitação.
  - Corpo da resposta: `{ message: 'Something went wrong' }`

## POST /players/login

Esta rota é usada para fazer login de um jogador no sistema.

### Parâmetros de entrada

- `username` (string): O nome de usuário do jogador.
- `password` (string): A senha do jogador.

### Comportamento

- Verifica se o nome de usuário e a senha correspondem a um jogador no banco de dados.
- Se as credenciais forem válidas, gera um token de acesso JWT com um prazo de validade de 1 hora.

### Respostas

- 200: Se o login for bem-sucedido.
  - Corpo da resposta: `{ token, playerId: player.id, score: player.points }`
- 400: Se as credenciais forem inválidas.
  - Corpo da resposta: `{ message: 'Credenciais inválidas!' }`
- 500: Se ocorrer um erro durante o processamento da solicitação.
  - Corpo da resposta: `{ message: 'Algo deu errado' }`

## GET /game

Esta rota é usada para obter um novo tabuleiro de Sudoku para o jogador.

### Parâmetros de entrada

Nenhum.

### Comportamento

- Gera um tabuleiro de Sudoku aleatório e seu equivalente resolvido.

### Respostas

- 200: Se o tabuleiro for gerado com sucesso.
  - Corpo da resposta: `{ board, solvedBoard }`
- 500: Se ocorrer um erro durante o processamento da solicitação.
  - Corpo da resposta: `{ message: 'Algo deu errado ao retornar o tabuleiro' }`
