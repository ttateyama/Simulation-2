const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config()
const controller = require('./controller')

const app = express();

massive( process.env.CONNECTION_STRING).then( dbInstance => {
  app.set('db', dbInstance);
})

app.use( bodyParser.json() );
app.use( cors() );

app.get('/api/shelf', controller.getShelves);
app.get('/api/shelf/:shelfLetter', controller.getBins);
app.get('/api/bin/:shelfLetter', controller.getBin);
app.put('/api/bin/:id' , controller.updateBin);
app.delete('/api/bin/:id', controller.deleteBin);
app.post('/api/bin/:id', controller.addBin);


const port = process.env.PORT || 3000
app.listen( port, () => {console.log(`Server is Listening on port ${port}`);});
