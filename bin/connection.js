const mongoose  = require('mongoose');

const mongo = 'mongodb+srv://eyetech:1qaz2wsxasd@eyetech-lrslv.mongodb.net/test?retryWrites=true&w=majority'



mongoose.connect(mongo, {
    useNewUrlParser : true,
    useUnifiedTopology : true
});

const db = mongoose.connection;

db.on('open', () => {
    console.log("Banco Inciado");
});

db.on('error', (error) => {
    console.log('erro na conexão com o banco de dados!')
});

module.exports = mongoose;