
const mongoose = require('mongoose');

const journalSchema = mongoose.Schema({
   id: { type: Number, required: true },
         title: {type: String}, 
         entry: {type: String}, 
         greatThing1: {type: String}, 
         greatThing2: {type: String}, 
         greatThing3: {type: String}, 
         date: {type: Date}
});

module.exports = mongoose.model('Journal', journalSchema);