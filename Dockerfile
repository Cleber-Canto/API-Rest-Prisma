# Use a imagem oficial do Node.js como base
FROM node:14

# Crie e defina o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copie o arquivo de definição de pacote e o arquivo de bloqueio de pacote
COPY package*.json ./

# Instale as dependências
RUN yarn install

# Copie o código do aplicativo
COPY . .

# Exponha a porta em que o aplicativo será executado
EXPOSE 3000

# Comando para iniciar o aplicativo (ajuste conforme necessário)
CMD ["yarn", "start"]
