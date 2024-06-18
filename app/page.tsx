"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useState } from "react";
import Modal from "@/components/fjorddevbot"; // Adjust the import path as needed
import { motion } from "framer-motion";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="h-full">
      <div className="flex flex-col min-h-[100dvh]">
        {showModal && <Modal handleClose={toggleModal} />}
        <main className="flex-1">
          <section
            id="hero"
            className="bg-gray-950 text-gray-50 py-12 md:py-24 lg:py-32"
          >
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                    Løft Din Digitale Tilstedeværelse
                  </h1>
                  <p className="text-gray-400 md:text-xl">
                    Frigjør kraften i moderne webutvikling med våre tjenester.
                  </p>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
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
                  </div>
                </div>
                <Image
                  src="/placeholder.svg"
                  width="550"
                  height="550"
                  alt="Hero"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                />
              </div>
            </div>
          </section>
          <section
            id="services"
            className="bg-gray-100 dark:bg-gray-800 py-12 md:py-24 lg:py-32 text-center"
          >
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Våre tjenester
                  </h2>
                  <p className="max-w-[900px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Vi tilbyr et bredt spekter av webutviklingstjenester for å
                    støtte ditt prosjekt og hjelpe virksomheten din å blomstre
                    på nettet.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                <div className="flex flex-col justify-center space-y-4 mx-auto lg:mx-0">
                  <div className="grid gap-4">
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Nettsidedesign</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Skape visuelt imponerende og brukervennlige nettsteder.
                      </p>
                    </div>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Webutvikling</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Integrasjon av moderne løsninger i din nettside for å
                        hjelpe din virksomhet.
                      </p>
                    </div>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">SEO-optimalisering</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Forbedre din nettsides synlighet og rangering i
                        søkemotorer for å tiltrekke flere besøkende.
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <a
                      href="/tjenester"
                      className="inline-flex items-center justify-center px-4 py-2 text-base font-medium text-white bg-black border border-transparent rounded-md hover:bg-blue-700"
                    >
                      Les mer
                    </a>
                  </div>
                </div>
                <Image
                  src="/placeholder.svg"
                  width="550"
                  height="310"
                  alt="Services"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                />
              </div>
            </div>
          </section>
          <section
            id="portfolio"
            className="py-12 md:py-24 lg:py-32 bg-black text-gray-50"
          >
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Tidligere Prosjekter
                  </h2>
                  <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Sjekk ut noen av våre siste webutviklingsprosjekter.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                <Image
                  src="/image.png"
                  width="550"
                  height="310"
                  alt="Portfolio"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
                <div className="flex flex-col justify-center space-y-4">
                  <div className="grid gap-4">
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        okBenzo Frisør Sandefjord
                      </h3>
                      <p className="text-gray-400">
                        En moderne og responsiv nettside for en ledende
                        frisørsalong.👑
                      </p>
                    </div>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">I prosess ...</h3>
                      <p className="text-gray-400"></p>
                    </div>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Blog Platform</h3>
                      <p className="text-gray-400">
                        A content-rich blog with a modern design and intuitive
                        user interface.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-8">
                <Link href="/prosjekter" prefetch={false}>
                  <span className="inline-flex items-center justify-center rounded-md bg-gray-50 px-8 py-3 text-sm font-medium text-gray-950 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950">
                    Se Alle Prosjekter
                  </span>
                </Link>
              </div>
            </div>
          </section>

          <section
            id="about"
            className="bg-gray-100 dark:bg-gray-800 py-12 md:py-24 lg:py-32 text-center"
          >
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    About Us
                  </h2>
                  <p className="max-w-[900px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Acme Web is a team of passionate web developers dedicated to
                    creating exceptional digital experiences. With years of
                    industry experience, we combine cutting-edge technologies
                    with a user-centric approach to deliver innovative solutions
                    that drive business growth.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                <Image
                  src="/placeholder.svg"
                  width="550"
                  height="310"
                  alt="About"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
                <div className="flex flex-col justify-center space-y-4 mx-auto lg:mx-0">
                  <div className="grid gap-4">
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Vår vison</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Å styrke bedrifter av alle størrelser med toppmoderne
                        web-løsninger som skaper suksess.
                      </p>
                    </div>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Våre verdier</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Integritet, innovasjon og en forpliktelse til
                        fortreffelighet i alt vi gjør.
                      </p>
                    </div>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Oss</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Engasjerte webutviklere som kontinuerlig oppdaterer seg
                        med de nyeste metodene.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="contact" className="py-12 md:py-24 lg:py-32 text-center">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Kom i kontakt
                  </h2>
                  <p className="max-w-[900px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Har du et prosjekt i tankene? La oss diskutere hvordan vi
                    kan hjelpe.
                  </p>
                </div>
                <div className="mx-auto w-full max-w-sm space-y-2">
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
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
