import Link from "next/link";
import {
  LayoutFilterShowcase,
  NeighbourhoodMap,
  PrototypeCta,
} from "@/components/lunair/prototype-ui";
import { amenities, assets } from "@/lib/lunair-data";

function ProjectHeader() {
  return (
    <header className="site-header shell-edge">
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

function ProjectFooter() {
  return (
    <footer className="site-footer full-bleed">
      <div className="footer-copy">
        <div className="footer-news">
          <h2>Subscribe to our news and be the first to receive unique offers</h2>
          <form className="footer-form">
            <label>
              <span className="sr-only">Email</span>
              <input placeholder="EMAIL" type="email" />
            </label>
            <button className="pill-link" type="submit">
              <span>Subscribe</span>
              <span aria-hidden="true">&rarr;</span>
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
  );
}

export function ProjectPage() {
  return (
    <main className="lunair-page">
      <ProjectHeader />

      <section className="project-hero shell-edge">
        <div className="project-hero-title">
          <h1>Mira Villas</h1>
          <PrototypeCta href="#consultation" label="Get consultation" />
        </div>
        <div className="image-frame image-frame-project-hero">
          <img alt="Mira Villas hero" src={assets.projectHero} />
        </div>
        <div className="slider-row slider-row-wide">
          <div className="slider-count-block">
            <span className="slider-current">01</span>
            <span className="slider-total">/ 08</span>
          </div>
          <div aria-hidden="true" className="slider-bar">
            <span style={{ width: "12.5%" }} />
          </div>
          <div className="slider-buttons">
            <button aria-label="Previous" className="icon-button" type="button">
              <span>&larr;</span>
            </button>
            <button aria-label="Next" className="icon-button is-active" type="button">
              <span>&rarr;</span>
            </button>
          </div>
        </div>
      </section>

      <section className="project-intro shell-edge">
        <div className="project-info-column">
          <div className="location-card">
            <div className="location-badge">&rarr;</div>
            <div>
              <span className="meta-label">Location</span>
              <strong>Meydan, Dubai</strong>
            </div>
          </div>
          <div className="project-kpi-grid">
            <article>
              <span>Type</span>
              <strong>Villa</strong>
            </article>
            <article>
              <span>Bedrooms</span>
              <strong>5 Bed</strong>
            </article>
            <article>
              <span>Bathrooms</span>
              <strong>7 Bath</strong>
            </article>
            <article>
              <span>Interior</span>
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
          </div>
        </div>
        <div className="project-text-column">
          <div className="tag-row">
            <span className="tag">Bentley Home</span>
            <span className="tag">Private Pool</span>
            <span className="tag">Lagoon Views</span>
            <span className="tag">5 Star Lounge</span>
          </div>
          <p className="project-body">
            Mira Villas designed by Bentley Home is the world&apos;s first villa community featuring
            ready-to-move-in interiors by Bentley Home. Located in Meydan, just fifteen minutes
            from Burj Khalifa, these luxurious 5-bedroom villas and mansions offer stunning lagoon
            views, private swimming pools, a one-of-kind gymnasium by Technogym and a 5-star lounge
            for friendly or business gatherings. Every property also comes with a complete list of
            household appliances by world-renowned brands.
          </p>
          <PrototypeCta href="#consultation" label="Get consultation" />
        </div>
      </section>

      <section className="amenities-section shell-edge">
        <div className="amenities-sticky">
          <h2>The amenities speak for themselves</h2>
        </div>
        <div className="amenities-grid">
          {amenities.map((amenity, index) => (
            <article className={`amenity-card${index % 4 === 1 || index % 4 === 3 ? " amenity-shift" : ""}`} key={amenity}>
              {index === 0 ? (
                <div className="image-frame image-frame-amenity">
                  <img alt={amenity} src={assets.projectAlt} />
                </div>
              ) : null}
              <h3>{amenity}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell shell-edge" id="layouts">
        <div className="section-heading-center">
          <h2>Project layouts</h2>
          <PrototypeCta href="#consultation" label="Download brochure" />
        </div>
        <LayoutFilterShowcase />
      </section>

      <section className="cta-block shell-edge" id="consultation">
        <h2>Want to know more ?</h2>
        <div className="cta-panel">
          <div className="cta-row">
            <input placeholder="NAME" type="text" />
            <input placeholder="PHONE NUMBER" type="tel" />
            <button className="pill-link" type="button">
              <span>Get consultation</span>
              <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
          <p>
            By submitting this form, you agree to our <u>Privacy Policy</u>
          </p>
        </div>
        <div className="cta-footer">
          <p>or contact us through telegram or whatsapp</p>
          <div>
            <img alt="Telegram" src={assets.telegram} />
            <img alt="WhatsApp" src={assets.whatsapp} />
          </div>
        </div>
      </section>

      <section className="section-shell shell-edge" id="neighbourhood">
        <div className="section-heading-project-map">
          <h2>Neighbourhood</h2>
          <p>
            Live where life unfolds effortlessly. Our neighbourhoods combine modern living with
            authentic local charm, offering everything you need within reach.
          </p>
        </div>
        <NeighbourhoodMap />
      </section>

      <section className="detail-copy shell-offset">
        <div>
          <span className="meta-heading">Description</span>
          <p>
            Mira Villas designed by Bentley Home is the world&apos;s first villa community featuring
            ready-to-move-in interiors by Bentley Home. Located in Meydan, just fifteen minutes
            from Burj Khalifa, these luxurious 5-bedroom villas and mansions offer stunning lagoon
            views, private swimming pools, private gyms and a 5-star residents lounge.
          </p>
        </div>
        <div>
          <span className="meta-heading">Benefits</span>
          <p>
            The project balances prestige, immediate visual identity and a refined lifestyle
            proposition. It is designed to feel fully finished from the first glance, not
            speculative.
          </p>
        </div>
      </section>

      <ProjectFooter />
    </main>
  );
}
