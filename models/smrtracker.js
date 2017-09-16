//Importing the ORM to create functions to interact with the database
var orm = require("../config/orm.js");
/* admin have the authority : CRUD command*/
var admin = {
  //pulling up all the books
  all: function(callback) {
    orm.all("services", function(res) {
      callback(res);
    });
  },
  //pulling up all the books
  getbook: function(data, callback) {
    orm.find("services", data, function(res) {
      console.log("This is a res");
      callback(res);
    });
  },
    // The variables cols and vals are arrays.

  createNewBook: function(val1, val2, val3, val4, val5, callback) {
    console.log(val1, val2, val3, val4, val5, "This is the error");
    orm.create("services", "service_name", "request_details", "request_number", "apartment_number", "assigned_to", val1, val2, val3, val4, val5, function(res) {
      callback(res);
    });
  },
  //Updating the book status --- available / checkout 
  //should have two button click for available and unavailable 
  updateBook: function(service_id, val1, val2, val3, val4, val5, callback) {
    console.log(service_id, val1, val2, val3, val4, val5);
    var serviceinfo = {
      service_name: val1,
      request_details: val2,
      request_number: val3,
      apartment_number: val4,
      assigned_to: val5
    };
    orm.update("services", service_id, serviceinfo, function(res) {
  // updateBook: function(val1, val2, val3, val4, val5, callback) {
  //   console.log(val1, val2, val3, val4, val5);
  //   orm.update("books", "title", val1, "author", val2, "edition", val3, "ISBN", val4, "publisher", val5, "id", function(res) {
      callback(res);
    });
  },
  
  delete: function(data, callback) {
    orm.delete("services", data, function(res) {
      callback(res);
    });
  },
  //============Admin checking out books for users ===========
  allUser: function(callback) {
    orm.allUser("checkout", function(res) {
      callback(res);
    });
  },

  createCheckout: function(val1, val2, val3, val4, val5, val6, callback) {
     console.log("TVAlues", val1, val2, val3, val4, val5, val6)
    orm.userCheckout("checkout", "name", "email", "netID", "service_id", "request_date", "due_date", val1, val2, val3, val4, val5, val6, function(res) {
      callback(res);
    });
  }
};
//Exporting the database function for the controller

module.exports = admin;

