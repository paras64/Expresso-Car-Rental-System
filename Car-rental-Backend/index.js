require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

//DB CONNECTIONS
main()
  .then(console.log("Connected to database"))
  .catch((err) => console.error(err));
async function main() {
  await mongoose.connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.ejahxrh.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
  );
}
// console.log(process.env.PRIVATE_KEY)
// console.log(process.env.PUBLIC_KEY)
//MIDDLEWARE AUTHENTIFICATION
// const Authentification = (req, res, next) => {
//   try {
//     const decode = jwt.verify(req.body.token, publicKey, {
//       algorithm: "RS256",
//     });
//     if (decode) {
//       next();
//     } else {
//       res
//         .status(400)
//         .json({ message: "Token has been reject, please login again" });
//     }
//   } catch (err) {
//     res.status(400).json({ message: "Bad Request" });
//   }
// };

//ROUTERS
const ProductRouter = require("./routes/products.js");
const SubscribeRouter = require("./routes/subscribe.js");
const UserRouter = require("./routes/auth.js");
const TestimonialRouter = require("./routes/testimonial.js");
const ForgotPasswordRouter = require("./routes/forgotuserpassword.js");
const UserOrdersRouter = require("./routes/users.js");
const AdminRouter = require("./routes/admin.js");
const FaqRouter = require("./routes/faq.js");
//MIDDLEWARES

app.use(cors());
app.use(express.json());
app.use("/products", ProductRouter.router);
app.use("/subscribe", SubscribeRouter.router);
app.use("/testimonials", TestimonialRouter.router);
app.use("/auth", UserRouter.router);
app.use("/forgotpassword", ForgotPasswordRouter.router);
app.use("/user", UserOrdersRouter.router);
app.use("/admin", AdminRouter.router);
app.use("/faq", FaqRouter.router);
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(process.env.PORT);
