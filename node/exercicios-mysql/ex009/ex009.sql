                        -- TESTING COMMANDS SQL

-- Entrando Mysql através do prompt
mysql -h localhost -u root -p 

-- Mostrando todos bancos de dados
SHOW DATABASES;

-- Criando novos bancos de dados
CREATE DATABASE (nameDB); -- nameDB = nome do seu novo banco de dados

-- Entrando no banco de dados
USE (nameDB);

--  Criando tabelas
 CREATE TABLE users( -- nome da tabela criada
    username VARCHAR(40), -- nome da coluna / tipo / max caracteres
    email VARCHAR(80),
    age INT(5)
);

-- Mostrando todas tabelas em um banco de dados específico
SHOW TABLES;

-- Mostrar todas colunas em uma tabela no seu banco de dados específico
DESCRIBE (nameTable);

-- Inserir registros dentro da tabela
INSERT INTO users(username, email, age) VALUES(
    'Marian',
    'marian@gmail.com',
    14
);

-- Mostrar todos dados numa tabela específica
SELECT * FROM passwords;

-- Mostrar os dados que cumpram uma condição específica
SELECT * FROM passwords WHERE condition;

-- Delete todos os dados dentro da tabela (CUIDADO!)
DELETE FROM nameTable;

-- Delete os dados que cumprar a condição específica
DELETE FROM nameTable WHERE username = 'Marian'; -- exemplo

-- (CUIDADO!) Muda todos os registros para possuírem este mesmo email
UPDATE users SET email = 'teste@hotmail.com';

-- Muda um registro por outro especificado em SET
UPDATE users SET email = 'teste@hotmail.com' WHERE email = 'marian@gmail.com'

-- Remove permanentemente toda a tabela e conteúdo incluso nela
-- (CUIDADO!)
DROP TABLE nameTable;