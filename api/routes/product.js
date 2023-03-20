const router = require('express').Router();
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');
const CryptoJS = require('crypto-js')
const Product = require('../models/Product');



// Add New Product 
router.post("/",verifyTokenAndAdmin,async(req,res)=>{
    const newProduct = new Product(req.body);

    try {
        const savedProduct = await newProduct.save();
        res.status(200).json("Product Added...")
    } catch (error) {
        res.status(500).json(error)
    }
});



// Update Products 

router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      const updatedProduct = await Product.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
  
      if (!updatedProduct) {
        return res.status(404).json({ message: "Could not update Product" });
      }
  
      res.status(200).json(updatedProduct);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    }
  });

// Delete Product 
  router.delete("/:id",verifyTokenAndAdmin,async(req,res)=>{
    try {
      await Product.findByIdAndDelete(req.params.id);
      res.status(200).json("Product has been deleted...")
    } catch (error) {
      res.status(500).json(error)
    }
  })


  // Get a Product 
  router.get("/:id",async(req,res)=>{
    try {
      const product = await Product.findById(req.params.id);

      res.status(200).json(product);      
    } catch (error) {
      res.status(500).json("You Are not allowed...")
    }
  });

  // Get All Products
  router.get("/",async(req,res)=>{
    const queryNew = req.query.new;
    const qCategory = req.body.category;
    try {

        let products;
        if(queryNew){
            products = await Product.find().sort({_id:-1}).limit(5);
        }else if (qCategory){
            products = await Product.find({
                categories:{
                    $in:[qCategory]
                }
            })
        }else{
            products = await Product.find()
        }
      res.status(200).json(products); 
      
      
    } catch (error) {
      res.status(500).json("You Are not allowed...")
    }
  });



//   // Get User Stats 
//   router.get("/stats",verifyTokenAndAdmin,async(req,res)=>{
//     const date = new Date();
//     const lastYear = new Date(date.setFullYear(date.getFullYear()-1));

//     try {
//       const data = await User.aggregate([
//         {$match: {createdAt: {$gte:lastYear}}},
//         {
//           $project:{
//             month:{$month:"$createdAt"},
//           },
//         },
//         {
//           $group:{
//             _id:"$month",
//             total:{$sum:1},
//           },
//         },
//       ]);
//       res.status(200).json(data)
//     } catch (error) {
//       res.status(500).json("stats problem")
//     }
//   })



module.exports = router;