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

export function RegionCarousel() {
  const [page, setPage] = useState(0);
  const visible = useMemo(() => {
    const ordered = [...regions.slice(page), ...regions.slice(0, page)];
    return ordered.slice(0, 4);
  }, [page]);

  return (
    <section className="region-carousel">
      <div className="card-grid four-up">
        {visible.map((region) => (
          <article className="region-card fade-up" key={region.title}>
            <div className="media-shell tall">
              <img alt={region.title} src={region.image} />
            </div>
            <h3>{region.title}</h3>
            <p>{region.copy}</p>
          </article>
        ))}
      </div>
      <div className="slider-row">
        <span className="slider-count">0{page + 1} / 04</span>
        <div className="slider-track" aria-hidden="true">
          <span style={{ width: `${((page + 1) / 4) * 100}%` }} />
        </div>
        <div className="slider-buttons">
          <button
            aria-label="Previous regions"
            className="icon-button ghost"
            onClick={() => setPage((current) => (current + regions.length - 1) % regions.length)}
            type="button"
          >
            ←
          </button>
          <button
            aria-label="Next regions"
            className="icon-button solid"
            onClick={() => setPage((current) => (current + 1) % regions.length)}
            type="button"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

export function JourneyTabs() {
  const [active, setActive] = useState(1);

  return (
    <div className="journey-grid">
      <div className="media-shell journey-media">
        <img alt="Customer journey illustration" src={assets.journey} />
      </div>
      <div className="journey-list">
        {journeySteps.map((step, index) => {
          const isActive = active === index;
          return (
            <button
              className={`journey-item${isActive ? " active" : ""}`}
              key={step.title}
              onClick={() => setActive(index)}
              type="button"
            >
              <span>{step.eyebrow}</span>
              <strong>{step.title}</strong>
              <p>{isActive ? step.copy : ""}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function FaqAccordion() {
  const [open, setOpen] = useState(1);

  return (
    <div className="faq-list">
      {faqItems.map((item, index) => {
        const isOpen = open === index;
        return (
          <article className={`faq-item${isOpen ? " open" : ""}`} key={item.question}>
            <button
              className="faq-toggle"
              onClick={() => setOpen(isOpen ? -1 : index)}
              type="button"
            >
              <span>{item.question}</span>
              <span className={`faq-icon${isOpen ? " active" : ""}`}>→</span>
            </button>
            {isOpen ? <p className="faq-answer">{item.answer}</p> : null}
          </article>
        );
      })}
    </div>
  );
}

export function LayoutFilterShowcase() {
  const [active, setActive] = useState(layoutFilters[1]);

  return (
    <section className="layout-showcase">
      <div className="chip-row">
        {layoutFilters.map((filter) => (
          <button
            className={`chip${active === filter ? " active" : ""}`}
            key={filter}
            onClick={() => setActive(filter)}
            type="button"
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="layout-panel">
        <button className="icon-button ghost" type="button">
          ←
        </button>
        <div className="layout-main">
          <div className="slider-count centered">01 / 08</div>
          <div className="layout-card feature">
            <div className="media-shell floorplan">
              <img alt={`${active} plan`} src={assets.projectAlt} />
            </div>
            <div className="mini-kpis">
              <span>5 Bed</span>
              <span>7 Bath</span>
              <span>12,997 sq ft</span>
            </div>
          </div>
          <div className="layout-card side">
            <div className="media-shell square">
              <img alt="Detail plan preview" src={assets.featureA} />
            </div>
          </div>
        </div>
        <button className="icon-button solid" type="button">
          →
        </button>
      </div>
    </section>
  );
}

export function NeighbourhoodMap() {
  const [active, setActive] = useState(mapCategories[0]);

  return (
    <section className="map-section">
      <div className="chip-row">
        {mapCategories.map((category) => (
          <button
            className={`chip${active === category ? " active" : ""}`}
            key={category}
            onClick={() => setActive(category)}
            type="button"
          >
            {category}
          </button>
        ))}
      </div>
      <div className="map-shell">
        <div className="map-grid" />
        <div className="map-focus">
          <img alt="Primary location" src={assets.featureB} />
        </div>
        <div className="map-markers">
          {[...Array(12)].map((_, index) => (
            <span
              className={`map-marker ${active.toLowerCase()}`}
              key={`${active}-${index}`}
              style={{
                left: `${12 + ((index * 7) % 74)}%`,
                top: `${10 + ((index * 11) % 72)}%`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function PrototypeCta({ href, label }: { href: string; label: string }) {
  return (
    <Link className="button button-primary" href={href}>
      <span>{label}</span>
      <span aria-hidden="true">→</span>
    </Link>
  );
}
