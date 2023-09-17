import './App.css';
// src/App.js
import React, { useState } from 'react';
import List from './List';
import Form from './Form';

function App() {
  const [data, setData] = useState([]);

  const handleAdd = (name, description) => {
    const newItem = {
      id: Date.now(),
      name: name,
      description: description, // Agrega la descripción al nuevo elemento
    };
    setData([...data, newItem]); // Agrega un nuevo elemento al estado de datos
  };

  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id); // Filtra elementos para eliminar el elemento con el ID dado
    setData(updatedData); // Actualiza el estado de datos con la nueva lista
  };

  const handleUpdate = (id, name, description) => {
    const updatedData = data.map((item) => {
      if (item.id === id) {
        return { ...item, name: name, description: description }; // Actualiza el nombre y la descripción del elemento con el ID dado
      }
      return item;
    });
    setData(updatedData); // Actualiza el estado de datos con la nueva lista que incluye el elemento actualizado
  };

  return (
    <div className="container">
      <h1>Antojitos Mexicanos</h1>
      <Form onSubmit={handleAdd} /> {/* Formulario para agregar nuevos elementos */}
      <List data={data} onDelete={handleDelete} onUpdate={handleUpdate} /> {/* Lista de elementos con capacidad de edición y eliminación */}
    </div>
  );
}

export default App;
