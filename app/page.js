import styles from "./page.module.css";

const features = [
  {
    title: "Fast by default",
    body: "Static-first pages that load quickly on any connection, anywhere.",
  },
  {
    title: "Built to scale",
    body: "Add sections, routes, and content without reworking the foundation.",
  },
  {
    title: "Responsive everywhere",
    body: "Fluid type and flexible grids that hold up from 360px to widescreen.",
  },
];

const points = [
  "Mobile-first layout with a small, consistent breakpoint set",
  "Fluid typography that scales smoothly between sizes",
  "Tap targets sized for thumbs, not cursors",
  "Light and dark themes out of the box",
];

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={`${styles.shell} ${styles.headerInner}`}>
          <a className={styles.brand} href="#top">
            <span className={styles.mark} aria-hidden="true" />
            Placeholder
          </a>

          <input
            className={styles.navToggle}
            type="checkbox"
            id="nav-toggle"
            aria-label="Toggle navigation"
          />
          <label className={styles.navButton} htmlFor="nav-toggle">
            Menu
          </label>

          <nav className={styles.nav} aria-label="Main">
            <a href="#features">Features</a>
            <a href="#approach">Approach</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className={`${styles.shell} ${styles.hero}`}>
          <div>
            <span className={styles.eyebrow}>Coming soon</span>
            <h1 className={styles.title}>
              Something good is being built here.
            </h1>
            <p className={styles.lede}>
              This is a placeholder site — a clean, responsive starting point
              you can shape into the real thing whenever you&rsquo;re ready.
            </p>
            <div className={styles.actions}>
              <a className={`${styles.btn} ${styles.btnPrimary}`} href="#contact">
                Get in touch
              </a>
              <a className={`${styles.btn} ${styles.btnGhost}`} href="#features">
                See what&rsquo;s inside
              </a>
            </div>
          </div>
          <div className={styles.heroPanel} aria-hidden="true">
            Placeholder
          </div>
        </section>

        <section id="features" className={styles.section}>
          <div className={styles.shell}>
            <div className={styles.sectionHead}>
              <h2 className={styles.sectionTitle}>What you get</h2>
              <p className={styles.sectionLede}>
                Three starting blocks, ready to be renamed and rewritten.
              </p>
            </div>
            <div className={styles.grid}>
              {features.map((feature) => (
                <article className={styles.card} key={feature.title}>
                  <div className={styles.cardIcon} aria-hidden="true" />
                  <h3 className={styles.cardTitle}>{feature.title}</h3>
                  <p className={styles.cardBody}>{feature.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="approach" className={styles.section}>
          <div className={`${styles.shell} ${styles.split}`}>
            <div className={styles.splitPanel} aria-hidden="true" />
            <div>
              <h2 className={styles.sectionTitle}>Designed mobile-first</h2>
              <p className={styles.sectionLede}>
                The base layout targets the smallest screen, then grows into
                tablet and desktop — so nothing feels like an afterthought.
              </p>
              <ul className={styles.list}>
                {points.map((point) => (
                  <li key={point}>
                    <span className={styles.tick} aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className={styles.section}>
          <div className={styles.shell}>
            <div className={styles.cta}>
              <h2 className={styles.sectionTitle}>Want to go live sooner?</h2>
              <p className={styles.sectionLede}>
                Swap this copy for yours and the site is ready to publish.
              </p>
              <div className={styles.actions}>
                <a
                  className={`${styles.btn} ${styles.btnPrimary}`}
                  href="mailto:hello@example.com"
                >
                  hello@example.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={`${styles.shell} ${styles.footerInner}`}>
          <p className={styles.fine}>
            &copy; {new Date().getFullYear()} Placeholder. All rights reserved.
          </p>
          <nav className={styles.footerNav} aria-label="Footer">
            <a href="#features">Features</a>
            <a href="#approach">Approach</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </footer>
    </>
  );
}
