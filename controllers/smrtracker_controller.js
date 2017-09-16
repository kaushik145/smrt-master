//----------------Dependencies--------------
var express = require("express");
var router = express.Router();
//Importing the model to use database function
var mlbt = require("../models/smrtracker.js");


//=======================
//====USER/Index=========
//=======================
//Creating routes for index 
router.get("/", function(req, res) {
   mlbt.all(function(data) {
    var servicesObject = {
      services: data
    };
    res.render("index", servicesObject);
  }); 

});

//=================
//====ADMIN========
//=================
//===========================Admin page==========================
router.get("/admin", function(req, res) {
   mlbt.all(function(data) {
    var servicesObject = {
      services: data
    };
    res.render("checkout", servicesObject);
  }); 

});
router.put("/:id", function(req, res) {
	var data = {id: req.params.id};
	console.log(req.params.id);
	mlbt.getbook(data, function(servicedata) {
		console.log(servicedata[0])  //  
	res.render("serviceedit", servicedata[0]);
	});
});
router.post("/edit", function(req, res) {
	var data = {id: req.body.id};
	console.log("--------------------------")
	console.log(req.body.id);
	console.log(req.body.service_name);
	console.log(req.body.request_details);
	console.log(req.body.apartment_number);
	mlbt.updateBook(data,
	req.body.service_name,
	req.body.request_details,
	req.body.request_number,
	req.body.apartment_number,
	req.body.assigned_to,
	function() {
	res.redirect("/admin");
}
);
});
router.delete("/:id", function(req, res) {
  var data = {id: req.params.id};
  console.log("This is the delete ID", req.params.id);
  console.log("Yo", data.id)
  mlbt.delete(data, function() {
    res.redirect("/admin");
  });
});


//  Service CRUD --- adding Service

router.get("/crud", function(req, res) {
    res.render("servicecrud");  
}); 


router.post("/crud", function(req, res) {
console.log("Here we are", req.body)
  mlbt.createNewBook(
    req.body.sname,
    req.body.details,
    req.body.rNumber,
    req.body.aNumber,
    req.body.Assigned,
    function() {
      res.redirect("/admin");   
    }
  );
});

// ======================== Service Checkout page===================================
//render the book titles for the drop down
router.get("/checkout", function(req, res) {
mlbt.all(function(data) {
var servicesObject = {
services: data
};
console.log("This is checkout", servicesObject)
res.render("servicecheckout", servicesObject);
});
});
//render the page and posting user data to mySQL
router.get("/checkout", function(req, res) {
res.render("servicecheckout");
});
router.post("/checkout", function(req, res) {
	console.log("This is the checkout")
	console.log("This is the body", req.body)
	mlbt.createCheckout(
		req.body.name,
		req.body.email,
		req.body.netID,
		req.body.service_name,
		req.body.checkout_date,
		req.body.due_date,
		function() {
		res.redirect("/usercrud");
		}
	);
});

//UPDATE users and services tables  
router.put("/:id", function(req, res) {
  var data = {id: req.params.id};
   console.log(req.params.id);
    mlbt.booksTableUpdate(data,
    function() {
      res.redirect("/usercrud")
    })
});

//  User CRUD 

router.get("/usercrud", function(req, res) {
	mlbt.allUser(function(data) {
		console.log(data)
		var checkoutUserObject = {
		checkout: data
		};
		// console.log(userObject);
	res.render("usercrud", checkoutUserObject);
	});
});



//=================
//Export routes for server.js
module.exports = router;