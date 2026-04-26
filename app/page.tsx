export default function Home() {
  return (
    <main className="coming-soon-page">
      <section className="hero">
        <div className="label-row">
          <p className="mono-label">YOUTUBE SHORTS SERIES</p>
          <span className="launching-pill" aria-hidden>
            Launching Soon
          </span>
        </div>

        <h1 className="hero-title">
          Ecamm
          <br />
          for Noobs
        </h1>

        <p className="hero-tagline">
          &ldquo;One feature.
          <br />
          One short.
          <br />
          Every answer you need.&rdquo;
        </p>

        <p className="supporting-text">
          A new beginner-friendly reference library for learning Ecamm, one
          problem at a time.
        </p>

        <div className="hero-actions">
          <button className="btn btn-primary" type="button">
            Coming Soon
          </button>
          <a className="btn btn-secondary" href="#">
            YouTube Channel
          </a>
        </div>
      </section>

      <section className="stats-strip" aria-label="Launch stats">
        <p>35+ Planned Shorts</p>
        <p>4 Learning Phases</p>
        <p>60 Seconds Max</p>
        <p>Zero Fluff</p>
      </section>

      <section className="launch-list">
        <h2>Launching With Tutorials On</h2>
        <ul>
          <li>Profiles vs Scenes</li>
          <li>Where Did My Panel Go?</li>
          <li>Global vs Scene Overlays</li>
          <li>Preview vs Live</li>
          <li>Stream Deck with Ecamm</li>
        </ul>
      </section>

      <section className="waitlist-placeholder" aria-label="Email waitlist">
        <h2>Get notified when we launch</h2>
        <div className="waitlist-form">
          <input type="email" placeholder="Enter your email" disabled />
          <button type="button">Notify Me</button>
        </div>
      </section>

      <aside className="disclosure-note">
        Independent tutorial site.
        <br />
        Not affiliated with Ecamm.
        <br />
        Affiliate-supported recommendations may be included.
      </aside>

      <footer className="site-footer">
        <p>&copy; Ecamm for Noobs</p>
        <p>Coming Soon</p>
      </footer>
    </main>
  );
}
