//Importing MySQL connection
var connection = require("../config/connection.js");
var mysql = require("mysql");


//ORM Object for SQL Statement functions
var orm = {
    //Selecting all for SQL Statement
    all: function(tableInput, callback) {
        var queryString = "SELECT * FROM ?? ORDER BY service_name ASC";
        connection.query(queryString, [tableInput], function(err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
    //findOne for SQL Statement
    find: function(tableInput, data, callback) {
        var queryString = "SELECT * FROM ?? WHERE ?";
        connection.query(queryString, [tableInput, data], function(err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
    //Inserting a new item for SQL Statement
    create: function(tableInput, colname1, colname2, colname3, colname4, colname5, val1, val2, val3, val4, val5, callback) {

        var queryString = "INSERT INTO ?? ( ??, ??, ??, ??, ?? ) VALUES ( ?, ?, ?, ?, ? )";

        connection.query(queryString, [tableInput, colname1, colname2, colname3, colname4, colname5, val1, val2, val3, val4, val5], function(err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },

    update: function(tableInput, service_id, serviceinfo, callback) {

        var queryString = "UPDATE ?? SET ? WHERE id=?";
        
        var inserts = [tableInput, serviceinfo, parseInt(service_id.id)];
        var sql = mysql.format(queryString, inserts);
        console.log(sql);
        console.log(serviceinfo);
        connection.query(sql, function(err, result) {

            if (err) {
                throw err;
            }
            callback(result);
        }); 
    },

      //DELETE
    delete: function (tableInput, data, callback) {
        var queryString = "DELETE from ?? where id=?" ;
        console.log("This is the delete data", data.id)
        var whereString = [tableInput, parseInt(data.id)];
        var sql = mysql.format(queryString, whereString)
        connection.query(sql, function (err, results) {
          if(err) {
            throw err;
          }
          console.log("These are the results from deleting:", results)
          // console.log(results); 
          callback(results);
      
        });
    },
    ///======================== Admin checkout books for user=========================
    allUser: function(tableInput, callback) {
        var queryString = "SELECT * FROM ?? ";
        connection.query(queryString, [tableInput], function(err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
   
    //Inserting a new item for SQL Statement
    userCheckout: function(tableInput, name, email, netID, service_id, request_date, due_date, val1, val2, val3, val4, val5, val6, callback) {
        var queryString = "INSERT INTO ?? ( ??, ??, ??, ??, ??, ?? ) VALUES ( ?, ?, ?, ?, ?, ?)";
        console.log("These are the value-----", val1, val2, val3, val4, val5, val6)
        console.log("These are columns", tableInput, name, email, netID, service_id, request_date, due_date)
        connection.query(queryString, [tableInput, name, email, netID, service_id, request_date, due_date, val1, val2, val3, val4, val5, val6], function(err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    }
};
//Exporting ORM object for model
module.exports = orm;

