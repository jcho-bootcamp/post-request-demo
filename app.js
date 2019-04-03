const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("home");
})

app.get("/friends", function (req, res) {
  let friends = ["Tony", "Miranda", "Justin", "Pierre", "Lily"];
  res.render("friends", { friends: friends });
})

app.post("/addfriend", function (req, res) {
  res.send("You have reached the post route!");
});

app.listen(3000, () => "Server is listening on port 3000!");