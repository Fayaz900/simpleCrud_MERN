const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userModel = require("./models/userModel");

const app = express();
app.use(cors());
app.use(express.json());

// DB connection

mongoose
  .connect("mongodb+srv://fayaz:fayaz2252@cluster0.yrypul1.mongodb.net/crud")
  .then(() => {
    console.log("connected to mongoDB");
  })
  .catch((error) => {
    console.log(error);
  });

// API Create

app.get("/", (req, res) => {
  userModel
    .find({})
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.get("/getUser/:id", (req, res) => {
  const id = req.params.id;
  userModel
    .findById({_id:id})
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.post("/createUser", (req, res) => {
  userModel
    .create(req.body)
    .then((userModel) => res.json(users))
    .catch((err) => res.json(err));
});

app.put('/updateUser/:id', (req,res)=>{
    const id = req.params.id;
    userModel.findByIdAndUpdate({_id:id},{
        name: req.body.name,
        email: req.body.email, 
        age:req.body.age})
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
})

app.delete('/deleteUser/:id', (req,res)=>{
    const id = req.params.id;
    userModel.findByIdAndDelete({_id:id})
    .then(result=> re.json(result))
    .catch(err=>res.json(err))
})

app.listen(3001, () => {
  console.log(`server is running`);
});
