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
      <div className="mt-12 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8">
        <div className="relative group">
          <div className="aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100">
            <Image
              src="/placeholder.svg"
              alt="Hairstyle 1"
              width={800}
              height={600}
              className="object-cover pointer-events-none group-hover:opacity-75"
            />
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-900">
                <a href="#">
                  <span aria-hidden="true" className="absolute inset-0" />
                  Klassisk Fade
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-500">Beskrivelse</p>
            </div>
          </div>
        </div>
        <div className="relative group">
          <div className="aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100">
            <Image
              src="/placeholder.svg"
              alt="Hairstyle 2"
              width={800}
              height={600}
              className="object-cover pointer-events-none group-hover:opacity-75"
            />
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-900">
                <a href="#">
                  <span aria-hidden="true" className="absolute inset-0" />
                  Low Taper
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-500">Beskrivelse</p>
            </div>
          </div>
        </div>
        <div className="relative group">
          <div className="aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100">
            <Image
              src="/placeholder.svg"
              alt="Hairstyle 3"
              width={800}
              height={600}
              className="object-cover pointer-events-none group-hover:opacity-75"
            />
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-900">
                <a href="#">
                  <span aria-hidden="true" className="absolute inset-0" />?
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-500">?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
