
const mongoose = require('mongoose');

const sequencesSchema = mongoose.Schema({
        "maxJournaltId": {type: Number},
        "maxMessageId": {type: Number}

});

module.exports = mongoose.model('Journal', journalSchema);