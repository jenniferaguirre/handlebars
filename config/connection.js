var mysql = require("mysql");

var connection;
if ("mysql://a8zac6tf02fsbar5:q5wsfnbczy17nicz@r1bsyfx4gbowdsis.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/c18hnfueyx1vkqu5") {
  connection = mysql.createConnection("mysql://a8zac6tf02fsbar5:q5wsfnbczy17nicz@r1bsyfx4gbowdsis.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/c18hnfueyx1vkqu5")
} else 
{
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burgers_db"
  });
}
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
  module.exports = connection;