const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let PlayerSchema = new Schema({
    "_id":"Number",
    "name":"String",
    "age":"Number",
    "playerType":"String"
})

module.exports = mongoose.model('Player',PlayerSchema)