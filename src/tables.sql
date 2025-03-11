create user if not exists "admin"@"localhost" identified by "passer";
create database if not exists GestionExamen;
grant all privileges on GestionExamen.* to "admin"@"localhost";
use GestionExamen;
-- Table Matière
CREATE TABLE Matiere (
    idMatiere INT PRIMARY KEY AUTO_INCREMENT,
    nomMatiere VARCHAR(100) NOT NULL,
    description TEXT
);

-- Table Enseignant
CREATE TABLE Enseignant (
    idEnseignant INT PRIMARY KEY AUTO_INCREMENT,
    prenom VARCHAR(50) NOT NULL,
    nom VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    motDePasse VARCHAR(255) NOT NULL,
    idMatiere INT,
    FOREIGN KEY (idMatiere) REFERENCES Mastere(idMatiere)
);

-- Table Étudiant
CREATE TABLE Etudiant (
    idEtudiant INT PRIMARY KEY AUTO_INCREMENT,
    prenom VARCHAR(50) NOT NULL,
    nom VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    motDePasse VARCHAR(255) NOT NULL,
    classe VARCHAR(50)
);

-- Table Examen
CREATE TABLE Examen (
    idExamen INT PRIMARY KEY AUTO_INCREMENT,
    titre VARCHAR(200) NOT NULL,
    type VARCHAR(50),
    duree INT,
    dateCreation DATE NOT NULL,
    dateLimite DATE NOT NULL,
    fichierSujet VARCHAR(255), -- ou BLOB
    idEnseignant INT NOT NULL,
    idMatiere INT NOT NULL,
    FOREIGN KEY (idEnseignant) REFERENCES Enseignant(idEnseignant),
    FOREIGN KEY (idMatiere) REFERENCES Mastere(idMatiere)
);

-- Table Correction
CREATE TABLE Correction (
    idCorrection INT PRIMARY KEY AUTO_INCREMENT,
    corrigeType TEXT NOT NULL,
    idExamen INT NOT NULL,
    FOREIGN KEY (idExamen) REFERENCES Examen(idExamen)
);

-- Table Copie
CREATE TABLE Copie (
    idCopie INT PRIMARY KEY AUTO_INCREMENT,
    fichierPDF VARCHAR(255) NOT NULL, -- ou BLOB
    dateSoumission DATETIME NOT NULL,
    noteIA FLOAT,
    noteFinale FLOAT,
    estPlagiat BOOLEAN DEFAULT FALSE,
    idEtudiant INT NOT NULL,
    idExamen INT NOT NULL,
    FOREIGN KEY (idEtudiant) REFERENCES Etudiant(idEtudiant),
    FOREIGN KEY (idExamen) REFERENCES Examen(idExamen)
);

-- Table PlagiatReport
CREATE TABLE PlagiatReport (
    idRapport INT PRIMARY KEY AUTO_INCREMENT,
    pourcentageSimilarite FLOAT NOT NULL,
    rapportDetaille TEXT NOT NULL,
    idCopie INT NOT NULL,
    FOREIGN KEY (idCopie) REFERENCES Copie(idCopie)
);

-- Table ChatbotInteraction
CREATE TABLE ChatbotInteraction (
    idInteraction INT PRIMARY KEY AUTO_INCREMENT,
    question TEXT NOT NULL,
    reponse TEXT,
    dateInteraction DATETIME NOT NULL,
    idEtudiant INT NOT NULL,
    FOREIGN KEY (idEtudiant) REFERENCES Etudiant(idEtudiant)
);

-- Table Notification
CREATE TABLE Notification (
    idNotification INT PRIMARY KEY AUTO_INCREMENT,
    contenu VARCHAR(255) NOT NULL,
    dateEnvoi DATETIME NOT NULL,
    idDestinataire INT NOT NULL,
    typeDestinataire ENUM('Enseignant', 'Etudiant') NOT NULL
);