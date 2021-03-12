const router = require('express').Router();
let DesignerModel = require('../models/designer_Prod_model');
let CartProduct = require('../models/product-cart-model');
let WishListProduct = require('../models/product-wishlist-model')
let OrderListProduct = require('../models/product-orderlist-schema')
const mailservice = require("../services/mailService")
const UUID = require('uuid-int');;
const id = 0;
// ADD TO CART FROM HOMEPAGE AND WISHLIST PAGE
// getting data from designermodel(HOMEPAGE) by id and checking from cartmodel that the value is pe exists or not. id the value
// is not present then create new to cart product elseif value pre exists then simpls findoneand update
// While sending values from wishlist to cart it is checking from homepage model and same logic implementing and deleteing from wishlist
router.route('/cart').post((req,res) =>{
    DesignerModel.findById(req.body.addtocartid).then((pdt) => {
        const productname = pdt.desprospe;
        const productcat = pdt.desprocat;
        const cartproductid = pdt.desproid;
        const productid = req.body.addtocartid;
        const productdesc = pdt.desprodes;
        const productprice = pdt.desprocost;
        const productsize = pdt.desprosize;
        const date = pdt.regdatetime; 
        const useremail = req.body.cartuseremail;
        const productPicture = pdt.desprofile;
        const productquantity = 1;
        res.json('Products !'+pdt);

        const myp = Number(productprice);
        CartProduct.find({"productid" : req.body.addtocartid}).then((data) => {
            console.log("Hello");
            console.log(data);
            if(data.length === 0)
            {
                console.log("First Insert");
                const addtocart = new CartProduct({
                    productid,
                    useremail,
                    productcat,
                    cartproductid,
                    productname,
                    productdesc,
                    productprice,
                    productsize,
                    date,
                    productPicture,
                    productquantity
        
                });
        
                addtocart.save().then(inserteddocument=> {
                    mailservice.sendmail(useremail, 'PRODUCT ADDED TO YOUR CART SUCCESSFUL', 'THANK YOU FOR ADD NEW PRODUCT'+ inserteddocument);
                    // res.status(200).send('DOCUMENT INSERED IN MONGODB DATABASE' +'<br\>'+ inserteddocument);
                    console.log("successfull")})
                    .catch((e)=> console.log(e));
            }

            else
            {
                console.log("Already Present");
                console.log(data[0].productquantity);

                // Quantity and price Calculation
                const productquantityy = data[0].productquantity + 1 ;
                const productpricee = data[0].productprice+myp;

                CartProduct.findOneAndUpdate({"productid" : req.body.addtocartid}, 
                { $set: {"productquantity":productquantityy,
                        "productprice" : productpricee
                
                } }, { new: true }).then(() => {
                    mailservice.sendmail(req.body.cartuseremail, 'PRODUCT ADDED TO YOUR CART SUCCESSFUL', 'THANK YOU FOR ADD NEW PRODUCT');
                    console.log("success"+productquantityy)});
                

            }
        })

       
    })
    .catch(err => res.status(400).json('Error: ' + err));
        
    
});


// DISPLAY PRODUCTS IN CART PAGE
router.route('/carts/mycart/:useremail').get((req , res) =>{
    CartProduct.find({"useremail":req.params.useremail})
    .then(crtpdts => res.json(crtpdts))
    .catch(err => res.status(400).json('Error: ' + err));
});


// DISPLAY PRODUCTS IN CART PAGE
router.route('/carts/mycart/search/:cartproductid').get((req , res) =>{
    CartProduct.find({"cartproductid":req.params.cartproductid})
    .then(crtpdts => res.json(crtpdts))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/carts/removeone/:id').get((req, res) =>{
        CartProduct.find({"productid" : req.params.id}).then((data) => {
            console.log("Removed");
            console.log(data);
      // Quantity and price Calculation
      const myp = Number(data[0].productprice);
      const pqt = Number(data[0].productquantity);
      console.log(myp);
      console.log(pqt);
      const price = (myp/pqt);
      const productquantityy = data[0].productquantity - 1 ;
      const productpricee = data[0].productprice - price;
    console.log(req.params.id)
    CartProduct.findOneAndUpdate({"productid" : req.params.id}, 
    { $set: {"productquantity":productquantityy,
            "productprice" : productpricee
    
    } }, { new: true }).then(() => res.json('product removed.'));
      

});
})




