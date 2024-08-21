# Manual do Usuário: Sudoku Game

## Requisitos do Sistema

Para rodar o projeto Sudoku Game em sua máquina local, você precisará atender aos seguintes requisitos:

1. **Node.js e npm**: O projeto foi desenvolvido utilizando Node.js, portanto, é necessário ter o Node.js instalado em sua máquina. Você pode baixar e instalar o Node.js a partir do [site oficial](https://nodejs.org/).

2. **Banco de Dados**: É necessário configurar e ter o banco de dados instalado em sua máquina. A princípio, foi usado o MySQL.

3. **Navegador Web**: Um navegador web moderno, como Google Chrome, Mozilla Firefox, Safari ou Microsoft Edge, é necessário para visualizar e interagir com a aplicação web.

## Instalação do Projeto

Para instalar e configurar o projeto Sudoku Game em sua máquina, siga estas etapas:

1. **Clone o repositório**: Baixe ou clone o repositório do projeto para sua máquina local.

2. **Instale as dependências**: Abra o terminal, navegue até o diretório do projeto e execute o comando `npm install` para instalar todas as dependências necessárias listadas no arquivo `package.json`.

3. **Configuração do Banco de Dados**: O projeto requer um banco de dados local, certifique-se de configurá-lo em `backend/db.js`, `database.js` e `models.js`.


## Executando o Projeto

Depois de instalar e configurar o projeto, você pode executá-lo seguindo estas etapas:

1. **Inicie o Servidor**: Abra o terminal, navegue até o diretório `backend` e execute o comando `node ./server.js` para iniciar o servidor. Isso iniciará o servidor da aplicação na porta padrão (geralmente 3000).

2. **Acesse o Servidor**: Abra um navegador web e acesse `http://localhost:3000` (ou a porta configurada, se diferente). Você deverá ver uma mensagem afirmando que o servidor está rodando.

3. **Inicie o Cliente**: Abra o terminal, navegue até o diretório `client`, dentro de `frontend` e execute o comando `npm run dev` para iniciar. Isso iniciará o cliente da aplicação. A porta em que a aplicação foi iniciada aparecerá no terminal. 

4. **Acesse a Aplicação**: Abra um navegador web e acesse `http://localhost:{porta}` (onde {porta} é a porta citada no item acima). 

5. **Interaja com a Aplicação**: Navegue pela aplicação, faça login e jogue Sudoku!
