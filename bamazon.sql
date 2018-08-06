DROP DATABASE IF EXISTS bamazon_db;
-- Create a database called programming_db --
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(

    item_id MEDIUMINT AUTO_INCREMENT NOT NULL,

    product_name VARCHAR (100) NOT NULL,

    department_name VARCHAR (50) NOT NULL,

    price DECIMAL(10,2) NOT NULL,

    stock_quantity INT (10) NOT NULL,

    primary key(item_id)
    );
    

    SELECT * FROM Products;

    INSERT INTO 
products
    (product_name,department_name,price,stock_quantity)
VALUES
    ("Ameriwood Basics 5 Shelf Bookcase", "Furniture", 68.09, 150),
    ("Cosco Vinyl Folding Chair Black", "Furniture", 67, 200),
    ("Newell 322", "Office Supplies", 75.00, 5),
    ("Lifetime 80176 Folding Conference Training Table, 6 Feet, White Granite", "Furniture", 97.98, 50),
    ("Xerox 1967", "Office Supplies", 54.25, 35),
    ("Lenovo 17-Key USB Numeric Keypad", "Technology", 15.00, 25),
    ("Easy-staple paper", "Office Supplies", 42.42, 42),
    ("Avaya 5420 Digital phone", "Technology", 25.50, 57),
    ("Microsoft Arc Touch Mouse", "Technology", 19.95, 23),
    ("Speck Products Candyshell Flip Case", "Technology", 30.50, 35);