"use client";

import React, { useEffect, useRef, useState } from "react";

const NAV_ITEMS = [
  { label: "Rights", href: "#rights" },
  { label: "Join", href: "#join" },
];

const RIGHTS = [
  {
    icon: "⏰",
    title: "Unpaid Overtime",
    category: "hours",
    article: "Factories Act, 1948 (Secs. 51, 54 & 59)",
    quote: "\u201CStay another three hours. We're all a family here.\u201D",
    body: "If you're working 12-hour days without overtime pay, that's not commitment. That's unpaid labour.",
    law: [
      "Maximum 48 hours per week",
      "Maximum 9 hours per day (subject to legal exceptions)",
      "Every hour beyond the legal limit must generally be paid at 2\u00D7 your ordinary wage.",
    ],
  },
  {
    icon: "🗓️",
    title: "Weekly Holiday & Paid Leave",
    category: "hours",
    article: "Factories Act, 1948 (Secs. 52 & 79)",
    quote: "Working every single day doesn't make you hardworking. It makes your employer non-compliant.",
    body: "You deserve rest. The law agrees.",
    law: [
      "One weekly holiday after the prescribed work period.",
      "Earn 1 day of paid leave for every 20 days worked (subject to eligibility).",
    ],
  },
  {
    icon: "💰",
    title: "Salary Delayed Every Month",
    category: "wages",
    article: "Payment of Wages Act, 1936",
    quote: "\u201CFinance hasn't approved it yet.\u201D",
    body: "Your salary is not a favour. That excuse doesn't pay your rent, EMI, or groceries.",
    law: [
      "Wages must be paid within the legally prescribed time limits. Deliberate delays can attract penalties.",
    ],
  },
  {
    icon: "⚖️",
    title: "Equal Pay for Equal Work",
    category: "wages",
    article: "Constitution Article 39(d) + Code on Wages, 2019",
    quote: "Same work. Same responsibility. Smaller salary.",
    body: "That's not \u201Ccompany policy.\u201D",
    law: [
      "The Constitution directs equal pay for equal work, and the Code on Wages prohibits wage discrimination based on gender.",
    ],
  },
  {
    icon: "🛡️",
    title: "Right to Dignity at Work",
    category: "dignity",
    article: "Constitution Article 21",
    quote: "Being shouted at. Publicly insulted. Threatened with termination.",
    body: "Forced to tolerate humiliation. None of this is \u201Coffice culture.\u201D",
    law: [
      "Every worker has the constitutional right to live and work with dignity.",
    ],
  },
  {
    icon: "🚫",
    title: "Sexual Harassment is Illegal",
    category: "dignity",
    article: "POSH Act, 2013",
    quote: "\u201CIt's just a joke.\u201D \u201CNo need to make it an issue.\u201D",
    body: "Silence protects the harasser — not the employee.",
    law: [
      "Employers with the required workforce must establish an Internal Complaints Committee, investigate complaints, and provide a safe workplace.",
    ],
  },
  {
    icon: "💸",
    title: "PF Deducted But Never Deposited",
    category: "wages",
    article: "EPF & MP Act, 1952",
    quote: "Every month your salary shows: PF Deduction \u2713. But your EPF account shows: \u20B90.",
    body: "Someone is keeping money that belongs to you.",
    law: [
      "If PF is deducted, the employer must deposit it with EPFO within the prescribed time. Failure can lead to recovery, penalties, and prosecution.",
    ],
  },
  {
    icon: "🚪",
    title: "You Cannot Be Forced to Stay",
    category: "freedom",
    article: "Constitution Article 23",
    quote: "\u201CYou can't resign.\u201D \u201CYou must serve six months.\u201D \u201CWe won't give relieving documents.\u201D",
    body: "Employment is not imprisonment.",
    law: [
      "Forced labour is prohibited under Article 23. Employers cannot compel someone to continue working against their will.",
    ],
  },
  {
    icon: "💼",
    title: "No Appointment Letter",
    category: "dignity",
    article: "Industrial Employment (Standing Orders) Act + State Rules",
    quote: "No appointment letter. No designation. No written salary. No proof.",
    body: "That's exactly how workers lose their rights.",
    law: [
      "Many establishments are legally required to provide written employment terms and maintain employment records.",
    ],
  },
  {
    icon: "🤰",
    title: "Pregnancy Should Never Cost You Your Job",
    category: "dignity",
    article: "Maternity Benefit Act, 1961",
    quote: "Pregnant? Congratulations.",
    body: "You should not have to choose between your child and your career.",
    law: [
      "Eligible women are entitled to maternity benefits, and employers cannot dismiss them merely because of pregnancy.",
    ],
  },
  {
    icon: "🚑",
    title: "Workplace Injury Isn't \u201CYour Problem\u201D",
    category: "freedom",
    article: "Employees' Compensation Act, 1923",
    quote: "Injured at work? Your employer doesn't get to say, \u201CThat's unfortunate.\u201D",
    body: "They have legal responsibilities.",
    law: [
      "Employers must compensate workers for injuries sustained in the course of employment — including medical costs and lost wages.",
    ],
  },
];

