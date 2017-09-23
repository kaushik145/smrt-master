// Setup mysql connection
var mysql = require("mysql");

// mySQL Connectionz
var connection = mysql.createConnection({
	port: 3306,
	host: "us-cdbr-iron-east-05.cleardb.net",
	user: "be891a228dc13f",
	password: "d09f27e2",
	database: "heroku_85b5b47b6dce101"
});
// Makes connection and outputs to CLI
connection.connect(function(err) {
if (err) {
console.error("error connecting: " + err.stack);
return;
}
console.log("connected as id: " + connection.threadId);
console.log(" ");
console.log("----------------------------- ");
});
// Export connection for our ORM to use.
module.exports = connection;


