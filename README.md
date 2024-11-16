## 🎥 Demonstração

Veja abaixo uma demonstração do projeto em ação:

![Demonstração do Projeto](https://i.imgur.com/MDDZbzc.gif)

![Comunicação Frontend e Backend](https://i.imgur.com/1jjhdRF.gif)

## 📃 Descrição

Os principais recursos da API incluem:

- Exibir todos os jogos previamente cadastrados.
- Obter informações detalhadas de um jogo específico.
- Listar jogos organizados por listas e suas posições.
- Gerenciar o posicionamento dos jogos dentro de uma lista.

Além disso, a API oferece funcionalidades avançadas, como:

- Mapeamento de CORS.
- Modelo de domínio complexo.
- Uso de projeções com SQL nativo.
- Configuração para múltiplos ambientes de desenvolvimento: DEV, TEST e PROD.

## 📌 Requisitos Funcionais

- Exibir todos os jogos cadastrados.
- Detalhar informações de jogos por ID.
- Listar todas as listas de jogos e suas posições.
- Visualizar jogos de uma lista específica por ID.
- Atualizar a posição de jogos em uma lista.

## 💻 Tecnologias Utilizadas

As principais tecnologias utilizadas no desenvolvimento da API incluem:

- **Linguagem**: Java
- **Frameworks**: 
  - Spring Web
  - Spring Boot DevTools
  - Spring Data JPA
- **Bancos de Dados**:
  - MySQL
  - H2 Database

## 📍 Endpoints

| Método | Endpoint                     | Descrição                                                                                       | Autenticação |
|--------|-------------------------------|-------------------------------------------------------------------------------------------------|--------------|
| GET    | `/games`                     | Lista todas as informações de todos os jogos cadastrados.                                       | Não          |
| GET    | `/games/id`                 | Retorna as informações detalhadas de um jogo pelo seu ID.                                       | Não          |
| GET    | `/lists`                     | Lista todas as listas de jogos, exibindo posição (ID) e nome da lista.                          | Não          |
| GET    | `/lists/id/games`           | Lista os jogos de uma lista específica pelo ID da lista.                                        | Não          |
| POST   | `/lists/id/replacement`     | Atualiza a posição dos jogos em uma lista, informando a posição atual e a nova via corpo da requisição. | Não          |
| GET    | `/h2-console`                | Acesso ao console do H2 Database.                                                              | Sim          |

## 🛠️ Instalação

Para executar o projeto em sua máquina, siga os passos abaixo:

### 1. Clone este repositório:

```bash
git clone https://github.com/thomaskavi/dslist.git

cd dslist
mvn clean install
mvn spring-boot:run

cd view
npm install
npm start