const RIGHT_CATEGORIES = [
  {
    id: "hours",
    icon: "⏰",
    label: "YOUR HOURS",
    blurb: "How long they make you work — and what that's supposed to cost them.",
    accent: "#a16207",
    soft: "rgba(161,98,7,0.10)",
  },
  {
    id: "wages",
    icon: "💰",
    label: "YOUR WAGES",
    blurb: "The money they owe you. On time. In full. Every rupee of it.",
    accent: "#1f5a2e",
    soft: "rgba(31,90,46,0.10)",
  },
  {
    id: "dignity",
    icon: "🛡️",
    label: "YOUR DIGNITY",
    blurb: "How they treat you at work is not a matter of opinion. It's law.",
    accent: "#8b1a1a",
    soft: "rgba(139,26,26,0.10)",
  },
  {
    id: "freedom",
    icon: "🚪",
    label: "YOUR FREEDOM & SAFETY",
    blurb: "You can leave. You must be safe. Neither is up for negotiation.",
    accent: "#28324f",
    soft: "rgba(40,50,79,0.10)",
  },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50"
      style={{
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        borderBottom: "2px solid var(--color-ink)",
        background: "rgba(244,235,215,0.94)",
      }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", minHeight: 76, padding: "14px var(--gutter)" }}>
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <img src="/logo.png" alt="Majboor Janta Party" style={{ width: 56, height: 56, borderRadius: "50%", objectFit: "cover", border: "2px solid var(--color-ink)" }} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontFamily: "var(--font-display)", fontSize: 20, lineHeight: 0.94 }}>
              <span style={{ color: "var(--color-blood)" }}>Majboor</span>{" "}
              <span>Janta Party</span>
            </span>
            <span style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-saffron-deep)", fontSize: 10 }}>
              Know Your Rights
            </span>
          </div>
        </a>

        <div style={{ display: "flex", alignItems: "center", gap: 36 }}>
          <div className="nav-links-group" style={{ display: "flex", alignItems: "center", gap: 32 }}>
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                style={{
                  fontFamily: "var(--font-condensed)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--color-ink)",
                  fontSize: 13,
                  fontWeight: 500,
                  transition: "color 0.18s",
                  position: "relative",
                }}
                className="nav-link-hover"
              >
                {item.label}
              </a>
            ))}
          </div>
          <a href="#join" className="btn-primary nav-cta" style={{ padding: "12px 20px", fontSize: 13 }}>
            UNITE. ORGANIZE. FIGHT.
          </a>
          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="nav-hamburger"
            aria-label="Toggle menu"
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 8,
              flexDirection: "column",
              gap: 5,
            }}
          >
            <span style={{ display: "block", width: 24, height: 2, background: "var(--color-ink)", transition: "all 0.2s", transform: mobileOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
            <span style={{ display: "block", width: 24, height: 2, background: "var(--color-ink)", transition: "all 0.2s", opacity: mobileOpen ? 0 : 1 }} />
            <span style={{ display: "block", width: 24, height: 2, background: "var(--color-ink)", transition: "all 0.2s", transform: mobileOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="mobile-menu"
          style={{
            display: "none",
            borderTop: "2px solid var(--color-ink)",
            padding: "16px var(--gutter)",
            background: "rgba(244,235,215,0.98)",
          }}
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: "var(--font-condensed)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--color-ink)",
                fontSize: 15,
                fontWeight: 600,
                display: "block",
                padding: "12px 0",
                borderBottom: "1px solid rgba(26,17,8,0.1)",
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#join"
            onClick={() => setMobileOpen(false)}
            className="btn-primary"
            style={{ marginTop: 16, width: "100%", justifyContent: "center" }}
          >
            UNITE. ORGANIZE. FIGHT.
          </a>
        </div>
      )}
    </nav>
  );
}

