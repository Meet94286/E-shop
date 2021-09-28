const Products = require("../models/product.model");

function products  (req, res){
  
    let product = new Products({
      name: req.body.name,
      category: req.body.category,
      price: req.body.price,
      description: req.body.description,
      manufacturer: req.body.manufacturer,
      availableItems: req.body.availableItems,
      imageURL: req.body.imageURL,
    });
  
    product.save((err,user)=>{
        res.status(200).send(user);

    });
  };

  async function getAllProducts(req,res) {
    // if(!req.query.category && !req.query.name){
    //     let products = await Products.find().sort('-_id');
    //     res.send(products);
    //     return;
    //   }
    

    const direction = req.query.direction === "ASC" ? +1 : -1;
    let products = await Products.find().or([{ name: req.query.name },{ category: req.query.category }])
      .sort({ price: direction });
    res.send(products);
  }

  async function getCategories(req,res) {
    const products = await Products.find().select("category").distinct("category");
    res.send(products);
  }

 async function getProductByProductId(req,res) {
    const product = await Products.findById(req.params.id);

    if (!product)
      return res.status(404).send(`No Product found for ID ${req.params.id}`);
    res.send(product);
 }

 async function updateProduct(req,res) {
  const id=req.params.id;
  const product = await  Products.findOneAndUpdate({_id:id}
    ,{ 
        name: req.body.name,
         category: req.body. category,
        price: req.body.price,
         description: req.body.description,
         manufacturer:req.body.manufacturer,
         availableItems: req.body.availableItems,
         createdAt:req.body.createdAt,
         updatedAt:req.body.updatedAt},
    {new:true})
    if(!product){
        return res.status(404).send(`No Product found for ID - ${id}!`);
    }
     res.status(200).send(product);
    }

 async function removeProduct(req,res){
  const product = await Products.findOneAndRemove({_id:req.params.id})
  if (!product)
  return res.status(404).send("The product with the given ID was not found.");
   res.status(200).send(`Product with ID - ${req.params.id} deleted successfully!`);
  

}
  module.exports={products,getAllProducts,getCategories,getProductByProductId,updateProduct,removeProduct};