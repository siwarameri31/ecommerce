const express = require("express");

const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("./models/index");
const app = express();
const PORT = 5000;
const productrouter = require("./routes/product");
const categoryrouter = require("./routes/category");
const admins = [];

app.use(express.json());
app.use(cors());
app.use("/products", productrouter);
app.use("/categories", categoryrouter);

const authenticateToken = (req, res, next) => {

  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ message: "No token provided" });
  try {
    const decoded = jwt.verify(token, 'secret_key');
    req.userId = decoded.id;

    next();
  } catch (error) {
    return res.status(403).json({ message: "Invalid token" });
  }
};



app.post("/signup", (req, res) => {
  const { name, email, password } = req.body;

  const existingAdmin = db.Admin.findAll({ where: { email } });
  if (existingAdmin.id) {
    return res.status(400).json({ message: "Admin already exists" });
  }

  const hashedPassword = bcrypt.hash(password, 8);
  db.Admin.create({ name, email, password: hashedPassword });

  res.status(201).json({ message: "Admin created" });
});

   app.post("/signin", async (req, res) => {
   const { email, password } = req.body
   try {
   const admin = await db.Admin.findOne({ where: { email } });
    if (!admin) {
      return res.status(400).json({ message: "admin not found" });
    }

    const isPasswordValid = bcrypt.compareSync(password, admin.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid password" });
    }

  const token = jwt.sign({ id: admin.id }, "secret_key", { expiresIn: "1h" });
  req.headers["authorization"]=token
  res.status(200).json({ token })
  } catch (error) {
    throw error;
  }
})

app.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'Access granted', userId: req.userId })
})

app.listen(PORT, () => {

  console.log(`Server running on http://localhost:${PORT}`)

});
