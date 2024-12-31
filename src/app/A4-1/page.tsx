// src/app/A4-1/page.tsx
"use client"
import React from 'react';
import ClientPage from './ClientPage';
import { formatDate } from '../utils/date';


export default function Page() {
  // Calcular fecha en el servidor
  const serverDate = formatDate(new Date());

  return (
    // Pasar la fecha calculada al Client Component como props
      <ClientPage serverDate={serverDate} />
      
  );
}
