const router = require('express').Router();
const UUID = require('uuid-int');
const id = 0;
let AdminPosterAddModel = require('../models/designer_Prod_model.js');

//add poster by admin
router.route('/addposter').post((req,resp) =>{
	console.log("a");
	const generator = UUID(id);
    const admid = generator.uuid();
    const AdminProductAdd = new AdminPosterAddModel({
        desproid: admid,
        productowner: "ADMIN",
        productowneremail: req.body.adminemail,
        desprocat: req.body.catagory,
        desprospe: req.body.posterSpecification,
        desprodes: req.body.posterDescription,
        desprocost: req.body.posterPrice,
        desprosize: req.body.posterSize,
        
        //poster: req.body.poster

    });

    AdminProductAdd.save().then(
	(data)=>{resp.send(data)}).catch((e)=> console.log(e))



})


//get posters
 
router.route('/posters/:productOwner').post((req , res) =>{
    AdminPosterAddModel.find({ productowner: req.params.productOwner}, function (err, docs){ 
        if (err){ 
            console.log(err); 
        } 
        else{ 
            console.log("First function call : ", docs); 
            res.json(docs);

        } 
    }); 
    
});





// AdminPosterAddModel.find()
//     .then(prdts => res.json(prdts))
//     .catch(err => res.status(400).json('Error: ' + err));



//poster delete by mongoid
router.route('/posterdelete/:id').delete((req,res) =>{
    AdminPosterAddModel.findByIdAndDelete(req.params.id).then(() => res.json('product deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//searchbu adminid

router.post('/search/:adminid', (req, res) =>  
            {
            AdminPosterAddModel.find({"desproid" : req.params.adminid})
            .then(getsearchdocument => {
              if(getsearchdocument.length >0) 
              {
                res.send(getsearchdocument);
              }
              else
              {
  return res.status(404).send({message: "Note not found with id " + req.params.adminid });
              }
          }) 
            .catch( err => {
  return res.status(500).send({message: "DB Problem..Error in Retriving with id " + req.params.adminid });           
            })
          }
         ); 





//updatebyadminid

router.put('/poster/update', (req, res) => 
         {
            AdminPosterAddModel.findOneAndUpdate({"desproid" : req.body.adminid}, 
                           { $set: {"desprospe":req.body.posterSpecification,
                           "desprodes": req.body.posterDescription,
                           "desprocost": req.body.posterPrice,
                           "desprosize": req.body.posterSize,
                           "desprocat":req.body.catagory
                           } }, { new: true })
       .then(getupdateddocument => {
         if(getupdateddocument != null)
            res.status(200).send('DOCUMENT UPDATED ' + getupdateddocument);  
         else
            res.status(404).send('INVALID ID '+ req.params.id);
       }) 
       .catch(err => {
return res.status(500).send({message: "DB Problem..Error in UPDATE with id " + req.params.id });
       }) 
                         } 
                         ); 
module.exports = router