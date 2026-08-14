import { motion } from 'framer-motion'
import { publicAsset } from '../lib/urls'

const jobs = [
  { role: 'Cloud Support Associate', company: 'Northstar', score: 96, state: 'Applied' },
  { role: 'Salesforce Admin', company: 'Helix CRM', score: 94, state: 'Applied' },
  { role: 'Junior DevOps', company: 'Harbor Labs', score: 92, state: 'Queued' },
] as const

export function DeviceMock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotateX: 8 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-[232px]"
      style={{ perspective: 900 }}
    >
      <div className="pointer-events-none absolute -inset-8 -z-10 rounded-full bg-[radial-gradient(circle,rgba(255,122,26,0.18),transparent_68%)] blur-2xl" />
      <div className="rounded-[36px] border border-black/10 bg-navy p-[9px] shadow-[0_18px_50px_rgba(28,36,48,0.28)]">
        <div className="overflow-hidden rounded-[28px] bg-[#f2f2f7]">
          <div className="relative bg-white px-4 pb-2.5 pt-3">
            <div className="mx-auto mb-3 h-[18px] w-[88px] rounded-full bg-black" />
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] font-medium text-secondary">Portal</p>
                <p className="text-[15px] font-semibold tracking-[-0.03em] text-label">Today</p>
              </div>
              <img src={publicAsset('easy2hire.png')} alt="" className="h-7 w-7 object-contain" />
            </div>
          </div>

          <div className="space-y-2 px-2.5 py-2.5">
            <div className="flex items-center gap-3 rounded-[16px] bg-white p-3 card-shadow">
              <ScoreRing value={94} />
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.08em] text-tertiary">
                  ATS average
                </p>
                <p className="text-[13px] font-semibold tracking-[-0.02em]">Ready to send</p>
                <p className="text-[11px] text-secondary">12 tailored files today</p>
              </div>
            </div>

            <div className="rounded-[16px] bg-white p-1.5 card-shadow">
              {jobs.map((job, i) => (
                <motion.div
                  key={job.role}
                  initial={{ opacity: 0, x: 8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 + i * 0.08 }}
                  className="flex items-center gap-2 rounded-[12px] px-2 py-2"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-fill text-[10px] font-semibold text-navy">
                    {job.score}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[12px] font-medium tracking-[-0.02em]">{job.role}</p>
                    <p className="text-[10.5px] text-tertiary">{job.company}</p>
                  </div>
                  <span
                    className={
                      job.state === 'Applied'
                        ? 'rounded-full bg-[#34c759]/15 px-1.5 py-0.5 text-[9.5px] font-medium text-[#248a3d]'
                        : 'rounded-full bg-orange/15 px-1.5 py-0.5 text-[9.5px] font-medium text-orange'
                    }
                  >
                    {job.state}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function ScoreRing({ value }: { value: number }) {
  const r = 18
  const c = 2 * Math.PI * r
  const offset = c - (value / 100) * c
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" className="shrink-0">
      <circle cx="24" cy="24" r={r} fill="none" stroke="#eee" strokeWidth="4" />
      <motion.circle
        cx="24"
        cy="24"
        r={r}
        fill="none"
        stroke="#ff7a1a"
        strokeWidth="4"
        strokeLinecap="round"
        className="ring-ats"
        strokeDasharray={c}
        initial={{ strokeDashoffset: c }}
        whileInView={{ strokeDashoffset: offset }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: '24px 24px' }}
      />
      <text
        x="24"
        y="27"
        textAnchor="middle"
        className="fill-label"
        style={{ fontSize: '11px', fontWeight: 650 }}
      >
        {value}
      </text>
    </svg>
  )
}
