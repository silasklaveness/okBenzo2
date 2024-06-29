"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const links = [
  { url: "/", title: "Hjem" },
  { url: "/bestill", title: "Bestill" },
  { url: "/omoss", title: "Om Oss" },
  { url: "/galleri", title: "Galleri" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
      backgroundColor: "rgb(0,0,0)",
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(0,0,0)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
      backgroundColor: "rgb(0,0,0)",
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
      backgroundColor: "rgb(0,0,0)",
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(0,0,0)",
    },
  };

  const handleClick = (url) => {
    setOpen(false);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
    },
    opened: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <div className="relative">
      <header className="bg-white text-gray-900 shadow-lg px-4 md:px-6 py-4 flex items-center justify-between border-b border-gray-300">
        <Link href="./" className="flex items-center gap-2" prefetch={false}>
          <Image src="/benzologo.png" alt="logo" height={50} width={50} />
          <span className="text-lg text-black md:text-xl lg:text-2xl font-semibold">
            OKᗷEᑎᘔO
          </span>
        </Link>
        <nav className="hidden md:flex gap-14">
          {links.map((link) => (
            <Link
              key={link.url}
              href={link.url}
              className="text-lg text-black md:text-base lg:text-2xl font-medium hover:underline underline-offset-4"
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
              className="w-10 h-1 bg-black rounded origin-left"
            ></motion.div>
            <motion.div
              variants={centerVariants}
              animate={open ? "opened" : "closed"}
              className="w-10 h-1 bg-black rounded"
            ></motion.div>
            <motion.div
              variants={bottomVariants}
              animate={open ? "opened" : "closed"}
              className="w-10 h-1 bg-black rounded origin-left"
            ></motion.div>
          </button>
          {open && (
            <>
              <div
                className="fixed inset-0 bg-black bg-opacity-50 z-30"
                onClick={() => setOpen(false)}
              ></div>
              <motion.div
                initial="closed"
                animate={open ? "opened" : "closed"}
                variants={menuVariants}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="fixed top-0 right-0 w-2/5 h-full bg-white text-black flex flex-col items-start p-6 z-40 shadow-2xl"
              >
                {links.map((link) => (
                  <Link href={link.url} key={link.title} prefetch={false}>
                    <span
                      onClick={() => handleClick(link.url)}
                      className="block py-3 px-4 text-xl md:text-2xl lg:text-lg font-semibold tracking-wide text-gray-900 hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-105 rounded-md hover:bg-gray-100"
                    >
                      {link.title}
                    </span>
                  </Link>
                ))}
              </motion.div>
            </>
          )}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
