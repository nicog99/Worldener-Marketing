import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { AppStoreButtons } from './AppStoreButtons'
import { ScrollProgress } from './ScrollProgress'

export function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const handleNavClick = () => setOpen(false)

  const isHome = location.pathname === '/'

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur-md relative">
      <ScrollProgress />
      <div className="container-main flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-2" onClick={handleNavClick}>
          <img src="/images/logo.png" alt="Worldener" className="h-9 w-auto md:h-10" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-sm font-medium text-heading transition-colors hover:text-accent"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {link.label}
            </Link>
          ))}
          {isHome ? (
            <a
              href="#download"
              className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-heading transition-opacity hover:opacity-90"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Download
            </a>
          ) : (
            <Link
              to="/#download"
              className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-heading transition-opacity hover:opacity-90"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Download
            </Link>
          )}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-heading lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={cn(
          'fixed inset-0 top-16 z-40 bg-white transition-transform duration-300 lg:hidden',
          open ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <nav className="flex flex-col gap-1 p-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={handleNavClick}
              className="rounded-xl px-4 py-3 text-base font-medium text-heading hover:bg-surface"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 px-4">
            <AppStoreButtons layout="column" />
          </div>
        </nav>
      </div>
    </header>
  )
}
