import Section from './Section.jsx'

export default function About({ profile }) {
  const facts = [
    ['Focus', 'Java backend and full-stack development'],
    ['Core stack', 'Spring Boot, React, MySQL'],
    ['Looking for', 'An entry-level Java Full Stack or Software Developer role'],
    ['Languages', 'Tamil, English'],
    ['Location', profile.location],
  ]
  return (
    <Section id="about" title="A fresher who builds full-stack projects">
      <div className="split">
        <div className="prose">
          <p>
            I hold a B.Sc. in Computer Science and enjoy Java backend and full-stack development. I built
            DisasterConnect with Spring Boot, React and MySQL to understand how a real application fits together:
            database design, REST APIs and a React interface.
          </p>
          <p>
            I like solving problems step by step and learning core software engineering concepts. I want to
            contribute to a development team, learn from experienced engineers and keep growing.
          </p>
        </div>
        <dl className="card facts">
          {facts.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
        </dl>
      </div>
    </Section>
  )
}
