import Link from "next/link";
import { FaqAccordion, JourneyTabs, PrototypeCta, RegionCarousel } from "@/components/lunair/prototype-ui";
import { assets, featuredProjects, stats } from "@/lib/lunair-data";

function SiteHeader() {
  return (
    <header className="site-header">
      <Link aria-label="Lunair home" href="/">
        <img alt="Lunair" className="brand-logo" src={assets.logo} />
      </Link>
      <nav className="top-nav">
        <a href="#consultation">Search</a>
        <a href="#featured-projects">Projects</a>
        <a href="#faq">Menu</a>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer" id="footer">
      <div className="footer-copy">
        <div>
          <h2>Subscribe to our news and be the first to receive unique offers</h2>
          <form className="footer-form">
            <label>
              <span className="sr-only">Email</span>
              <input placeholder="EMAIL" type="email" />
            </label>
            <button className="button button-primary" type="submit">
              <span>Subscribe</span>
              <span aria-hidden="true">→</span>
            </button>
          </form>
        </div>
        <div className="footer-meta">
          <p>Copyright © 2024 Mira Estate</p>
          <div>
            <a href="#faq">Privacy Policy</a>
            <a href="#faq">Cookie Policy</a>
            <a href="#faq">LinkedIn</a>
            <a href="#faq">Instagram</a>
          </div>
        </div>
      </div>
      <img alt="Lunair" className="footer-logo" src={assets.logo} />
    </footer>
  );
}

function CtaBlock() {
  return (
    <section className="cta-block fade-up" id="consultation">
      <h2>Let&apos;s shape your next space</h2>
      <div className="cta-form">
        <div className="cta-row">
          <input placeholder="NAME" type="text" />
          <input placeholder="PHONE NUMBER" type="tel" />
          <button className="button button-primary" type="button">
            <span>Get consultation</span>
            <span aria-hidden="true">→</span>
          </button>
        </div>
        <p>
          By submitting this form, you agree to our <u>Privacy Policy</u>
        </p>
      </div>
      <div className="cta-socials">
        <p>or contact us through telegram or whatsapp</p>
        <div>
          <img alt="Telegram" src={assets.telegram} />
          <img alt="WhatsApp" src={assets.whatsapp} />
        </div>
      </div>
    </section>
  );
}

export function Homepage() {
  return (
    <main className="lunair-shell">
      <SiteHeader />

      <section className="hero-section">
        <div className="hero-heading">
          <p className="eyebrow accent">Exceptional Homes. Uncompromising Vision.</p>
          <h1>Elevating Middle Eastern luxury</h1>
        </div>
        <div className="hero-media media-shell hero">
          <img alt="Lunair homepage hero" src={assets.heroHome} />
        </div>
        <div className="hero-intro">
          <p>
            We curate exceptional properties that embody modern design, timeless architecture,
            and the art of refined living.
          </p>
          <PrototypeCta href="#consultation" label="Get consultation" />
        </div>
      </section>

      <section className="stats-row fade-up">
        {stats.map((stat) => (
          <article className="stat-card" key={stat.label}>
            <span>{stat.label}</span>
            <strong>{stat.value}</strong>
          </article>
        ))}
      </section>

      <section className="about-section section-grid">
        <div className="section-title">
          <p className="eyebrow accent">about us</p>
          <h2>who are we ?</h2>
        </div>
        <div className="about-grid">
          <div className="media-shell about-media">
            <img alt="About Lunair" src={assets.about} />
          </div>
          <div className="rich-copy">
            <p>
              Lunair was founded on a simple belief: that true luxury is defined not by excess,
              but by precision.
            </p>
            <p>
              Based across the Middle East, Lunair partners with leading developers and
              visionaries who share our pursuit of excellence. Our work goes beyond transactions.
            </p>
            <p>
              We curate properties that blend contemporary architecture with the quiet beauty of
              space, light, and material.
            </p>
            <a className="button button-secondary" href="#featured-projects">
              <span>Get to know us</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="section-grid">
        <div className="split-heading">
          <div className="section-title compact">
            <p className="eyebrow accent">explore our regions</p>
            <h2>
              From bustling cityscapes to peaceful shores, Lunair spans the Middle East&apos;s
              top destinations.
            </h2>
          </div>
          <a className="button button-primary" href="#featured-projects">
            <span>View all regions</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
        <RegionCarousel />
      </section>

      <section className="section-grid featured-section" id="featured-projects">
        <div className="centered-title">
          <h2>Featured projects</h2>
        </div>
        <div className="project-grid">
          {featuredProjects.map((project, index) => (
            <Link
              className={`project-card fade-up ${index % 3 === 1 ? "large" : ""}`}
              href={project.href}
              key={project.title}
            >
              <div className="media-shell project-media">
                <img alt={project.title} src={project.image} />
              </div>
              <div className="project-copy">
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.location}</p>
                </div>
                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="projects-footer">
          <p>
            Each property is chosen for its architectural integrity, timeless aesthetic, and
            sense of place. We collaborate with leading developers and designers to bring modern
            prestige to life.
          </p>
          <PrototypeCta href="/projects/mira-villas" label="View all projects" />
        </div>
      </section>

      <section className="special-project fade-up">
        <div className="special-copy">
          <div>
            <h2>A new icon of coastal living: Palm Jebel Ali</h2>
            <p>
              An exclusive launch of Dubai&apos;s most anticipated masterpieces. Twice the size of
              Palm Jumeirah, this project combines true waterfront luxury, panoramic sea views and
              villas crafted for life along the city&apos;s most exciting shoreline.
            </p>
            <Link className="button button-secondary light" href="/projects/mira-villas">
              <span>View project</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="slider-row light">
            <span className="slider-count">01 / 02</span>
            <div className="slider-track" aria-hidden="true">
              <span style={{ width: "50%" }} />
            </div>
            <div className="slider-buttons">
              <button className="icon-button ghost light" type="button">
                ←
              </button>
              <button className="icon-button solid light" type="button">
                →
              </button>
            </div>
          </div>
        </div>
        <div className="media-shell special-media">
          <img alt="Palm Jebel Ali" src={assets.specialProject} />
        </div>
      </section>

      <section className="section-grid journey-section">
        <div className="section-title">
          <p className="eyebrow accent">The lunair difference</p>
          <h2>Customer journey</h2>
        </div>
        <JourneyTabs />
        <div className="projects-footer">
          <p>
            At Lunair, we don&apos;t just develop properties. We craft complete living experiences,
            guided by vision, precision, and a deep sense of place.
          </p>
          <a className="button button-secondary" href="#footer">
            <span>Learn more</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <CtaBlock />

      <section className="faq-section section-grid" id="faq">
        <div className="section-title narrow">
          <h2>FAQ</h2>
        </div>
        <FaqAccordion />
      </section>

      <Footer />
    </main>
  );
}
