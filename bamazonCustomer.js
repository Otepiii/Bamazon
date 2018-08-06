var mysql = require("mysql");
var inquirer = require("inquirer");
const Tablefy = require("tablefy");
var figlet = require('figlet');

var connection = mysql.createConnection({
  host: "127.0.0.1",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazon_db"
});
// creates the connection to the Database
connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  takeALook();
});

// the loading portion of the app
function takeALook() {
  figlet.text('--BAMAZON!--', {
    font: 'larry 3d',
    horizontalLayout: 'default'    
}, function (err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
});
  // Asks intial prompt
  inquirer
    .prompt({
      name: "confirm",
      type: "confirm",
      message: "Would you like to see what we have in stock and place an order?",
      default: true
    }).then(function (answers) {
      if (answers.confirm) {
        showProducts()
      } else {
        console.log("\n");
        console.log("Have a nice day!");
        console.log("\n");
        connection.end();
      }
    })
}

// shows the table of the products
function showProducts() {

  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    let table = new Tablefy()
    table.draw(res)
    mainMenu();
  });
}

// where the transaction is going on
function mainMenu() {
  inquirer
    .prompt([
      {
        name: "item_id",
        type: "input",
        message: "What is the Item_Id of the product you would like to purchase?",
        validate: function (value){
          if (isNaN(value)===false){
            return true;
          } else {
            return false;
          }
        }
      },
      {
        name: "secondAction",
        type: "input",
        message: "How many units of the products would you like to purchase?",
        validate: function (value){
          if (isNaN(value)===false){
            return true;
          } else {
            return false;
          }
        }
      }])
    .then(function (answer) {

      var query = "SELECT * FROM bamazon_db.products WHERE ?";
      var qty = answer.secondAction;

      connection.query(query, [{item_id:answer.item_id}], function (error, res) {

        if (res[0].stock_quantity>qty){
          connection.query("UPDATE products SET stock_quantity = stock_quantity - "+ qty +" WHERE ? " , [
           {Item_Id:answer.item_id}]);
            console.log("Your purchase was successful! Your total bill is $"+res[0].price*qty+" Thank you come again!");
            connection.end();
        } else {
          console.log("\n");
          console.log("Insufficient Quantity! Modify your order");
          takeALook();
        }
      }) 
     
    })
}
