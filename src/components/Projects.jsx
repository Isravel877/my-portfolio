import Section from './Section.jsx'

const ROWS = [['Drinking water needed', 'Pending'], ['Medical assistance', 'Assigned'], ['Temporary shelter', 'Resolved']]
const LAYERS = ['React UI', 'REST Controller', 'Service', 'Repository (JPA / Hibernate)', 'MySQL']

const Tags = ({ items }) => <ul className="tags">{items.map((t) => <li key={t}>{t}</li>)}</ul>
const Block = ({ title, items }) => (
  <div>
    <h4>{title}</h4>
    <ul className="list">{items.map((i) => <li key={i}>{i}</li>)}</ul>
  </div>
)

// Missing links render as a disabled placeholder instead of a dead button.
function Links({ repo, demo }) {
  return (
    <div className="actions">
      {repo
        ? <a className="btn btn-primary" href={repo} target="_blank" rel="noreferrer">GitHub Repository</a>
        : <span className="btn btn-disabled" aria-disabled="true">GitHub link coming soon</span>}
      {demo
        ? <a className="btn btn-secondary" href={demo} target="_blank" rel="noreferrer">Live Demo</a>
        : <span className="btn btn-disabled" aria-disabled="true">Live demo not available yet</span>}
    </div>
  )
}

export default function Projects({ projects }) {
  const [main, ...others] = projects
  return (
    <Section id="projects" title="What I’ve built">
      <article className="card feature">
        <div className="feature-top">
          <div>
            <span className="badge">Featured project</span>
            <h3>{main.title}</h3>
            <p className="lead">{main.summary}</p>
            <p><strong>The problem:</strong> {main.problem}</p>
            <Tags items={main.stack} />
            <Links repo={main.repo} demo={main.demo} />
          </div>
          <figure className="mock" aria-label="Illustrative interface preview with placeholder data">
            <div className="mock-bar"><strong>Help requests</strong><span>Admin view</span></div>
            <ul>
              {ROWS.map(([t, s]) => (
                <li key={t}><span>{t}</span><span className={`pill ${s.toLowerCase()}`}>{s}</span></li>
              ))}
            </ul>
            <figcaption>Illustrative preview with placeholder data. Not a screenshot.</figcaption>
          </figure>
        </div>
        <div className="cols">
          <Block title="Key areas" items={main.features} />
          <Block title="My technical contributions" items={main.contributions} />
        </div>
        <div>
          <h4>Architecture</h4>
          <ol className="layers">{LAYERS.map((l) => <li key={l}>{l}</li>)}</ol>
        </div>
        <div>
          <h4>Challenges and approach</h4>
          <dl className="challenges">
            {main.challenges.map(([c, a]) => <div key={c}><dt>{c}</dt><dd>{a}</dd></div>)}
          </dl>
        </div>
      </article>
      <div className="grid grid-2">
        {others.map((p) => (
          <article className="card" key={p.title}>
            <h3>{p.title}</h3>
            <p className="muted">{p.summary}</p>
            <Tags items={p.stack} />
            <Block title="Focus" items={p.points} />
            <Links repo={p.repo} demo={p.demo} />
          </article>
        ))}
        <div className="card placeholder">More projects will be added here.</div>
      </div>
    </Section>
  )
}
