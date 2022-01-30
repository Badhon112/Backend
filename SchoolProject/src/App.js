const express = require("express");
const App = express();
const hbs = require("hbs");
require("./Database/connection");
const port = process.env.PORT || 5000;
const Teacher=require('./Model/Administator_Schema')
App.use(express.json());
App.use(express.urlencoded({ extended: false }));
App.set("view engine", "hbs");
App.get("/", (req, res) => {
  res.render("login");
});
App.post("/login", async (req, res) => {
  try {
    const user_name = req.body.user_name;
  } catch (err) {
    res.status(404).send(err);
  }
});
App.get("/Submit", async (req, res) => {
  res.render("Submit");
});
App.get("/About", async (req, res) => {
  res.render("About");
});
App.get("/Administator", (req, res) => {
  res.render("Administator");
});
App.post("/Administator", async (req, res) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    if (
      name === "Admin" &&
      email === "Admin@gmail.com" &&
      password === "Admin"
    ) {
      res.render("Administator_From");
    }
  } catch (err) {
    res.status(404).render("Administator");
    // console.log(req.body.name);
  }
});

App.post("/Admin.._form", async (req, res) => {

  try{
    const Number=new Teacher({
      name:req.body.name,
      email:req.body.email,
      password:req.body.password,
      User_Name:req.body.User_Name
    })
    const result=await Number.save();
    res.render("Administator_From")
  }
  catch(err){
    res.status(404).send(err)
  }
});

App.listen(port, () => {
  console.log("Running Application...");
});