function Ticker() {
  const messages = [
    "WAGE THEFT IS A CRIME",
    "12-HOUR SHIFTS WITHOUT OVERTIME IS ILLEGAL",
    "NO CONTRACT? NO WORK!",
    "YOUR BOSS IS NOT YOUR KING",
    "IGNORANCE IS THEIR BIGGEST WEAPON",
    "DEMAND YOUR DUES — THEY ALREADY SPENT THEM",
    "THEY CALL IT 'FLEXIBILITY'. WE CALL IT WAGE THEFT.",
    "YOUR OVERTIME PAID FOR YOUR BOSS'S VACATION HOME",
  ];

  return (
    <div className="ticker">
      <div className="ticker-inner">
        {messages.map((m, i) => (
          <span key={i} className="ticker-item">
            {m}
            <span className="ticker-dot">✦</span>
          </span>
        ))}
        {messages.map((m, i) => (
          <span key={`dup-${i}`} className="ticker-item">
            {m}
            <span className="ticker-dot">✦</span>
          </span>
        ))}
        {messages.map((m, i) => (
          <span key={`dup2-${i}`} className="ticker-item">
            {m}
            <span className="ticker-dot">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative" style={{ borderBottom: "3px solid var(--color-ink)", overflow: "hidden" }}>
      {/* Tricolor ribbon */}
      <div className="tricolor-ribbon" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />

      {/* Background gradients */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(60% 50% at 85% 10%, rgba(224,101,30,0.08), transparent 55%), radial-gradient(55% 50% at 8% 90%, rgba(31,90,46,0.06), transparent 50%)",
          pointerEvents: "none",
        }}
      />

      {/* Watermark */}
      <div className="watermark" style={{ bottom: -40, right: -20, fontSize: "clamp(120px, 20vw, 240px)", lineHeight: 1 }}>
        RIGHTS
      </div>

      <div className="container animate-up hero-padding" style={{ position: "relative", zIndex: 1 }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--color-blood)",
              border: "1px solid var(--color-blood)",
              borderRadius: 100,
              padding: "7px 14px",
              fontSize: 11,
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 22,
            }}
          >
            <span className="pulse-dot" style={{ background: "var(--color-blood)", borderRadius: "50%", width: 7, height: 7, display: "inline-block" }} />
            KNOWLEDGE IS POWER — USE IT
          </span>

        <h1
          style={{
            fontFamily: "var(--font-display)",
            letterSpacing: "-0.015em",
            maxWidth: "16ch",
            margin: "0 0 28px",
            fontSize: "clamp(48px, 9vw, 120px)",
            fontWeight: 400,
            lineHeight: 0.88,
          }}
        >
          MAJBOOR HAI. MAJDOOR HAI.{" "}
          <span style={{ color: "var(--color-green)" }}>
            Let&apos;s not do overtime only, let&apos;s come together and speak.
          </span>
        </h1>

        <p
          style={{
            fontFamily: "var(--font-sans)",
            color: "var(--color-ink-2)",
            maxWidth: 520,
            margin: "0 0 38px",
            fontSize: 18,
            lineHeight: 1.6,
          }}
        >
          You&apos;ve done enough overtime for free. Now let&apos;s do the asking. You have rights — your boss hopes you never find out. No legal jargon. No fine print. Just the law, in a language your HR department prays you never read.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 56 }}>
          <a href="#rights" className="btn-primary">
            ARM YOURSELF WITH THE LAW →
          </a>
          <a href="#join" className="btn-secondary">
            JOIN THE MOVEMENT
          </a>
        </div>

        {/* Stats strip */}
        <div
          className="hero-stats-grid"
          style={{
            borderTop: "1px solid rgba(26,17,8,0.2)",
            paddingTop: 22,
          }}
        >
          {[
            { value: "8+", label: "Rights You Didn't Know You Had" },
            { value: "4", label: "Labour Codes Your Boss Hopes You'll Skip" },
            { value: "50 Cr+", label: "Workers Who Deserve Better" },
            { value: "24/7", label: "Helplines That Actually Work" },
          ].map((stat) => (
            <div key={stat.label}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 3vw, 42px)", lineHeight: 1, color: "var(--color-blood)" }}>
                {stat.value}
              </div>
              <div style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-ink-3)", marginTop: 4, fontSize: 10 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Tricolor ribbon below hero */}
      <div className="tricolor-ribbon-thick" />
    </section>
  );
}

