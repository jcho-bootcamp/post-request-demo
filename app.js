const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

let friends = ["Tony", "Miranda", "Justin", "Pierre", "Lily"];

app.get("/", function (req, res) {
  res.render("home");
})

app.get("/friends", function (req, res) {
  res.render("friends", { friends: friends });
})

app.post("/addfriend", function (req, res) {
  let newFriend = req.body.newFriend;
  friends.push(newFriend);
  res.redirect("/friends");
});

app.listen(3000, () => "Server is listening on port 3000!");