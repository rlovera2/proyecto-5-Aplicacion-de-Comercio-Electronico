require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());

app.get("/api", (req, res) => {
    return res.json({
        msg: "Binevenido al Api Demo",
    });
});

app.use("/api/usuarios", require("./routes/users.routes"));

app.listen(process.env.PORT, () =>{
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});