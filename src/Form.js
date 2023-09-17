// src/components/Form.js
import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
  // Definición de estados para el formulario
  const [name, setName] = useState(''); // Estado para el nombre
  const [description, setDescription] = useState(''); // Estado para la descripción

  // Función que se ejecuta cuando se envía el formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue al enviar el formulario
    onSubmit(name, description); // Llama a la función onSubmit con el nombre y la descripción ingresados
    setName(''); // Restablece el campo de nombre a un valor vacío
    setDescription(''); // Restablece el campo de descripción a un valor vacío
  };

  return (
    <div>
      <h2>Agregar Comida</h2>
      <form onSubmit={handleSubmit}> {/* Define una función para manejar la acción de enviar el formulario */}
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)} // Actualiza el estado del nombre cuando cambia el valor del campo de entrada
        />
        <br></br>
        <br></br>
        <div className="line-break"  /> {/* Agrega un salto de línea */}
        <input
          type="text"
          placeholder="Descripción" // Campo de entrada para la descripción
          value={description}
          onChange={(e) => setDescription(e.target.value)} // Actualiza el estado de la descripción cuando cambia el valor del campo de entrada
        />
        <button type="submit">Agregar</button> {/* Botón para enviar el formulario */}
      </form>
      <br></br>
    </div>
  );
};

export default Form;
