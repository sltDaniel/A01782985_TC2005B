USE sakila; # seleccionar esquema
SELECT DATABASE(); # saber que si seleccione bien
SHOW TABLES; # ver todas las tablas asociadas al esquema
SHOW COLUMNS FROM actor; # regresa una tabala, muestra que tiene cada una de las tablas
SHOW COLUMNS FROM inventory;
DESC fila; # hace lo mismo que el comando de arriba, solo que más rápido. Para flojos
# usas DESC es mejor
DESC city;
SELECT * FROM language; # selecciona todas las columnas y filas
SELECT * FROM city;
SELECT city, city FROM city;
SELECT sakila.city.city, sakila.city.city FROM sakila.city;
SELECT * FROM itc501.prueba1; # * seleccionar todas las columnas 
SELECT * FROM sakila.language WHERE name = 'English';
SELECT first_name FROM sakila.actor WHERE actor_id = '3';
SELECT sakila.city.city FROM city WHERE sakila.city.country_id = '15';

SELECT city FROM sakila.city WHERE city_id<5; 
SELECT language_id, name FROM sakila.language WHERE language_id <> 2; # lenguages que no sean 2 (!=, <>, NOT)
SELECT language_id, name FROM sakila.language WHERE NOT language_id = 2;

SELECT first_name, last_name FROM sakila.actor WHERE first_name < 'B' AND last_name < 'B';
SELECT title FROM film WHERE title LIKE '%family%';
