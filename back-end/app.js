// DEPENDENCIES

// CONFIGURATION


// MIDDLEWARE

// ROUTES

const express = require('express');
const cors = require('cors')
const app = express();

const snackController = require('./controllers/snackController')

app.use(cors())
app.use(express.json())



app.use('/snacks', snackController);

app.get('/',(request,response)=>{
  response.send('Welcome to your Vending Machine')
})

app.get('*',(request, response)=>{
  response.status(404).send('Page not found - this is from app.js on line 26')
})

// EXPORT
module.exports = app;