function LogoBanner() {
  return (
    <section
      style={{
        background: "var(--color-ink)",
        borderBottom: "3px solid var(--color-saffron)",
        borderTop: "3px solid var(--color-saffron)",
        position: "relative",
        overflow: "hidden",
      }}
      className="section-responsive-logo"
    >
      {/* Tricolor ribbon */}
      <div className="tricolor-ribbon" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />
      <div className="tricolor-ribbon" style={{ position: "absolute", bottom: 0, left: 0, right: 0 }} />

      <div className="container animate-section" style={{ display: "flex", alignItems: "center", gap: 48, position: "relative", zIndex: 1 }}>
        {/* Left: Text */}
        <div style={{ flex: 1, textAlign: "left" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-paper)",
              fontSize: "clamp(36px, 6vw, 72px)",
              lineHeight: 0.95,
              margin: "0 0 28px",
            }}
          >
            WE DON&apos;T DO{" "}
            <span style={{ color: "var(--color-saffron-2)", fontFamily: "Georgia, serif", fontStyle: "italic" }}>
              DONATIONS.
            </span>{" "}
            WE DO{" "}
            <span style={{ color: "var(--color-blood)" }}>
              DEMANDS.
            </span>
          </h2>

          <p
            style={{
              fontFamily: "var(--font-sans)",
              color: "rgba(244,235,215,0.7)",
              fontSize: 18,
              lineHeight: 1.7,
              maxWidth: 480,
              margin: "0 0 32px",
            }}
          >
            No corporate sponsors. No oligarch backing. No Prime Cares Fund. Just 50 crore workers who are tired of being invisible. This is not a charity. This is a demand.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 24,
              fontFamily: "var(--font-mono)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--color-saffron-2)",
              fontSize: 12,
            }}
          >
            <span style={{ width: 40, height: 1, background: "var(--color-saffron)", display: "inline-block" }} />
            MAJBOOR JANTA PARTY — EST. 2026
            <span style={{ width: 40, height: 1, background: "var(--color-saffron)", display: "inline-block" }} />
          </div>
        </div>

        {/* Right: Logo */}
        <div style={{ flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img
            src="/logo.png"
            alt="Majboor Janta Party"
            className="logo-banner-img"
            style={{
              height: "min(320px, 40vw)",
              width: "min(320px, 40vw)",
              borderRadius: "50%",
              objectFit: "cover",
              border: "4px solid var(--color-saffron)",
              boxShadow: "0 0 60px rgba(224,101,30,0.3)",
            }}
          />
        </div>
      </div>
    </section>
  );
}

