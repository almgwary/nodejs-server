let mongoose = require('mongoose');
let Schema = mongoose.Schema;

var User = new Schema({
    name: {
        type: String,
        required : [ true, 'text is required'],
        lowercase : true
    },
    availability: {
        type: Boolean
    }


}, {
    timestamps: true , toObject: {virtuals:true}
});

module.exports = mongoose.model('User', User);