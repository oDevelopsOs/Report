"use client";
import React, { useEffect, useState } from "react";
import { useLanding } from "../store/landing";
import { useIncInspections } from "../store/IncInspections";
import Link from "next/link";
import Image from "next/image";

// SVG imports
import Caja from "../../../public/nav/Caja.svg";
import Clean from "../../../public/nav/CleanTidy.svg";
import Addition from "../../../public/nav/Addion.svg";
import Inventory from "../../../public/nav/Inventory.svg";
import ShipWC from "../../../public/nav/ShipWhitC.svg";
import IncIn from "../../../public/nav/IncInspections.svg";
import IncShip from "../../../public/nav/IncShip.svg";
import IncOut from "../../../public/nav/Inc&Out.svg";



export default function IncShipment() {

  const name = useLanding((state) => state.name);
  const text = useIncInspections((state) => state.text3);
  const setText = useIncInspections((state) => state.setName3);
  const setBool = useIncInspections((state) => state.setBool3);

  const [selected, setSelected] = useState<string | null>(null); // Estado para saber cuál botón está activo
  

  useEffect(() => {
    const button = document.getElementById('stateButton');
  
    if (button) {
      button.addEventListener('click', () => {
        if (button.dataset.state === 'inactive') {
          button.dataset.state = 'active';
          button.className = 'border-2 border-black h-12 w-40 rounded-xl text-lg  hover:shadow-lg hover:shadow-gray-400 active:border-2 bg-black text-white';
        } else {
          button.dataset.state = 'inactive';
          button.className = 'border-2 border-black h-12 w-40 rounded-xl text-lg active:bg-black active:text-white hover:shadow-lg hover:shadow-gray-400 active:border-white active:border-2 bg-white text-black';
        }
      });
    }
  
    return () => {
      if (button) {
        button.removeEventListener('click', () => {});
      }
    };
  }, []);

  return (
    <section className="w-full h-screen flex flex-row">
      {/* Navigation */}
      <aside className="w-1/3 h-5/6 my-auto flex flex-col justify-evenly content-between px-5">
        <header>
          <h2 className="text-3xl font-semibold text-[#5E5E5E] mt-6 mb-3">
          Hi  <span className="text-black">{name} 👋 </span>
          </h2>
          <p className=" text-base text-left mb-10 text-[#5E5E5E] w-96">
          Congratulations on reaching the end of your day! 😊 In order to keep improving, we invite you to fill out the form. Your feedback is very important to us. Thank you for your time and for being part of this experience!
          </p>
        </header>

        {/* Navigation Bar */}
        <nav className="mb-12">
        <ul>
          <li className="my-5">
            <Link
              className="font-semibold text-lg text-[#5e5e5e] w-72 h-fit flex"
              href="./Emails"
            >
              <Image src={Caja} alt="InBox" className="mr-2"/> Emails
            </Link>
          </li>
          <li className="my-5 text-black">
            <Link
              className="font-semibold text-lg text-[#5e5e5e] w-72 h-fit flex"
              href="./ShipmentsInc&Out"
            >
              <Image src={IncOut} alt="InBox" className="mr-2"/> Shipments Inc&Out
            </Link>
          </li>
          <li className="my-5">
            <Link
              className="font-semibold text-lg text-[#5e5e5e] w-72 h-fit flex"
              href="./IncShipments"
            >
              <Image src={IncShip} alt="InBox" className="mr-2"/> Inc. Shipments
            </Link>
          </li>
          <li className="my-5">
            <Link
              className="font-semibold text-lg text-black h-16 w-72 bg-[#D2D2D2] -ml-3 p-3 items-center flex rounded-2xl"
              href="./IncInspections"
            >
              <Image src={IncIn} alt="InBox" className="mr-2"/> Inc. Inspections
            </Link>
          </li>
          <li className="my-5">
            <Link
              className="font-semibold text-lg text-[#5e5e5e] w-72 h-fit flex"
              href="./ShipWithCourier"
            >
              <Image src={ShipWC} alt="InBox" className="mr-2"/> Shipments with courier
            </Link>
          </li>
          <li className="my-5">
            <Link
              className="font-semibold text-lg text-[#5e5e5e] w-72 h-fit flex"
              href="./Clean&Tidy"
            >
              <Image src={Clean} alt="InBox" className="mr-2"/> Clean & Tidy
            </Link>
          </li>
          <li className="my-5">
            <Link
              className="font-semibold text-lg text-[#5e5e5e] w-72 h-fit flex"
              href="./Inventory"
            >
              <Image src={Inventory} alt="InBox" className="mr-2"/> Inventory
            </Link>
          </li>
          <li className="my-5">
            <Link
              className="font-semibold text-lg text-[#5e5e5e] w-72 h-fit flex"
              href="./Adition"
            >
              <Image src={Addition} alt="InBox" className="mr-2"/> Addition
            </Link>
          </li>
        </ul>
        </nav>

        {/* Progress Bar */}
        <footer className="h-fit w-full mb-10">
          <p className="text-[#5e5e5e] text-sm mb-1">Step 4 of 7</p>
          <div className="w-11/12 h-2 rounded-full bg-white">
            <div className="w-7/12 h-full rounded-full bg-[#7B5DE8]"></div>
          </div>
        </footer>
      </aside>

      {/* Form Section */}
      <main className="w-2/3 h-full flex align-middle items-center justify-center content-center">
        <div className="h-[44rem] w-[62rem] bg-white rounded-2xl flex flex-col">
          <header>
            <h3 className="text-[#5E5E5E] mt-5 ml-5 font-semibold">
              Questions & Answers
            </h3>
          </header>

          {/* Question Section */}
          <div className="w-full px-20 pt-10 pb-20">
            <p className="pb-4 font-semibold text-xl">
              Any incoming inspections that need to be done ?
            </p>
            <div className="gap-4 flex flex-row w-full">
              {/* Botón "Yes" */}
              <button
                className={`border-2 h-12 w-40 rounded-xl text-lg transition-all 
          ${
            selected === "Yes"
              ? "bg-black text-white border-black"
              : "bg-white text-black border-black hover:shadow-lg hover:shadow-gray-400"
          }
        `}
                onClick={() => {
                  setSelected("Yes");
                  setBool("Yes");
                }}
              >
                Yes
              </button>

              {/* Botón "No" */}
              <button
                className={`border-2 h-12 w-40 rounded-xl text-lg transition-all 
          ${
            selected === "No"
              ? "bg-black text-white border-black"
              : "bg-white text-black border-black hover:shadow-lg hover:shadow-gray-400"
          }
        `}
                onClick={() => {
                  setSelected("No");
                  setBool("No");
                }}
              >
                No
              </button>
            </div>
          </div>

          {/* Form Section */}
          <form className="w-full px-20">
            <p className="pb-4 font-semibold text-xl">
              What has been done ,and what not yet ?
              <span className="text-[#5E5E5E] font-base text-xs ml-2">
                max length(250)
              </span>
            </p>
            <textarea
              maxLength={250}
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="h-64 w-4/6 border-2 border-black rounded-xl text-left p-4 resize-none text-lg"
              placeholder="Start typing ..."
            ></textarea>
          </form>

          <div className="w-full h-fit mt-20 flex flex-row content-end justify-end pr-7 gap-5">
            <Link
              href={"./IncShipments"}
              className="h-12 w-32 rounded-xl text-lg flex items-center justify-center border-2 border-black active:bg-black active:text-white hover:shadow-lg hover:shadow-gray-400 active:border-white active:border-2"
            >
              Previous
            </Link>
            <Link
              // href={"./ShipmentsInc&Out"}
              href={"./ShipWithCourier"}
              className="h-12 w-32 rounded-xl text-lg flex items-center justify-center border-2 border-black text-white bg-black active:bg-white active:text-black hover:shadow-lg hover:shadow-gray-400 active:border-black active:border-2"
            >
              Continue
            </Link>
          </div>
        </div>
      </main>
    </section>
  );
}






   