const express = require('express');

const app = express();

const config = require('./DB');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

const PORT = process.env.PORT || 4000;

const mongoose =require('mongoose');
mongoose.Promise = global.Promise;

const newRoute = require('./news.route');

mongoose.connect(config.DB,{useNewUrlParser: true}).then(
    res=>{
        console.log('Database successfully connected..');
    },
    err => {
        console.log(err);
    }
);

app.use('/',newRoute);

if (process.env.NODE_ENV === 'production') {
// Set static folder
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });

  }

app.listen(PORT, function(){
    console.log('Server is running on http://localhost:4000');
});