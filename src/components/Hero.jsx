const CODE = `@RestController
@RequestMapping("/api/requests")
public class HelpRequestController {

  @GetMapping
  public List<HelpRequest> list() {
    return service.findAll();
  }
}`

export default function Hero({ profile }) {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">Java Full Stack Developer</p>
          <h1 id="hero-title">Building Practical Solutions with Java and Modern Web Technologies.</h1>
          <p className="lead">
            I’m a Computer Science graduate focused on Java full-stack development, backend engineering, and
            building practical web applications using Spring Boot, React, and MySQL.
          </p>
          <div className="actions">
            <a className="btn btn-primary" href="#projects">Explore My Projects</a>
            <a className="btn btn-secondary" href={profile.resume} download>Download Resume</a>
            <a className="text-link" href="#contact">Contact Me</a>
          </div>
        </div>
        <figure className="code-card" aria-label="Illustrative Spring Boot controller example">
          <figcaption><span className="dots" aria-hidden="true" />HelpRequestController.java (illustrative example)</figcaption>
          <pre><code>{CODE}</code></pre>
          <div className="chips">
            {['Spring Boot', 'React', 'MySQL'].map((t) => <span key={t} className="chip">{t}</span>)}
          </div>
        </figure>
      </div>
    </section>
  )
}
