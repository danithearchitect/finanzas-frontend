import React, { useState, useEffect } from 'react';
import axios from 'axios';

const IngresosLista = () => {
  const [ingresos, setIngresos] = useState([]);

  useEffect(() => {
    const obtenerIngresos = async () => {
      try {
        const response = await axios.get('http://localhost:3001/ingresos');
        setIngresos(response.data);
      } catch (error) {
        console.error('Error al obtener los ingresos:', error);
      }
    };

    obtenerIngresos();
  }, []);

  return (
    <div>
      <h2>Ingresos Registrados</h2>
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Monto</th>
            <th>Categoría</th>
          </tr>
        </thead>
        <tbody>
          {ingresos.map((ingreso) => (
            <tr key={ingreso.id}>
              <td>{new Date(ingreso.fecha).toLocaleDateString()}</td>
              <td>{ingreso.monto}</td>
              <td>{ingreso.categoria}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IngresosLista;
