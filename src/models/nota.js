const { Schema, model } = require("mongoose");

const NotaSchema = Schema({
  nombre: {
    type: String,
    required: [true, "El nombre es obligatorio"],
    unique: true,
  },
  calificacion: {
    type: String,
  },
});

NotaSchema.methods.toJSON = function () {
  const { __v, _id, ...rest } = this.toObject();
  rest.id = _id;
  return rest;
};

module.exports = model("nota", NotaSchema, "notas");
