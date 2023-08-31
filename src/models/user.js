const { Schema, model } = require("mongoose");

const UserSchema = Schema({
  user_name: {
    type: String,
    required: [true, "El user_name es obligatorio"],
    unique: true,
  },
  password: {
    type: String,
  },
  email: {
    type: String,
  },
  age: {
    type: Number,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

//Se formatea el esqema del modelo original eliminando los atributos o porpiedades
//que no se usan como por ejemplo ( __v ).

UserSchema.methods.toJSON = function () {
  const { __v, _id, ...rest } = this.toObject();

  rest.id = _id;

  return rest;
};

module.exports = model("user", UserSchema, "users");
