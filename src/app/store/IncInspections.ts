import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Question = "Yes" | "No" ; // Adjust as necessary


interface setIncInspection {
  text3: string;
  bool3: Question;
  setName3: (name: string) => void;
  setBool3: (shift: Question) => void;
}

// Crear el store con persistencia en localStorage
export const useIncInspections = create<setIncInspection>()(
  persist(
    (set) => ({
      text3: '',
      bool3: "No", // Valor por defecto
      setName3: (text3: string) => set({ text3 }),
      setBool3: (bool3: Question) => set({ bool3 }),
    }),
    {
      name: 'incInspection-storage', // Nombre de la clave en localStorage
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
