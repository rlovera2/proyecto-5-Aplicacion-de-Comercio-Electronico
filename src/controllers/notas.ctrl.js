const Nombre = require("../models/nota");

const obtenerNotas = async (req, res) => {
  try {
    const notas = await Nombre.find();

    return res.json({
      ok: true,
      msg: "Notas Obtenidas",
      data: notas,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Error en el servidor",
      data: {},
    });
  }
};

module.exports = {
  obtenerNotas,
};
