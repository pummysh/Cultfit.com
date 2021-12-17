const express = require("express");
const router = express.Router();
const Mycart = require("../models/Mycart.model");

router.get("/", async (req, res) => {
  try {
    const mycarts = await Mycart.find().lean().exec();

    return res.send(mycarts);
  } catch (e) {
    return res.status(500).json({ status: e.message, status: "Failed" });
  }
});

router.post("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).lean().exec();
    const mycart = Mycart.insert({ name: "test" });
    console.log("product:", product);
    return res.status(201).send(mycart);
    // return   res.status(201).send(product);
  } catch (e) {
    return res.status(500).json({ status: e.message });
  }
});

router.post("", async (req, res) => {
  
   try{
    //  console.log(req.name);
    // const product= await Mycart.find({name:{$eq:req.name}});

    const product = await Mycart.create(req.body);
    // if(product){
    //   console.log(product);
    // }
    console.log(req.body);
    return res.status(201).send(product);
   } catch (e) {
    return res.status(500).json({ status: e.message });
  }
  
});

router.delete("/:id", async (req, res) => {
  try {
    const mycart = await Mycart.findByIdAndDelete(req.params.id, req.body)
      .lean()
      .exec();
    return res.send({ mycart });
  } catch (e) {
    return res.status(500).json({ status: e.message });
  }
});

module.exports = router;
