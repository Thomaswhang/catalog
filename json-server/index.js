import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { KeyObject } from 'crypto';
import bodyParser from 'body-parser';

const app = express();
const port = 3300;
app.use( bodyParser.urlencoded({ extended: true }));

app.use(cors());

// heir komt 3 url van abdullah 
app.get('/db', (req, res) => {
  
  fs.readFile('data/abdullah/db.json', 'utf8', (err, data) => {

    res.setHeader('Content-Type', 'application/json;charset=UTF-8');
    res.send(data);
  });
});

app.get('/db1', (req, res) => {
  
  fs.readFile('data/abdullah/db1.json', 'utf8', (err, data) => {

    res.setHeader('Content-Type', 'application/json;charset=UTF-8');
    res.send(data);
  });
});


app.get('/db2', (req, res) => {
  
  fs.readFile('data/abdullah/db2.json', 'utf8', (err, data) => {

    res.setHeader('Content-Type', 'application/json;charset=UTF-8');
    res.send(data);
  });
});





// en heir komt de json van thomas 

app.get('/thomas', (req, res) => {
  
  fs.readFile('data/thomas.json', 'utf8', (err, data) => {

    res.setHeader('Content-Type', 'application/json;charset=UTF-8');
    res.send(data);
  });
});
app.get('/p5', (req, res) => {
  
  fs.readFile('data/joep.json', 'utf8', (err, data) => {

    res.setHeader('Content-Type', 'application/json;charset=UTF-8');
    res.send(data);
  });
});




// Default endpoint
app.get('/', (req, res) => {
  res.send('Hello World!');
});



app.post('/submit-form', (req, res) => {
  const formData = req.body;

console.log(formData)
  fs.readFile('../json-server/data/contact/contact.json', 'utf8', (err, data) => {
   
    let jsonData = JSON.parse(data);

    
    jsonData.submissions.push(formData);

    // Write updated data back to contact.json
    fs.writeFile('../json-server/data/contact/contact.json', JSON.stringify(jsonData, null, 2), err => {
     

      res.status(200).send(`
      <p>Bedankt voor uw vraag. Wij zullen zo snel mogelijk reageren.</p>

    `);
    
    });
  });
});


// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
