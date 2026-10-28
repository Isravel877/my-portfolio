import { useEffect, useRef } from 'react'

// Wraps a page section: semantic heading plus a short fade-in on first view.
export default function Section({ id, title, children }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!('IntersectionObserver' in window)) return el.classList.add('in')
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('in'); io.disconnect() }
    }, { rootMargin: '0px 0px -8% 0px' })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <section id={id} ref={ref} className="section reveal" aria-labelledby={`${id}-title`}>
      <div className="container">
        <h2 id={`${id}-title`}>{title}</h2>
        {children}
      </div>
    </section>
  )
}
