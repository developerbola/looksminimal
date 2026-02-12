import { Zap, Shield, Sparkles, Smartphone } from "lucide-react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container navbar-inner">
          <div className="logo-text">
            LOOKS<span style={{ color: "var(--accent-color)" }}>MINIMAL</span>
          </div>
          <div className="nav-links">
            <a href="#" className="nav-link">
              Privacy
            </a>
            <a href="#" className="nav-link">
              Support
            </a>
          </div>
        </div>
      </nav>

      <main>
        <section className="hero">
          <div className="container hero-content animate-fade-in">
            <div className="app-icons">
              <a href="/hashnote" className="app-card glass animate-float">
                <img
                  src="/favicons/hashnote.svg"
                  alt="Hashnote"
                  className="app-icon"
                />
                <span className="app-name">Hashnote</span>
              </a>
              <a
                href="/player"
                className="app-card glass animate-float"
                style={{ animationDelay: "0.5s" }}
              >
                <img
                  src="/favicons/player.svg"
                  alt="Player"
                  className="app-icon"
                />
                <span className="app-name">Player</span>
              </a>
            </div>

            <h1 className="title">
              Discover Simple & <br /> Beautiful Apps
            </h1>
            <p className="subtitle">
              Experience the art of minimalism. We build clean, focused tools
              designed to enhance your digital life without the clutter.
            </p>

            <div style={{ marginTop: "2rem" }}>
              <button className="explore-btn">Explore Collection</button>
            </div>
          </div>
        </section>

        <section className="features">
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
                Why Minimal?
              </h2>
              <p
                style={{
                  color: "var(--text-secondary)",
                  maxWidth: "600px",
                  margin: "0 auto",
                }}
              >
                We believe that less is more. Our apps are built with a focus on
                core functionality and elegant design.
              </p>
            </div>

            <div className="features-grid">
              <div className="feature-card glass">
                <Zap className="feature-icon" />
                <h3 className="feature-title">Lightning Fast</h3>
                <p className="feature-text">
                  Optimized for performance. No bloat, just the features you
                  need to get things done.
                </p>
              </div>
              <div className="feature-card glass">
                <Shield className="feature-icon" />
                <h3 className="feature-title">Privacy First</h3>
                <p className="feature-text">
                  Your data stays with you. We don't track, we don't sell, we
                  just provide great tools.
                </p>
              </div>
              <div className="feature-card glass">
                <Sparkles className="feature-icon" />
                <h3 className="feature-title">Pure Design</h3>
                <p className="feature-text">
                  Aesthetic interfaces that are a joy to use. Designed to stay
                  out of your way.
                </p>
              </div>
              <div className="feature-card glass">
                <Smartphone className="feature-icon" />
                <h3 className="feature-title">Fully Responsive</h3>
                <p className="feature-text">
                  Seamless experience across all your devices. From desktop to
                  mobile, it just works.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer
        style={{
          padding: "4rem 0",
          textAlign: "center",
          borderTop: "1px solid var(--card-border)",
        }}
      >
        <div className="container">
          <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
            © {new Date().getFullYear()} Looks Minimal. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
