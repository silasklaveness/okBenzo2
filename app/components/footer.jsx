import React from "react";
import Link from "next/link";
import Image from "next/image"; // Importer Image-komponenten fra next/image

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
        <div className="flex gap-x-6 mb-4 sm:mb-0">
          <Link href="/omoss">
            <span className="hover:text-white">Om oss</span>
          </Link>
          <Link href="/bestill">
            <span className="hover:text-white">Bestill</span>
          </Link>
          <Link href="/galleri">
            <span className="hover:text-white">Galleri</span>
          </Link>
          <Link href="/personvernerklering">
            <span className="hover:text-white">Personvernerklæring</span>
          </Link>
        </div>
        <div className="text-center sm:text-right text-xs">
          <p>© 2023 okBenzo</p>
          <p>Adresse: Kirkegata 8C</p>
          <p>Telefon: +47 912 62 695</p>
          <p>E-post: okbenzowelish@gmail.com</p>
        </div>
        <Link
          className="flex items-center mt-4 sm:mt-0"
          href="https://www.oceanedge.no"
        >
          <Image
            src="/logofirkantbak.png" // Stien til logoen din i public-mappen
            alt="OceanEdge logo"
            width={25} // Juster størrelsen etter behov
            height={25}
          />
          <span className="ml-2 text-xs">Nettside levert av OceanEdge</span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
