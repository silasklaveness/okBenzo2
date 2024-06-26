import React from "react";

const Personvernerklaring = () => {
  return (
    <div className="container mx-auto px-6 py-8 bg-white shadow-lg rounded-lg my-12">
      <h1 className="text-3xl font-bold mb-6">Personvernerklæring</h1>
      <p className="mb-4">
        Din bedrift er opptatt av å beskytte ditt personvern. Denne
        personvernerklæringen forklarer hvordan vi samler inn, bruker, og
        beskytter dine personopplysninger.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Informasjon vi samler inn</h2>
      <p className="mb-4">
        Når du bruker vår nettside, kan vi samle inn følgende informasjon:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>
          Kontaktinformasjon (som navn, e-postadresse, telefonnummer) hvis du
          kontakter oss direkte.
        </li>
        <li>
          Informasjon om hvordan du bruker vår nettside (som IP-adresse,
          nettlesertype, og besøksstatistikk) ved hjelp av Google Maps og
          Calendly integrasjoner.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">
        Hvordan vi bruker informasjonen
      </h2>
      <p className="mb-4">Vi bruker informasjonen til å:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Levere og forbedre våre tjenester.</li>
        <li>Svare på dine henvendelser og gi kundesupport.</li>
        <li>
          Forstå hvordan besøkende bruker nettsiden vår og forbedre
          brukeropplevelsen.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Tredjeparts tjenester</h2>
      <p className="mb-4">
        Vi bruker tredjeparts tjenester som Google Maps og Calendly for å
        forbedre din opplevelse på vår nettside. Disse tjenestene kan samle inn
        og behandle din informasjon i henhold til sine egne personvernregler. Vi
        anbefaler at du leser disse personvernreglene nøye:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>
          <a
            href="https://policies.google.com/privacy"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Maps Personvernregler
          </a>
        </li>
        <li>
          <a
            href="https://calendly.com/pages/privacy"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Calendly Personvernregler
          </a>
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Dine rettigheter</h2>
      <p className="mb-4">
        Du har rett til å be om tilgang til, korrigere eller slette dine
        personopplysninger som vi har lagret. Hvis du ønsker å utøve disse
        rettighetene, vennligst kontakt oss på kontakt@dinbedrift.no.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Kontakt oss</h2>
      <p>
        Hvis du har spørsmål om denne personvernerklæringen eller hvordan vi
        behandler dine personopplysninger, vennligst kontakt oss på:
      </p>
      <p className="mt-2">
        <strong>Din bedrift</strong>
        <br />
        Adresse: Kirkegata8C
        <br />
        Telefon: +123456789
        <br />
        E-post: kontakt@dinbedrift.no
      </p>
    </div>
  );
};

export default Personvernerklaring;