// DISPLAY IN WISHLIST
router.route('/wishlist/mylist/:useremail').get((req , res) =>{
    WishListProduct.find({"useremail":req.params.useremail})
    .then(crtpdts => res.json(crtpdts))
    .catch(err => res.status(400).json('Error: ' + err));
});



// DISPLAY IN WISHLIST
router.route('/orderlist/order').get((req , res) =>{
    OrderListProduct.find()
    .then(crtpdts => res.json(crtpdts))
    .catch(err => res.status(400).json('Error: ' + err));
});




// Homepage to Wishlist Move
router.route('/wishlist').post((req,res) =>{
    DesignerModel.findById(req.body.addtowishlistid).then((pdt) => {
        const productname = pdt.desprospe;
        const productcat = pdt.desprocat;
        const productid = req.body.addtowishlistid;
        const useremail = req.body.wishuseremail;
        const productdesc = pdt.desprodes;
        const productprice = pdt.desprocost;
        const productsize = pdt.desprosize;
        const date = pdt.regdatetime;
        const productPicture = pdt.desprofile;
        res.json('Products !'+pdt);

        const addtowishlist = new WishListProduct({
            productid,
            useremail,
            productcat,
            productname,
            productdesc,
            productprice,
            productsize,
            date,
            productPicture
        });

        addtowishlist.save().then(inserteddocument=> {
            mailservice.sendmail(useremail, 'PRODUCT PLACED IN YOUR WISHLIST SUCCESSFUL', 'THANK YOU FOR CHOOSE THIS PRODUCT'+ inserteddocument);
            // res.status(200).send('DOCUMENT INSERED IN MONGODB DATABASE' +'<br\>'+ inserteddocument);
            
            console.log("successfull")})
            .catch((e)=> console.log(e));
    })
    .catch(err => res.status(400).json('Error: ' + err));
        
    
});

// Homepage to Orderlist Move
router.route('/orderlist').post((req,res) =>{

                const generator = UUID(id);
                const orderid = generator.uuid();

        const addtoorderlist = new OrderListProduct({
            customarname: req.body.customarname,
            customaremailid: req.body.customaremailid,
            customarphone: req.body.customarphone,
            customaraddress: req.body.customaraddress,
            customarpin: req.body.customarpin,
            orderid: orderid,
            productid : req.body.productid,
            productcat: req.body.productcat,
            productname : req.body.productname,
            productdesc: req.body.productdesc,
            productprice : req.body.productprice,
            productquantity: req.body.productquantity,
            productsize: req.body.productsize,
            productPicture: req.body.productPicture,
        });

        addtoorderlist.save().then(inserteddocument=> {
            res.status(200).send('DOCUMENT INSERED IN MONGODB DATABASE' +'<br\>'+ inserteddocument);
            mailservice.sendmail(req.body.customaremailid, 'ORDER PLACED SUCCESSFUL', 'THANK YOU FOR SHOOPING AND VISITE AGAIN'+ inserteddocument);
            console.log("successfull")})
            .catch((e)=> console.log(e));
          
});


router.route('/wishlist/removeitem/:id').delete((req,res) =>{
    WishListProduct.findByIdAndDelete(req.params.id).then(() => res.json('product deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Remove From Cart
router.route('/cart/removeitem/:id').delete((req,res) =>{
    CartProduct.findByIdAndDelete(req.params.id).then(() => res.json('product deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Remove From OrderList
router.route('/orderlist/removeitem/:id').delete((req,res) =>{
    OrderListProduct.findById(req.params.id).then((data)=>{
        mailservice.sendmail(data.customaremailid, 'YOUR ORDER READY FOR DELIVERY', 'PRODUCT DETAILS'+ data);
        OrderListProduct.findByIdAndDelete(req.params.id).then(() => {
            res.json('product deleted.')})
        .catch(err => res.status(400).json('Error: ' + err));
    })
});

module.exports = router