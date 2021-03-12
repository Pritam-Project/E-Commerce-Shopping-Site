const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productAddtoCart = new Schema({
    productid : { type: String },
    useremail: {type:String},
    productcat: {type: String},
	cartproductid: {type: String},
    productname : {type: String },
    productdesc: {type: String },
    productprice : {type: Number },
    productsize: {type: String},
    productPicture: {type: String },
    productquantity: {type: Number },
},
{
    timestamps: true,
});

const CartProduct = mongoose.model('cartproducts', productAddtoCart);
module.exports = CartProduct;