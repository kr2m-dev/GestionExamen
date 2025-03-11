import React from 'react';

const ExamList = () => {
  // Exemple de données d'examens (à remplacer par vos données réelles)
  const examens = [
    { id: 1, titre: "Mathématiques", date: "2024-04-01", duree: "2h" },
    { id: 2, titre: "Français", date: "2024-04-03", duree: "3h" },
    { id: 3, titre: "Sciences", date: "2024-04-05", duree: "2h30" },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Liste des Examens</h1>
      
      <div className="grid gap-4">
        {examens.map((examen) => (
          <div 
            key={examen.id} 
            className="border p-4 rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-semibold">{examen.titre}</h2>
            <div className="mt-2 text-gray-600">
              <p>Date: {examen.date}</p>
              <p>Durée: {examen.duree}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExamList;