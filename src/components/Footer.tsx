import { Link } from 'react-router-dom'
import { SITE } from '../config/site'
import { FOOTER, ROUTES } from '../config/routes'
import { Logo } from './ui/Logo'
import { scrollToTop } from '../hooks/useLenis'

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto grid max-w-[1120px] gap-10 px-4 py-14 sm:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <Link to={ROUTES.home} className="inline-flex" onClick={() => scrollToTop()}>
            <Logo />
          </Link>
          <p className="mt-4 max-w-[280px] text-[13.5px] leading-relaxed text-secondary">
            A career studio that carries IT talent from a prepared profile to a real interview.
          </p>
          <p className="mt-4 text-[12px] font-medium tracking-[0.04em] text-blue">Serving {SITE.markets[0]}</p>
        </div>
        {FOOTER.map((col) => (
          <div key={col.title}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-deep">
              {col.title}
            </p>
            <ul className="mt-3 space-y-2">
              {col.links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-[14px] text-secondary hover:text-blue">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-line bg-fill">
        <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-2 px-4 py-4 text-[12px] text-tertiary">
          <span>© {new Date().getFullYear()} TalentBridge. All rights reserved.</span>
          <a href={`mailto:${SITE.email}`} className="hover:text-blue">
            {SITE.email}
          </a>
        </div>
      </div>
    </footer>
  )
}
