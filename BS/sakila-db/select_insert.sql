SELECT sakila.film_list.title      /*columna*/
FROM sakila.film_list              /*tabal*/
WHERE sakila.film_list.category     /*fila*/
LIKE 'Sci-Fi' AND sakila.film_list.rating LIKE 'PG';

SELECT language_id, name FROM sakila.language
WHERE NOT (name = 'Italian');

SELECT name FROM sakila.customer_list
ORDER BY name ASC LIMIT 10;  # de forma ascendente

SELECT address FROM sakila.address
ORDER BY last_update DESC LIMIT 20; # de forma descendiente

SELECT address, district FROM sakila.address
ORDER BY district ASC, address DESC LIMIT 10;

SELECT name FROM sakila.customer_list LIMIT 5, 10; #empieza desde la fila 5 y 5 consecutivas

SELECT id, name FROM sakila.customer_list
ORDER BY id ASC LIMIT 10 OFFSET 5;  #vieja escuela pero más eficiente

DESC sakila.language;
INSERT INTO sakil.language
VALUES (NULL, 'Portuguese', NOW());
SELECT * FROM sakila.language;
INSERT INTO sakila.language
VALUES (15, 'Russian', '2020-09-26 10:35:00');

SELECT MAX(language_id) FROM sakila.language; #MAX  te da el elemento mayor a la columna que se le aplique
INSERT INTO sakila.language
VALUES (20, 'super Russian', '2020-09-26 10:35:00');

SELECT * FROM sakila.language;

INSERT sakila.language VALUES(NULL, 'Spanish', NOW()),
(NULL, 'Hebrew', NOW());

INSERT INTO sakila.language (name, last_update)
VALUES ('hungarian', NOW());

SELECT country FROM sakila.country WHERE country_id=19;

INSERT INTO sakila.city (city, country_id) VALUES
('Sao Carlos', 19),
('Araraquara', 19),
('Ribeirao', 19);

INSERT INTO sakila.language SET name="German", last_update=NOW();

SELECT DISTINCT amount FROM sakila.payment;
SELECT MAX(amount) FROM sakila.payment;
SELECT MAX(amount) as 'VIP',
	MIN(amoutn) as 'Tranza', 
	AVG(amount) as 'Cualquier persona'
FROM  sakila.payment;

DESC sakila.city;
SELECT city, country_id FROM sakila.city
GROUP BY (country_id);




