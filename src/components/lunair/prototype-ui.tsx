"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  assets,
  faqItems,
  journeySteps,
  layoutFilters,
  mapCategories,
  regions,
} from "@/lib/lunair-data";

function SliderButtons({
  onNext,
  onPrev,
  inverse = false,
}: {
  inverse?: boolean;
  onNext?: () => void;
  onPrev?: () => void;
}) {
  return (
    <div className="slider-buttons">
      <button
        aria-label="Previous"
        className={`icon-button${inverse ? " inverse" : ""}`}
        onClick={onPrev}
        type="button"
      >
        <span>&larr;</span>
      </button>
      <button
        aria-label="Next"
        className={`icon-button is-active${inverse ? " inverse" : ""}`}
        onClick={onNext}
        type="button"
      >
        <span>&rarr;</span>
      </button>
    </div>
  );
}

export function RegionCarousel() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(regions.length / 4);
  const pages = useMemo(
    () =>
      Array.from({ length: totalPages }, (_, index) =>
        regions.slice(index * 4, index * 4 + 4),
      ),
    [totalPages],
  );

  return (
    <section className="region-carousel">
      <div className="region-viewport">
        <div
          className="region-track"
          style={{ transform: `translate3d(-${page * 100}%, 0, 0)` }}
        >
          {pages.map((regionPage, pageIndex) => (
            <div className="region-grid" key={`page-${pageIndex}`}>
              {regionPage.map((region) => (
                <article className="region-card" key={region.title}>
                  <div className="image-frame image-frame-region">
                    <img alt={region.title} src={region.image} />
                  </div>
                  <h3>{region.title}</h3>
                  <p>{region.copy}</p>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="slider-row slider-row-wide">
        <div className="slider-count-block">
          <span className="slider-current">{String(page + 1).padStart(2, "0")}</span>
          <span className="slider-total">/ {String(totalPages).padStart(2, "0")}</span>
        </div>
        <div aria-hidden="true" className="slider-bar">
          <span style={{ width: `${((page + 1) / totalPages) * 100}%` }} />
        </div>
        <SliderButtons
          onNext={() => setPage((current) => (current + 1) % totalPages)}
          onPrev={() => setPage((current) => (current + totalPages - 1) % totalPages)}
        />
      </div>
    </section>
  );
}

export function JourneyTabs() {
  const [active, setActive] = useState(1);

  return (
    <section className="journey-layout">
      <div className="image-frame image-frame-journey">
        <img alt="Customer journey illustration" src={assets.journey} />
      </div>
      <div className="journey-copy-list">
        {journeySteps.map((step, index) => {
          const isActive = active === index;

          return (
            <button
              className={`journey-row${isActive ? " is-active" : ""}`}
              key={step.title}
              onClick={() => setActive(index)}
              type="button"
            >
              <span>{step.eyebrow}</span>
              <strong>{step.title}</strong>
              {isActive ? <p>{step.copy}</p> : null}
            </button>
          );
        })}
      </div>
    </section>
  );
}

export function FaqAccordion() {
  const [open, setOpen] = useState(1);

  return (
    <div className="faq-list">
      {faqItems.map((item, index) => {
        const isOpen = open === index;

        return (
          <article className={`faq-item${isOpen ? " is-open" : ""}`} key={item.question}>
            <button
              className="faq-trigger"
              onClick={() => setOpen(isOpen ? -1 : index)}
              type="button"
            >
              <span>{item.question}</span>
              <span className={`faq-circle${isOpen ? " is-open" : ""}`}>&rarr;</span>
            </button>
            <div className={`faq-answer-wrap${isOpen ? " is-open" : ""}`}>
              <p className="faq-answer">{item.answer}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export function LayoutFilterShowcase() {
  const [active, setActive] = useState(layoutFilters[1]);

  return (
    <section className="layouts-showcase">
      <div className="layout-toolbar">
        <button className="pill-button pill-button-wide" type="button">
          Download brochure
        </button>
        <div className="pill-button-group">
          {layoutFilters.slice(1).map((filter) => (
            <button
              className={`pill-button${active === filter ? " is-active" : ""}`}
              key={filter}
              onClick={() => setActive(filter)}
              type="button"
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
      <div className="layout-gallery">
        <div className="layout-counter">01 / 08</div>
        <button aria-label="Previous layout" className="gallery-chevron" type="button">
          &larr;
        </button>
        <div className="layout-main-card">
          <div className="image-frame image-frame-layout">
            <img alt={`${active} layout`} src={assets.projectAlt} />
          </div>
          <div className="layout-kpis">
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
          </div>
        </div>
        <div className="layout-side-card">
          <div className="image-frame image-frame-side">
            <img alt="Secondary plan preview" src={assets.featureA} />
          </div>
        </div>
        <button aria-label="Next layout" className="gallery-chevron is-right" type="button">
          &rarr;
        </button>
      </div>
    </section>
  );
}

export function NeighbourhoodMap() {
  const [active, setActive] = useState(mapCategories[0]);

  return (
    <section className="neighbourhood-map">
      <div className="pill-button-group">
        {mapCategories.map((category) => (
          <button
            className={`pill-button${active === category ? " is-active" : ""}`}
            key={category}
            onClick={() => setActive(category)}
            type="button"
          >
            {category}
          </button>
        ))}
      </div>
      <div className="map-canvas">
        <div className="map-background-grid" />
        <div className="map-focus-pin">
          <img alt="Primary pin" src={assets.featureB} />
        </div>
        {[...Array(18)].map((_, index) => (
          <span
            className={`map-dot map-dot-${active.toLowerCase()}`}
            key={`${active}-${index}`}
            style={{
              left: `${16 + ((index * 9) % 72)}%`,
              top: `${11 + ((index * 13) % 71)}%`,
            }}
          />
        ))}
      </div>
    </section>
  );
}

export function PrototypeCta({
  href,
  label,
  className,
}: {
  className?: string;
  href: string;
  label: string;
}) {
  return (
    <Link className={`pill-link${className ? ` ${className}` : ""}`} href={href}>
      <span>{label}</span>
      <span aria-hidden="true">&rarr;</span>
    </Link>
  );
}

export function InversePrototypeCta({
  className,
  href,
  label,
}: {
  className?: string;
  href: string;
  label: string;
}) {
  return (
    <Link className={`text-link text-link-light${className ? ` ${className}` : ""}`} href={href}>
      <span>{label}</span>
      <span aria-hidden="true">&rarr;</span>
    </Link>
  );
}
