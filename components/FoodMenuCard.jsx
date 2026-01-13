"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function FoodMenuCard() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* FOOD MENU CARD */}
      <div
        onClick={() => setOpen(true)}
        className="bg-white rounded-2xl shadow-lg p-5 mt-4 cursor-pointer text-gray-900"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold flex items-center gap-2">
            🍽️ Food Menu
          </h2>
          <span className="text-xs text-blue-600">Tap to view</span>
        </div>

        <p className="text-sm mt-2 text-black/80">
          Simple homely food provided daily
        </p>
      </div>

      {/* FOOD MENU MODAL */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl w-full max-w-md p-5 relative"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-3 right-4 text-xl font-bold"
              >
                ✕
              </button>

              <h3 className="text-lg font-bold mb-4 text-center">
                🍽️ Food Details
              </h3>

              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-semibold">🌅 Breakfast</p>
                  <p className="text-black/80">
                    Same type daily (Idly / Dosa / Upma)
                  </p>
                </div>

                <div>
                  <p className="font-semibold">🌞 Lunch</p>
                  <p className="text-black/80">
                    Rice, Curry, Dal, Sambar
                  </p>
                </div>

                <div>
                  <p className="font-semibold">🌙 Dinner</p>
                  <p className="text-black/80">
                    Rice / Chapati with Curry
                  </p>
                </div>

                <div>
                  <p className="font-semibold">🍗 Non-Veg</p>
                  <p className="text-black/80">
                    Provided 2 times per week
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
