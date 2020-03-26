const express = require("express");

const Ongcontroller = require("./controllers/ongcontroller");
const incidentcontroller = require("./controllers/incidentcontroller");
const profilecontroller = require("./controllers/profilecontroller");
const sessioncontroller = require("./controllers/sessioncontroller");

const routes = express.Router();

routes.post("/sessions", sessioncontroller.create);

routes.get("/ongs", Ongcontroller.index);
routes.post("/ongs", Ongcontroller.create);

routes.get("/profile", profilecontroller.index);

routes.get("/incidents", incidentcontroller.index);
routes.post("/incidents", incidentcontroller.create);
routes.delete("/incidents/:id", incidentcontroller.delete);
module.exports = routes;
