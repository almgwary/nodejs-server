let mongoose = require('mongoose');
let Schema = mongoose.Schema;

var Message = new Schema({
    text: {
        type: String,
        required : [ true, 'text is required'],
        lowercase : true
    },
    email: {
        type: String,
        required : [ true, 'email is required'],
        unique : true,
        lowercase : true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Message', Message);