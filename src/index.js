const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * rotas e recursos
 * métodos HHTP:
 * GET: buscar informação do back-end
 * POST: criar informção no back-end
 *PUT: alterar uma informação no back-end
 *Delete :deletar uma informação para o back-end
 */
/**
 * tipos de paramêtros:
 * Query params: filtros e paginação
 * route params: identificar recursos
 * request body: criar ou alterar recursos
 */
/**
 * SQL :MySQL, SQLite, PostGreSQL, Oracle, Microsoft SQL Server
 * NoSQL : MongoDB, CouchDB, Etc
 */
/**
 * Driver: SELECT * FROM users
 * Query Builder : Table ('users'). select ('*').where()
 */

app.listen(3333);
