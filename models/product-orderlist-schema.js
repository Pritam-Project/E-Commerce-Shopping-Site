const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productAddtoOrderlist = new Schema({
    customarname: {type: String},
    customaremailid: {type: String},
    customarphone: {type: String},
    customaraddress: {type: String},
    customarpin: {type : String},
    orderid: {type: String},
    productid : { type: String },
    productcat: {type: String},
    productname : {type: String },
    productdesc: {type: String },
    productprice : {type: Number },
	productquantity: {type: Number},
    productsize: {type: String},
    productPicture: {type: String },
    
},
{
    timestamps: true,
});

const OrderListProduct = mongoose.model('orderlist', productAddtoOrderlist);
module.exports = OrderListProduct;