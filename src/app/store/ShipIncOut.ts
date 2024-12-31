import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Question = "Yes" | "No" ; // Adjust as necessary


interface setSingOutIn {
  text1: string;
  bool1: Question;
  setName1: (name: string) => void;
  setBool1: (shift: Question) => void;
}

// Crear el store con persistencia en localStorage
export const useShipIncOut = create<setSingOutIn>()(
  persist(
    (set) => ({
      text1: '',
      bool1: "No", // Valor por defecto
      setName1: (text1: string) => set({ text1 }),
      setBool1: (bool1: Question) => set({ bool1 }),
    }),
    {
      name: 'ShipIncOut-storage', // Nombre de la clave en localStorage
      storage: {
        getItem: (name: string) => {
          const item1 = localStorage.getItem(name);
          return item1 ? JSON.parse(item1) : null; // Deserializa el item
        },
        setItem: (name: string, value: any) => {
          localStorage.setItem(name, JSON.stringify(value)); // Serializa el valor
        },
        removeItem: (name: string) => {
          localStorage.removeItem(name); // Elimina el item
        },
      },
    }
  )
);
