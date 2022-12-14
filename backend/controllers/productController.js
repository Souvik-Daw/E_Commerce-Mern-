const Product = require("../models/productModel");



//create product
exports.createProduct = async (req, res, _next) => {
  
    const product = await Product.create(req.body);
  
    res.status(201).json({
      success: true,
      product,
    });

};



//get all products
exports.getAllProducts = async (_req, res, _next)=>{

    const products = await Product.find();
  
    res.status(201).json({
      success: true,
      products,
    });
}



//update product
exports.updateProduct = async (req, res, next) => {
    let product = await Product.findById(req.params.id);
  
    if (!product) {
      return next(new ErrorHander("Product not found", 404));
    }
  
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
  
    res.status(200).json({
      success: true,
      product,
    });

};



//delete products
exports.deleteProduct = async (req, res, next) => {
    const product = await Product.findById(req.params.id);
  
    if (!product) {
      return next(new ErrorHander("Product not found", 404));
    }
  
    await product.remove();
  
    res.status(200).json({
      success: true,
      message: "Product Delete Successfully",
    });
};