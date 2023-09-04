Construir uma API como simulando uma locadora de filmes em TypeScript e NodeJS, com o banco de dados do Postgres com conexão via TypeORM prisma e  docker.  🚀

Arquivo Docker Compose configura um banco de dados PostgreSQL que pode ser acessado via porta 5433 do container Docker. As credenciais do banco de dados estão atualmente definidas como admin (usuário) e your_password (adminpg). Sinta-se à vontade para ajustar essas credenciais ao seu usuário e senha preferidos. Salve e saia do arquivo.

📋 Pré-requisitos node.js 18.16.1

yarn

npm

Docker

Clonar o projeto 

Passos para rodar o projeto local docker-compose up -d

npm run dev

npx prisma studio

npx prisma migrate dev --name create-nome-da-migrate Passos para parar o projeto local CTRL + C

docker-compose stop

docker-compose up -d

docker-compose down  

Execute o seguinte comando no Prisma CLI:

npx prisma init

Prisma Migrate. 

npx prisma migrate dev --name init




