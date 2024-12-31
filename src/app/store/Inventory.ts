import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Question = "Yes" | "No" ; // Adjust as necessary


interface setIncInspection {
  text6: string;
  bool6: Question;
  setName6: (name: string) => void;
  setBool6: (shift: Question) => void;
}

// Crear el store con persistencia en localStorage
export const useInventory = create<setIncInspection>()(
  persist(
    (set) => ({
      text6: '',
      bool6: "No", // Valor por defecto
      setName6: (text6: string) => set({ text6 }),
      setBool6: (bool6: Question) => set({ bool6 }),
    }),
    {
      name: 'inventory-storage', // Nombre de la clave en localStorage
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