function RightsGrid() {
  const [activeCat, setActiveCat] = useState(RIGHT_CATEGORIES[0].id);
  const catRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-cat");
            if (id) setActiveCat(id);
          }
        }
      },
      { rootMargin: "-120px 0px -65% 0px" }
    );
    catRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToCat = (id: string) => {
    const el = document.getElementById(`rights-cat-${id}`);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="rights" className="section">
      <div className="container" style={{ maxWidth: "none" }}>
        {/* Section header */}
        <div className="animate-section" style={{ marginBottom: 48 }}>
          <div
            className="card-header-responsive"
            style={{
              border: "3px solid var(--color-ink)",
              boxShadow: "8px 8px 0 var(--color-ink)",
              background: "var(--color-paper)",
            }}
          >
            <span className="eyebrow">The Law You Didn't Know You Had</span>
            <h2 className="section-title" style={{ fontSize: "clamp(40px, 5.5vw, 64px)", margin: "0 0 16px" }}>
              MAJDOOR{" "}
              <span style={{ color: "var(--color-blood)" }}>BROS</span>
              <br />
              YOUR{" "}
              <span className="highlight-text-saffron">CORRECT</span> RIGHTS
            </h2>
          </div>
        </div>

        {/* Sticky category rail */}
        <div className="rights-rail animate-section" aria-label="Rights categories">
          {RIGHT_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`rights-pill ${activeCat === cat.id ? "is-active" : ""}`}
              style={{ "--cat-accent": cat.accent } as React.CSSProperties}
              onClick={() => scrollToCat(cat.id)}
            >
              <span style={{ fontSize: 16 }}>{cat.icon}</span>
              <span>{cat.label}</span>
              <span className="rights-pill-count">
                {RIGHTS.filter((r) => r.category === cat.id).length}
              </span>
            </button>
          ))}
        </div>

        {/* Category groups */}
        {RIGHT_CATEGORIES.map((cat, ci) => {
          const items = RIGHTS.filter((r) => r.category === cat.id);
          return (
            <div
              key={cat.id}
              id={`rights-cat-${cat.id}`}
              data-cat={cat.id}
              ref={(el) => {
                catRefs.current[ci] = el;
              }}
              className="rights-cat"
              style={{ "--cat-accent": cat.accent, "--cat-soft": cat.soft } as React.CSSProperties}
            >
              <div className="rights-cat-header">
                <span className="rights-cat-icon">{cat.icon}</span>
                <div>
                  <h3>{cat.label}</h3>
                  <p>{cat.blurb}</p>
                </div>
                <span className="rights-cat-count">
                  {items.length} RIGHT{items.length > 1 ? "S" : ""}
                </span>
              </div>

              <div className="rights-grid">
                {items.map((right) => {
                  const num = RIGHTS.indexOf(right) + 1;
                  return (
                    <div
                      key={right.title}
                      className={`right-card animate-section stagger-${Math.min(num, 6)}`}
                    >
                      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: 16, flex: 1 }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                          <span
                            style={{
                              fontFamily: "var(--font-mono)",
                              letterSpacing: "0.14em",
                              textTransform: "uppercase",
                              fontSize: 12,
                              color: "var(--cat-accent)",
                              fontWeight: 600,
                              whiteSpace: "nowrap",
                            }}
                          >
                            {String(num).padStart(2, "0")} / {cat.label}
                          </span>
                          <span
                            style={{
                              fontSize: 34,
                              lineHeight: 1,
                              flexShrink: 0,
                            }}
                            aria-hidden="true"
                          >
                            {right.icon}
                          </span>
                        </div>

                        <h3
                          style={{
                            fontFamily: "var(--font-display)",
                            letterSpacing: "0.02em",
                            textTransform: "uppercase",
                            fontSize: "clamp(24px, 2.4vw, 30px)",
                            lineHeight: 1.05,
                            margin: "4px 0 0",
                          }}
                        >
                          {right.title}
                        </h3>

                        <p
                          style={{
                            fontFamily: "var(--font-condensed)",
                            fontSize: "clamp(24px, 2.2vw, 28px)",
                            lineHeight: 1.15,
                            fontWeight: 600,
                            color: "var(--cat-accent)",
                            margin: "10px 0 0",
                          }}
                        >
                          {right.quote}
                        </p>

                        <p style={{
                          fontSize: 17,
                          lineHeight: 1.6,
                          color: "var(--color-ink-2)",
                          margin: "2px 0 0",
                        }}>
                          {right.body}
                        </p>

                        <div
                          style={{
                            fontSize: "clamp(15px, 1.3vw, 16px)",
                            lineHeight: 1.6,
                            color: "var(--color-paper)",
                            background: "var(--color-green)",
                            borderTop: "3px solid var(--color-ink)",
                            marginTop: "auto",
                            marginLeft: -36,
                            marginRight: -36,
                            marginBottom: -36,
                            padding: "20px 36px 24px",
                          }}
                        >
                          <p
                            style={{
                              margin: "0 0 10px",
                              fontFamily: "var(--font-condensed)",
                              letterSpacing: "0.16em",
                              color: "var(--color-gold)",
                              fontSize: 16,
                            }}
                          >
                            <strong>THE LAW</strong>
                          </p>
                          <p
                            style={{
                              margin: "0 0 10px",
                              fontFamily: "var(--font-mono)",
                              letterSpacing: "0.06em",
                              textTransform: "uppercase",
                              fontSize: 12,
                              color: "rgba(244,235,215,0.85)",
                              borderBottom: "1px solid rgba(244,235,215,0.25)",
                              paddingBottom: 10,
                            }}
                          >
                            📜 {right.article}
                          </p>
                          <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                            {right.law.map((point) => (
                              <li
                                key={point}
                                style={{
                                  padding: "8px 0 8px 28px",
                                  position: "relative",
                                  fontFamily: "var(--font-condensed)",
                                  fontSize: "clamp(18px, 1.6vw, 21px)",
                                  lineHeight: 1.35,
                                  fontWeight: 600,
                                  color: "#ffffff",
                                }}
                              >
                                <span
                                  style={{
                                    position: "absolute",
                                    left: 0,
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    color: "var(--color-gold)",
                                    fontSize: 22,
                                    lineHeight: 1,
                                  }}
                                >
                                  ▸
                                </span>
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function JoinSection() {
  return (
    <section id="join" className="section section-responsive" style={{ padding: "120px 0", position: "relative", overflow: "hidden" }}>
      {/* Light logo background */}
      <img
        src="/logo.png"
        alt=""
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "min(500px, 60vw)",
          height: "min(500px, 60vw)",
          borderRadius: "50%",
          objectFit: "cover",
          opacity: 0.06,
          pointerEvents: "none",
        }}
      />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div
          className="animate-section join-card"
          style={{
            border: "3px solid var(--color-ink)",
            boxShadow: "10px 10px 0 var(--color-ink)",
            background: "var(--color-paper)",
            textAlign: "center",
            maxWidth: 960,
            margin: "0 auto",
          }}
        >
          <h2
            className="section-title"
            style={{ fontSize: "clamp(44px, 7vw, 88px)", margin: "0 0 32px" }}
          >
            UNITE.{" "}
            <span className="highlight-text">ORGANIZE.</span>{" "}
            <span className="highlight-text-saffron">FIGHT.</span>
          </h2>

          <div style={{ borderTop: "2px solid var(--color-ink)", borderBottom: "2px solid var(--color-ink)", padding: "28px 0", marginBottom: 40 }}>
            <p style={{ color: "var(--color-ink)", fontSize: 19, lineHeight: 1.65, maxWidth: 640, margin: "0 auto", fontWeight: 500 }}>
              Fill the form. Let us know you are ready to speak for right and truth. Fill the form below — it takes two minutes, and you don&apos;t even need to give your name.
            </p>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16, marginBottom: 40 }}>
            <a
              href="https://tally.so/r/2EzPJA"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: "18px 36px", fontSize: 16 }}
            >
              SHARE THE TRUTH
            </a>
            <a href="https://tally.so/r/68G2eA" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: "18px 36px", fontSize: 16 }}>
              JOIN THE MOVEMENT
            </a>
          </div>

          {/* Anonymity Card */}
          <div style={{ borderTop: "2px solid var(--color-ink)", paddingTop: 32 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 20,
                padding: "24px 32px",
                border: "3px solid var(--color-green)",
                boxShadow: "8px 8px 0 var(--color-green)",
                background: "var(--color-green)",
                color: "var(--color-paper)",
                maxWidth: 640,
                margin: "0 auto",
              }}
            >
              <span style={{
                fontSize: 32,
                width: 52,
                height: 52,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "var(--color-paper)",
                color: "var(--color-green)",
                border: "2px solid var(--color-paper)",
                borderRadius: "50%",
                flexShrink: 0,
              }}>🔒</span>
              <div>
                <h3 style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(16px, 2vw, 20px)",
                  textTransform: "uppercase",
                  lineHeight: 1.1,
                  margin: "0 0 6px",
                }}>
                  100% ANONYMOUS
                </h3>
                <p style={{ color: "rgba(244,235,215,0.9)", fontSize: 14, lineHeight: 1.5, margin: 0 }}>
                  We don&apos;t need your name, phone, or email. We don&apos;t need to know who you are. Just tell us you&apos;re in — your district, your industry, how you want to help. A movement doesn&apos;t need your identity. It needs your voice.
                </p>
              </div>
            </div>
          </div>

          {/* TODO: Re-enable when social sharing is ready
          <div style={{ marginTop: 0, paddingTop: 32, borderTop: "2px solid var(--color-ink)" }}>
            <p style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-ink-3)", fontSize: 11, marginBottom: 20 }}>
              SPREAD THE WORD — YOUR BOSS CERTAINLY ISN&apos;T GOING TO
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
              {["WhatsApp", "Twitter / X", "Instagram", "Telegram"].map((platform) => (
                <span key={platform} className="social-chip">
                  {platform}
                </span>
              ))}
            </div>
          </div>
          */}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: "var(--color-ink)", color: "var(--color-paper)", paddingTop: 0 }}>
      <div className="tricolor-ribbon-thick" />
      <div className="container" style={{ paddingTop: 80 }}>
        <div className="footer-grid" style={{ paddingBottom: 60 }}>
          {/* Brand */}
          <div>
            <div style={{ marginBottom: 28, display: "flex", alignItems: "center", gap: 12 }}>
              <img src="/logo.png" alt="Majboor Janta Party" style={{ width: 56, height: 56, borderRadius: "50%", objectFit: "cover", border: "2px solid rgba(244,235,215,0.3)" }} />
              <span style={{ fontFamily: "var(--font-display)", fontSize: 24, lineHeight: 0.94 }}>
                <span style={{ color: "var(--color-blood)" }}>Majboor</span>{" "}
                <span>Janta Party</span>
              </span>
            </div>
            <p style={{ fontFamily: "var(--font-sans)", color: "rgba(244,235,215,0.6)", maxWidth: 320, fontSize: 15, lineHeight: 1.6 }}>
              A public resource for every worker in India. Funded by nothing. Sponsored by no one. Powered by the radical notion that workers deserve to know the law.
            </p>
          </div>

          {/* Link columns */}
          <div className="footer-links-grid">
            <div>
              <h4 style={{ fontFamily: "var(--font-display)", fontSize: 16, textTransform: "uppercase", marginBottom: 28, paddingBottom: 16, borderBottom: "2px solid rgba(244,235,215,0.15)" }}>
                Know Your Rights
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { label: "Constitutional Rights", href: "#rights" },
                ].map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="footer-link">
                      <span style={{ color: "var(--color-saffron-deep)", fontSize: 12 }}>▸</span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 style={{ fontFamily: "var(--font-display)", fontSize: 16, textTransform: "uppercase", marginBottom: 28, paddingBottom: 16, borderBottom: "2px solid rgba(244,235,215,0.15)" }}>
                Take Action
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { label: "Join the Movement", href: "#join" },
                ].map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="footer-link">
                      <span style={{ color: "var(--color-saffron-deep)", fontSize: 12 }}>▸</span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div
          className="footer-bottom"
          style={{
            borderTop: "1px solid rgba(244,235,215,0.12)",
            padding: "22px 0",
          }}
        >
          <p style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(244,235,215,0.4)", fontSize: 11 }}>
            © {new Date().getFullYear()} Majboor Janta Party · All Rants Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <Ticker />
      <HeroSection />
      <LogoBanner />
      <RightsGrid />
      <JoinSection />
      <Footer />
    </main>
  );
}
