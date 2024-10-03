import express, { Request, Response } from "express";
// import { single, multiple } from "./middlewares/upload.middleware";
import cloudinary from "./utils/cloudinary";
const bodyParser = require('body-parser');
const cors = require('cors');
// const multer = require('multer');
import multer from "multer";
const upload = multer({ dest: 'uploads/' });
// import api from "./routes/api";
import path from 'path';

const PORT = 3000;

let products = [
  { id: 1, name: 'Laptop', price: 1000, image: '' },
  { id: 2, name: 'Phone', price: 500, image: '' }
];

function init() {
  const app = express();
  app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
      message: "OK",
      data: null,
    });
  });

  app.use(bodyParser.json()); // Mengurai application/json
  app.use(bodyParser.urlencoded({ extended: true })); // Mengurai application/x-www-form-urlencoded
  app.use(cors()); // Mengizinkan semua origin

  // app.use("/api", api);

  // GET semua produk
  app.get("/api/products", (req, res) => {
    res.json(products);
  });

  // POST produk baru dengan upload gambar
  app.post("/api/products", upload.single('image'), (req, res) => {
    const newProduct = {
      id: products.length + 1,
      name: req.body.name,
      price: req.body.price,
      image: req.file ? req.file.path : ''
    };

    products.push(newProduct);
    res.status(201).json(newProduct);
  });

  // POST produk baru dengan upload gambar
  app.post("/api/products/multi", upload.array('image'), (req, res) => {
    const newProduct = {
      id: products.length + 1,
      name: req.body.name,
      price: req.body.price,
      image: req.file ? req.file.path : ''
    };

    products.push(newProduct);
    res.status(201).json(newProduct);
  });

  app.use(express.static(path.join(__dirname, '../uploads')));

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

init();
