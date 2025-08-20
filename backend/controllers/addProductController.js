import Product from "../models/product.js"; 
import uploadOnCloudinary from "../utils/cloudinary.js"; 

// Add New Product
export const addProduct = async (req, res) => {
  try {
    const { projectName, description, liveUrl } = req.body;

    // Validation
    if (!projectName || !description || !liveUrl) {
      return res.status(400).json({ message: "All fields are required" });
    }

    let imageUrl;

    if (req.file) {
      const uploadedImage = await uploadOnCloudinary(req.file.path);
      imageUrl = uploadedImage.secure_url;
    }

    const newProduct = new Product({
      projectName,
      description,
      liveUr: liveUrl, 
      image: imageUrl || undefined, 
    });

    await newProduct.save();

    res.status(201).json({
      success: true,
      message: "Product created successfully",
      product: newProduct,
    });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};





// Get All Products
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 }); // latest first

    if (!products || products.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No products found",
      });
    }

    res.status(200).json({
      success: true,
      count: products.length,
      products,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};





// Update Existing Product
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params; 
    const { projectName, description, liveUrl } = req.body;

    // Find existing product
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    // Update fields if provided
    if (projectName) product.projectName = projectName;
    if (description) product.description = description;
    if (liveUrl) product.liveUr = liveUrl; 

    // Check if new image uploaded
    if (req.file) {
      const uploadedImage = await uploadOnCloudinary(req.file.path);
      product.image = uploadedImage.secure_url;
    }

    // Save updated product
    const updatedProduct = await product.save();

    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      product: updatedProduct,
    });
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}




// Delete Product
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params; // product id from URL

    // Check if product exists
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    // Delete product
    await Product.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

