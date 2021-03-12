// IMPORT EXPRESS SERVER
const express = require('express');

// USE Router FOR EXPRESS SERVER
const router = express.Router();

const UUID = require('uuid-int');
const id = 0;

//IMPORT EMPLOYEE MODEL AND BIND IT
const EmpModel = require('../models/employee_model');
const PosterOrdModel = require('../models/posterorder_model');
const mailservice = require('../services/mailService.js');
//const EmpModel = require('../models/employee_schema');

// URL :- localhost:4500/emp/register  (USING POSTMAN POST)
/*
{
  "empname": "Chandan",
  "empemail": "chan@gmail.com",
  "empmobile": "9831125144",
  "empdob": "05/09/1984",
  "emppass": "abcd",
  "empgender": "Male",
  "empcountry": "India",
  "empaddress": "Kol",
}
*/
// post is used to INSERT DOCUMENT/RECORD
// CALLBACK using lambda 
router.post('/register', (req, res) => 
                 {
                    
//Create Object of Employee Model Class
// And Receive value from request body and Store value within the Object
                   const empobj = new EmpModel({
                                 empname: req.body.empname,
                                 empemail: req.body.empemail,
                                 empmobile: req.body.empmobile,
                                 empdob: req.body.empdob,
                                 emppass: req.body.emppass,
                                 empgender: req.body.empgender,
                                 empcountry: req.body.empcountry,
                                 empaddress: req.body.empaddress,
                                 });//CLOSE EmpModel
     //INSERT/SAVE THE RECORD/DOCUMENT
                   empobj.save()
                         .then(inserteddocument => {
    res.status(200).send('DOCUMENT INSERED IN MONGODB DATABASE' +'<br\>'+ inserteddocument);
                               })//CLOSE THEN
                         .catch(err =>{
    res.status(500).send({ message: err.message || 'Error in Employee Save '})
                               });//CLOSE CATCH
                            }//CLOSE CALLBACK FUNCTION BODY Line 27
                            );//CLOSE POST METHOD Line 26

// => localhost:4500/emp/remove/30     (USING POSTMAN DELETE)
//DELETE A DOCUMENT FROM MONGODB USING EMPID
//EmpModel.findOneAndRemove({"empid" : parseInt(req.params.empid)})

// => localhost:4500/emp/remove/abc@gmail.com     (USING POSTMAN DELETE)
//DELETE A DOCUMENT FROM MONGODB USING EMAILID
router.post('/poster_request', (req, res) => 
                 {
                  const generator = UUID(id);
                  const reqid=generator.uuid();
//Create Object of Employee Model Class
// And Receive value from request body and Store value within the Object
                   const posterOrd = new PosterOrdModel({
                                requestid : reqid,
                                posterid: req.body.posterid,
                                postername: req.body.postername,
                                customername: req.body.customername,
                                customeremail: req.body.customeremail,
                                // customermobile: req.body.customermobile,
                                // quentity: req.body.quentity,
                                // delivery_date : req.body.delivery_date,
                                 });//CLOSE EmpModel
     //INSERT/SAVE THE RECORD/DOCUMENT
                   posterOrd.save()
                         .then(inserteddocument => {
    res.status(200).send('DOCUMENT INSERED IN MONGODB DATABASE' +'<br\>'+ inserteddocument);
                          let email=req.body.customeremail
                          let name=req.body.customername
     mailservice.sendmail(email,' POSTER REQUEST', name  + ' YOUR POSTER REQUEST SUCESSFULL THANK YOU');
                               })//CLOSE THEN
                         .catch(err =>{
    res.status(500).send({ message: err.message || 'Error in Order '})
                               });//CLOSE CATCH
                            }//CLOSE CALLBACK FUNCTION BODY Line 27
                            );


