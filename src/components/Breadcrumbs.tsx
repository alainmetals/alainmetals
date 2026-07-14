import Link from "next/link"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 sm:mb-8">
      <ol className="flex flex-wrap items-center gap-1.5 text-[11px] sm:text-xs tracking-wider uppercase text-white/40">
        <li>
          <Link href="/" className="hover:text-gold transition-colors duration-300">
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1.5">
            <span className="text-white/20">/</span>
            {item.href ? (
              <Link href={item.href} className="hover:text-gold transition-colors duration-300">
                {item.label}
              </Link>
            ) : (
              <span className="text-gold/70">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
