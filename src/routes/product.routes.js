const router = require("express-promise-router") ();
const productController = require("../controllers/product.controller")

//Rotas do CRUD

// Rota responsável por criar um novo 'Product' : (POST): localhost:3000/api/products
router.post('/products', productController.createProduct)

// Rota responsável por listar todos os 'Products' : (GET): localhost:3000/api/products
router.get("/products", productController.listAllProducts)

// Rota responsável por retornar o 'Product' pelo id : (GET): localhost:3000/api/products/:id
router.get("/products/:id", productController.findProductById)

// Rota responsável por atualizar o 'product' pelo id: (PUT): localhost:3000/api/products/:id
router.put("/products/:id", productController.updateProductByid)

// Rota responsável por excluir o 'Product' persistido: (DELETE): localhos:3000/api/products/:id
router.delete('/products/:id', productController.deleteProduceById)

module.exports = router