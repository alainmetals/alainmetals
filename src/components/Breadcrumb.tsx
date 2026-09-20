import Link from "next/link"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center gap-2 text-[10px] tracking-[0.1em] uppercase">
        <li>
          <Link href="/" className="text-gray-500 hover:text-gold transition-colors">
            Home
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="text-gray-600">/</span>
            {item.href ? (
              <Link href={item.href} className="text-gray-500 hover:text-gold transition-colors">
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
