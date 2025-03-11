import React from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../components/Sidebar';

const CreateExam = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:5000/api/create-exam', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.success) {
        alert('Examen créé avec succès');
      } else {
        alert(`Erreur: ${result.message}`);
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'examen', error);
      alert('Erreur de serveur. Veuillez réessayer.');
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar isProfessor={true} />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-white mb-6">
          Créer un Examen
        </h1>
        <div className="bg-white dark:bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="title">
                Titre
              </label>
              <input
                className="input-field"
                type="text"
                id="titre"
                {...register('titre', { required: 'Le titre est obligatoire' })}
              />
              {errors.title && <p className="text-red-500 text-xs italic">{errors.title.message}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="instructions">
                Instructions
              </label>
              <textarea
                className="input-field"
                id="instruction"
                {...register('instruction', { required: 'Les instructions sont obligatoires' })}
              />
              {errors.instructions && <p className="text-red-500 text-xs italic">{errors.instructions.message}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="startDate">
                Date de début
              </label>
              <input
                className="input-field"
                type="datetime-local"
                id="startDate"
                {...register('startDate', { required: 'La date de début est obligatoire' })}
              />
              {errors.startDate && <p className="text-red-500 text-xs italic">{errors.startDate.message}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="duration">
                Durée (minutes)
              </label>
              <input
                className="input-field"
                type="number"
                id="duration"
                {...register('duration', { required: 'La durée est obligatoire', valueAsNumber: true })}
              />
              {errors.duration && <p className="text-red-500 text-xs italic">{errors.duration.message}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="assignmentFile">
                Fichier d\'assignation (optionnel)
              </label>
              <input
                className="input-field"
                type="file"
                id="assignmentFile"
                {...register('assignmentFile')}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="teacherId">
                Enseignant
              </label>
              <input
                className="input-field"
                type="number"
                id="teacherId"
                {...register('teacherId', { required: 'L\'enseignant est obligatoire' })}
              />
              {errors.teacherId && <p className="text-red-500 text-xs italic">{errors.teacherId.message}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="subjectId">
                Matière
              </label>
              <input
                className="input-field"
                type="number"
                id="subjectId"
                {...register('subjectId', { required: 'La matière est obligatoire' })}
              />
              {errors.subjectId && <p className="text-red-500 text-xs italic">{errors.subjectId.message}</p>}
            </div>

            <div className="flex items-center justify-between">
              <button className="btn-primary" type="submit">
                Publier l'examen
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateExam;
