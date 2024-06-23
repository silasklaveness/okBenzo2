"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const links = [
  { url: "/", title: "Hjem" },
  { url: "/omoss", title: "Om Oss" },
  { url: "/tjenester", title: "Tjenester" },
  { url: "/prosjekter", title: "Prosjekter" },
  { url: "/kontakt", title: "Kontakt" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const handleClick = (url) => {
    setOpen(false);
  };
  return (
    <div>
      <header className="bg-gray-950 text-gray-50 px-4 md:px-6 py-4 flex items-center justify-between border-b border-gray-700">
        <Link href="./" className="flex items-center gap-2" prefetch={false}>
          <Image src="/logo.png" alt="logo" height={50} width={50} />
          <span className="text-lg md:text-xl lg:text-2xl font-semibold">
            OceanEdge
          </span>
        </Link>
        <nav className="hidden md:flex gap-10">
          {links.map((link) => (
            <Link
              key={link.url}
              href={link.url}
              className="text-sm md:text-base lg:text-lg font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              {link.title}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <button
            className="w-10 h-8 flex flex-col justify-between z-50 relative"
            onClick={() => setOpen((prev) => !prev)}
          >
            <motion.div
              variants={topVariants}
              animate={open ? "opened" : "closed"}
              className="w-10 h-1 bg-white rounded origin-left"
            ></motion.div>
            <motion.div
              variants={centerVariants}
              animate={open ? "opened" : "closed"}
              className="w-10 h-1 bg-white rounded"
            ></motion.div>
            <motion.div
              variants={bottomVariants}
              animate={open ? "opened" : "closed"}
              className="w-10 h-1 bg-white rounded origin-left"
            ></motion.div>
          </button>
          {open && (
            <div
              className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl"
              style={{ zIndex: 2 }}
            >
              {links.map((link) => (
                <Link href={link.url} key={link.title}>
                  <span onClick={() => handleClick(link.url)}>
                    {link.title}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
