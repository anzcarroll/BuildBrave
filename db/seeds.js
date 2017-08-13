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

const susy1 = new Quote({
    quote: "Fear is a manipulative emotion that can trick you into living a boring life.",
    value: 24,
})

const susy2 = new Quote({
    quote: "Whatever the mind of man can conceive and believe, it can achieve.",
    value: 11,
})
const susy3 = new Quote({
    quote: "You can never cross the ocean until you have the courage to lose sight of the shore.",
    value: 20,

})
const susy4 = new Quote({
    quote: "It does not matter how slowly you go as long as you do not stop.",
    value: 30,
})
const susy5 = new Quote({
    quote:"Do not fear for I am with you, do not be dismayed for I am your God,I will strengthen you, help you, and uphold you with my righteous hand.",
    value: 10,
})

const fear = new Topic({
    name: "Fear",
    quotes:[ susy1, susy2, susy3, susy4, susy5 ]
})

const susy6 = new Quote({
    quote: "I don't focus on what I'm up against. I focus on my goals and I try to ignore the rest.",
    value: 24,
})

const susy7 = new Quote({
    quote: "Don't dwell on what went wrong. Instead, focus on what to do next. Spend your energies on moving forward toward finding the answer.",
    value: 11,
})
const susy8 = new Quote({
    quote: "Realize deeply that the present moment is all you ever have. Make the Now the primary focus of your life.",
    value: 20,

})
const susy9 = new Quote({
    quote: "It is wise to direct your anger towards problems - not people; to focus your energies on answers - not excuses.",
    value: 30,
})
const susy10 = new Quote({
    quote:"Your destiny is to fulfill those things upon which you focus most intently. So choose to keep your focus on that which is truly magnificent, beautiful, uplifting and joyful. Your life is always moving toward something.",
     value: 10,
})

const focus = new Topic({
    name: "Focus",
    quotes:[ susy6, susy7, susy8, susy9, susy10 ]
})

const susy11 = new Quote({
    quote: "here is no love without forgiveness, and there is no forgiveness without love.",
    value: 24,
})

const susy12 = new Quote({
    quote: "Work like you don't need the money. Love like you've never been hurt. Dance like nobody's watching.",
    value: 11,
})
const susy13 = new Quote({
    quote: "We may give without loving, but we cannot love without giving.",
    value: 20,

})
const susy14 = new Quote({
    quote: "A tree is known by its fruit; a man by his deeds. A good deed is never lost; he who sows courtesy reaps friendship, and he who plants kindness gathers love.",
    value: 30,
})
const susy15 = new Quote({
    quote:"Love is patient, love is kind. It does not envy, it does not boast, it is not proud.",    
    value: 10,
})

const love = new Topic({
    name: "Love",
    quotes:[ susy11, susy12, susy13, susy14, susy15 ]
})

const susy16 = new Quote({
    quote: "Be faithful to that which exists within yourself.",
    value: 24,
})

const susy17 = new Quote({
    quote: "Act as if what you do makes a difference. It does",
    value: 11,
})
const susy18 = new Quote({
    quote: "When you recover or discover something that nourishes your soul and brings joy, care enough about yourself to make room for it in your life.",
    value: 20,

})
const susy19 = new Quote({
    quote: "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope.",
    value: 30,
})
const susy20 = new Quote({
    quote:"You are very powerful, provided you know how powerful you are",    
    value: 10,
})

const selfworth = new Topic({
    name: "Self Worth",
    quotes:[ susy16, susy17, susy18, susy19, susy20 ]
})





const board = new InspoBoard({
    user: "SassyLassy",
    joyPoints: 0,
    topics: [fear, focus, love, selfworth]
})

selfworth.save().then(() => console.log('Topic selfworth is saved!'));
love.save().then(() => console.log('Topic love is saved!'));
focus.save().then(() => console.log('Topic focus is saved!'));
fear.save().then(() => console.log('Topic fear is saved!'));
board.save().then(() => console.log("inspoBoard saved!"));

mongoose.connection.close();
