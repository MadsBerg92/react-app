import express from "express";
import cors from "cors";
const app = express();
const PORT = 3016;

//importing routes

// import { userRoute } from "./User/user.route";
// import { cartRouter } from "./Cart/cart.route";
import { productRouter } from "./Product/product.route";
import { categoryRouter } from "./Category/category.route";

//Routes

app.use(cors());
app.use(express.json());
// app.use(userRoute);
// app.use(cartRouter);
app.use(productRouter);
app.use(categoryRouter);

app.get("/", (req, res) => {
  res.set("Access-Control-Origin", "http://localhost:5173");
});
app.listen(PORT, (err?: Error) => {
  if (err) {
    console.log("Error in server setup", err);
  }
  console.log(`Server! listening on port ${PORT}`);
});
