const mongoose = require('mongoose');


const cvSchema = mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    number: { type: String, required: true },
    email: { type: String, required: true },
    expProf: { type:Array, required: true },
    formation: { type:Array, required: true },
    compProf: { type: Array, required: true },
    compPers: { type: Array, required: true },
});



module.exports = mongoose.model('Cv', cvSchema);
