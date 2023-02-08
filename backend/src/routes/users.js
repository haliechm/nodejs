const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("User List");
});

router.post("login", (req, res) => {

  console.log("IN HERE")
  let username = req.body.username;
  let password = req.body.password;

  console.log("-----", username)
  console.log("-----", password)

  res.json({ success: true })

})


module.exports = router;