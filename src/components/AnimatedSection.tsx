"use client"

import { ReactNode } from "react"
import { ScrollReveal } from "./ScrollReveal"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  id?: string
  delay?: number
}

export function AnimatedSection({
  children,
  className = "",
  id,
  delay = 0,
}: AnimatedSectionProps) {
  return (
    <ScrollReveal delay={delay} className={className}>
      <section id={id}>{children}</section>
    </ScrollReveal>
  )
}
