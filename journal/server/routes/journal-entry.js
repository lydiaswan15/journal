const sequenceGenerator = require('./sequenceGenerator');
const JournalEntry = require('../models/journal');


var express = require('express');
var router = express.Router();
module.exports = router; 


router.get('/', (req, res, next) => {

    
    // call the Document model find() method to get all documents in the collection
        JournalEntry.find()
          .then(entries => {
            res.status(200).json({
                message: 'Entries fetched successfully!',
                entries: entries
              });
          })
          .catch(error => {
            res.status(500).json({
              message: 'An error occurred',
              error: error
            });
          });
      });
