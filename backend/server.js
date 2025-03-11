import express from 'express';
import cors from 'cors';
import db from './db.js'; // Importer la connexion MySQL

const app = express();
app.use(cors());
app.use(express.json()); // Permet de lire le JSON des requêtes

// Route pour créer un examen
app.post('/api/create-exam', (req, res) => {
    const { titre, instruction,  startDate, duration, fichierSujet, idEnseignant, idMatiere } = req.body;

    const sql = `INSERT INTO examen (titre, instruction, dateDebut, duree, fichierSujet, idEnseignant, idMatiere) 
             VALUES (?, ?, ?, ?, ?, ?, ?)`;

    const values = [titre, instruction, startDate, duration, fichierSujet, idEnseignant, idMatiere];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('❌ Erreur lors de l\'ajout de l\'examen :', err);
            return res.status(500).json({ message: 'Erreur lors de l\'ajout de l\'examen' });
        }
        res.status(200).json({ message: 'Examen ajouté avec succès' });
    });
});

// Démarrer le serveur
app.listen(5000, () => {
    console.log('🚀 Serveur backend démarré sur http://localhost:5000');
});
