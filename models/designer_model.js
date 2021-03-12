// IMPORT MONGOOSE 
//this part is done by afrina sultana
const model_mongoose = require('mongoose');

//CREATE MODEL Employee means Employee Information
let EmployeeModel = model_mongoose.model('deg_model_collection', 
{
    empname: { type: String },
    empemail: { type: String },
    empmobile: { type: String },
    empdob: { type: String },
    emppass: { type: String },
    empgender: { type: String }, 
    empcountry: { type: String },
    empstate: { type: String },
    empaddress: { type: String },
    about:{type:String},
	regdatetime: { type: Date, default: Date.now }
});

//EXPORT MODULE Employee using BINDING
module.exports = EmployeeModel ;
