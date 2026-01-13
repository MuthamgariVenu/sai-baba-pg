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
        <p>🚌 Bus Stop nearby</p>
        <p>🏢 Near IT Offices</p>
      </div>

      {/* Directions Button */}
      <a
        href="https://www.google.com/maps/dir/?api=1&destination=17.4519647,78.3653393"
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-4 text-center bg-blue-600 text-white py-3 rounded-xl font-semibold"
      >
        📍 Get Directions
      </a>
    </motion.div>
  );
}
