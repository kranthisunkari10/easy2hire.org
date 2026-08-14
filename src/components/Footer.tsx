import { Link } from 'react-router-dom'
import { SITE } from '../config/site'
import { FOOTER, ROUTES } from '../config/routes'
import { Logo } from './ui/Logo'

export function Footer() {
  return (
    <footer className="border-t border-black/[0.06] bg-[#fbfbfd]">
      <div className="mx-auto grid max-w-[1080px] gap-8 px-4 py-10 sm:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Link to={ROUTES.home} className="inline-flex">
            <Logo />
          </Link>
          <p className="mt-2 max-w-[240px] text-[12.5px] leading-relaxed text-secondary">
            From skill to offer — resumes, applications, interviews, and certifications.
          </p>
          <p className="mt-3 text-[12px] text-tertiary">{SITE.markets.join(' · ')}</p>
        </div>
        {FOOTER.map((col) => (
          <div key={col.title}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-tertiary">
              {col.title}
            </p>
            <ul className="mt-2 space-y-1.5">
              {col.links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-[13px] text-secondary hover:text-label">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-black/[0.05]">
        <div className="mx-auto flex max-w-[1080px] flex-wrap items-center justify-between gap-2 px-4 py-3 text-[11.5px] text-tertiary">
          <span>© {new Date().getFullYear()} Easy2Hire. All rights reserved.</span>
          <a href={`mailto:${SITE.email}`} className="hover:text-label">
            {SITE.email}
          </a>
        </div>
      </div>
    </footer>
  )
}
