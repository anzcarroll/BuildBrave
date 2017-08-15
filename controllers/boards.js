const express = require('express');
const Quote = require('../models/quote');
const Topic = require('../models/topic');
const router = express.Router();

router.get("/", (req,res) => {
  Topic.find({}).then((topics) => {
    res.json(topics);
  });
});

router.post("/", (req, res) => {
  const quotes = req.body.quotes.map(quote => {
    return new Quote(quote);
  });
  const topic = new Topic({
    name: req.body.name,
    quotes
  });
  topic.save().then((topic) => {
    console.log("Success!");
    res.json(topic);
  });
})

module.exports = router;