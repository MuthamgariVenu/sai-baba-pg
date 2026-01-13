"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-2xl shadow-xl overflow-hidden"
    >
      {/* IMAGE SECTION */}
      <div className="relative h-56">
        <Image
          src="/images/pg-front-v2.jpg"
          alt="Sai Baba PG for Men's"
          fill
          className="object-cover"
          priority
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* TOP OVERLAY INFO */}
        <div className="absolute top-3 left-3 bg-white/90 px-3 py-1 rounded-full text-xs font-semibold shadow">
          ⭐ 4.6
        </div>

        <div className="absolute top-3 right-3 bg-white/90 px-3 py-1 rounded-full text-xs font-semibold shadow">
          📍 Anjaiah Nagar
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="p-4 text-center">
        <p className="text-sm text-gray-600">
          Anjaiah Nagar, Hyderabad • Kakatheya Hospital, Gachibowli & IT Offices
        </p>

        <h1 className="text-xl font-bold mt-1">
          Sai Baba Men’s Hostel2
        </h1>

        <p className="text-gray-600 text-sm mt-1">
          Clean Rooms • Homely Food • Near Metro
        </p>

        {/* PRIMARY CALL BUTTON */}
        <a
          href="tel:9912579627"
          className="inline-block mt-4 px-6 py-2 rounded-full text-lg font-bold text-white bg-green-600 animate-pulse shadow-lg"
        >
          📞 Call Now: 9912579627
        </a>

        {/* SECONDARY CONTACT */}
        <p className="text-sm text-gray-700 mt-2">
          Alternate Contact:{" "}
          <a
            href="tel:9876543210"
            className="font-semibold text-green-700 underline"
          >
            9876543210
          </a>
        </p>
      </div>
    </motion.div>
  );
}
