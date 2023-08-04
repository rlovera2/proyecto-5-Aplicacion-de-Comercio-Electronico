const User = require("../models/user");

const obtenerUsuarios = async (req, res) => {

    const users = await User.find();

    return res.json({
        ok: true,
        msg: "Usuarios Obtenidos",
        data: [],
    });
};

const crearUsuario = async (req, res) => {

    const { user_name, password, email, status} = req.body;

    const nuevo_usuario = {
        user_name,
        password,
        email,
        age,
        status,
    };

const new_user = await User(nuevo_usuario).save();

    return res.json({
        ok: true,
        msg: "Usuario creado",
        data: {},
    });
};

const actualizarUsuario = (req, res) => {
    return res.json({
        ok: true,
        msg: "Usuario actualizado",
        data: {},
    });
};

const eliminarUsuario = (req, res) => {
    return res.json({
        ok: true,
        msg: "Usuario eliminado",
        data: {},
    });
};

module.exports = {
    obtenerUsuarios,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario,
};

