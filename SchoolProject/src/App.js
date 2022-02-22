const express = require("express");
const App = express();
const hbs = require("hbs");
require("./Database/connection");
const port = process.env.PORT || 5000;
const Teacher = require("./Model/Administator_Schema");
const Student = require("./Model/Student");
App.use(express.json());
App.use(express.urlencoded({ extended: false }));
App.set("view engine", "hbs");
App.get("/", (req, res) => {
  res.render("About");
});
App.get("/login", (req, res) => {
  res.render("login");
});

App.post("/login", async (req, res) => {
  try {
    const user_name = req.body.user_name;
    const email = req.body.email;
    const password = req.body.password;
    const type = req.body.type;
    const ins = await Teacher.findOne({ email: email });
    if (ins.password === password && ins.type === "Teacher") {
      res.render("Teacher");
    } else if (ins.password === password && ins.type === "Account") {
      res.render("Account");
    } else {
      res.render("login");
    }
  } catch (err) {
    res.status(404).render("login");
  }
});

App.post("/instractor", async (req, res) => {
  try {
    const name = req.body.name;
    if (name === "Badhon") {
      res.send("Succefull...");
    }
  } catch (err) {
    res.status(404).send(err);
  }
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
  }
});

App.post("/Admin.._form", async (req, res) => {
  try {
    const Number = new Teacher({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      User_Name: req.body.User_Name,
      type: req.body.type,
    });
    const result = await Number.save();
    res.render("Administator_From");
  } catch (err) {
    res.status(404).send(err);
  }
});

App.get("/Student", (req, res) => {
  res.render("Student");
});
App.post("/Student", async (req, res) => {
  try {
    const student = new Student({
      user_name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      class: req.body.class,
    });
    const result = await student.save();
    res.render("Account");
  } catch (err) {
    res.status(404).send(err);
  }
});
App.post("/Student_log",async (req,res)=>{
  try{

    const user_name=req.body.user_name;
    const email=req.body.email;
    const password=req.body.password;
    const student = await Student.findOne({ email: email });
    if(student.password===password && student.user_name===user_name){
      res.render("Student_Page")
    }
  }
  catch(err){
    res.status(404).render("login")
  }
});
App.listen(port, () => {
  console.log("Running Application...");
});
