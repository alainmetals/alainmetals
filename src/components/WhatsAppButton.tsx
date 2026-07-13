"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { company } from "@/lib/siteData"

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  const whatsappUrl = `https://wa.me/${company.whatsapp}?text=Hello%20${encodeURIComponent(company.name)}%2C%20I%20would%20like%20to%20inquire%20about%20your%20gold%20export%20services.`

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300"
          aria-label="Chat on WhatsApp"
        >
          <svg
            viewBox="0 0 32 32"
            className="w-7 h-7 fill-white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 0C7.164 0 0 7.164 0 16c0 3.036.84 5.872 2.304 8.312L.8 31.2l7.184-1.628A15.94 15.94 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.2a13.16 13.16 0 01-6.648-1.82l-.476-.28-4.264.956.896-4.12-.308-.496A13.12 13.12 0 012.8 16C2.8 8.728 8.728 2.8 16 2.8S29.2 8.728 29.2 16 23.272 29.2 16 29.2zm7.272-9.572c-.4-.2-2.372-1.172-2.74-1.304-.368-.132-.636-.2-.904.2-.268.4-1.04 1.304-1.276 1.572-.236.268-.472.3-.872.1s-1.704-.628-3.244-2.004c-1.2-1.072-2.008-2.396-2.244-2.8-.236-.404-.024-.624.176-.824.18-.18.4-.472.6-.708.2-.236.268-.4.4-.672.132-.272.068-.508-.032-.708-.1-.2-.904-2.176-1.24-2.98-.328-.788-.66-.656-.904-.668-.236-.012-.508-.012-.78-.012-.272 0-.712.1-1.084.5-.372.4-1.42 1.388-1.42 3.384s1.452 3.928 1.656 4.2c.204.272 2.82 4.412 6.968 6.004 4.148 1.592 4.148 1.06 4.896.992.748-.068 2.412-.984 2.752-1.936.34-.952.34-1.768.236-1.94-.1-.172-.372-.272-.772-.472z" />
          </svg>
        </motion.a>
      )}
    </AnimatePresence>
  )
}
