import { motion } from 'framer-motion'

const jobs = [
  { role: 'Cloud Support Associate', company: 'Northstar', score: 96, state: 'Sent' },
  { role: 'Salesforce Admin', company: 'Helix CRM', score: 94, state: 'Sent' },
  { role: 'Junior DevOps', company: 'Harbor Labs', score: 92, state: 'Queued' },
] as const

export function DeviceMock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full"
    >
      <div className="overflow-hidden rounded-[18px] border border-line bg-white card-shadow">
        <div className="flex items-center justify-between border-b border-line px-4 py-3">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gold-deep">Desk</p>
            <p className="text-[18px] font-semibold text-label">Today’s bridge</p>
          </div>
          <span className="rounded-full bg-blue/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.12em] text-blue">
            Live
          </span>
        </div>

        <div className="grid grid-cols-3 gap-px bg-line">
          {[
            { k: 'ATS avg', v: '94' },
            { k: 'Tailored', v: '12' },
            { k: 'Sent', v: '8' },
          ].map((stat) => (
            <div key={stat.k} className="bg-fill px-3 py-3">
              <p className="text-[10px] uppercase tracking-[0.12em] text-tertiary">{stat.k}</p>
              <p className="text-[22px] font-semibold text-label">{stat.v}</p>
            </div>
          ))}
        </div>

        <div className="space-y-1 p-3">
          {jobs.map((job, i) => (
            <motion.div
              key={job.role}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.08 }}
              className="flex items-center gap-3 rounded-[12px] bg-fill px-3 py-2.5"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[12px] font-semibold text-blue">
                {job.score}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[13px] font-medium text-label">{job.role}</p>
                <p className="text-[11px] text-tertiary">{job.company}</p>
              </div>
              <span
                className={
                  job.state === 'Sent'
                    ? 'rounded-full bg-gold/15 px-1.5 py-0.5 text-[10px] font-medium text-gold-deep'
                    : 'rounded-full bg-blue/10 px-1.5 py-0.5 text-[10px] font-medium text-blue'
                }
              >
                {job.state}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
