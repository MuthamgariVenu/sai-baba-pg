"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-white rounded-2xl shadow-xl overflow-hidden mx-auto"
    >
      {/* IMAGE SECTION – SAME LOOK, SAME HEIGHT */}
      <div className="relative w-full h-[220px] sm:h-[260px]">
        <Image
          src="/images/pg-frontS5.jpg"
          alt="Sai Baba Men's Hostel"
          fill
          priority
          className="object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* TOP LEFT */}
        <div className="absolute top-3 left-3 bg-white/90 px-3 py-1 rounded-full text-xs font-semibold shadow">
          ⭐ 4.6
        </div>

        {/* TOP RIGHT */}
        <div className="absolute top-3 right-3 bg-white/90 px-3 py-1 rounded-full text-xs font-semibold shadow">
          📍 Siddiq Nagar
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="p-4 text-center">
        {/* Address – subtitle standard */}
        <p className="text-xs text-gray-700 font-medium">
          Siddiq Nagar, 9th Line, Hitech City, Hyderabad, Telangana 500032
        </p>

        {/* Title – FINAL LOCKED */}
        <h1 className="text-xl font-extrabold text-gray-900 mt-2">
          Sai Baba Men&apos;s Hostel 2
        </h1>

        {/* Subtitle – FINAL LOCKED */}
        <p className="text-sm text-gray-700 font-medium mt-1">
          Clean Rooms • Homely Food • Near Metro
        </p>

        {/* PRIMARY CALL */}
        <a
          href="tel:8978499854"
          className="relative z-10 inline-flex items-center justify-center gap-2 mt-4 px-6 py-2 rounded-full text-base font-bold text-white bg-green-600 animate-pulse shadow-lg"
        >
          📞 Call Now: 8978499854
        </a>

        {/* SECONDARY CONTACT */}
        <p className="text-sm text-gray-700 font-medium mt-2">
          Alternate Contact:{" "}
          <a
            href="tel:9985499864"
            className="font-semibold text-green-700 underline"
          >
            9985499864
          </a>
        </p>
      </div>
    </motion.div>
  );
}
