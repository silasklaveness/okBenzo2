import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Om Oss",
};
export default function Component() {
  return (
    <div className="flex flex-col items-center space-y-8 mt-12">
      <div className="flex flex-col md:flex-row items-center md:space-x-8">
        <div className="bg-gray-100 p-8 rounded-lg shadow-md max-w-md">
          <h2 className="text-3xl font-semibold mt-2">Om oss</h2>
          <p className="mt-4 text-gray-700">
            Vi er en frisørsalong i Sandefjord med mange års erfaring og en dyp
            lidenskap for faget. Vårt mål er alltid å levere resultater som
            begeistrer!
          </p>
        </div>
        <Image
          src="/benzosalong.jpg"
          alt="Barbering"
          className="rounded-lg shadow-md mt-8 md:mt-0"
          width={500}
          height={300}
        />
      </div>
    </div>
  );
}
