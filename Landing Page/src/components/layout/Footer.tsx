import { Link } from 'react-router-dom'
import { COMPANY, FOOTER_LINKS } from '@/lib/constants'
import { FooterAppLinks } from './AppStoreButtons'

export function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container-main py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <img src="/images/logo.png" alt="Worldener" className="mb-4 h-10 w-auto brightness-0 invert" />
            <p className="max-w-xs text-sm leading-relaxed text-footer-muted">
              Meaningful travel connections, thoughtfully designed. Be a Worldener and discover the
              beautiful sights and secrets our planet has to offer.
            </p>
          </div>

          <div>
            <h4
              className="mb-4 text-sm font-semibold uppercase tracking-wider text-white"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-footer-muted transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="mb-4 text-sm font-semibold uppercase tracking-wider text-white"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Get the App
            </h4>
            <FooterAppLinks />
            <div className="mt-8 text-sm leading-relaxed text-footer-muted">
              <p>{COMPANY.name}</p>
              <p className="mt-1">{COMPANY.address}</p>
              <p className="mt-1">
                Contact:{' '}
                <a href={`mailto:${COMPANY.email}`} className="text-white hover:underline">
                  {COMPANY.email}
                </a>
              </p>
              <p className="mt-1">UID: {COMPANY.uid}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-footer-muted">
          © {new Date().getFullYear()} Worldener. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
