import Section from './Section.jsx'

export default function Skills({ groups }) {
  return (
    <Section id="skills" title="Technologies I work with">
      <div className="grid grid-3">
        {groups.map((g) => (
          <article className="card" key={g.title}>
            <h3>{g.title}</h3>
            <ul className="tags">{g.items.map((i) => <li key={i}>{i}</li>)}</ul>
          </article>
        ))}
      </div>
      <p className="note">Skills are listed by what I have used in projects. Labels such as “basics” and “fundamentals” are deliberate.</p>
    </Section>
  )
}
