'use client';

import React from 'react';
import { useLanding } from '../store/landing';
import { useMail } from '../store/emails';
import { useShipIncOut } from '../store/ShipIncOut';
import { useIncShipments } from '../store/IncShipments';
import { useIncInspections } from '../store/IncInspections';
import { useShipWithCourier } from '../store/ShipWithCourier';
import { useCleanT } from '../store/CleanAndTidy';
import { useInventory } from '../store/Inventory';
import { useAddition } from '../store/Addition';
import {sendEmailWithAttachment} from '../utils/sendMail';
import Link from 'next/link';


interface ClientPageProps {
  serverDate: string; // Fecha pasada desde el servidor
}

export default function ClientPage({ serverDate }: ClientPageProps) {
  const name = useLanding((state) => state.name);
  const shift = useLanding((state) => state.shift);

  const bool = useMail((state) => state.bool);
  const text = useMail((state) => state.text);

  const bool1 = useShipIncOut((state) => state.bool1);
  const text1 = useShipIncOut((state) => state.text1);

  const bool2 = useIncShipments((state) => state.bool2);
  const text2 = useIncShipments((state) => state.text2);

  const bool3 = useIncInspections((state) => state.bool3);
  const text3 = useIncInspections((state) => state.text3);

  const bool4 = useShipWithCourier((state) => state.bool4);
  const text4 = useShipWithCourier((state) => state.text4);

  const bool5 = useCleanT((state) => state.bool5);
  const text5 = useCleanT((state) => state.text5);

  const bool6 = useInventory((state) => state.bool6);
  const text6 = useInventory((state) => state.text6);

  const bool7 = useAddition((state) => state.bool7);
  const text7 = useAddition((state) => state.text7);
  const urge = useAddition((state) => state.urgence);

  const setName = useLanding((state) => state.setName);
  const setText = useMail((state) => state.setName);
  const setText1 = useShipIncOut((state) => state.setName1);
  const setText2 = useIncShipments((state) => state.setName2);
  const setText3 = useIncInspections((state) => state.setName3);
  const setText4 = useShipWithCourier((state) => state.setName4);
  const setText5 = useCleanT((state) => state.setName5);
  const setText6 = useInventory((state) => state.setName6);
  const setText7 = useAddition((state) => state.setName7);
  const setText8 = useAddition((state) => state.setName7);

  

  // Pdf Magic
  const DownloadSend = async () => {
    const html2pdf = await require('html2pdf.js');
    const print = document.getElementById('print');
    if (!print) {
      console.error("El elemento con ID 'print' no se encontró.");
      return;
    }
  
    const options = {
      filename: 'example.pdf',
      image: { type: 'jpeg', quality: 0.8 }, // Reduce la calidad
      html2canvas: { scale: 1 }, // Reduce la escala
      jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' },
    };
  
    // Generar el PDF y enviarlo por correo
    html2pdf()
      .set(options)
      .from(print)
      .toPdf()
      .get('pdf')
      .then((pdf) => {
        const pdfBlob = pdf.output('blob'); // Obtén el archivo PDF como Blob
  
        // Convertir Blob a File
        const pdfFile = new File([pdfBlob], `${name}(${serverDate}).pdf`, { type: 'application/pdf' });
  
        // aslm.be.bru-stores@aslmx.com
        // Llamar a la función sendEmail con el File convertido
        sendEmailWithAttachment('Report of the day', `By ${name}`, 'aslm.be.bru-stores@aslmx.com', pdfFile);
      });
      
      setText('');
      setText1('');
      setText2('');
      setText3('');
      setText4('');
      setText5('');
      setText6('');
      setText7('');
      setText8('');
      
  };
  
  

  return (
    <section
    id='print'
      className="relative bg-white mx-auto select-none h-screen"
      style={{
        width: '794px',  // A4 width in px (210mm)
        // height: '1120px', // A4 height in px (297mm)
        padding: '20px', // Padding for aesthetics
      }}
    >
      <header className="flex flex-row justify-between pt-4">
        <h2 className="font-semibold text-lg">{name}</h2>

        <div className="flex flex-row items-center">
            <p className="font-semibold h-6 w-24 flex content-center items-center justify-center bg-[#FFD93D] rounded-lg border border-black mr-3">{shift}</p>
          <p className="font-semibold text-lg">{serverDate}</p>
        </div>
      </header>

      <section className="w-full flex flex-col pt-8">
        {/* Columna izquierda */}
        <div className="w-full">
          <div className="mb-10">
            <h3 className="text-lg inline">
              All emails processed and completed?
            </h3>
            <p className="h-6 w-12 border rounded-xl items-center justify-center ml-2 border-black inline-flex">
              {bool}
            </p>
            <p className="text-xs text-[#5d5d5d] ">{text}</p>
          </div>

          <div className="mb-10">
            <h3 className="text-lg inline">
              Urgent shipments incoming or outgoing?
            </h3>
            <p className="h-6 w-12 border rounded-xl items-center justify-center ml-2 border-black inline-flex">
              {bool1}
            </p>
            <p className="text-xs text-[#5d5d5d] ">{text1}</p>
          </div>

          <div className="mb-10">
            <h3 className="text-lg inline">
              Any incoming shipments that are yet not processed?
            </h3>
            <p className="h-6 w-12 border rounded-xl items-center justify-center ml-2 border-black inline-flex">
              {bool2 }
            </p>
            <p className="text-xs text-[#5d5d5d] ">{text2}</p>
          </div>

          <div className="mb-10">
            <h3 className="text-lg inline">
              Any incoming inspections that need to be done?
            </h3>
            <p className="h-6 w-12 border rounded-xl items-center justify-center ml-2 border-black inline-flex">
              {bool3 }
            </p>
            <p className="text-xs text-[#5d5d5d] ">{text3}</p>
          </div>
        </div>

        {/* Columna derecha */}
        <div className="w-full">
          <div className="mb-10">
            <h3 className="text-lg inline">
              Any special shipments with courier?
            </h3>
            <p className="h-6 w-12 border rounded-xl items-center justify-center ml-2 border-black inline-flex">
              {bool4 }
            </p>
            <p className="text-xs text-[#5d5d5d] ">{text4}</p>
          </div>

          <div className="mb-10">
            <h3 className="text-lg inline">Everything clean and tidy?</h3>
            <p className="h-6 w-12 border rounded-xl items-center justify-center ml-2 border-black inline-flex">
              {bool5 }
            </p>
            <p className="text-xs text-[#5d5d5d] ">{text5}</p>
          </div>

          <div className="mb-10">
            <h3 className="text-lg inline">
              Had the time to work on inventory?
            </h3>
            <p className="h-6 w-12 border rounded-xl items-center justify-center ml-2 border-black inline-flex">
              {bool6 }
            </p>
            <p className="text-xs text-[#5d5d5d] ">{text6}</p>
          </div>

          <div className="mb-10">
            <h3 className="text-lg inline">Addition</h3>
            <p className="h-fit w-fit px-1 border rounded-xl items-center justify-center ml-2 border-black inline-flex">
              {bool7}
            </p>

            {/* Urgency Badge */}
            <p
              className={`h-6 w-fit px-2 py-1 border rounded-xl items-center justify-center ml-2 inline-flex ${
                urge === 'Urgent'
                  ? 'bg-[#FF6B6B]'
                  : urge === 'Meddium'
                  ? 'bg-[#FFD93D]'
                  : 'bg-[#6BCB77]'
              }`}
            >
              {urge}
            </p>

            <p className="text-xs text-[#5d5d5d] ">{text7}</p>
          </div>
        </div>
      </section>

      <footer className='h-20 w-full flex items-center justify-center' data-html2canvas-ignore>
        <Link href={'/done'} >
          <button className='h-fit w-fit py-2 px-4 border-2 border-black rounded-xl font-semibold text-base active:bg-black active:text-white hover:shadow-lg hover:shadow-gray-600' onClick={DownloadSend}>
            Download PDF
          </button>
        </Link>
        
      </footer>
    </section>
  );
}
