const express = require("express");
const db_url = require("./config/db.config");
const {signUp,login} = require("./controllers/Auth Controller");
const orders = require("./controllers/Order Controller");
const products = require("./controllers/Product Controller");
const address = require("./controllers/Shipping Address Controller");
const admin = require("./middleware/admin");
const auth = require("./middleware/auth");
const db  = require("./models/main");
const app = express();
body_parser = require("body-parser");


const port = 5008;

app.use(body_parser.json());
app.use(body_parser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.send("Welcome");
})

app.post("/users",signUp);
app.post("/auth",auth,login);
app.post("/addresses",auth,address);
app.post("/products",auth,products.products);
app.post("/orders",[auth,admin],orders);
app.get("/products",products.getAllProducts)
app.get("/products/categories",products.getCategories)
app.get("/products/:id",products.getProductByProductId);
app.put("/products/:id",[auth,admin],products.updateProduct);
app.delete("/products/:id",auth,products.removeProduct);






app.listen(port,()=>{
    console.log(port);
})

db.mongoose
  .connect(db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
    
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
module.exports = app;