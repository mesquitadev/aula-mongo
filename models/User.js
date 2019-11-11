const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let User = new Schema({
    Nome : {
        type : String
    },
    Email: {
        type : String,
    },
    Senha : {
        type : String
    },
    CriadoEm : {
        type : Date
    } 
}, {
    collection: 'Users'
});

module.exports = mongoose.model('Users', User);