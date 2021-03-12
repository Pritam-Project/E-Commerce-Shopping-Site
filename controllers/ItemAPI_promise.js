// IMPORT EXPRESS SERVER
const express = require('express');

// USE Router FOR EXPRESS SERVER
const router = express.Router();

//IMPORT EMPLOYEE MODEL AND BIND IT
const ItmModel = require('../models/designer_Prod_model');

 
 
router.get('/searchbysongname/:songname', (req, res) => {
  // "empid" : parseInt(req.params.empid) Convert empid String to Int
  ItmModel.find({ "songname": req.params.songname })
    .then(getsearchdocument => {
      if (getsearchdocument.length > 0) {
        res.send(getsearchdocument);
      }
      else {
        return res.status(404).send({ message: "Note not found with song name " + req.params.songname });
      }
    }) //CLOSE THEN
    .catch(err => {
      return res.status(500).send({ message: "DB Problem..Error in Retriving with song name " + req.params.songname });
    })//CLOSE CATCH
}//CLOSE CALLBACK FUNCTION BODY Line 64
);//CLOSE GET METHOD Line 63 


router.route('/searchbygenre/:genre').get((req, res)=>{
  ItmModel.find({"desprocat": req.params.genre, "productowner":"ADMIN"})
  .then(song =>{
    if(song.length>0)
	{
    res.send(song);
	}
else{
	res.send('Doesn\'t exist');
}
  })
  .catch(err=>{
	  console.log("db problem");
    //res.status(500).send({ message: "DB Problem..Error in Retriving " });
  })
});




router.get('/search/:lprz/:uprz', (req, res) => {
  
  ItmModel.find({ "price":{$gte:req.params.lprz, $lte:req.params.uprz} })
    .then(getsearchdocument => {
      if (getsearchdocument.length > 0) {
        res.send(getsearchdocument);
      }
      else {
        return res.status(404).send({ message: "not found with prize range " + req.params.songname });
      }
    }) //CLOSE THEN
    .catch(err => {
      return res.status(500).send({ message: "DB Problem..Error in Retriving with prize range " + req.params.songname });
    })//CLOSE CATCH
}//CLOSE CALLBACK FUNCTION BODY Line 64
);//CLOSE GET METHOD Line 63


//SHOULD BE EXPORTED
module.exports = router;