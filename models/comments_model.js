//This part is done by souvik kayal
const model_mongoose = require('mongoose');
const CommentModel = model_mongoose.model('comment_model_collection',{
    
    name:{type:String},
    subject:{type:String},
    comment:{type:String},
	category:{type:String},
    commentdatetime:{type:Date,default:Date.now},//in decsending order
    //category:digital art,designing
    country:{type:String}
});
module.exports = CommentModel;