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
// ... existing code ...

// Route pour l'authentification
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    
    // Déterminer si c'est un enseignant ou un étudiant
    const isEnseignant = email.includes('@enseignant');
    const table = isEnseignant ? 'enseignant' : 'etudiant';
    
    const sql = `SELECT * FROM ${table} WHERE email = ? AND motDePasse = ?`;
    
    db.query(sql, [email, password], (err, results) => {
        if (err) {
            console.error('❌ Erreur lors de l\'authentification :', err);
            return res.status(500).json({ message: 'Erreur lors de l\'authentification' });
        }
        
        if (results.length > 0) {
            const user = results[0];
            // Ne pas envoyer le mot de passe au client
            delete user.motDePasse;
            res.status(200).json({
                user: {
                    id: user.id,
                    email: user.email,
                    role: isEnseignant ? 'professor' : 'student',
                    nom: user.nom,
                    prenom: user.prenom
                }
            });
        } else {
            res.status(401).json({ message: 'Email ou mot de passe incorrect' });
        }
    });
});

// ... existing code ...
// Démarrer le serveur
app.listen(5000, () => {
    console.log('🚀 Serveur backend démarré sur http://localhost:5000');
});
