const mongoose = require('mongoose')
const test = new mongoose.Schema({
    num1: { type: Number },
    num2: { type: Number },
    ansPrime: { type: Array},
    date : {type : String}
});

module.exports = mongoose.model('test', test)