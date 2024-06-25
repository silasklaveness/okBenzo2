import Kart from "./components/kart";
import Calender from "./components/calender";
import Button from "./components/ui/button";

export default function Component() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-center bg-cover bg-white mt-6 md:mt-11">
      <div className="absolute inset-0 bg-white opacity-0"></div>
      {/* Fully opaque background overlay */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-6 py-8 bg-white shadow-md rounded-lg mb-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 pr-6 mb-6 md:mb-5">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-black leading-tight">
                Velkommen til okBenzo - Sandefjords frisør
              </h1>
              <div className="mt-6 text-black">
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
                <a href="tel:+4798000000" className="text-black font-medium">
                  123-456-789
                </a>
              </p>
            </div>
            <div className="w-full lg:w-auto lg:h-auto lg:flex lg:items-center">
              <div className="h-64 lg:h-[450px] lg:w-[500px] rounded-lg overflow-hidden shadow-md">
                <Kart />
              </div>
              <div className="mt-4 lg:mt-0 lg:ml-6 text-black">
                <h2 className="text-xl font-bold">Adresse</h2>
                <p>Kongensgate 6, Sandefjord</p>
              </div>
            </div>
          </div>
        </div>
        <section className="container mx-auto bg-white rounded-lg shadow-xl p-6 md:p-10 text-center mb-11">
          <div className="flex flex-col lg:flex-row lg:space-x-8">
            <div className="lg:w-1/2 items-center">
              <h2 className="text-2xl font-bold mb-4 text-black mt-10">
                Våre Priser
              </h2>
              <p className="text-gray-700 mb-6">
                Bestill til høyre her, under ser du prisene.
              </p>
              <div className="bg-gray-900 text-white p-8 rounded-lg shadow-md">
                <ul className="space-y-4">
                  <li className="flex justify-between">
                    <span>Klassisk hårklipp</span>
                    <span>fra 550,-</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Barbering med kniv</span>
                    <span>fra 450,-</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Skjeggtrimming</span>
                    <span>fra 500,-</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Barneklipp</span>
                    <span>fra 450,-</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Senior hårklipp</span>
                    <span>fra 400,-</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:flex lg:justify-end mt-8 lg:mt-0">
              <div className="w-full">
                <Calender url="https://calendly.com/pokesilas/bestill-time?month=2024-06" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
