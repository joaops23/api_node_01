const db = require("../config/database")

//método responsável por criar um novo 'Product'

exports.createProduct = async (req,res) => { //definição do método (controller)
    const { productName,quantity, price } = req.body;  //resgtando os dados recebidos na requrest(req)
    const { rows } = await db.query(        
        "INSERT INTO products (productName, quantity, price) VALUES ($1, $2, $3)", 
        [productName, quantity, price]
    ); //envio da query para o banco de dados através da instancia db

    res.status('201').send({    //após persistir os dados, retornar ao usuario a resposta conforme o código http correspondente
        message: "Product added successfully!",
        body: {
            product: { productName, quantity, price }
        },
    });
};


// Método responsável por retornar uma lista de todos os produtos persistidos
exports.listAllProducts = async (req, res) => {
    const response = await db.query("SELECT * FROM products ORDER BY productName ASC");
    res.status(200).send(response.rows)
};


// método responsável por retornar product pelo seu id
exports.findProductById = async(req,res) => {
    const productId = parseInt(req.params.id)
    const response = await db.query("SELECT * FROM products WHERE productId = $1", [productId])

    res.status(200).send(response.rows);
};


// Método para realizar update de um product pelo seu id
exports.updateProductByid = async (req, res) => {
    const productId = parseInt(req.params.id)
    const {productName, quantity, price } = req.body

    const response = await db.query("UPDATE products SET productName = $1, quantity = $2, price = $3 WHERE productId = $4", [productName, quantity, price, productId])

    res.status(200).send({message: "Product Updated Successfully! "})
};

exports.deleteProduceById = async (req,res) => {
    const productId = parseInt(req.params.id)
    await db.query("DELETE FROM products WHERE productId = $1", [productId])

    res.status(200).send({message: 'Product deleted successfully!', productId})
}