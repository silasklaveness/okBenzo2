import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="sticky bottom-0 bg-white shadow-md py-2">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="flex gap-x-6">
          <Link href="/om-oss">
            <span className="text-gray-700 hover:text-gray-900">Om oss</span>
          </Link>
          <Link href="/bestill">
            <span className="text-gray-700 hover:text-gray-900">Bestill</span>
          </Link>
          <Link href="/galleri">
            <span className="text-gray-700 hover:text-gray-900">Galleri</span>
          </Link>
        </div>
        <div className="text-[6px] sm:text-xs">
          <p>© 2023 Din bedrift</p>
          <p>Adresse: Din adresse</p>
          <p>Telefon: +123456789</p>
          <p>E-post: kontakt@dinbedrift.no</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
