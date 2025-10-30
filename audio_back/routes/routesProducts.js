import express from 'express';

const routerProducts = express.Router();
//mongodb+srv://0254998_db_user:P4zzw0rdChido@cluster0.owvetya.mongodb.net/?appName=Cluster0
///////RUTAS DE PRODUCTOS///////
routerProducts.get('/', (req, res) => {
    console.log(`Actualizacion`)

    //Error simulado//
    res.status(400);
    throw new Error("Error simulado de esos que no son de adebis porque son simulados porque se simulan simuloandose tons no hay pedo no te espantes we es simulado pero aguas que en una de esas ya no es de a mentis y simulas a toda tu pinche simulada madre");
    //////////////////


    res.send('Hello World!');
})

routerProducts.post('/', (req, res) => {
    console.log(`Actualizacion`)
    const products=[
        {name: "camara profesional", id: "1"},
        {name: "micro profesional", id: "2"}
    ]

    res.json({
        "productos": products
    });
})


export default routerProducts;