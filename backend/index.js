const express = require('express')
const app = express()
const cors = require('cors');
var mysql = require('mysql2');


var connection = mysql.createConnection({
  host: "127.0.0.1",
  port: "3308",
  database: "stargazer_db",
  user: "appuser",
  password: "TestPassword123."
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.use(cors()); 

// Define the /subscribers endpoint
app.get('/subscribers', (req, res) => {
    connection.query('SELECT * FROM subscribers', (error, results) => {
      if (error) {
        console.error('Error fetching subscribers:', error.stack);
        res.status(500).send('Error fetching subscribers');
        return;
      }
      res.json(results);  // Send the results as JSON
    });
  });



// Define the /pictures endpoint
app.get('/pictures', (req, res) => {
    const query = 'SELECT * FROM picture ORDER BY RAND() LIMIT 6';
  
    connection.query(query, (error, results) => {
      if (error) {
        console.error('Error fetching pictures:', error.stack);
        res.status(500).send('Error fetching pictures');
        return;
      }
      res.json(results); // Send the results as JSON
    });
  });
  

app.listen(5000, () => {console.log("Server started on port 5000")})

