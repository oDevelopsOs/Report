import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Question = "Yes" | "No" ; // Adjust as necessary


interface setEmails {
  text: string;
  bool: Question;
  setName: (name: string) => void;
  setBool: (shift: Question) => void;
}

// Crear el store con persistencia en localStorage
export const useMail = create<setEmails>()(
  persist(
    (set) => ({
      text: '',
      bool: "No", // Valor por defecto
      setName: (text: string) => set({ text }),
      setBool: (bool: Question) => set({ bool }),
    }),
    {
      name: 'email-storage', // Nombre de la clave en localStorage
      storage: {
        getItem: (name: string) => {
          const item = localStorage.getItem(name);
          return item ? JSON.parse(item) : null; // Deserializa el item
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
