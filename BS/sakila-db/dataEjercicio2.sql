USE Ejercicio2

-- llenar Pais
INSERT INTO Pais (nombre, num_participantes, num_medallas)
VALUES
  ('Argentina', 82, 1),
  ('Brasil', 79, 3),
  ('Mexico', 53, 8),
  ('USA', 33, 16),
  ('África', 44, 14),
  ('Jamaica', 42, 16),
  ('España', 148, 14),
  ('Italia', 56, 9),
  ('Nueva Zelanda', 75, 10),
  ('Australia', 47, 13);

INSERT INTO Deportista (matricula, nombre, apellido, sexo, pais_id)
VALUES
/*
1- USA
2-Brasil
3- Argentina
4- Mexico
5- Nueva Zelanda
6- Africa
7- Jamaica
8- España
9- Italia
10- Australia
*/
  ('1', 'Anthony', 'Chandler', 'M', 1),
  ('2', 'Diane', 'Phillips', 'F', 2),
  ('3', 'Tomás', 'De Paul', 'M', 3),
  ('4', 'Francisco', 'Villa', 'M', 4),
  ('5', 'Virginia', 'Brown', 'F', 5),
  ('6', 'Antonia', 'Romeu', 'F', 6),
  ('7', 'Juan', 'Bolt', 'M', 7),
  ('8', 'Pedro', 'Torres', 'M', 8),
  ('9', 'Fiammetta', 'Liverotti', 'F', 9),
  ('10', 'Jacqueline', 'Ellis', 'F', 10);

INSERT INTO Disciplina (nombre, disciplina)
VALUES ('400M nado libre', 'Natación'),
       ('Tercer y cuarto lugar', 'Fútbol'),
       ('Tercer y cuarto lugar', 'Fútbol'),
       ('100M planos', 'Atletismo'),
       ('100M planos', 'Atletismo'),
       ('Halterofilia', 'Levantamiento de pesas'),
       ('Halterofilia', 'Levantamiento de pesas'),
       ('400M mariposa', 'Natación'),
       ('400M mariposa', 'Natación'),
       ('Fase de grupos', 'Vólibol');
  
INSERT INTO Prueba (disciplina_id, fecha, lugar, numDeportistasIns, naturaleza)
VALUES (1, '2023-06-01', 'Piscina Olímpica', 8, 'Eliminatoria'),
       (3, '2023-06-02', 'Estadio Fútbol', 22, 'Final'),
       (3, '2023-06-02', 'Estadio Fútbol', 22, 'Final'),
       (5, '2023-06-03', 'Pista Olímpica', 4, 'Eliminatoria'),
       (5, '2023-06-03', 'Pista Olímpica', 5, 'Eliminatoria'),
       (6, '2023-06-01', 'Gimnasio', 2, 'Final'),
       (6, '2023-06-01', 'Gimnasio', 5, 'Final'),
       (1, '2023-06-04', 'Piscina Olímpica', 2, 'Final'),
       (1, '2023-06-04', 'Piscina Olímpica', 5, 'Final'),
       (7, '2023-06-03', 'Cancha Vólibol', 12, 'Eliminatoria');
       
INSERT INTO Clasificacion (deportista_id, prueba_id, rango)
VALUES (1, 1, 1),
       (2, 3, 1),
       (3, 5, 3),
       (4, 3, 1),
       (5, 7, 2),
       (6, 1, 2),
       (7, 6, 2),
       (8, 5, 2),
       (9, 2, 2),
       (10, 3, 2);
       
INSERT INTO RESULTADO (disciplina_id, oro_deportista_id, plata_deportista_id, bronce_deportista_id)
VALUES (1, 1, 2, 3),
       (2, 2, 1, 3),
       (5, 1, 2, 3),
       (3, 3, 2, 1),
       (4, 1, 3, 2),
       (3, 1, 2, 3),
       (7, 2, 1, 3),
       (3, 1, 3, 2),
       (6, 3, 1, 2),
       (2, 1, 2, 3);
