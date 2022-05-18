const router = require("express").Router();
const productController = require("../controllers/productController")
const { request } = require("express");

const Dog = require("../models/dog.js");
//add dog
router.post("/addDog", async (req, res) => {

    try {
        const newDogProduct = await new Dog({
            productid: req.body.productid,
            category: req.body.category,
            label: req.body.label,
            name: req.body.name,
            price: req.body.price,
            weight: req.body.weight,
            description: req.body.description,
            benefit: req.body.benefit,
            instruction: req.body.instruction
        })
        const newDog = await newDogProduct.save();
        res.status(200).json({ message: "Success!!!" })
    } catch (err) {
        res.status(500).json(err)
        console.log(err)
    }
});


// get data dog
router.get('/allDogs', async (req, res) => {
    try{
        Dog.find({}).then((data) => {res.json(data)}).catch(err=>{res.json({ Error: error.message });})
    }
    catch(err){
        res.status(500).json(err)
    }
} );

//update product
router.patch("/:id", async(req, res) => {
    try {
        await Dog.updateOne({ _id: req.params.id }, {
            $set: { name: req.body.name, price: req.body.price }
        })
        res.json({ message: "Success" })
    } catch (err) {
        res.json({ "Error": err.message })
    }
})
module.exports = router