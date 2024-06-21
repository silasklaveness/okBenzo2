"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useState, useEffect } from "react";
import Modal from "@/components/fjorddevbot"; // Adjust the import path as needed
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  initial: {},
  animate: { transition: { staggerChildren: 0.3 } },
};

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const checkScrollTop = () => {
    if (!showScroll && window.scrollY > 300) {
      setShowScroll(true);
    } else if (showScroll && window.scrollY <= 300) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScroll]);

  return (
    <div className="h-full">
      <div className="flex flex-col min-h-[100dvh]">
        {showModal && <Modal handleClose={toggleModal} />}
        <main className="flex-1">
          <motion.section
            id="hero"
            className="bg-gray-950 text-gray-50 py-12 md:py-24 lg:py-32"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <div className="container px-4 md:px-6">
              <motion.div
                className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center"
                variants={fadeInUp}
              >
                <div className="space-y-4">
                  <motion.h1
                    className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl"
                    variants={fadeInUp}
                  >
                    Løft Din Digitale Tilstedeværelse
                  </motion.h1>
                  <motion.p
                    className="text-gray-400 md:text-xl"
                    variants={fadeInUp}
                  >
                    Frigjør kraften i moderne webutvikling med våre tjenester.
                  </motion.p>
                  <motion.div
                    className="flex flex-col gap-2 min-[400px]:flex-row"
                    variants={fadeInUp}
                  >
                    <Link
                      href="#"
                      className="inline-flex h-10 items-center justify-center rounded-md bg-gray-50 px-8 text-sm font-medium text-gray-950 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Kontakt oss
                    </Link>
                    <Link
                      href="#"
                      className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-transparent px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-950 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Finn ut mer
                    </Link>

                    <button
                      onClick={toggleModal}
                      className="inline-flex h-10 items-center justify-center rounded-md bg-gray-50 px-8 text-sm font-medium text-gray-950 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                    >
                      BOT
                    </button>
                  </motion.div>
                </div>
                <motion.div variants={fadeInUp}>
                  <Image
                    src="/home.png"
                    width="550"
                    height="550"
                    alt="Hero"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.section>
          <motion.section
            id="services"
            className="bg-gray-100 dark:bg-gray-800 py-12 md:py-24 lg:py-32 text-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <div className="container mx-auto px-4 md:px-6">
              <motion.div
                className="flex flex-col items-center justify-center space-y-4"
                variants={fadeInUp}
              >
                <div className="space-y-2">
                  <motion.h2
                    className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                    variants={fadeInUp}
                  >
                    Våre tjenester
                  </motion.h2>
                  <motion.p
                    className="max-w-[900px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
                    variants={fadeInUp}
                  >
                    Vi tilbyr et bredt spekter av webutviklingstjenester for å
                    støtte ditt prosjekt og hjelpe virksomheten din å blomstre
                    på nettet.
                  </motion.p>
                </div>
              </motion.div>
              <motion.div
                className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12"
                variants={fadeInUp}
              >
                <div className="flex flex-col justify-center space-y-4 mx-auto lg:mx-0">
                  <div className="grid gap-4">
                    <motion.div className="grid gap-1" variants={fadeInUp}>
                      <h3 className="text-xl font-bold">Nettsidedesign</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Skape visuelt imponerende og brukervennlige nettsteder.
                      </p>
                    </motion.div>
                    <motion.div className="grid gap-1" variants={fadeInUp}>
                      <h3 className="text-xl font-bold">Webutvikling</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Integrasjon av moderne løsninger i din nettside for å
                        hjelpe din virksomhet.
                      </p>
                    </motion.div>
                    <motion.div className="grid gap-1" variants={fadeInUp}>
                      <h3 className="text-xl font-bold">SEO-optimalisering</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Forbedre din nettsides synlighet og rangering i
                        søkemotorer for å tiltrekke flere besøkende.
                      </p>
                    </motion.div>
                  </div>
                  <motion.div className="mt-4" variants={fadeInUp}>
                    <a
                      href="/tjenester"
                      className="inline-flex items-center justify-center px-4 py-2 text-base font-medium text-white bg-black border border-transparent rounded-md hover:bg-blue-700"
                    >
                      Les mer
                    </a>
                  </motion.div>
                </div>
                <motion.div variants={fadeInUp}>
                  <Image
                    src="/tjenesterhome.png"
                    width="550"
                    height="310"
                    alt="Services"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.section>
          <motion.section
            id="portfolio"
            className="py-12 md:py-24 lg:py-32 bg-black text-gray-50"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <div className="container px-4 md:px-6">
              <motion.div
                className="flex flex-col items-center justify-center space-y-4 text-center"
                variants={fadeInUp}
              >
                <div className="space-y-2">
                  <motion.h2
                    className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                    variants={fadeInUp}
                  >
                    Tidligere Prosjekter
                  </motion.h2>
                  <motion.p
                    className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                    variants={fadeInUp}
                  >
                    Sjekk ut noen av våre siste webutviklingsprosjekter.
                  </motion.p>
                </div>
              </motion.div>
              <motion.div
                className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12"
                variants={fadeInUp}
              >
                <motion.div variants={fadeInUp}>
                  <Image
                    src="/image.png"
                    width="550"
                    height="310"
                    alt="Portfolio"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  />
                </motion.div>
                <motion.div
                  className="flex flex-col justify-center space-y-4"
                  variants={fadeInUp}
                >
                  <div className="grid gap-4">
                    <motion.div className="grid gap-1" variants={fadeInUp}>
                      <h3 className="text-xl font-bold">
                        okBenzo Frisør Sandefjord
                      </h3>
                      <p className="text-gray-400">
                        En moderne og responsiv nettside for en ledende
                        frisørsalong.👑
                      </p>
                    </motion.div>
                    <motion.div className="grid gap-1" variants={fadeInUp}>
                      <h3 className="text-xl font-bold">I prosess ...</h3>
                      <p className="text-gray-400"></p>
                    </motion.div>
                    <motion.div className="grid gap-1" variants={fadeInUp}>
                      <h3 className="text-xl font-bold">Blog Platform</h3>
                      <p className="text-gray-400">
                        A content-rich blog with a modern design and intuitive
                        user interface.
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
              <motion.div
                className="flex justify-center mt-8"
                variants={fadeInUp}
              >
                <Link href="/prosjekter" prefetch={false}>
                  <span className="inline-flex items-center justify-center rounded-md bg-gray-50 px-8 py-3 text-sm font-medium text-gray-950 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950">
                    Se Alle Prosjekter
                  </span>
                </Link>
              </motion.div>
            </div>
          </motion.section>

          <motion.section
            id="about"
            className="bg-gray-100 dark:bg-gray-800 py-12 md:py-24 lg:py-32 text-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <div className="container mx-auto px-4 md:px-6">
              <motion.div
                className="flex flex-col items-center justify-center space-y-4"
                variants={fadeInUp}
              >
                <div className="space-y-2">
                  <motion.h2
                    className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                    variants={fadeInUp}
                  >
                    About Us
                  </motion.h2>
                  <motion.p
                    className="max-w-[900px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
                    variants={fadeInUp}
                  >
                    Acme Web is a team of passionate web developers dedicated to
                    creating exceptional digital experiences. With years of
                    industry experience, we combine cutting-edge technologies
                    with a user-centric approach to deliver innovative solutions
                    that drive business growth.
                  </motion.p>
                </div>
              </motion.div>
              <motion.div
                className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12"
                variants={fadeInUp}
              >
                <motion.div variants={fadeInUp}>
                  <Image
                    src="/placeholder.svg"
                    width="550"
                    height="310"
                    alt="About"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  />
                </motion.div>
                <motion.div
                  className="flex flex-col justify-center space-y-4 mx-auto lg:mx-0"
                  variants={fadeInUp}
                >
                  <div className="grid gap-4">
                    <motion.div className="grid gap-1" variants={fadeInUp}>
                      <h3 className="text-xl font-bold">Vår vison</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Å styrke bedrifter av alle størrelser med toppmoderne
                        web-løsninger som skaper suksess.
                      </p>
                    </motion.div>
                    <motion.div className="grid gap-1" variants={fadeInUp}>
                      <h3 className="text-xl font-bold">Våre verdier</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Integritet, innovasjon og en forpliktelse til
                        fortreffelighet i alt vi gjør.
                      </p>
                    </motion.div>
                    <motion.div className="grid gap-1" variants={fadeInUp}>
                      <h3 className="text-xl font-bold">Oss</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Engasjerte webutviklere som kontinuerlig oppdaterer seg
                        med de nyeste metodene.
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>
          <motion.section
            id="contact"
            className="py-12 md:py-24 lg:py-32 text-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <div className="container mx-auto px-4 md:px-6">
              <motion.div
                className="flex flex-col items-center justify-center space-y-4"
                variants={fadeInUp}
              >
                <div className="space-y-2">
                  <motion.h2
                    className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                    variants={fadeInUp}
                  >
                    Kom i kontakt
                  </motion.h2>
                  <motion.p
                    className="max-w-[900px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
                    variants={fadeInUp}
                  >
                    Har du et prosjekt i tankene? La oss diskutere hvordan vi
                    kan hjelpe.
                  </motion.p>
                </div>
                <motion.div
                  className="mx-auto w-full max-w-sm space-y-2"
                  variants={fadeInUp}
                >
                  <form className="flex flex-col gap-4">
                    <Input type="text" placeholder="Navn" className="w-full" />
                    <Input
                      type="email"
                      placeholder="Email"
                      className="w-full"
                    />
                    <Textarea placeholder="Melding" className="w-full" />
                    <Button type="submit">Send</Button>
                  </form>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>
        </main>
        <button
          className={`fixed bottom-5 right-5 z-50 p-3 rounded-full bg-blue-500 text-white shadow-lg transition-opacity duration-300 ${
            showScroll ? "opacity-100" : "opacity-0"
          }`}
          onClick={scrollTop}
          aria-label="Scroll to top"
        >
          ↑
        </button>
      </div>
    </div>
  );
}
