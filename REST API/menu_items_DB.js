"use strict";

// import the mysql NPM module to be able to use mysql
const mysql = require('mysql');

// import express module (webserver)
let express = require('express');

// use the express module in the app object
let app = express();

// import body-parser module here
let bodyParser = require('body-parser');

// say to the app (express instance) that he might sometimes render
// the body of a POST/PUT from JSON to an Object
app.use(bodyParser.json());


// for now this is to say that everyone can reach this webserver
// from everywhere
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost', // http://localhost:8081
  user: 'Hans',
  password: 'HansPass01',
  database: 'MolvenoDB'
});

// this method is invoked AFTER the connection is made
// so just to mention "Connected!" (the connection is made above)
connection.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log('Connected!');
  }
});

// this is to enable posting to 'api/menu_items' using the callback function
app.post('/api/menu_items', function(req, res) {

  // this is to read the big string from the body to a user
 // that process is called 'parsing'
 //(using the body-parser module above)
  let user = req.body;

  // in this function (the POST callback) execute this query
  // the user is the parsed user
  // the err is a (potential) error
  // the result is the result of the MYSQL insertion (THAT IS NOT A JSON OBJECT BUT A TECHNICAL MYSQL OBJECT)
  connection.query('INSERT INTO menu_items SET ?', user, (err, result) => {
    if (!err) {

      // set the Content-Type in header to application/json
      res.setHeader('Content-Type', 'application/json')

      // validate the insert and return that as JSON
      connection.query('SELECT * FROM menu_items where id=?', result.insertId, (err, rows) => {
        if (!err) {
          // since we are getting rows here (hopefully one) we have
          // to read out the first row since that should be the result
          let user = rows[0];

          // OK we found a user
          if (user) {
            res.setHeader('Content-Type', 'application/json')
            // response end with a string of the found user
            res.status(201).end(JSON.stringify(user)); // rloman dit nog ophalen en test via select ...
          } else {
            // error, we did NOT find a user
            res.setHeader('Content-Type', 'application/json')

            // so render the common 404 (Not found)
            res.status(404).end();
          }
        } else {
          throw err;
        }
      });
    } else {
      throw err;
    }
  });
});

// this is to enable getting from 'api/menu_items' using the callback function
app.get('/api/menu_items', function(req, res) {

  res.setHeader('Content-Type', 'application/json');

  connection.query('SELECT * FROM menu_items', (err, menu_items) => {
    if (!err) {
      res.end(JSON.stringify(menu_items));
    } else {
      throw err;
    }
  });
});


// this is to enable http://localhost:8081/api/menu_items/3 or something
// look that the 'id' is read out below
app.get('/api/menu_items/:id', function(req, res) {

  let id = +req.params.id

  connection.query('SELECT * FROM menu_items where id=?', id, (err, rows) => {
    if (!err) {
      console.log('Data received from Db:\n');

      // since we are getting rows here (hopefully one) we have
      // to read out the first row since that should be the result
      let user = rows[0];

      // OK we found a user
      if (user) {
        res.setHeader('Content-Type', 'application/json')
        // response end with a string of the found user
        res.end(JSON.stringify(user));
      } else {
        // error, we did NOT find a user
        res.setHeader('Content-Type', 'application/json')

        // so render the common 404 (Not found)
        res.status(404).end();
      }
    } else {
      throw err;
    }
  });
});

app.put('/api/menu_items/:id', function(req, res) {

        // First read id from params
        let id = +req.params.id
        let inputUser = req.body;

        console.log("Received username: "+inputUser.name);
        console.log("Received email: "+inputUser.email);

        connection.query(
          'UPDATE menu_items SET name=?, username=?, email = ? Where ID = ?',
          [inputUser.name, inputUser.username, inputUser.email, id],
          (err, result) => {
            if (!err) {
              console.log(`Changed ${result.changedRows} row(s)`);

              // end of the update => send response
              // execute a query to find the result of the update
              connection.query('SELECT * FROM menu_items where id=?', [id], (err, rows) => {
                if (!err) {
                  console.log('Data received from Db:\n');

                  let user = rows[0];

                  console.log(user);
                  if (user) {
                    res.setHeader('Content-Type', 'application/json')
                    res.end(JSON.stringify(user));
                  } else {
                    res.setHeader('Content-Type', 'application/json')
                    console.log("Not found!!!");
                    res.status(404).end(); // rloman send 404???
                  }
                } else {
                  throw err;
                }
              });
            }
            else {
              throw err;
            }
      });
});

app.delete('/api/menu_items/:id', function(req, res) {
  let id = +req.params.id;

  connection.query(
    'DELETE FROM menu_items WHERE id = ?', [id], (err, result) => {
      if (!err) {
        console.log(`Deleted ${result.affectedRows} row(s)`);
        res.status(204).end();
      }
      else {
        throw err;
      }
    }
  );
});

// and finally ... run it :-)
// get the server from the app which runs on port 8081
let server = app.listen(8081, function() {

  console.log("Example app listening at http://%s:%s", server.address().address, server.address().port)
});
