"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function RoomsCard() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Main Card */}
      <motion.div
        whileTap={{ scale: 0.98 }}
        onClick={() => setOpen(true)}
        className="bg-white rounded-2xl shadow-lg p-4 mt-4 cursor-pointer"
      >
        <h2 className="text-lg font-extrabold text-gray-900 opacity-100 flex items-center gap-2">
          🛏️ Rooms & Rent
        </h2>

        <p className="text-sm text-gray-600 mt-1">
          Non-AC • 2 / 3 / 4 / 5 Sharing
        </p>

        <p className="text-xs text-blue-600 mt-2 font-medium">
          👉 Tap to view room details & rent
        </p>
      </motion.div>

      {/* Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/40 flex items-end justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            {/* Modal */}
            <motion.div
              initial={{ y: 300 }}
              animate={{ y: 0 }}
              exit={{ y: 300 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full max-w-md rounded-t-3xl p-5"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-extrabold text-gray-900 opacity-100">
                  🛏️ Rooms & Rent
                </h3>
                <button
                  onClick={() => setOpen(false)}
                  className="text-gray-700 text-xl font-bold"
                >
                  ✕
                </button>
              </div>

              {/* Rooms */}
              <div className="space-y-3 text-sm">
                <Room
                  title="5 Sharing – Non-AC"
                  price="₹6,000 / month"
                  bg="bg-indigo-50"
                />
                <Room
                  title="4 Sharing – Non-AC"
                  price="₹6,500 / month"
                  bg="bg-indigo-50"
                />
                <Room
                  title="3 Sharing – Non-AC"
                  price="₹7,000 And ₹8,000 / month"
                  bg="bg-cyan-50"
                />
                <Room
                  title="2 Sharing – Non-AC"
                  price="₹9,500 / month"
                  bg="bg-green-50"
                />

                {/* Advance Note */}
                <p className="mt-3 text-center text-xs font-semibold text-orange-600 animate-pulse">
                  Advance ₹3,000 applicable • ₹2,000 refundable • One month prior notice mandatory
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* EACH ROOM CARD – iPhone SAFE */
function Room({
  title,
  price,
  bg,
}: {
  title: string;
  price: string;
  bg: string;
}) {
  return (
    <div className={`rounded-xl p-3 border border-gray-200 ${bg}`}>
      <p className="font-semibold text-gray-900 opacity-100">
        {title}
      </p>
      <p className="text-gray-800 opacity-100">
        {price}
      </p>
    </div>
  );
}
