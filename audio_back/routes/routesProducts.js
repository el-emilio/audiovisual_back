import express from 'express';
import Product from '../models/product.js';

const routerProducts = express.Router();
//mongodb+srv://0254998_db_user:P4zzw0rdChido@cluster0.owvetya.mongodb.net/?appName=Cluster0
///////RUTAS DE PRODUCTOS///////

routerProducts.post('/',async(req, res,next)=>{
    console.log(req.body)

    if (!req.body.name || !req.body.description || !req.body.price){
        next(new Error("Name, price and description required"))
        return;
    }

    const{name, description, price}=req.body;

    try{
        const new_product=new Product({
            name,
            description,
            price
        })

        await new_product.save();
    }
    catch(err){
        console.error(err);
        next(err);
    }

    next(new Error("Method not yet implemented"));
});

routerProducts.get("/:id", async(req, res, next)=>{
    const {id}=req.params;

    try{
        const found=await Product.findById(id);

        res.status(200).json(found);
    }


    catch(err){
        console.error(err);
        next(err);
    }

    
});

routerProducts.get("/", async(req, res, next)=>{
    try{
        const found=await Product.find();

        res.status(200).json(found);
    }

    catch(err){
        console.error(err);
        next(err);
    }

    
});

/*
routerProducts.get('/', (req, res) => {
    console.log(`Actualizacion`)

    //Error simulado//
    res.status(400);
    throw new Error("Error simulado de esos que no son de adebis porque son simulados porque se simulan simuloandose tons no hay pedo no te espantes we es simulado pero aguas que en una de esas ya no es de a mentis y simulas a toda tu pinche simulada madre");
    //////////////////


    res.send('Hello World!');
})
    */

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