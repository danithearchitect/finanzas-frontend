import React, { useState, useEffect } from 'react';
import AgregarIngreso from './AgregarIngreso';
import { getIngresos } from './api'; // 👈 Importamos getIngresos

function App() {
  const [ingresos, setIngresos] = useState([]);

  // Función para cargar ingresos desde el backend
  const cargarIngresos = async () => {
    try {
      const response = await getIngresos();
      setIngresos(response.data);
    } catch (error) {
      console.error('Error al cargar ingresos:', error);
    }
  };

  // Al montar el componente, cargamos los ingresos
  useEffect(() => {
    cargarIngresos();
  }, []);

  return (
    <div className="App">
      <h1>Gestión de Finanzas Personales</h1>
      {/* Pasamos la función cargarIngresos como prop */}
      <AgregarIngreso onIngresoAgregado={cargarIngresos} />
      
      <h2>Ingresos</h2>
      <ul>
        {ingresos.map((ingreso) => (
          <li key={ingreso.id}>
            {new Date(ingreso.fecha).toLocaleDateString()} - {ingreso.monto} € - {ingreso.categoria}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;


