"use client";
import Image from "next/image";

export default function Component() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Barber Galleri
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-gray-500">
          Utforsk vår samling av de nyeste og beste frisyrene.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-y-12">
        <div className="flex justify-center">
          <div className="w-full lg:w-3/4 xl:w-2/3">
            <Image
              src="/klipp1.png"
              width={1086}
              height={1086}
              alt="Portfolio"
              className="w-full h-auto max-h-[80vh] overflow-hidden rounded-xl object-cover object-center"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-full lg:w-3/4 xl:w-2/3">
            <Image
              src="/klipp2.png"
              width={1000}
              height={1086}
              alt="Portfolio"
              className="w-full h-auto max-h-[80vh] overflow-hidden rounded-xl object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
