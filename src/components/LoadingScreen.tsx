"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { company } from "@/lib/siteData"

export function LoadingScreen() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
        >
          <div className="flex flex-col items-center gap-8">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative"
            >
              <div className="w-20 h-20 border-2 border-gold/30 rounded-full flex items-center justify-center">
                <span className="text-gold text-2xl font-bold font-serif">A</span>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-t-2 border-gold rounded-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-gold/80 text-xs tracking-[0.3em] uppercase font-medium">
                {company.shortName}
              </span>
              <div className="w-24 h-[1.5px] bg-gold/20 rounded-full overflow-hidden">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "200%" }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-full h-full bg-gradient-to-r from-transparent via-gold to-transparent"
                />
              </div>
              <span className="text-white/70 text-[10px] tracking-[0.2em] uppercase">
                Loading
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
