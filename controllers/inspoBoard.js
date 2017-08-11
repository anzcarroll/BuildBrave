const express = require('express');
const InspoBoard = require("../models/inspoBoard");
const router = express.Router();

router.get("/", (req, res) => {
  InspoBoard.find().then((boards) => {
    res.json(boards);
  });
});

router.get("/:id", (req, res) => {
  InspoBoard.findById(req.params.id).then((board) => {
    res.json(board);
  })
})

router.put("/:id", (req, res) => {
  InspoBoard.findByIdAndUpdate(req.params.id, {joyPoints: req.body.joyPoints}).then((board) =>{
    res.json(board);
  })
});

module.exports = router;