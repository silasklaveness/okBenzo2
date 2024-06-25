import Button from "../components/ui/button1";
import Image from "next/image";

export default function Component() {
  return (
    <div className="flex flex-col items-center space-y-8">
      <div className="flex flex-col md:flex-row items-center md:space-x-8">
        <div className="bg-gray-100 p-8 rounded-lg shadow-md max-w-md">
          <p className="text-red-600">est. 2018</p>
          <h2 className="text-3xl font-semibold mt-2">Om oss</h2>
          <p className="mt-4 text-gray-700">
            Vår frisørsalong er et fristed for herrer, hvor du kan slappe av og
            nyte en profesjonell hårklipp. Våre dyktige frisører er her for å gi
            deg den beste opplevelsen. Vi tilbyr tjenester som klassisk
            hårklipp, skjeggtrim og tradisjonell barbering. Hos oss kan du
            forvente kvalitet og profesjonalitet ved hvert besøk.
          </p>
        </div>
        <img
          src="/placeholder.svg"
          alt="Barbering"
          className="rounded-lg shadow-md mt-8 md:mt-0"
        />
      </div>
      <div className="flex flex-col md:flex-row items-center md:space-x-8">
        <div className="bg-gray-100 p-8 rounded-lg shadow-md max-w-md">
          <p className="text-red-600">Vi har et utvalg ulike tjenester</p>
          <h2 className="text-3xl font-semibold mt-2">Prisliste</h2>
          <p className="mt-4 text-gray-700">
            Vi tilbyr et bredt spekter av frisørtjenester, inkludert hårklipp,
            skjeggtrim og tradisjonell barbering. Se vår prisliste for mer
            informasjon om våre tjenester og priser.
          </p>
        </div>
        <div className="bg-gray-900 text-white p-8 rounded-lg shadow-md mt-8 md:mt-0">
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
          <div className="flex space-x-4 mt-8">
            <button href="/bestill" className="bg-white text-gray-900">
              Bestill time
            </button>
            <button className="bg-gray-700 text-white">Les mer</button>
          </div>
        </div>
      </div>
    </div>
  );
}
