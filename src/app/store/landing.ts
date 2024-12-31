import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export enum Shift {
  Morning = 'Morning',
  Afternoon = 'Afternoon',
  Evening = 'Evening',
}

interface LandingState {
  name: string;
  shift: Shift;
  setName: (name: string) => void;
  setShift: (shift: Shift) => void;
}

// Crear el store con persistencia en localStorage
export const useLanding = create<LandingState>()(
  persist(
    (set) => ({
      name: '',
      shift: Shift.Morning, // Valor por defecto
      setName: (name: string) => set({ name }),
      setShift: (shift: Shift) => set({ shift }),
    }),
    {
      name: 'landing-storage', // Nombre de la clave en localStorage
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
