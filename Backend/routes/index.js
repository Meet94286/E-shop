const { signUp, login } = require("../controllers/Auth Controller");
const orders = require("../controllers/Order Controller");
const products = require("../controllers/Product Controller");
const address = require("../controllers/Shipping Address Controller");
const admin = require("../middleware/admin");
const auth = require("../middleware/auth");
const app = require("../server");

app.post("/users", signUp);
app.post("/auth", auth, login);
app.post("/addresses", auth, address);
app.post("/products", auth, products.products);
app.post("/orders", [auth, admin], orders);
app.get("/products", products.getAllProducts);
app.get("/products/categories", products.getCategories);
app.get("/products/:id", products.getProductByProductId);
app.put("/products/:id", products.updateProduct);
app.delete("/products/:id", products.removeProduct);

(module.exports = app), auth, admin;
