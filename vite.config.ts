import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data:",
  "connect-src 'self' https://formsubmit.co",
  "form-action 'self' https://formsubmit.co mailto:",
  "base-uri 'self'",
  "object-src 'none'",
].join('; ')

function htmlSecurity() {
  return {
    name: 'html-security',
    transformIndexHtml: {
      order: 'post' as const,
      handler(html: string, ctx: { server?: unknown }) {
        if (ctx.server) return html
        const tags = [
          `<meta http-equiv="Content-Security-Policy" content="${CSP}" />`,
          '<meta name="referrer" content="strict-origin-when-cross-origin" />',
          '<meta http-equiv="X-Content-Type-Options" content="nosniff" />',
        ].join('\n    ')
        return html.replace('<head>', `<head>\n    ${tags}`)
      },
    },
  }
}

export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss(), htmlSecurity()],
  base: command === 'build' ? '/talentbridge/' : '/',
}))
