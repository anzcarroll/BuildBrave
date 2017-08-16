const express = require('express');
const Quote = require('../models/quote');
const Topic = require('../models/topic');
const InspoBoard = require('../models/inspoBoard');
const router = express.Router();

router.get("/", (req, res) => {

  Topic.find({}).then((topics) => {
    res.json(topics);
  });
});

router.post("/", (req, res) => {
  console.log(JSON.stringify(req.body))
  const quotes = req.body.topics[0].quotes.map(quote => {
    return new Quote(quote);
  });
  const topic = new Topic({
    name: req.body.topics[0].name,
    quotes
  });

  const board = new InspoBoard({
    user: req.body.user,
    joyPoints: 0,
    topics: [topic]
  })

  board.save().then((board) =>
  { console.log(board.user); res.json(board); });
})

module.exports = router;