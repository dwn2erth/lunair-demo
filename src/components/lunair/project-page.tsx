import Link from "next/link";
import { LayoutFilterShowcase, NeighbourhoodMap, PrototypeCta } from "@/components/lunair/prototype-ui";
import { amenities, assets } from "@/lib/lunair-data";

function ProjectHeader() {
  return (
    <header className="site-header">
      <Link aria-label="Lunair home" href="/">
        <img alt="Lunair" className="brand-logo" src={assets.logo} />
      </Link>
      <nav className="top-nav">
        <Link href="/">Home</Link>
        <a href="#layouts">Layouts</a>
        <a href="#neighbourhood">Neighbourhood</a>
      </nav>
    </header>
  );
}

export function ProjectPage() {
  return (
    <main className="lunair-shell project-shell">
      <ProjectHeader />

      <section className="project-hero">
        <div className="project-hero-top">
          <h1>Mira Villas</h1>
          <PrototypeCta href="#consultation" label="Get consultation" />
        </div>
        <div className="media-shell project-hero-media">
          <img alt="Mira Villas hero" src={assets.projectHero} />
        </div>
        <div className="slider-row">
          <span className="slider-count">01 / 08</span>
          <div className="slider-track" aria-hidden="true">
            <span style={{ width: "12.5%" }} />
          </div>
          <div className="slider-buttons">
            <button className="icon-button ghost" type="button">
              ←
            </button>
            <button className="icon-button solid" type="button">
              →
            </button>
          </div>
        </div>
      </section>

      <section className="project-intro">
        <div className="project-meta">
          <div className="location-card">
            <div className="location-icon">↗</div>
            <div>
              <span className="eyebrow">Location</span>
              <strong>Meydan, Dubai</strong>
            </div>
          </div>
          <div className="kpi-grid">
            <article>
              <span>From</span>
              <strong>5 bed</strong>
            </article>
            <article>
              <span>Interior</span>
              <strong>7 bath</strong>
            </article>
            <article>
              <span>Area</span>
              <strong>12,997 sq ft</strong>
            </article>
            <article>
              <span>Delivery</span>
              <strong>2027</strong>
            </article>
            <article>
              <span>Views</span>
              <strong>Lagoon</strong>
            </article>
            <article>
              <span>Access</span>
              <strong>15 min city</strong>
            </article>
          </div>
        </div>
        <div className="project-description">
          <div className="tag-row">
            <span className="tag">Bentley Home</span>
            <span className="tag">Private Pool</span>
            <span className="tag">Lagoon Views</span>
            <span className="tag">5 Star Lounge</span>
          </div>
          <p>
            Mira Villas designed by Bentley Home is the world&apos;s first villa community featuring
            ready-to-move-in interiors by Bentley Home. Located in Meydan, just fifteen minutes
            from Burj Khalifa, these luxurious 5-bedroom villas and mansions offer stunning lagoon
            views, private swimming pools, a one-of-a-kind gymnasium by Technogym and a 5-star
            lounge for friendly or business gatherings.
          </p>
          <PrototypeCta href="#consultation" label="Get consultation" />
        </div>
      </section>

      <section className="amenities-section">
        <div className="sticky-copy">
          <p className="eyebrow accent">Amenities</p>
          <h2>The amenities speak for themselves</h2>
        </div>
        <div className="amenity-grid">
          {amenities.map((amenity, index) => (
            <article className={`amenity-card fade-up ${index % 3 === 1 ? "offset" : ""}`} key={amenity}>
              {index === 0 ? (
                <div className="media-shell square">
                  <img alt={amenity} src={assets.projectAlt} />
                </div>
              ) : null}
              <h3>{amenity}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section-grid" id="layouts">
        <div className="split-heading">
          <div className="section-title compact">
            <h2>Project layouts</h2>
          </div>
          <PrototypeCta href="#consultation" label="Download brochure" />
        </div>
        <LayoutFilterShowcase />
      </section>

      <section className="cta-block fade-up" id="consultation">
        <h2>Want to know more ?</h2>
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

      <section className="section-grid" id="neighbourhood">
        <div className="section-title compact">
          <h2>Neighbourhood</h2>
          <p>
            Live where life unfolds effortlessly. Our neighbourhoods combine modern living with
            authentic local charm, offering everything you need within reach.
          </p>
        </div>
        <NeighbourhoodMap />
      </section>

      <section className="detail-copy">
        <div>
          <span className="eyebrow">Description</span>
          <p>
            Mira Villas designed by Bentley Home is the world&apos;s first villa community featuring
            ready-to-move-in interiors by Bentley Home. Every property also comes with a complete
            list of household appliances by world-renowned brands.
          </p>
        </div>
        <div>
          <span className="eyebrow">Benefits</span>
          <p>
            The project balances lifestyle, prestige, and immediate visual identity. It is built
            to feel like a finished hospitality-grade experience from day one, not an abstract
            investment promise.
          </p>
        </div>
      </section>

      <footer className="site-footer project-footer">
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
              <Link href="/">Back to homepage</Link>
              <a href="#layouts">Layouts</a>
              <a href="#neighbourhood">Neighbourhood</a>
            </div>
          </div>
        </div>
        <img alt="Lunair" className="footer-logo" src={assets.logo} />
      </footer>
    </main>
  );
}
