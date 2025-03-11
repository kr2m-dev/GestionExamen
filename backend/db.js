// 📂 backend/db.js
import mysql from 'mysql2';

// Création de la connexion
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'GestionExamen'
});

// Tester la connexion
db.connect((err) => {
    if (err) {
        console.error('❌ Erreur de connexion à MySQL :', err.message);
    } else {
        console.log('✅ Connecté à la base de données MySQL');
    }
});

// Exportation ES Module
export default db; // <-- Utilisez "export default"