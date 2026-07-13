"use client"

import { useRef, ReactNode } from "react"
import { motion, useInView } from "framer-motion"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  distance?: number
  once?: boolean
  as?: "div" | "section" | "article" | "span"
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.7,
  direction = "up",
  distance = 48,
  once = true,
  as = "div",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: "-60px" })

  const offset = { x: 0, y: 0 }
  if (direction === "up") offset.y = distance
  else if (direction === "down") offset.y = -distance
  else if (direction === "left") offset.x = distance
  else if (direction === "right") offset.x = -distance

  const Tag = motion[as as keyof typeof motion] as React.ElementType

  return (
    <Tag
      ref={ref}
      initial={{ opacity: 0, ...offset }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...offset }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </Tag>
  )
}
