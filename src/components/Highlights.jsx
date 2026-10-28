import Section from './Section.jsx'

export default function Highlights({ items }) {
  return (
    <Section id="highlights" title="What I can bring to a team">
      <ul className="list big">{items.map((i) => <li key={i}>{i}</li>)}</ul>
    </Section>
  )
}
