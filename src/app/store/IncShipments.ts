import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Question = "Yes" | "No" ; // Adjust as necessary


interface setIncShipments {
  text2: string;
  bool2: Question;
  setName2: (name: string) => void;
  setBool2: (shift: Question) => void;
}

// Crear el store con persistencia en localStorage
export const useIncShipments = create<setIncShipments>()(
  persist(
    (set) => ({
      text2: '',
      bool2: "No", // Valor por defecto
      setName2: (text2: string) => set({ text2 }),
      setBool2: (bool2: Question) => set({ bool2 }),
    }),
    {
      name: 'incShip-storage', // Nombre de la clave en localStorage
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
