import { useState } from 'react'
import Section from './Section.jsx'

function Field({ name, label, value, error, onChange, area }) {
  const Tag = area ? 'textarea' : 'input'
  return (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      <Tag
        id={name} name={name} value={value} onChange={onChange}
        rows={area ? 5 : undefined}
        type={area ? undefined : name === 'email' ? 'email' : 'text'}
        autoComplete={area ? 'off' : name}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-err` : undefined}
      />
      {error && <p id={`${name}-err`} className="err" role="alert">{error}</p>}
    </div>
  )
}

export default function Contact({ profile }) {
  const [f, setF] = useState({ name: '', email: '', message: '' })
  const [errs, setErrs] = useState({})
  const [status, setStatus] = useState('')
  const onChange = (e) => setF({ ...f, [e.target.name]: e.target.value })

  // No backend: validate, then open the visitor's email app. Nothing is claimed as "sent".
  const onSubmit = (e) => {
    e.preventDefault()
    const er = {}
    if (!f.name.trim()) er.name = 'Enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(f.email.trim())) er.email = 'Enter a valid email address, like name@example.com.'
    if (f.message.trim().length < 10) er.message = 'Write a message of at least 10 characters.'
    setErrs(er)
    if (Object.keys(er).length) return setStatus('')
    const subject = encodeURIComponent(`Portfolio enquiry from ${f.name.trim()}`)
    const body = encodeURIComponent(`${f.message.trim()}\n\n${f.name.trim()} (${f.email.trim()})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setStatus('Your email app should open with the message ready. It is only sent when you press Send there.')
  }

  const rows = [
    ['Email', profile.email, `mailto:${profile.email}`],
    ['GitHub', profile.github, profile.github],
    ['LinkedIn', profile.linkedin, profile.linkedin],
    ['Location', profile.location, ''],
  ]
  return (
    <Section id="contact" title="Let’s connect">
      <div className="contact">
        <div>
          <p className="lead">
            I’m open to entry-level Java Full Stack and Software Developer roles. Recruiters and developers are welcome to get in touch.
          </p>
          <dl className="details">
            {rows.map(([k, v, href]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{href ? <a href={href} rel="noreferrer">{v}</a> : v || 'Link coming soon'}</dd>
              </div>
            ))}
          </dl>
        </div>
        <form className="card" onSubmit={onSubmit} noValidate>
          <Field name="name" label="Your name" value={f.name} error={errs.name} onChange={onChange} />
          <Field name="email" label="Your email" value={f.email} error={errs.email} onChange={onChange} />
          <Field name="message" label="Message" value={f.message} error={errs.message} onChange={onChange} area />
          <button className="btn btn-primary" type="submit">Send with my email app</button>
          {status && <p className="status" role="status">{status}</p>}
        </form>
      </div>
    </Section>
  )
}
