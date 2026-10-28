import { sections } from '../data.js'

export default function Footer({ profile }) {
  const social = [['Email', `mailto:${profile.email}`], ['GitHub', profile.github], ['LinkedIn', profile.linkedin]]
    .filter(([, href]) => href)
  return (
    <footer className="footer">
      <div className="container foot">
        <div>
          <strong>{profile.name}</strong>
          <p className="muted">Java Full Stack Developer (fresher) building practical applications with Spring Boot, React and MySQL.</p>
        </div>
        <nav aria-label="Footer">
          <ul>{sections.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}</ul>
        </nav>
        <ul>{social.map(([label, href]) => <li key={label}><a href={href}>{label}</a></li>)}</ul>
      </div>
      <div className="container copy">© {new Date().getFullYear()} {profile.name}</div>
    </footer>
  )
}
