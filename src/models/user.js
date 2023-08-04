const { Schema, model } = require("mongoose");

const UsrerSchema = Schema({
    user_name: {
        type: String,
        required: [true,"El user_name es obligatorio"],
        unique: true,
    },
    password: {
        type: String
        
    },
    email: {
        type: String
    },
    age: {
        type: Number
    },
    status: {
        type: Boolean,
        default: true,
    },

});

module.exports = model("user", UsrerSchema, "users");