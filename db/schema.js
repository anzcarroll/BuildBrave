const mongoose = require('mongoose');


const quoteSchema = mongoose.Schema({
    value: Number,
    quote: String,
});

const topicSchema = mongoose.Schema({
    name: String,
    quotes: [quoteSchema]
});

const inspoBoardSchema = mongoose.Schema({
    user: String,
    joyPoints: Number,
    board: [Boolean],
    topics: [topicSchema]
});

const userSchema = mongoose.Schema({
    password: String,
    username: String,
    inspoBoard: [inspoBoardSchema]
});

inspoBoardSchema.pre('save', function(next){
  const emptyBoard = [
    false, false, false, false, false,
    false, false, false, false, false,
    false, false, false, false, false,
    false, false, false, false, false,
  ];
  this.board = emptyBoard;
  next();
})

const InspoBoard = mongoose.model('InspoBoard', inspoBoardSchema);
const User = mongoose.model('User', userSchema);
const Topic = mongoose.model('Topic', topicSchema);
const Quote = mongoose.model('Quote', quoteSchema);

module.exports = {
    InspoBoard, User, Topic, Quote
}