import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Question = "Yes" | "No" ; // Adjust as necessary


interface setIncInspection {
  text4: string;
  bool4: Question;
  setName4: (name: string) => void;
  setBool4: (shift: Question) => void;
}

// Crear el store con persistencia en localStorage
export const useShipWithCourier = create<setIncInspection>()(
  persist(
    (set) => ({
      text4: '',
      bool4: "No", // Valor por defecto
      setName4: (text4: string) => set({ text4 }),
      setBool4: (bool4: Question) => set({ bool4 }),
    }),
    {
      name: 'ShipC-storage', // Nombre de la clave en localStorage
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
