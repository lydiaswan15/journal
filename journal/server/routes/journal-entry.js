const sequenceGenerator = require('./sequenceGenerator');
const JournalEntry = require('../models/journal');


var express = require('express');
var router = express.Router();
module.exports = router; 

router.post('/', (req, res, next) => {

  // const maxEntryId = sequenceGenerator.nextId("entries");
  maxEntryId = 3;
  const entry = new JournalEntry({
    id: maxEntryId,
    title: req.body.title,
    entry: req.body.entry,
    greatThing1: req.body.greatThing1, 
    greatThing2: req.body.greatThing2, 
    greatThing3: req.body.greatThing3, 
    date: Date.now()
  });

  console.log("New entry: ", entry);
  entry.save()
    .then(createdEntry => {
      res.status(201).json({
        message: 'Entry added successfully',
        document: createdEntry
      });
    })
    .catch(error => {
       res.status(500).json({
          message: 'An error occurred',
          error: error
        });
    });
});

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

router.put('/:id', (req, res, next) => {
  JournalEntry.findOne({ id: req.params.id })
    .then(entry => {
      entry.title = req.body.title;
      entry.entry = req.body.entry;
      entry.greatThing1 = req.body.title;
      entry.greatThing2 = req.body.title;
      entry.greatThing3 = req.body.title;
      entry.date = Date.now();

      JournalEntry.updateOne({ id: req.params.id }, entry)
        .then(result => {
          res.status(204).json({
            message: 'Entry updated successfully'
          })
        })
        .catch(error => {
           res.status(500).json({
           message: 'An error occurred',
           error: error
         });
        });
    })
    .catch(error => {
      res.status(500).json({
        message: 'Entry not found.',
        error: { entry: 'Entry not found'}
      });
    });
});

router.delete("/:id", (req, res, next) => {
  JournalEntry.findOne({ id: req.params.id })
    .then(entry => {
      JournalEntry.deleteOne({ id: req.params.id })
        .then(result => {
          res.status(204).json({
            message: "Entry deleted successfully"
          });
        })
        .catch(error => {
           res.status(500).json({
           message: 'An error occurred',
           error: error
         });
        })
    })
    .catch(error => {
      res.status(500).json({
        message: 'Entry not found.',
        error: { entry: 'Entry not found'}
      });
    });
});

