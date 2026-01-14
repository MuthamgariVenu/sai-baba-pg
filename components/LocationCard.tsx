"use client";

import { motion } from "framer-motion";

export default function LocationCard() {
  return (
    <motion.div
      whileTap={{ scale: 1.02 }}
      className="bg-white rounded-2xl shadow-lg p-4 mt-4"
    >
      <h2 className="text-lg font-bold mb-1">📍 Location</h2>

      <p className="text-sm text-gray-600">
        Anjaiah Nagar, Hyderabad • Near Platina Building, Gachibowli & IT Offices
      </p>

      <div className="mt-3 space-y-1 text-sm">
        <p>🚇 5 mins to Metro</p>
     
        <p>🏢 Near IT Offices</p>
      </div>

      {/* Directions Button */}
      <a
  href="https://maps.app.goo.gl/Hbkc2ctUBZPBe1Q8A"
  target="_blank"
  rel="noopener noreferrer"
  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-white font-semibold"
>
  📍 Get Directions
</a>

    </motion.div>
  );
}
