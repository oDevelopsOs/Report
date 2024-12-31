import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Question = "Yes" | "No" ; // Adjust as necessary


interface setIncInspection {
  text5: string;
  bool5: Question;
  setName5: (name: string) => void;
  setBool5: (shift: Question) => void;
}

// Crear el store con persistencia en localStorage
export const useCleanT = create<setIncInspection>()(
  persist(
    (set) => ({
      text5: '',
      bool5: "No", // Valor por defecto
      setName5: (text5: string) => set({ text5 }),
      setBool5: (bool5: Question) => set({ bool5 }),
    }),
    {
      name: 'clean-storage', // Nombre de la clave en localStorage
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
