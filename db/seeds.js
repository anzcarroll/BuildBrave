require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

var InspoBoard = require('../models/inspoBoard')
var Quote = require('../models/quote');
var Topic = require('../models/topic')
// var User = require('../models/user');

// Use native promises
mongoose.Promise = global.Promise;


InspoBoard.remove({}, (err) => console.log(err));
Quote.remove({}, (err) => console.log(err));
Topic.remove({}, (err) => console.log(err));
// User.remove({}, (err) => console.log(err));

const donald = new Quote({
    quote: "Fear is a manipulative emotion that can trick you into living a boring life",
    value: 2,
})

const napoleon = new Quote({
    quote: "Whatever the mind of man can conceive and believe, it can achieve",
    value: 1,
})
const susy = new Quote({
    quote: "You can never cross the ocean until you have the courage to lose sight of the shore.",
    value: 3,

})
const lang = new Quote({
    quote: "It does not matter how slowly you go as long as you do not stop.",
    value: 3,
})
const neyo = new Quote({
    quote:"Do not fear for I am with you, do not be dismayed for I am your God,I will strengthen you, help you, and uphold you with my righteous hand",
    value: 10,
})

const fear = new Topic({
    name: "Fear",
    quotes:[ donald, napoleon, susy, lang, neyo ]
})

const board = new InspoBoard({
    user: "SassyLassy",
    joyPoints: 0,
    topics: [fear]
})

fear.save().then(() => console.log('Topic is saved!'));
board.save().then(() => console.log("inspoBoard saved!"));

mongoose.connection.close();
