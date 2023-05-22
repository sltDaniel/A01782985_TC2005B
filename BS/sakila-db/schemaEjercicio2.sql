CREATE DATABASE Ejercicio2;

-- Table structure for table `País`
--

CREATE TABLE Pais (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50),
    num_participantes INT,
    num_medallas INT
);

CREATE TABLE Deportista (
    matricula INT PRIMARY KEY,
    nombre VARCHAR(50),
    apellido VARCHAR(50),
    sexo CHAR(1),
    pais_id INT,
    FOREIGN KEY (pais_id) REFERENCES PAIS(id)
);

CREATE TABLE Disciplina (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50),
    disciplina VARCHAR(50)
);

CREATE TABLE Prueba (
    id INT AUTO_INCREMENT PRIMARY KEY,
    disciplina_id INT,
    fecha DATE,
    lugar VARCHAR(100),
    numDeportistasIns INT,
    naturaleza VARCHAR(50),
    FOREIGN KEY (disciplina_id) REFERENCES Disciplina(id)
);

CREATE TABLE Clasificacion (
    deportista_id INT,
    prueba_id INT,
    rango INT,
    PRIMARY KEY (deportista_id, prueba_id),
    FOREIGN KEY (deportista_id) REFERENCES Deportista(matricula),
    FOREIGN KEY (prueba_id) REFERENCES Prueba(id)
);

CREATE TABLE Resultado (
    disciplina_id INT,
    oro_deportista_id INT,
    plata_deportista_id INT,
    bronce_deportista_id INT,
    FOREIGN KEY (disciplina_id) REFERENCES Disciplina(id),
    FOREIGN KEY (oro_deportista_id) REFERENCES Deportista(matricula),
    FOREIGN KEY (plata_deportista_id) REFERENCES Deportista(matricula),
    FOREIGN KEY (bronce_deportista_id) REFERENCES Deportista(matricula)
);

