-- 1: Apellidos y nombre de los participantes de nacionalidad mexicana.
SELECT nombre, apellido
FROM Deportista
WHERE pais_id = 4;

-- 2:Apellidos, nombre y puntos acumulados (medallas) de los participantes de USA.
SELECT d.apellido, d.nombre, pa.num_medallas
FROM Deportista d
JOIN Pais pa ON d.pais_id = pa.id
WHERE pa.nombre = 'USA';

-- 3:Apellidos y nombre de los participantes que se clasificaron en primer lugar en al menos una competencia.
SELECT d.apellido, d.nombre
FROM Deportista d
INNER JOIN Clasificacion c ON d.matricula = c.deportista_id
WHERE c.rango = 1;

-- 4: Nombre de las competencias en las que intervinieron los participantes mexicanos.
SELECT  pr.disciplina_id
FROM Prueba pr
JOIN Resultado r ON pr.id = r.disciplina_id
JOIN Deportista d ON r.disciplina_id = d.matricula
WHERE d.pais_id = 4;

-- 5:Apellidos y nombre de los participantes que nunca se clasificaron en primer lugar en alguna competencia.
SELECT d.apellido, d.nombre
FROM Deportista d
WHERE NOT EXISTS (
  SELECT *
  FROM Resultado r
  WHERE d.matricula = r.disciplina_id AND r.oro_deportista_id> 0
);
-- 6: Apellidos y nombre de los participantes siempre se clasificaron en alguna competencia.
SELECT d.apellido, d.nombre
FROM Deportista d
WHERE NOT EXISTS (
  SELECT *
  FROM Prueba pr 
  LEFT JOIN Resultado r ON pr.id = r.disciplina_id AND d.matricula = r.disciplina_id
  WHERE r.disciplina_id IS NULL
);

-- 7: Nombre de la competencia que aporta el máximo de puntos. Medallas oro 
SELECT disciplina_id
FROM Resultado
WHERE oro_deportista_id= (
  SELECT MAX(oro_deportista_id)
  FROM Resultado
);
-- 8: Países (nacionalidades) que participaron en todas las competencias.
SELECT pa.nombre
FROM Pais pa
WHERE NOT EXISTS (
    SELECT pr.disciplina_id
    FROM Prueba pr
    WHERE NOT EXISTS (
        SELECT d.matricula
        FROM Deportista d
        JOIN Clasificacion c ON d.matricula = c.deportista_id
        WHERE c.prueba_id = pr.disciplina_id AND d.pais_id = pa.nombre
    )
);

-- 9:Promedio medallas de plata
SELECT AVG(plata_deportista_id) AS promedio_plata
FROM Resultado;
 
-- 10:número de participantes por país
SELECT d.pais_id, di.nombre, COUNT(*) AS total_participantes
FROM Deportista d
JOIN Clasificacion c ON d.matricula = c.deportista_id
JOIN Disciplina di ON c.prueba_id = di.disciplina
GROUP BY d.pais_id, di.nombre;

-- 11: Porpongan una consulta que involucre tres tablas con las sentencias LEFT JOIN, ORDER BY, GROUP BY Y LIMIT
SELECT d.apellido, d.nombre, p.nombre, COUNT(c.deportista_id) AS total_clasificaciones
FROM Deportista d
LEFT JOIN Clasificacion c ON d.matricula = c.deportista_id
LEFT JOIN Pais p ON d.pais_id = p.nombre
GROUP BY d.apellido, d.nombre, p.nombre
ORDER BY total_clasificaciones DESC
LIMIT 6;

-- 12: Porpongan una consulta que involucre tres tablas con las sentencias INNER JOIN y LIKE
SELECT d.apellido, d.nombre, p.nombre
FROM Deportista d
INNER JOIN Clasificacion c ON d.matricula = c.deportista_id
INNER JOIN Disciplina di ON c.prueba_id = di.disciplina
INNER JOIN Pais p ON d.pais_id = p.nombre
WHERE di.nombre LIKE '%Halterofilia%';

