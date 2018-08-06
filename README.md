# Bamazon
An Amazon-like storefront with the MySQL. The app will take in orders from customers and deplete stock from the store's inventory.

# Packages Used
 
 # mysql -npm (Connection driver for mysql)
https://www.npmjs.com/package/mysql

 - inquirer -npm (Interactive command line prompt to take input)
https://www.npmjs.com/package/inquirer

 - figlet -npm (Allows you to create ASCII Art from text)
https://www.npmjs.com/package/

 - tablefy -npm (Manage data pagination into a table)
https://www.npmjs.com/package/tablefy

# Instructions

1. Create a Database with table of products with item id, product name, department name, price and stock quantity.

<img src="https://github.com/Otepiii/Bamazon/blob/master/table.PNG">

2. Create Node application called bamazonCustomer.js. 

3. Install all the the packages mentioned above.

4. To run the application, open the terminal  and type in the command line : ```node bamazonCustomer.js ```

<img src="https://github.com/Otepiii/Bamazon/blob/master/render1533518652858.gif" width="700">

- As shown on the gif file. The app will ask to confirm if you wanted to make a purchase.

- If yes it will show the table of products and will ask for the item id and quantity to order.

- At checkout it will give you the total price and update the specific stock quantity.

<img src="https://github.com/Otepiii/Bamazon/blob/master/render1533518772292.gif" width="700">

- Here is an alternate example when you order and there is not enough stock quantity for the requested order.

- It will loop back so that the order could be modified or a different order could be made.

# Built with 

 # [mysql](https://www.mysql.com/)
 # [node](https://nodejs.org/en/)
 
# License
  
  This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/Otepiii/Bamazon/blob/master/LICENSE) file for details



