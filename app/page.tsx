"use client";
import Kart from "./components/kart";
import Calender from "./components/calender";
import Button from "./components/ui/button";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Component() {
  const [showModal, setShowModal] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const checkScrollTop = () => {
    if (!showScroll && window.scrollY > 300) {
      setShowScroll(true);
    } else if (showScroll && window.scrollY <= 300) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [checkScrollTop, showScroll]);
  return (
    <main className="md:pt-6 lg:pt-11 relative min-h-screen flex flex-col items-center justify-center bg-center bg-cover bg-gray-100">
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-6 py-8 bg-white shadow-lg rounded-lg mb-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 pr-6 mb-6 md:mb-5">
              <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
                Velkommen til okBenzo - Sandefjord frisør
              </h1>
              <div className="mt-6 text-gray-800">
                <h2 className="text-2xl font-bold mb-4">Åpningstider</h2>
                <ul className="space-y-2">
                  <li>
                    <span className="font-bold">Mandag-fredag:</span> 09:00 -
                    18:00
                  </li>
                  <li>
                    <span className="font-bold">Lørdag:</span> 09:00 - 15:00
                  </li>
                  <li>
                    <span className="font-bold">Søndag:</span> Stengt
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <Button />
              </div>
              <p className="text-gray-600 text-sm mt-4">
                Ring oss på:{" "}
                <a href="tel:+4798000000" className="text-blue-600 font-medium">
                  +47 912 62 695
                </a>
              </p>
            </div>
            <div className="w-full lg:w-auto lg:h-auto lg:flex lg:items-center">
              <div className="h-64 lg:h-[450px] lg:w-[500px] rounded-lg overflow-hidden shadow-md">
                <Kart />
              </div>
              <div className="mt-4 lg:mt-0 lg:ml-6 text-gray-800">
                <h2 className="text-2xl font-bold">Adresse:</h2>
                <p>Kirkegata 8C, Sandefjord</p>
              </div>
            </div>
          </div>
        </div>
        <section className="container mx-auto bg-white rounded-lg shadow-xl p-6 md:p-10 text-center mb-11">
          <div className="flex flex-col lg:flex-row lg:space-x-8">
            <div className="lg:w-1/2 items-center">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 mt-10">
                Våre Priser
              </h2>
              <p className="text-gray-700 mb-6">
                Bestill til høyre her, under ser du prisene.
              </p>
              <div className="bg-gray-900 text-white p-8 rounded-lg shadow-md">
                <ul className="space-y-4">
                  <li className="flex justify-between">
                    <span>Hårklipp</span>
                    <span>fra 300,-</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Barneklipp</span>
                    <span>fra 300,-</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Skinfade med taper</span>
                    <span>fra 350,-</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Skjegg</span>
                    <span>fra 200,-</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Hårvask</span>
                    <span>fra 150,-</span>
                  </li>
                </ul>
              </div>
              <div className="hidden md:block bg-gray-900 text-white p-8 rounded-lg shadow-md mt-8">
                <h1 className="text-2xl font-bold mt-9">Frisør</h1>
                <p className="mt-6">okBenzo</p>
                <div className="flex justify-center mt-4">
                  <Image
                    src="/profilbilde.jpg"
                    alt="Benzo"
                    width={150}
                    height={150}
                    className="object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:flex lg:justify-end mt-8 lg:mt-0">
              <div className="w-full">
                <Calender url="https://calendly.com/okbenzowelish/30min" />
              </div>
            </div>
          </div>
        </section>
        <button
          className={`fixed bottom-5 right-5 z-50 p-2 md:p-3 lg:p-4 text-2xl font-bold rounded-full bg-blue-500 text-white shadow-lg transition-opacity duration-300 ${
            showScroll ? "opacity-100" : "opacity-0"
          }`}
          onClick={scrollTop}
          aria-label="Scroll to top"
        >
          ↑
        </button>
      </div>
    </main>
  );
}
