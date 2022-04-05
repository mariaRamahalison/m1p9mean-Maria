
const mongoose  = require('mongoose');
const UserSchema= require('../Schema/User');
var User = mongoose.model('User', UserSchema);

function findAll(){
    User.find().exec(function (err, data) {
        if(error){
            throw error;
        }
        return data;
    })
}

module.exports={findAll};
