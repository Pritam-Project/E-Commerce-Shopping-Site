const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productAddtoWishlist = new Schema({
    productid : { type: String },
    useremail: {type:String},
    productcat: {type: String},
    productname : {type: String },
    productdesc: {type: String },
    productprice : {type: Number },
    productsize: {type: String},
    productPicture: {type: String },
    
},
{
    timestamps: true,
});

const WishListProduct = mongoose.model('wishlist', productAddtoWishlist);
module.exports = WishListProduct;