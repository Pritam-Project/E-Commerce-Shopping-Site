// IMPORT EXPRESS SERVER
const express = require('express');

const UUID = require('uuid-int');
const id = 0;
// USE Router FOR EXPRESS SERVER
const router = express.Router();

//IMPORT EMPLOYEE MODEL AND BIND IT
const DesModel = require('../models/designer_Prod_model.js');
//const DesModel = require('../models/designer_schema');

// URL :- localhost:4500/des/add  (USING POSTMAN POST)
// post is used to INSERT DOCUMENT/RECORD
// CALLBACK using lambda 
router.post('/add', (req, res) => 
                 { 
                  const generator = UUID(id);
                  const proid = generator.uuid();   
                  
//Create Object of Employee Model Class
// And Receive value from request body and Store value within the Object
                   const desobj = new DesModel({
                     desproid: proid,
                     productowner: req.body.productowner,
                     productowneremail: req.body.productowneremail,
                     desprocat: req.body.desprocat,
                     desprospe: req.body.desprospe,
                     desprodes: req.body.desprodes,
                     desprosize: req.body.desprosize,
                     desprocost: req.body.desprocost,
                     desprofile: req.body.desprofile,
                                 });//CLOSE EmpModel
     //INSERT/SAVE THE RECORD/DOCUMENT
                   desobj.save()
                         .then(inserteddocument => {
    res.status(200).send('DOCUMENT INSERED IN MONGODB DATABASE' +'<br\>'+ inserteddocument);
                               })//CLOSE THEN
                         .catch(err =>{
    res.status(500).send({ message: err.message || 'Error in Save Product '})
                               });//CLOSE CATCH
                            }//CLOSE CALLBACK FUNCTION BODY Line 27
                            );//CLOSE POST METHOD Line 26

// => localhost:4500/emp/remove/30     (USING POSTMAN DELETE)
//DELETE A DOCUMENT FROM MONGODB USING EMPID
//EmpModel.findOneAndRemove({"empid" : parseInt(req.params.empid)})

// => localhost:4500/emp/remove/abc@gmail.com     (USING POSTMAN DELETE)
//DELETE A DOCUMENT FROM MONGODB USING EMAILID
router.delete('/remove/:desproid', (req, res) =>
            {
  DesModel.findOneAndRemove({"desproid" : req.params.desproid})
          .then( deleteddocument => { 
            if(deleteddocument != null)
            {  
  res.status(200).send('DOCUMENT DELETED successfully!' + deleteddocument);
            }  
            else
            {
  res.status(404).send('INVALID EMP ID '+ req.params.empid); 
            }
          }) //CLOSE THEN
          .catch( err => {
 return res.status(500).send({message: "DB Problem..Error in Delete with id " + req.params.empid });          
          })//CLOSE CATCH
             }//CLOSE CALLBACK FUNCTION BODY Line 60
            ); //CLOSE Delete METHOD Line 59


// // localhost:4500/emp/10
// //SEARCH EMPLOYEE BY EMPID
// // "empid" : parseInt(req.params.empid) Convert empid String to Int
// // EmpModel.find({"empid" : parseInt(req.params.empid)})

// // localhost:4500/emp/abc@gmail.com
// //SEARCH EMPLOYEE BY EMPEMAIL
// // CALLBACK function for get method using lambda 
router.get('/search/:desproid', (req, res) => 
            {
      DesModel.find({"desproid" : req.params.desproid})
            .then(getsearchdocument => {
              if(getsearchdocument.length >0) 
              {
                res.send(getsearchdocument);
              }
              else
              {
  return res.status(404).send({message: "Note not found with id " + req.params.empid });
              }
          }) //CLOSE THEN
            .catch( err => {
  return res.status(500).send({message: "DB Problem..Error in Retriving with id " + req.params.empid });           
            })//CLOSE CATCH
          }//CLOSE CALLBACK FUNCTION BODY Line 88
         );//CLOSE GET METHOD Line 87 

// BROWSER URL :- localhost:4500/des
// get IS USED FOR FETCHING DOCUMENTS FROM MONGODB
// CALLBACK using lambda 
router.get('/:email', (req, res) => 
                {
                DesModel.find({"productowneremail" : req.params.email })
                          .then( getalldocumentsfrommongodb => {
    res.status(200).send(getalldocumentsfrommongodb);
                          }) //CLOSE THEN
                          .catch(err =>{
    res.status(500).send({ message: err.message || 'Error in Fetch Employee '})
                          });//CLOSE CATCH
                } //CLOSE CALLBACK FUNCTION BODY Line 110      
          );//CLOSE GET METHOD Line 109  


//UPDATE DOCUMENT IN MONGODB USING EMAILID
router.put('/update', (req, res) => 
            {
  DesModel.findOneAndUpdate({"desproid" : req.body.desproid}, 
                              { $set: {"desprocat" : req.body.desprocat,
                                "desprospe":req.body.desprospe,
                              "desprodes": req.body.desprodes,
                              "desprosize" : req.body.desprosize,
                              "desprocost": req.body.desprocost,
							  "desprofile": req.body.desprofile
							  } }, { new: true })
          .then(getupdateddocument => {
            if(getupdateddocument != null)
               res.status(200).send('DOCUMENT UPDATED ' + getupdateddocument);  
            else
               res.status(404).send('INVALID ID '+ req.params.id);
          }) // CLOSE THEN
          .catch(err => {
  return res.status(500).send({message: "DB Problem..Error in UPDATE with id " + req.params.id });
          }) // CLOSE CATCH
                            } //CLOSE CALLBACK FUNCTION Line No 108
                            ); //CLOSE PUT METHOD Line No 107




//SHOULD BE EXPORTED
module.exports = router;