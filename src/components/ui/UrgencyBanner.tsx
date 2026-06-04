"use client";

import { useState } from "react";
import { X, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function UrgencyBanner() {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-[#EA580C] text-white text-xs sm:text-sm overflow-hidden"
          role="banner"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 flex-1 justify-center">
              <Zap size={14} className="fill-white shrink-0" aria-hidden />
              <span className="font-medium text-center text-white">
                <strong>Especialistas en ventanas PVC premium</strong> · Visita técnica gratuita ·{" "}
                <button
                  onClick={() => document.querySelector("#cotizar")?.scrollIntoView({ behavior: "smooth" })}
                  className="underline underline-offset-2 font-bold hover:no-underline text-white"
                >
                  Cotiza ahora →
                </button>
              </span>
            </div>
            <button onClick={() => setVisible(false)} className="text-white/80 hover:text-white shrink-0 p-0.5" aria-label="Cerrar">
              <X size={15} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
