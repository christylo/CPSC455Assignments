const test = require("../client/package.json")

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testAPIRouter = require("./routes/testAPI");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/testAPI", testAPIRouter);

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

const pupperUrl = "https://www.petmd.com/sites/default/files/styles/article_image/public/petmd-puppy-weight.jpg?itok=IwMOwGSX";
const disneyUrl = "https://media.cntraveler.com/photos/5f1062d121cde6e1168e6143/4:3/w_2276,h_1707,c_limit/WaltDisneyWorld-2020-GettyImages-1226596749.jpg";
const picnicUrl = "https://www.avenuecalgary.com/wp-content/uploads/2021/05/Bow-Valley-Ranch-Picnic-960x640.jpeg";
const beachUrl = "https://assets.simpleviewinc.com/simpleview/image/fetch/c_fill,h_506,q_75,w_675/https://res.cloudinary.com/simpleview/image/upload/v1453938131/clients/vancouverbc/Kitsilano_Beach_ba4c5168-5bcb-43de-9c78-13543c26c098.jpg";
let state = [
  { cardId: 0, name: "Pupper", url: pupperUrl, description: "I want this doggo"},
  { cardId: 1, name: "Disney", url: disneyUrl, description: "Disney California Adventure Park"},
  { cardId: 2, name: "Picnic", url: picnicUrl, description: "spring picnic in SF" },
  { cardId: 3, name: "Beach Day", url: beachUrl, description: "summer beach day with friends" }
];

let curId = (Object.keys(state)).length;

app.get('/api/cards', (req, res) => {
  res.send(state);
});

app.get('/api/card/:cardId', (req, res) => {
  const id = req.params.cardId;
  const foundCard = state.find(card => card.cardId === id);

  if (!foundCard) {
    res.sendStatus(404);
  } else {
    res.send(foundCard);
  }
});

app.post('/api/card/create', (req, res) => {
  const newCard = {
    ...req.body,
    cardId: curId
  }
  curId++;
  state.push(newCard);
  res.send(newCard);
})

app.put('/api/card/update/:cardId', (req, res) => {
  const id = JSON.parse(req.params.cardId);
  const newCard = {
    ...req.body,
    cardId: id
  }
  for (let i = 0; i < state.length; i++) {
    if (state[i].cardId == id) {
      state[i] = newCard;
      res.sendStatus(200);
    }
  }
  res.sendStatus(404);
})

app.delete('/api/card/delete/:cardId', (req, res) => {
  const id = req.params.cardId;
  const foundCard = state.find(card => card.cardId == id);
  if (foundCard) {
    state = state.filter(function(value, index, arr){ 
      return value !== foundCard;
    });
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
})

app.delete('/api/cards/delete', (req, res) => {
  state = [];
  res.sendStatus(200);
})
