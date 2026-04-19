import Link from "next/link";
import { RevealBlock } from "@/components/lunair/motion";
import {
  FaqAccordion,
  InversePrototypeCta,
  JourneyTabs,
  PrototypeCta,
  RegionCarousel,
} from "@/components/lunair/prototype-ui";
import { assets, featuredProjects, stats } from "@/lib/lunair-data";

function SiteHeader() {
  return (
    <header className="site-header shell-edge">
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
    <footer className="site-footer full-bleed" id="footer">
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
    <section className="cta-block shell-edge" id="consultation">
      <h2>Let&apos;s shape your next space</h2>
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
  );
}

function ProjectsRows() {
  const [smallLeft, largeRight, largeLeft, smallRight] = featuredProjects;

  return (
    <div className="featured-projects-rows">
      <div className="project-row">
        <Link className="project-card project-card-small" href={smallLeft.href}>
          <div className="image-frame image-frame-project-small">
            <img alt={smallLeft.title} src={smallLeft.image} />
          </div>
          <div className="project-card-copy">
            <div>
              <h3>{smallLeft.title}</h3>
              <p>{smallLeft.location}</p>
            </div>
            <div className="tag-row">
              {smallLeft.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Link>
        <Link className="project-card project-card-big" href={largeRight.href}>
          <div className="image-frame image-frame-project-big">
            <img alt={largeRight.title} src={largeRight.image} />
          </div>
          <div className="project-card-copy">
            <div>
              <h3>{largeRight.title}</h3>
              <p>{largeRight.location}</p>
            </div>
            <div className="tag-row">
              {largeRight.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Link>
      </div>
      <div className="project-row">
        <Link className="project-card project-card-big" href={largeLeft.href}>
          <div className="image-frame image-frame-project-big">
            <img alt={largeLeft.title} src={largeLeft.image} />
          </div>
          <div className="project-card-copy">
            <div>
              <h3>{largeLeft.title}</h3>
              <p>{largeLeft.location}</p>
            </div>
            <div className="tag-row">
              {largeLeft.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Link>
        <Link className="project-card project-card-small" href={smallRight.href}>
          <div className="image-frame image-frame-project-small">
            <img alt={smallRight.title} src={smallRight.image} />
          </div>
          <div className="project-card-copy">
            <div>
              <h3>{smallRight.title}</h3>
              <p>{smallRight.location}</p>
            </div>
            <div className="tag-row">
              {smallRight.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export function Homepage() {
  return (
    <main className="lunair-page lunair-homepage">
      <SiteHeader />

      <RevealBlock className="hero-section shell-edge homepage-hero">
        <div className="hero-title homepage-hero-title">
          <h1>Elevating Middle Eastern luxury</h1>
          <p className="eyebrow-label eyebrow-label-hero">
            Exceptional Homes. Uncompromising Vision.
          </p>
        </div>
        <div className="image-frame image-frame-hero homepage-hero-frame">
          <img alt="Lunair homepage hero" src={assets.heroHome} />
        </div>
        <div className="hero-summary">
          <p>
            We curate exceptional properties that embody modern design, timeless architecture, and
            the art of refined living.
          </p>
          <PrototypeCta className="size-consultation" href="#consultation" label="Get consultation" />
        </div>
      </RevealBlock>

      <RevealBlock className="stats-row shell-stats homepage-stats" delay={40}>
        {stats.map((stat) => (
          <article className="stat-card" key={stat.label}>
            <div className="stat-label">
              <span className="stat-dot" />
              <p>{stat.label}</p>
            </div>
            <strong>{stat.value}</strong>
          </article>
        ))}
      </RevealBlock>

      <RevealBlock className="section-shell shell-edge section-divider homepage-about" delay={60}>
        <div className="section-heading">
          <p className="eyebrow-label">about us</p>
          <h2>who are we ?</h2>
        </div>
        <div className="about-grid">
          <div className="image-frame image-frame-about homepage-about-frame">
            <img alt="About Lunair" src={assets.about} />
          </div>
          <div className="body-copy-column">
            <div className="body-copy-cluster">
              <p>
                Lunair was founded on a simple belief — that true luxury is defined not by excess,
                but by precision.
              </p>
              <p>
                Based across the Middle East, Lunair partners with leading developers and
                visionaries who share our pursuit of excellence. Our work goes beyond transactions
                — it&apos;s about connecting people with places that reflect who they are, and what
                they value.
              </p>
              <p>
                We curate properties that blend contemporary architecture with the quiet beauty of
                space, light, and material. Each home is selected for its integrity of design and
                its ability to inspire a refined way of living.
              </p>
            </div>
            <a className="text-link size-about" href="#featured-projects">
              <span>Get to know us</span>
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </RevealBlock>

      <RevealBlock className="section-shell shell-edge shell-edge-wide homepage-regions" delay={80}>
        <div className="section-heading-row">
          <div className="section-heading-offset">
            <p className="eyebrow-label">explore our regions</p>
            <h2>
              From bustling cityscapes to peaceful shores, Lunair spans the Middle East&apos;s top
              destinations.
            </h2>
          </div>
          <PrototypeCta className="size-region" href="#featured-projects" label="View all regions" />
        </div>
        <RegionCarousel />
      </RevealBlock>

      <RevealBlock
        className="section-shell shell-edge homepage-featured"
        delay={100}
      >
        <div className="center-title-block">
          <h2>Featured projects</h2>
        </div>
        <ProjectsRows />
        <div className="projects-summary">
          <p>
            Each property is chosen for its architectural integrity, timeless aesthetic, and sense
            of place. We collaborate with leading developers and designers to bring modern
            prestige to life.
          </p>
          <PrototypeCta className="size-view-all-projects" href="/projects/mira-villas" label="View all projects" />
        </div>
      </RevealBlock>

      <RevealBlock className="special-project-band full-bleed homepage-special" delay={120}>
        <div className="special-project-copy">
          <div className="special-copy-inner">
            <h2>A new icon of coastal living: Palm Jebel Ali</h2>
            <p>
              An exclusive launch of Dubai&apos;s most anticipated masterpieces. Twice the size of
              Palm Jumeirah, this project combines true waterfront luxury, panoramic sea views and
              villas crafted for life along the city&apos;s most exciting shoreline.
            </p>
            <InversePrototypeCta className="size-special" href="/projects/mira-villas" label="View project" />
          </div>
          <div className="slider-row slider-row-light">
            <div className="slider-count-block">
              <span className="slider-current">01</span>
              <span className="slider-total">/ 02</span>
            </div>
            <div aria-hidden="true" className="slider-bar">
              <span style={{ width: "50%" }} />
            </div>
            <div className="slider-buttons">
              <button aria-label="Previous" className="icon-button inverse" type="button">
                <span>&larr;</span>
              </button>
              <button aria-label="Next" className="icon-button is-active inverse" type="button">
                <span>&rarr;</span>
              </button>
            </div>
          </div>
        </div>
        <div className="image-frame image-frame-special homepage-special-frame">
          <img alt="Palm Jebel Ali" src={assets.specialProject} />
        </div>
      </RevealBlock>

      <RevealBlock className="section-shell shell-edge section-divider homepage-journey" delay={140}>
        <div className="journey-heading">
          <p className="eyebrow-label">The lunair difference</p>
          <h2>Customer journey</h2>
        </div>
        <JourneyTabs />
        <div className="slider-row slider-row-wide">
          <div className="slider-count-block">
            <span className="slider-current">02</span>
            <span className="slider-total">/ 08</span>
          </div>
          <div aria-hidden="true" className="slider-bar slider-bar-steps">
            <span style={{ width: "25%" }} />
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
        <div className="projects-summary projects-summary-tight">
          <p>
            At Lunair, we don&apos;t just develop properties — we craft complete living
            experiences, guided by vision, precision, and a deep sense of place. From the first
            consultation to the finishing touches, every step is handled with care, ensuring each
            space reflects both elegance and intention.
          </p>
          <a className="text-link size-learn-more" href="#footer">
            <span>Learn more</span>
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </RevealBlock>

      <RevealBlock delay={160}>
        <CtaBlock />
      </RevealBlock>

      <RevealBlock className="faq-shell shell-offset homepage-faq" delay={180}>
        <div className="faq-title-block">
          <h2>FAQ</h2>
        </div>
        <FaqAccordion />
      </RevealBlock>

      <RevealBlock delay={200}>
        <Footer />
      </RevealBlock>
    </main>
  );
}
