import { useState } from 'react'
import { sections } from '../data.js'

export default function Navbar({ profile }) {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <header className="nav" onKeyDown={(e) => e.key === 'Escape' && close()}>
      <div className="container nav-inner">
        <a className="brand" href="#home" onClick={close}>{profile.name}</a>
        <button className="menu-btn" aria-expanded={open} aria-controls="primary-nav" onClick={() => setOpen(!open)}>
          {open ? 'Close' : 'Menu'}
        </button>
        <nav id="primary-nav" className={open ? 'open' : ''} aria-label="Primary">
          <ul>
            {sections.map(([id, label]) => (
              <li key={id}><a href={`#${id}`} onClick={close}>{label}</a></li>
            ))}
          </ul>
          <a className="btn btn-primary btn-sm" href={profile.resume} download onClick={close}>Download Resume</a>
        </nav>
      </div>
    </header>
  )
}
