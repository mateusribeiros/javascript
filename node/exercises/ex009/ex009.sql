                        -- TESTING COMMANDS SQL

-- Into Mysql at the prompt
mysql -h localhost -u root -p 

-- Show all databases
SHOW DATABASES;

-- Create new databases
CREATE DATABASE (nameDB); -- nameDB = Name your new database

-- Log in database
USE (nameDB);

--  Creating tables
 CREATE TABLE users( -- created table name
    username VARCHAR(40), -- column name / type / max caracters
    email VARCHAR(80),
    age INT(5)
);

-- Show all tables in specific database
SHOW TABLES;

-- Shows all columns in a table of your specific database
DESCRIBE (nameTable);

-- Insert records into the table
INSERT INTO users(username, email, age) VALUES(
    'Marian',
    'marian@gmail.com',
    14
);

-- Shows all datas within the specified table
SELECT * FROM passwords;

-- Shows the data that meets the condition within the specified table
SELECT * FROM passwords WHERE condition;

-- Delete all content inside the table (BE CAREFUL)
DELETE FROM nameTable;

-- Delete a specific record
DELETE FROM nameTable WHERE username = 'Marian'; -- exemple

-- (BE CAREFUL WITH THIS) Because change all emails for this new email
UPDATE users SET email = 'teste@hotmail.com';

-- Change one record for another
UPDATE users SET email = 'teste@hotmail.com' WHERE email = 'marian@gmail.com'

-- Permanently remove a table and all its contents from the server
-- (BE CAREFUL)
DROP TABLE nameTable;