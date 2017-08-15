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
  const payload =  {
    joyPoints: req.body.joyPoints
  }
  InspoBoard.findByIdAndUpdate(req.params.id, payload).then((board) =>{
    res.json(board);
  })
  .catch(err => console.log(err));
});



module.exports = router;