import Section from './Section.jsx'

export default function Education({ edu }) {
  return (
    <Section id="education" title="Academic background">
      <article className="card edu">
        <p className="years">{edu.years}</p>
        <h3>{edu.degree}</h3>
        <p>{edu.school}</p>
        <p className="muted">Certification: {edu.cert}</p>
      </article>
    </Section>
  )
}
