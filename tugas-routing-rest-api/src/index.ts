import express, { Request, Response } from "express";
const path = require('path');
// import * as path from 'path';
const PORT = 3000;

function init() {
  const app = express();
  app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
      message: "OK",
      data: null,
    });
  });

  // route get untuk hello
  app.get("/hello", (req: Request, res: Response) => {
    res.status(200).json({
      message: "Success fetch message",
      data: "Hello World!",
    });
  });

  // route get untuk user
  app.get("/user", (req: Request, res: Response) => {
    res.status(200).json({
      message: "Success fetch user",
      data: {
        "id": 1,
        "name": "Budi",
        "username": "budidu",
        "email": "budidu@mail.com"
      }
    });
  });

  let categories = [
    { id: 1, name: 'Elektronik' },
    { id: 2, name: 'Perabotan' },
    { id: 3, name: "Pakaian dan Aksesoris" },
    { name: "Testing" }
  ];

  // route get untuk semua kategori
  app.get("/kategori", (req: Request, res: Response) => {
    // res.status(200).json({
    // res.json({
    //   message: "Success fetch kategori",
    //   data: [
    //     { id: 1, name: 'Elektronik' },
    //     { id: 2, name: 'Perabotan' }
    //   ]
    // });
    res.json(categories);
    console.log(categories.length + 1);
  });

  // route get untuk kategori berdasarkan id
  app.get('/kategori/:id', (req: Request, res: Response) => {
    const categoryId = parseInt(req.params.id);
    const category = categories.find((k: any) => k.id === categoryId);
    if (category) {
      res.json(category);
    } else {
      res.status(404).json({ message: 'Kategori tidak ditemukan' });
    }
  });

  // route post kategori baru
  app.post('/kategori', (req: Request, res: Response) => {
    // const newCategory = req.body;
    // const newCategory = {
    //   id: categories.length + 1,
    //   name: req.body.name
    // };
    const newCategory = req.body;
    newCategory.id = categories.length + 1;

    categories.push(newCategory);
    res.status(201).json(newCategory);
  });

  // route put untuk update kategori
  app.put('/kategori/:id', (req, res) => {
    const categoryId = parseInt(req.params.id);
    const categoryIndex = categories.findIndex((k: any) => k.id === categoryId);
    if (categoryIndex !== -1) {
      categories[categoryIndex] = { id: categoryId, ...req.body };
      res.json(categories[categoryIndex]);
    } else {
      res.status(404).json({ message: 'Kategori tidak ditemukan' });
    }
  });

  // route delete untuk hapus kategori
  app.delete('kategori/:id', (req, res) => {
    const categoryId = parseInt(req.params.id);
    const category = categories.filter((k: any) => k.id !== categoryId);
    if (category) {
      res.json(category);
    } else {
      res.status(204).json({ message: 'Kategori tidak ditemukan' });
    }
    // res.status(204).send();
  });

  // Route dengan query string
  app.get('/search', (req, res) => {
    const query = req.query.q;
    // Lakukan pencarian berdasarkan query
    res.json({ query: query, results: [{ id: 1, name: 'Laptop', category: 'Elektronik' }, { id: 2, name: 'Meja', category: 'Perabotan' }] });
  });

  // Route dengan parameter dan query string
  app.get('/kategori/:id/posts', (req: Request, res: Response) => {
    const categoryId = req.params.id;
    const searchQuery = req.query.q;
    // Ambil postingan pengguna berdasarkan ID dan query pencarian
    res.json({
      categoryId: categoryId,
      query: searchQuery,
      posts: [{ id: 1, name: 'Laptop', category: 'Elektronik' }, { id: 2, name: 'Meja', category: 'Perabotan' }]
    });
  });

  // Melayani file statis dari direktori "public"
  app.use(express.static(path.join(__dirname, '../public')));
  // app.use("/static", express.static(path.join(__dirname + '/public')));

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

init();
