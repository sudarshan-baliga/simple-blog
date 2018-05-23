var express = require('express');
var bodyParser = require('body-parser');
var api = require("./api/api")
var cors = require('cors');
var app = express();


app.use(bodyParser.json());
app.use(bodyParser.raw({ type: () => true }));
app.use(bodyParser.urlencoded({
    extended: true
  }));
  
app.use(cors());

app.use('/api', api);

app.listen(process.env.PORT || 4000, ()=>{
    console.log("listening to port 4000");
});