import axios from 'axios';

const API_URL = "https://finanzas-backend-99iv.onrender.com";

export const addIngreso = (nuevoIngreso) => {
  return axios.post(`${API_URL}/ingresos`, nuevoIngreso);
};

export const getIngresos = () => {
  return axios.get(`${API_URL}/ingresos`);
};
