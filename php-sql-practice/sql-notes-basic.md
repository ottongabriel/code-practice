// prettier-ignore

### PRACTICE QUERIES DONE WITH THIS RESOURCE:
###https://www.w3schools.com/sql/trysql.asp?filename=trysql_op_in


##BASIC COMMANDS:

#create database:
CREATE DATABASE test;
#delete database:
DROP DATABASE test;
#create table:
CREATE TABLE customers(
  CustomerID INT NOT NULL AUTO_INCREMENT,
  CustomerName VARCHAR(255),
  ContactName VARCHAR(255),
  Address VARCHAR(255),
  City VARCHAR(255),
  PostalCode VARCHAR(255),
  Country VARCHAR(255),
  PRIMARY KEY(CustomerID)
);
#enter informtation to table 
#((you define the table headers, and then you enter the rows separated by commas and ending with a simicolon))
INSERT INTO customers(CustomerName, ContactName, Address, City , PostalCode, Country)
VALUES("Alfreds", "Futterkiste", "Maria Anders", "Obere Str. 57", "Berlin", "12209", "Germany"), ("Antonio Moreno Taquería", "Antonio Moreno', 'Mataderos 2312", "México D.F.', '05023', 'Mexico');

#END BASICS
#################################################################################

###START ACTUAL PRACTICE QUERIES

##Update values
UPDATE customers
SET City = 'Monterrey'
WHERE CustomerID = 3;
// You have made changes to the database. Rows affected: 1
#((the WHERE here is very important. Otherwise, every single user's city would be set to Monterrey))

##Delete a row
DELETE FROM customers
WHERE CustomerID = 3;
#((again, the WHERE part is extremely important. If it were not there, every single customer would be deleted))

##Alter table
ALTER TABLE customers ADD TestCol VARCHAR(255);
#((this will create a column in the table with header 'TestCol' with data type of VARCHAR, and all of the values will be initialized to NULL))

##Modify data type of column
ALTER TABLE customers
MODIFY COLUMN TestCol INT(11);
#((this will modify the column so that now it takes integers with a maximum of 11 caraters instead of VARCHAR))

##Delete column
ALTER TABLE customers
DROP COLUMN TestCol;


#END PRACTICE QUERIES
#################################################################################

###START SLECTING DATA

##Get all columns and rows from custumers table
SELECT * FROM customers;

##Get only the customer name and contact name
SELECT CustomerName, ContactName FROM customers;

##Get customer by id:
SELECT * FROM customers WHERE CustomerID = 1;
#((we use the id because it is the primary key and because it is unique. You couldn't use name, because if two users had the same name the system ould break))

##Get all columns and rows and sort by contact name
SELECT * FROM customers ORDER BY ContactName;
#((implied ASC, ascending is the default))

##Get all columns and rows and sort by contact name descending
SELECT * FROM customers ORDER BY ContactName DESC;

##Select all of the states where there are customers WITHOUT REPEATS
SELECT DISTINCT country FROM customers;
#((without the DISTINCT you would get all of the countries repeated as many times as you have customers in it))

###INTEGER COMPARISON

##Get all users whose id is larger than 50
SELECT * FROM customers WHERE CustomerID > 50;

##Get all users with IDs ranging betwee 30 and 60 
SELECT * FROM customers 
WHERE CustomerID
BETWEEN 30 AND 60;
#((this is an inclusive between))

##Get all from customers where the city ends in the letter 'n'
SELECT * FROM customers 
WHERE city LIKE '%n';
#((in this case the '%' character represents a wildcard. In other words, anything could preceed the letter 'n'))

##Get all from customers where the city ends in the letter 'n'
SELECT * FROM customers 
WHERE city LIKE '%on';
#((We don't get Berlin anymore because it doesn't end in 'on'))

##Get all from customers where the city includes the letter 'n'
SELECT * FROM customers 
WHERE city LIKE '%n%';
#((that means that it could be in the beggining, the middle, or the end))

##Get all from customers where the city name DOES NOT include the letter 'n'
SELECT * FROM customers 
WHERE city NOT LIKE '%n%';

##Get all of the customers in mexico or argentina or brazil
SELECT * FROM customers 
WHERE country IN ('Mexico', 'Argentina', 'Brazil');
#((this can be very helpful in reducing the number of queries))



###FOREIGN KEYS ALLOWS US TO IDENTIFY RECORDS THAT OTHER RECORDS DEPEND ON FOR COMPLETION. IT PREVENTS YOU FROM DELETING RECORD ACCIDENTALLY AND CREATING CURRUPTED DATA.



###THE JOINS SECTION!!!
##FULL EXPLANATION WITH PICTURES
#https://www.codeproject.com/Articles/33052/Visual-Representation-of-SQL-Joins

#types: INNER, LEFT, RIGHT, FULL

#Joins are done with data that would mean nothing on it's own, but would make other documents unnecessarily long

##INNER JOIN:
SELECT customers.ContactName, customers.Address, orders.OrderDate, customers.country
FROM customers
INNER JOIN orders
ON customers.CustomerID  = orders.CustomerID
ORDER BY customers.ContactName
#This query will return all of the records in the left table (table A) that have a matching record in the right table (table B)

##LEFT JOIN:
SELECT customers.ContactName, customers.Address, orders.OrderDate, customers.country
FROM customers
LEFT JOIN orders
ON customers.CustomerID  = orders.CustomerID
ORDER BY customers.ContactName
#This query will return all of the records in the left table (table A) regardless if any of those records have a match in the right table (table B). It will also return any matching records from the right table.

##RIGHT JOIN
SELECT orders.OrderDate, customers.ContactName, customers.Address
FROM orders
RIGHT JOIN customers
ON orders.CustomerID = customers.CustomerID
ORDER BY orders.OrderDate
#This query will return all of the records in the right table (table B) regardless if any of those records have a match in the left table (table A). It will also return any matching records from the left table.
SELECT orders.OrderID, customers.ContactName, customers.City, products.productname
FROM orders
  INNER JOIN products
    ON orderdetails.productid = products.productid
  INNER JOIN orderdetails
    ON orders.orderid = orderdetails.orderid
  INNER JOIN customers
    ON orders.CustomerID = customers.CustomerID
ORDER BY orders.orderid



###ALIASES

##Simple aliases
SELECT customers.ContactName AS 'Name', customers.Address AS 'Addr.'
FROM customers

##Combined aliases
SELECT customers.ContactName, CONCAT(customers.Address, ' ', customers.city, ' ', customers.state) AS 'Full Address'
FROM customers

##Table aliases
SELECT o.orderid, o.OrderDate, c.ContactName, c.city
FROM customers AS c, orders AS o


###AGGREGATE FUNCTIONS

##Average
SELECT AVG(price) AS 'Average Price' FROM products

##Count
SELECT COUNT(productname) AS 'Product Count' FROM products

##maximum
SELECT products.productname AS 'Most Expensive Product', MAX(price) AS 'Highest Price' FROM products

##Minimum
SELECT products.productname AS 'Cheapest Product', MIN(price) AS 'Lowest Price' FROM products

##Sum
##Group BY
SELECT orders.OrderID, customers.ContactName, SUM(products.price) AS 'Order Total'
FROM orders
  INNER JOIN products
    ON orderdetails.productid = products.productid
  INNER JOIN orderdetails
    ON orders.orderid = orderdetails.orderid
  INNER JOIN customers
    ON orders.CustomerID = customers.CustomerID
WHERE Customers.CustomerID = 2
GROUP BY orders.OrderID
ORDER BY orders.orderid
#The group by in this query is extremely important, otherwise the sum off all orders is calculated instead

##Having
SELECT City, COUNT(City) AS 'Number of Customers'
FROM customers
GROUP BY City
HAVING COUNT(City) > 2
#The GROUP BY is mandatory when using HAVING

