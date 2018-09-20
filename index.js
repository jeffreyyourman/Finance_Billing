const express = require('express');
const path = require('path');
const app = express();

var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var User = require('./models/user');
var Data = require('./models/data');
var keys = require('./keys');
mongoose.connect(`mongodb://${keys.username}:${keys.secret}@ds141474.mlab.com:41474/${keys.app}`);

// const keyUsername = process.env.mongouser;
// const keySecret = process.env.mongosecret;
// const keyApp = process.env.mongoapp;
//
// mongoose.connect(`mongodb://${keyUsername}:${keySecret}@ds141474.mlab.com:41474/${keyApp}`);
var db = mongoose.connection;

//handle mongo error
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!fdsa
});

//use sessions for tracking logins
app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: db
  })
}));

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// include routes
var routes = require('./routes/router');
app.use('/', routes);
// Put all API endpoints under '/api'
app.get('/api/data', (req, res) => {
  Data.find(function (err, docs) {
    res.json(docs);
  })
});

app.post('/importData', (req, res) => {
  let newImportData = req.body.importData;
    for (var i = 0; i < newImportData.length; i++) {

      const loopedImportData = newImportData[i];

      Data.update({"advisorEmail": req.session.email}, {"$push": { "data":loopedImportData}}, function(err, updateData){
        if (err) throw (err);
        console.log('Import successful');
    });
  }
});

app.post('/updateData', (req, res) => {
  let newUpdatePercentage = req.body.data;

    for (var i = 0; i < newUpdatePercentage.length; i++) {

      const loopedUpdatePercentage = newUpdatePercentage[i];

    //   Data.update({"advisorEmail":req.session.email}, {"$push": { "data":loopedImportData}}, function(err, updateData){
    //     if (err) throw (err);
    //     console.log('inside update', updateData);
    // });
  }
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Financial Billing App is listening on ${port}`);