router.put('/status_update', (req, res) => {
  PosterOrdModel.findOneAndUpdate({ "requestid": parseInt(req.body.requestid) },
            { $set:{"status" : req.body.status} }, { new: true })
            .then(getupdateddocument => {
            if (getupdateddocument != null){                         
              res.status(200).send('DOCUMENT UPDATED ' + getupdateddocument);
              console.log("123456789")
              let s=req.body.status
              console.log(s)
              // let email="tapaighosh2000@gmail.com"
              // let email=getupdateddocument[0].customeremail
              let email=getupdateddocument.customeremail
              console.log(email)
               mailservice.sendmail(email, 'Status', 'YOUR POSTER ORDER '+ s);
                
            }
            else
              res.status(404).send('INVALID REQEST ID ' + req.params.reqid);
                    }) // CLOSE THEN
            .catch(err => {
                return res.status(500).send({ message: "DB Problem..Error in UPDATE with id " + req.params.reqid });
                  }) // CLOSE CATCH
                            } //CLOSE CALLBACK FUNCTION Line No 108
                            );


//for login to check password
router.post('/logincheck/a/designer', (req, res) => {


  //var inp = bcrypt.hash(req.body.emppass, 10)

  EmpModel.find({ "empemail": req.body.empemail })
    .then(getsearchdocument => {

      if (getsearchdocument.length > 0) {
        
        let enteredpassword = req.body.emppass
        let storedpassword = getsearchdocument[0].emppass

        if (enteredpassword==storedpassword){
          res.send(getsearchdocument)
        }
        else{
              res.send("fail");
               }
        
        // bcrypt.compare( enteredpassword, storedpassword ).then((kiholo) => {

        //   if(kiholo === true)
        //   {
        //     res.send(getsearchdocument) 
        //   }

        //   else{
        //     res.send("fail");
        //      }       
        // })

      }
      else {
        
        return res.status(404).send({ message: "Note not found with id " + req.body.empemail });
      }
    }) //CLOSE THEN
    .catch(err => {
      console.log("vulval");
      return res.status(500).send({ message: "DB Problem..Error in Retriving with id " + req.body.empemail });
    })//CLOSE CATCH
}//CLOSE CALLBACK FUNCTION BODY
);//CLOSE GET METHOD


router.delete('/remove/:emailid', (req, res) =>
            {
  EmpModel.findOneAndRemove({"empemail" : req.params.emailid})
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


// localhost:4500/emp/10
//SEARCH EMPLOYEE BY EMPID
// "empid" : parseInt(req.params.empid) Convert empid String to Int
// EmpModel.find({"empid" : parseInt(req.params.empid)})

// localhost:4500/emp/abc@gmail.com
//SEARCH EMPLOYEE BY EMPEMAIL
// CALLBACK function for get method using lambda 
router.get('/search/:emailid', (req, res) => 
            {
      EmpModel.find({"empemail" : req.params.emailid})
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

// BROWSER URL :- localhost:4500/emp 
// get IS USED FOR FETCHING DOCUMENTS FROM MONGODB
// CALLBACK using lambda 
router.get('/', (req, res) => 
                {
                EmpModel.find().sort({commentdatetime:-1})
                          .then( getalldocumentsfrommongodb => {
    res.status(200).send(getalldocumentsfrommongodb);
                          }) //CLOSE THEN
                          .catch(err =>{
    res.status(500).send({ message: err.message || 'Error in Fetch Employee '})
                          });//CLOSE CATCH
                } //CLOSE CALLBACK FUNCTION BODY Line 110      
          );//CLOSE GET METHOD Line 109  

router.get('/ordposter', (req, res) => 
          {
          PosterOrdModel.find().sort({orderdatetime:-1})
                    .then( getalldocumentsfrommongodb => {
res.status(200).send(getalldocumentsfrommongodb);
                    }) //CLOSE THEN
                    .catch(err =>{
res.status(500).send({ message: err.message || 'Error in Fetch Employee '})
                    });//CLOSE CATCH
          } //CLOSE CALLBACK FUNCTION BODY Line 110      
    );


//SHOULD BE EXPORTED
module.exports = router;