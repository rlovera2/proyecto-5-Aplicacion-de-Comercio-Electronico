const { Router } = require("express");

const { obtenerNotas } = require("../controllers/notas.ctrl");

const router = Router();

router.get("/", obtenerNotas);

module.exports = router;
