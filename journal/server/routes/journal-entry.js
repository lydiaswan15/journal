const sequenceGenerator = require('./sequenceGenerator');
const JournalEntry = require('../models/journal');


var express = require('express');
var router = express.Router();
module.exports = router; 

router.get("/", (req, res, next) =>{
  JournalEntry.find().exec((err, entriesList) =>{
    if(err){
      return res.status(500).json({
        title: "An error accured", 
        error: err,
      });
    }
    return res.status(200).json(entriesList);
  })
})
