import React from "react";
import Link from "next/link";

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
          <p>© 2023 Din bedrift</p>
          <p>Adresse: Kirkegata8C</p>
          <p>Telefon: +123456789</p>
          <p>E-post: kontakt@dinbedrift.no</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
