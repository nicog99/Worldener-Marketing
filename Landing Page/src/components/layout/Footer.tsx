import { Link } from 'react-router-dom'
import { COMPANY, FOOTER_COLUMNS, SOCIAL_LINKS } from '@/lib/constants'
import { FooterAppLinks } from './AppStoreButtons'

export function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container-main py-14 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6">
          <div className="sm:col-span-2">
            <img
              src="/images/logo.png"
              alt="Worldener"
              className="mb-4 h-10 w-auto brightness-0 invert"
            />
            <p className="max-w-xs text-sm leading-relaxed text-footer-muted">
              Made for gen Z. Built for the world.
            </p>
            <div className="mt-6">
              <FooterAppLinks />
            </div>
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title}>
              <h4
                className="mb-4 text-sm font-semibold uppercase tracking-wider text-white"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {column.title}
              </h4>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    {link.href.startsWith('mailto:') ? (
                      <a
                        href={link.href}
                        className="text-sm text-footer-muted transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-sm text-footer-muted transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-6 md:flex-row md:items-end md:justify-between">
          <div className="text-xs leading-relaxed text-footer-muted">
            <p>{COMPANY.name}</p>
            <p className="mt-1">{COMPANY.address}</p>
            <p className="mt-1">
              Contact:{' '}
              <a href={`mailto:${COMPANY.email}`} className="text-white hover:underline">
                {COMPANY.email}
              </a>
            </p>
            <p className="mt-1">UID: {COMPANY.uid}</p>
            <p className="mt-4">© {new Date().getFullYear()} Worldener. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="opacity-80 transition-opacity hover:opacity-100"
                onClick={(e) => {
                  if (social.href === '#') e.preventDefault()
                }}
              >
                <img src={social.icon} alt="" className="h-6 w-6 object-contain" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
