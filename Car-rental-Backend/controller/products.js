const model = require("../model/products.js");
const Product = model.Product;

exports.getAllProducts = async (req, res) => {
  if (req.query) {
    const products = await Product.find().limit(req.query.limit).exec();
    res.json(products);
    return;
  }
  const products = await Product.find();
  res.json(products);
};

exports.createProduct = async (req, res) => {
  const { addProductData } = req.body;
  const duplicateProductCheck = await Product.findOne({
    model: addProductData.model,
  });
  console.log(duplicateProductCheck);
  if (duplicateProductCheck) {
    res.status(400).json({
      message: "Product already exists, please add new Product",
    });
    return;
  }
  const products = await new Product(addProductData);
  products
    .save()
    .then((data) => {
      res
        .status(201)
        .json({ message: "New product has been added", data: data });
    })
    .catch((error) => {
      res
        .status(400)
        .json({ message: "New product adding failed", error: error });
    });
};

exports.modifyProduct = async (req, res) => {
  try {
    const { valueModify } = req.body;
    const { productname, fieldname, value } = valueModify;
    // console.log(productname, fieldname, value);
    const doc = await Product.findOneAndUpdate(
      { model: productname },
      { $set: { [fieldname]: value } },
      { new: true }
    );
    res.status(201).json({ message: "Product has been updated" });
  } catch (err) {
    res.status(400).json({ message: "Updating failed" });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { ID } = req.params;
    const doc = await Product.findByIdAndDelete(ID);
    res.status(200).json({ message: "Product has been Deleted" });
  } catch (err) {
    res.status(400).json({ message: "Deleting failed" });
  }
};
// {
//   "title":"Lexus RCF",
//   "year":2020,
//   "price":4499,
//   "category":"Normal",
//   "model":"Lexus RCF 2020",
//   "capacity": 4,
//   "discountPercentage":9.99,
//   "rating":0,
//   "brand":"Lexus",
//   "thumbnail":"https://car-rental-store.vercel.app/static/media/Mustang.1165cc44730c7…",
//   "weight":"230lbs",
//   "speed":"5.59s",
//   "color":"Red",
//   "mileage":"180mph",
//   "available":"yes",
//   "drive":"Auto",
//   "stocks":6,
//   "images":["https://png.pngitem.com/pimgs/s/627-6274298_2011-lexus-es-350-hd-png-download.png", "https://www.pngkit.com/png/full/353-3536970_lexus-png-red-lexus-on-a-transparent-background.png"]
//   }
