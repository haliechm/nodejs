const express = require("express");
const cors = require("cors");

const port = process.env.PORT || 3001;

const app = express();
app.use(cors);
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log("Here");
  res.status(500).json({ message: "Hello" });
});

app.post("/login", (req, res) => {

  console.log("IN HERE")
  let username = req.body.username;
  let password = req.body.password;

  console.log("-----", username)
  console.log("-----", password)

  res.json({ success: true })

})

const userRouter = require("./src/routes/users");

app.use("/users", userRouter);

app.listen(port, () => console.log(`Backend server live on port ${port}`));   // what port server is listening on 

