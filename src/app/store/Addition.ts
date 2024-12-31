import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Urgence = "Urgent" | "Meddium" | "Low" ; // Adjust as necessary
type Type = "Error" | "Internal" | "External" | "Other"; // Adjust as necessary


interface setAddition {
  text7: string;
  bool7: Type;
  urgence : Urgence
  setName7: (name: string) => void;
  setBool7: (shift: Type) => void;
  setBol7: (urgence: Urgence) => void;
}


// Crear el store con persistencia en localStorage
export const useAddition = create<setAddition>()(
  persist(
    (set) => ({
      text7: "",
      bool7: "Error", // Valor por defecto
      urgence: "Meddium",
      setName7: (text7: string) => set({ text7 }),
      setBool7: (bool7: Type) => set({ bool7 }),
      setBol7: (urgence: Urgence) => set({ urgence }),
    }),
    {
      name: 'addition-storage', // Nombre de la clave en localStorage
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