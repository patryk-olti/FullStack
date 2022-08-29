const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SingleResult = new Schema({
    name: String,
    surName: String,
    time: String
})

module.exports = mongoose.model('SingleResult', SingleResult);