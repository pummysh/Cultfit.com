const express=require('express');
let app=express();
const path=require('path');
app.use(express.json());


app.set('view engine','ejs');

app.use(express.static("public"))


app.get("/payment",(req,res) => {
    res.render("pay");
})

app.get("/care",(req,res) => {
    res.render("care");
})
app.get("/home",(req,res) => {
    res.render("home");
})
app.get("/cult",(req,res) => {
    res.render("cult");
})
app.get("/desc",(req,res) => {
    res.render("descPage");
})
app.get("/eat",(req,res) => {
    res.render("eat_order");
})
app.get("/gym",(req,res) => {
    res.render("gym");
})
app.get("/menstore",(req,res) => {
    res.render("mens-store");
})
app.get("/mindfulness",(req,res) => {
    res.render("mindfulnessPage");
})
app.get("/onlinept",(req,res) => {
    res.render("onlinept");
})
app.get("/productdisplay",(req,res) => {
    res.render("product_display");
})
app.get("/store",(req,res) => {
    res.render("store");
})
app.get("/therapy",(req,res) => {
    res.render("therapyPage");
})
app.get("/products",(req,res) => {
    res.render("products");
})

module.exports =app;