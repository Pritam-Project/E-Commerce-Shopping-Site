// IMPORT MONGOOSE 
const model_mongoose = require('mongoose');

//CREATE MODEL Employee means Employee Information
let DesignerModel = model_mongoose.model('Product', 
{
    desproid: {type: String},
    productowner: {type: String},
    productowneremail:{type: String},
    desprocat: {type: String},
    desprospe: { type: String },
    desprodes: { type: String },
    desprosize: {type: String},
    desprocost: {type: String},
    desprofile: {type: String},
	regdatetime: { type: Date, default: Date.now }
});

//EXPORT MODULE Designer using BINDING
module.exports = DesignerModel ;
