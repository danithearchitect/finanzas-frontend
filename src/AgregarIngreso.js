import React, { useState } from 'react';
import { addIngreso } from './api'; // 👈 Usamos ahora la función de api.js

const AgregarIngreso = ({ onIngresoAgregado }) => {
  const [fecha, setFecha] = useState('');
  const [monto, setMonto] = useState('');
  const [categoria, setCategoria] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addIngreso({
        fecha,
        monto,
        categoria,
      });

      setMensaje('Ingreso agregado con éxito');
      setFecha('');
      setMonto('');
      setCategoria('');
	  if (onIngresoAgregado) {
      onIngresoAgregado();
      }
    } catch (error) {
      console.error('Error al agregar el ingreso:', error);
      setMensaje('Hubo un error al agregar el ingreso');
    }
  };

  return (
    <div>
      <h2>Agregar Ingreso</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Fecha:</label>
          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Monto:</label>
          <input
            type="number"
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Categoría:</label>
          <input
            type="text"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            required
          />
        </div>
        <button type="submit">Agregar</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default AgregarIngreso;

