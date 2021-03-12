const model_mongoose = require('mongoose');
//const autoincrement = require("mongoose-auto-increment");

let PosterOrderModel = model_mongoose.model('posterorder_model_collection',
{
     requestid : {type: Number},
    // requestid :sgetNextSequence('user_id'),
    posterid: {type: String},
    postername: {type: String},
    customeremail: {type: String},
    customername: {type: String},
   // _requestid:{type: Number},
    // customermobile: {type: String},
    // quentity: {type: String},
     orderdatetime: { type: Date, default: Date.now },
    // delivery_date : {type: String},
    status:{type: String, default: "REQUESTED"}
});

// function getSequenceNextValue(seqName) {
//   var seqDoc = db.student.findAndModify({
//     query: { _id: seqName },
//     update: { $inc: { seqValue: 1 } },
//     new: true
//   });

//   return seqDoc.seqValue;
// }

// autoincrement.initialize(model_mongoose.connection);
// PosterOrderModel.plugin(autoincrement.plugin,{
//      model : "posterorder_model_collection",
//      field : "_requestid",
//      startAt : 1,
//      incrementBy : 1,
// });

module.exports= PosterOrderModel;