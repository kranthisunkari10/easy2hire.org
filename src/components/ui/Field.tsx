import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react'

export const controlClass =
  'w-full rounded-[12px] border border-line bg-fill px-3 py-2.5 text-[14px] text-label outline-none transition-colors focus:border-blue'

function Label({ children }: { children: ReactNode }) {
  return <span className="mb-1.5 block text-[12px] font-medium text-secondary">{children}</span>
}

type TextProps = {
  label: string
  name: string
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'name'>

export function TextField({ label, name, ...rest }: TextProps) {
  return (
    <label className="block">
      <Label>{label}</Label>
      <input name={name} className={controlClass} {...rest} />
    </label>
  )
}

type SelectProps = {
  label: string
  name: string
  children: ReactNode
} & Omit<SelectHTMLAttributes<HTMLSelectElement>, 'name'>

export function SelectField({ label, name, children, ...rest }: SelectProps) {
  return (
    <label className="block">
      <Label>{label}</Label>
      <select name={name} className={controlClass} {...rest}>
        {children}
      </select>
    </label>
  )
}

type AreaProps = {
  label: string
  name: string
} & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'name'>

export function TextAreaField({ label, name, ...rest }: AreaProps) {
  return (
    <label className="block">
      <Label>{label}</Label>
      <textarea name={name} className={`${controlClass} resize-y`} {...rest} />
    </label>
  )
}

export function HoneypotField() {
  return (
    <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
      <label>
        Website
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </label>
    </div>
  )
}
