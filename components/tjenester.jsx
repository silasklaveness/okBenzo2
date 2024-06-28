import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Button } from "./ui/button"; // Import your button component
import { motion } from "framer-motion"; // Import Framer Motion for smooth animations

const ServicesSection = () => {
  return (
    <div className="max-w-6xl mx-auto p-8 bg-black shadow-lg rounded-lg">
      <motion.h1
        className="text-5xl font-extrabold text-center mb-12 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Våre Tjenester
      </motion.h1>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <motion.div
            className="text-center p-6 bg-black border border-white rounded-lg shadow-md hover:bg-gray-800 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <DribbbleIcon className="mx-auto mb-4 w-20 h-20 text-white" />
            <h2 className="text-3xl font-bold mb-2 text-white">
              Nettsidedesign
            </h2>
            <p className="mb-4 text-white">Nett-tide design</p>
            <p className="mb-4 text-white">Nettside design</p>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black transition-colors duration-300"
            >
              Les mer
            </Button>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div
            className="text-center p-6 bg-black border border-white rounded-lg shadow-md hover:bg-gray-800 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <WebhookIcon className="mx-auto mb-4 w-20 h-20 text-white" />
            <h2 className="text-3xl font-bold mb-2 text-white">Webutvikling</h2>
            <p className="mb-4 text-white">Webutvikling</p>
            <p className="mb-4 text-white">Nettside utvikling</p>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black transition-colors duration-300"
            >
              Les mer
            </Button>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div
            className="text-center p-6 bg-black border border-white rounded-lg shadow-md hover:bg-gray-800 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <SearchCodeIcon className="mx-auto mb-4 w-20 h-20 text-white" />
            <h2 className="text-3xl font-bold mb-2 text-white">
              SEO Optimalisering
            </h2>
            <p className="mb-4 text-white">SEO-optimalisering</p>
            <p className="mb-4 text-white">SEO-optimalisering</p>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black transition-colors duration-300"
            >
              Les mer
            </Button>
          </motion.div>
        </SwiperSlide>
        {/* Eksempel på flere kort */}
        <SwiperSlide>
          <motion.div
            className="text-center p-6 bg-black border border-white rounded-lg shadow-md hover:bg-gray-800 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <DribbbleIcon className="mx-auto mb-4 w-20 h-20 text-white" />
            <h2 className="text-3xl font-bold mb-2 text-white">
              Ekstra Tjeneste 1
            </h2>
            <p className="mb-4 text-white">Beskrivelse av ekstra tjeneste 1</p>
            <p className="mb-4 text-white">Mer informasjon</p>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black transition-colors duration-300"
            >
              Les mer
            </Button>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div
            className="text-center p-6 bg-black border border-white rounded-lg shadow-md hover:bg-gray-800 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <WebhookIcon className="mx-auto mb-4 w-20 h-20 text-white" />
            <h2 className="text-3xl font-bold mb-2 text-white">
              Ekstra Tjeneste 2
            </h2>
            <p className="mb-4 text-white">Beskrivelse av ekstra tjeneste 2</p>
            <p className="mb-4 text-white">Mer informasjon</p>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black transition-colors duration-300"
            >
              Les mer
            </Button>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div
            className="text-center p-6 bg-black border border-white rounded-lg shadow-md hover:bg-gray-800 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <SearchCodeIcon className="mx-auto mb-4 w-20 h-20 text-white" />
            <h2 className="text-3xl font-bold mb-2 text-white">
              Ekstra Tjeneste 3
            </h2>
            <p className="mb-4 text-white">Beskrivelse av ekstra tjeneste 3</p>
            <p className="mb-4 text-white">Mer informasjon</p>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black transition-colors duration-300"
            >
              Les mer
            </Button>
          </motion.div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ServicesSection;

function DribbbleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
      <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
      <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
    </svg>
  );
}

function SearchCodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m13 13.5 2-2.5-2-2.5" />
      <path d="m21 21-4.3-4.3" />
      <path d="M9 8.5 7 11l2 2.5" />
      <circle cx="11" cy="11" r="8" />
    </svg>
  );
}

function WebhookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2" />
      <path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06" />
      <path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8" />
    </svg>
  );
}
