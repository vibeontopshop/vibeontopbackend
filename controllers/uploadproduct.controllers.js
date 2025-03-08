const db = require("../models/index.model");
const Product = db.product;

exports.Addproduct = async (req, res) => {
try {
    const {name,description} = req.body;
    if(!name||!description||!req.file){
        return res.status(400).json({error:"All fields, including Image, are reqired"});
    }
    const image = req.file.path
    const newimage = new Product({
        name,
        description,
        image
    })
    const saveimage = await newimage.save();
    res.status(201).json({message:'Image uploaded successfully',Image:saveimage})
} catch (error) {
    console.error(error);
    res.status(500).json({err:'server error'})
}
};
exports.updateproduct = async ( req, res) =>{
    try {
        const { id } = req.body;
        const { name, description } = req.body;
        let product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }
        if (name) product.name = name;
        if (description) product.description = description;
        if (req.file) product.image = req.file.path;
        const updatedProduct = await product.save();
        res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
};

exports.AddProductDetails = async (req, res) => {
    try {
        const { _id, price, oldPrice, rating, reviews, discount,  } = req.body;
        
        const product = await Product.findById(_id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        product.price = price || product.price;
        product.oldPrice = oldPrice || product.oldPrice;
        product.rating = rating || product.rating;
        product.reviews = reviews || product.reviews;
        product.discount = discount || product.discount;
        
        await product.save();
        res.status(200).json({ message: "Product updated successfully", product });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

exports.getProduct = async (req,res) => {
try{
    const products = await Product.find();
    res.json(products);
} catch(error){
    res.status(500).json({message:error.message})
};
}