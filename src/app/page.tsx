import React from "react";

const NAV_ITEMS = [
  { label: "Rights", href: "#rights" },
  { label: "Know Your Rights", href: "#know-your-rights" },
  { label: "Report", href: "#report" },
  { label: "Resources", href: "#resources" },
];

const RIGHTS = [
  {
    icon: "🛡️",
    title: "Right to Live with Dignity",
    article: "Article 21",
    desc: "Every worker has the right to be treated with dignity, respect, and humanity at the workplace. Any abuse is a direct violation of your constitutional rights.",
    span: false,
  },
  {
    icon: "🤝",
    title: "Right to Form Associations",
    article: "Article 19(1)(c)",
    desc: "Workers have the constitutional right to form or join trade unions and collectively raise workplace concerns. They cannot fire you for organizing.",
    span: false,
  },
  {
    icon: "🚫",
    title: "Right Against Forced Labour",
    article: "Article 23",
    desc: "No person shall be forced to work against their will or without lawful minimum payment. Paying below minimum wage is forced labour.",
    span: true,
  },
  {
    icon: "⚖️",
    title: "Right to Equality",
    article: "Articles 14 & 15",
    desc: "Every worker is entitled to equal protection under the law, without discrimination on grounds of religion, race, caste, sex, or place of birth.",
    span: false,
  },
  {
    icon: "💰",
    title: "Equal Pay for Equal Work",
    article: "Article 39(d)",
    desc: "Men and women performing the same or similar work must receive equal remuneration. No exceptions.",
    span: false,
  },
];

const STATUTORY_RIGHTS = [
  {
    icon: "🏛️",
    title: "Code on Wages, 2019",
    items: [
      "Minimum wage fixation and revision",
      "Timely payment of wages — no delay beyond 7th of every month",
      "Equal remuneration regardless of gender",
    ],
  },
  {
    icon: "🛡️",
    title: "OSH Code, 2020",
    items: [
      "Safe workplace free from hazards",
      "Weekly off — at least one day in seven",
      "Annual leave with wages — at least one day for every 20 days worked",
    ],
  },
  {
    icon: "📋",
    title: "Social Security Code, 2020",
    items: [
      "Provident Fund (EPF) coverage for all eligible employees",
      "Employees' State Insurance (ESIC) for medical & cash benefits",
      "Maternity benefit — 26 weeks paid leave",
    ],
  },
  {
    icon: "💼",
    title: "Industrial Relations, 2020",
    items: [
      "Right to form & register trade unions",
      "Collective bargaining rights",
      "Fair procedure for layoff, retrenchment & closure",
    ],
  },
];

const KNOW_YOUR_RIGHTS = [
  {
    number: "01",
    title: "Minimum Wage is NOT Optional",
    body: "Every employer MUST pay at least the minimum wage fixed by the appropriate government. No agreement can reduce this. If you are paid less, you are a victim of wage theft.",
  },
  {
    number: "02",
    title: "No Contract? No Work!",
    body: "The law requires written terms of employment for every worker. This includes salary, working hours, leave entitlement, and grounds for termination. Demand a written appointment letter.",
  },
  {
    number: "03",
    title: "Overtime = DOUBLE Pay",
    body: "Any work beyond 9 hours a day or 48 hours a week MUST be compensated at TWICE the ordinary rate of wages. If you work extra, demand your overtime.",
  },
  {
    number: "04",
    title: "Sexual Harassment is a CRIME",
    body: "Every employer must constitute an Internal Complaints Committee. You have the right to file a formal complaint without fear of retaliation.",
  },
];

const RESOURCES = [
  {
    title: "Helpline Numbers",
    items: [
      { label: "Central Labour Helpline", value: "1800-111-669" },
      { label: "Women Helpline", value: "181" },
      { label: "ESIC Helpline", value: "1800-11-8899" },
      { label: "EPFO Helpline", value: "1800-118-005" },
    ],
  },
  {
    title: "Portals & Apps",
    items: [
      { label: "EPF Passbook", value: "umang.gov.in" },
      { label: "ESIC Portal", value: "esic.gov.in" },
      { label: "Shram Suvidha", value: "shramsuvidha.gov.in" },
      { label: "NCLT", value: "nclt.gov.in" },
    ],
  },
  {
    title: "Legal Aid",
    items: [
      { label: "National Legal Services", value: "nalsa.gov.in" },
      { label: "Free Legal Aid", value: "15100" },
      { label: "Labour Commissioner", value: "State Portal" },
    ],
  },
];

function Navbar() {
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
          <img src="/logo.jpg" alt="Dihadi Janta Party" style={{ width: 56, height: 56, borderRadius: "50%", objectFit: "cover", border: "2px solid var(--color-ink)" }} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontFamily: "var(--font-display)", fontSize: 20, lineHeight: 0.94 }}>
              <span style={{ color: "var(--color-blood)" }}>Dihadi</span>{" "}
              <span>Janta Party</span>
            </span>
            <span style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-saffron-deep)", fontSize: 10 }}>
              Know Your Rights
            </span>
          </div>
        </a>

        <div style={{ display: "flex", alignItems: "center", gap: 36 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
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
          <a href="#join" className="btn-primary" style={{ padding: "12px 20px", fontSize: 13 }}>
            UNITE. ORGANIZE. FIGHT.
          </a>
        </div>
      </div>
    </nav>
  );
}

function Ticker() {
  const messages = [
    "WAGE THEFT IS A CRIME",
    "12 HOUR SHIFTS WITHOUT OVERTIME IS ILLEGAL",
    "NO CONTRACT? NO WORK!",
    "DEMAND YOUR DUES",
    "IGNORANCE IS THEIR BIGGEST WEAPON",
    "REPORT EXPLOITATION TODAY",
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

      <div className="container animate-up" style={{ position: "relative", zIndex: 1, paddingTop: 72, paddingBottom: 90 }}>
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
          <span style={{ background: "var(--color-blood)", borderRadius: "50%", width: 7, height: 7, display: "inline-block" }} />
          KNOWLEDGE IS POWER
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
          YOUR SWEAT.{" "}
          <span style={{ color: "var(--color-saffron-deep)", fontFamily: "Georgia, serif", fontStyle: "italic" }}>
            THEIR WEALTH.
          </span>{" "}
          <span style={{ color: "var(--color-green)" }}>
            DEMAND YOUR DUES.
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
          Every worker has fundamental rights. Stop letting them exploit your ignorance. Know the law. Use it. Protect yourself.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 56 }}>
          <a href="#rights" className="btn-primary">
            ARM YOURSELF WITH THE LAW →
          </a>
          <a href="#report" className="btn-secondary">
            REPORT EXPLOITATION
          </a>
        </div>

        {/* Stats strip */}
        <div
          style={{
            borderTop: "1px solid rgba(26,17,8,0.2)",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            paddingTop: 22,
          }}
        >
          {[
            { value: "8+", label: "Fundamental Rights" },
            { value: "4", label: "Labour Codes" },
            { value: "50 Cr+", label: "Workers Protected" },
            { value: "24/7", label: "Helplines Active" },
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
    </section>
  );
}

function VisionSection() {
  return (
    <section
      style={{
        background: "linear-gradient(180deg, var(--color-paper) 0, var(--color-paper-2) 100%)",
        borderBottom: "2px solid var(--color-ink)",
        padding: "110px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Light logo background */}
      <img
        src="/logo.jpg"
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
      <div className="container animate-section" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <span className="eyebrow">Chapter One</span>
          <h2
            className="section-title"
            style={{ fontSize: "clamp(36px, 5.5vw, 68px)", margin: "0 0 24px" }}
          >
            Our Movement&apos;s{" "}
            <span style={{ color: "var(--color-saffron-deep)", fontFamily: "Georgia, serif", fontStyle: "italic", fontWeight: 400 }}>
              Vision.
            </span>
          </h2>
        </div>

        <div style={{ maxWidth: 720, margin: "0 auto", display: "grid", gap: 24 }}>
          <p style={{ color: "var(--color-ink-2)", fontSize: 18, lineHeight: 1.7, textAlign: "center" }}>
            Millions of workers in India sign contracts they cannot read, accept wages below the minimum, and suffer silent exploitation because nobody told them what the law says.
          </p>
          <p style={{ color: "var(--color-ink-2)", fontSize: 18, lineHeight: 1.7, textAlign: "center" }}>
            This platform exists to shatter that silence. No legal jargon. No fine print. Just clear, actionable knowledge of what you are owed.
          </p>
        </div>

        <div style={{ marginTop: 56, display: "flex", justifyContent: "center" }}>
          <div
            style={{
              border: "2px solid var(--color-ink)",
              boxShadow: "6px 6px 0 var(--color-ink)",
              background: "var(--color-paper)",
              padding: "24px 40px",
              textAlign: "center",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-condensed)",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                fontSize: 18,
                fontWeight: 700,
              }}
            >
              KNOWLEDGE IS YOURS. USE IT.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function RightsGrid() {
  return (
    <section id="rights" className="section">
      <div className="container">
        {/* Constitutional Rights */}
        <div className="animate-section" style={{ marginBottom: 96 }}>
          <span className="eyebrow">Legal Framework</span>
          <h2 className="section-title" style={{ fontSize: "clamp(32px, 4.5vw, 52px)", margin: "0 0 16px" }}>
            Constitutional{" "}
            <span style={{ color: "var(--color-blood)" }}>Rights</span>
          </h2>
          <p style={{ color: "var(--color-ink-2)", fontSize: 18, lineHeight: 1.55, maxWidth: 640, margin: "0 0 48px" }}>
            These are NOT privileges given by your boss. They are constitutional guarantees.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 20 }}>
            {RIGHTS.map((right, i) => (
              <div
                key={right.title}
                className={`card animate-section stagger-${Math.min(i + 1, 6)} ${right.span ? "col-span-2" : ""}`}
                style={{
                  padding: "28px 24px",
                  gridColumn: right.span ? "span 2" : undefined,
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 32 }}>{right.icon}</span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      fontSize: 11,
                      color: "var(--color-saffron-deep)",
                      border: "1px solid var(--color-saffron-deep)",
                      padding: "4px 10px",
                    }}
                  >
                    {right.article}
                  </span>
                </div>
                <h3 style={{ fontFamily: "var(--font-condensed)", letterSpacing: "0.06em", textTransform: "uppercase", fontSize: 20, fontWeight: 700 }}>
                  {right.title}
                </h3>
                <p style={{ color: "var(--color-ink-2)", fontSize: 15, lineHeight: 1.55, flex: 1 }}>
                  {right.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Labour Codes */}
        <div className="animate-section">
          <span className="eyebrow">Statutory Protection</span>
          <h2 className="section-title" style={{ fontSize: "clamp(32px, 4.5vw, 52px)", margin: "0 0 16px" }}>
            The{" "}
            <span style={{ color: "var(--color-saffron-deep)", fontFamily: "Georgia, serif", fontStyle: "italic" }}>
              Labour Codes
            </span>
          </h2>
          <p style={{ color: "var(--color-ink-2)", fontSize: 18, lineHeight: 1.55, maxWidth: 640, margin: "0 0 48px" }}>
            Enforced through the four Labour Codes that govern every workplace in India.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(480px, 1fr))", gap: 20 }}>
            {STATUTORY_RIGHTS.map((code, i) => (
              <div
                key={code.title}
                className={`animate-section stagger-${Math.min(i + 1, 4)}`}
                style={{
                  border: "2px solid var(--color-ink)",
                  boxShadow: "6px 6px 0 var(--color-ink)",
                  background: "var(--color-paper)",
                  padding: "28px 28px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24, paddingBottom: 20, borderBottom: "1px solid rgba(26,17,8,0.15)" }}>
                  <span style={{ fontSize: 28 }}>{code.icon}</span>
                  <h3 style={{ fontFamily: "var(--font-condensed)", letterSpacing: "0.06em", textTransform: "uppercase", fontSize: 20, fontWeight: 700 }}>
                    {code.title}
                  </h3>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 16 }}>
                  {code.items.map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 15, lineHeight: 1.5 }}>
                      <span style={{ color: "var(--color-saffron-deep)", fontFamily: "var(--font-condensed)", fontWeight: 700, flexShrink: 0, marginTop: 2 }}>→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function KnowYourRightsSection() {
  return (
    <section id="know-your-rights" className="section section-dark" style={{ padding: "120px 0" }}>
      <div className="container">
        <div className="animate-section" style={{ marginBottom: 72 }}>
          <span className="eyebrow eyebrow-on-dark">Critical Knowledge</span>
          <h2
            className="section-title"
            style={{
              fontSize: "clamp(44px, 7vw, 88px)",
              color: "var(--color-paper)",
              margin: "0 0 24px",
              maxWidth: "18ch",
            }}
          >
            READ <span style={{ color: "var(--color-saffron-2)", fontFamily: "Georgia, serif", fontStyle: "italic" }}>THEM.</span>{" "}
            <span style={{ color: "var(--color-saffron-2)" }}>USE THEM.</span>
          </h2>
          <p style={{ color: "rgba(244,235,215,0.75)", fontSize: 18, lineHeight: 1.6, maxWidth: 560 }}>
            Print this page. Paste it on the wall. Make sure everyone knows.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(480px, 1fr))", gap: 20 }}>
          {KNOW_YOUR_RIGHTS.map((item, i) => (
            <div
              key={item.number}
              className={`animate-section stagger-${Math.min(i + 1, 6)}`}
              style={{
                border: "2px solid rgba(244,235,215,0.2)",
                background: "rgba(244,235,215,0.04)",
                padding: "32px 28px",
                display: "flex",
                flexDirection: "column",
                gap: 20,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Large watermark number */}
              <div
                style={{
                  position: "absolute",
                  right: -16,
                  bottom: -24,
                  fontFamily: "var(--font-display)",
                  fontSize: "140px",
                  lineHeight: 1,
                  color: "var(--color-blood)",
                  opacity: 0.15,
                  pointerEvents: "none",
                }}
              >
                {item.number}
              </div>

              <div style={{ position: "relative", zIndex: 1 }}>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "var(--color-saffron-deep)",
                    fontSize: 12,
                    display: "block",
                    marginBottom: 16,
                  }}
                >
                  REQ / {item.number}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--color-paper)",
                    margin: "0 0 12px",
                    fontSize: "clamp(22px, 2.5vw, 30px)",
                    lineHeight: 1.1,
                    textTransform: "uppercase",
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ color: "rgba(244,235,215,0.8)", fontSize: 16, lineHeight: 1.6 }}>
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReportSection() {
  return (
    <section id="report" className="section" style={{ padding: "120px 0" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "start" }}>
          {/* Left: Info */}
          <div className="animate-section">
            <span className="eyebrow">Take Action</span>
            <h2
              className="section-title"
              style={{ fontSize: "clamp(36px, 5.5vw, 68px)", margin: "0 0 24px" }}
            >
              REPORT{" "}
              <span style={{ color: "var(--color-saffron-deep)", fontFamily: "Georgia, serif", fontStyle: "italic" }}>
                EXPLOITATION
              </span>
            </h2>
            <p style={{ color: "var(--color-ink-2)", fontSize: 18, lineHeight: 1.7, marginBottom: 40 }}>
              If your employer is withholding wages, denying leave, or violating any labour law — do not stay silent. Your identity can be protected.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { icon: "🔒", title: "CONFIDENTIAL", desc: "Your identity is never shared without consent." },
                { icon: "📜", title: "DOCUMENTED", desc: "Every report creates a timestamped record." },
                { icon: "⚖️", title: "ACTION TAKEN", desc: "Forwarded to the appropriate Labour Commissioner." },
              ].map((f) => (
                <div
                  key={f.title}
                  style={{
                    border: "2px solid var(--color-ink)",
                    boxShadow: "4px 4px 0 var(--color-ink)",
                    background: "var(--color-paper)",
                    padding: "20px 24px",
                    display: "flex",
                    alignItems: "center",
                    gap: 20,
                  }}
                >
                  <span style={{ fontSize: 28, flexShrink: 0 }}>{f.icon}</span>
                  <div>
                    <h4 style={{ fontFamily: "var(--font-condensed)", letterSpacing: "0.1em", textTransform: "uppercase", fontSize: 16, fontWeight: 700, marginBottom: 4 }}>
                      {f.title}
                    </h4>
                    <p style={{ color: "var(--color-ink-2)", fontSize: 14, lineHeight: 1.5 }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Evidence Checklist */}
          <div
            className="animate-section stagger-1"
            style={{
              border: "3px solid var(--color-ink)",
              boxShadow: "8px 8px 0 var(--color-ink)",
              background: "var(--color-paper)",
              padding: "36px 32px",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(24px, 3vw, 34px)",
                textTransform: "uppercase",
                lineHeight: 1,
                margin: "0 0 32px",
                paddingBottom: 24,
                borderBottom: "2px solid var(--color-ink)",
              }}
            >
              EVIDENCE CHECKLIST
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 24 }}>
              {[
                "Record details: date, time, location, witnesses.",
                "Secure copies of appointment letters & salary slips.",
                "Screenshot all WhatsApp/email threats or commands.",
                "Note down your EPF/UAN number immediately.",
              ].map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 16, fontSize: 17, lineHeight: 1.5 }}>
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      background: "var(--color-saffron-deep)",
                      color: "var(--color-paper)",
                      padding: "4px 10px",
                      border: "2px solid var(--color-ink)",
                      flexShrink: 0,
                      marginTop: 2,
                      fontSize: 14,
                    }}
                  >
                    ✓
                  </span>
                  <span style={{ fontWeight: 600 }}>{item}</span>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: 32, padding: 20, background: "var(--color-ink)", color: "var(--color-paper)", textAlign: "center" }}>
              <p style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.12em", textTransform: "uppercase", fontSize: 11, lineHeight: 1.6, margin: 0 }}>
                This is not legal advice. For serious threats, approach the nearest legal services authority immediately.
              </p>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 56 }}>
          <a href="#" className="btn-primary" style={{ width: "100%", padding: "24px 32px", fontSize: 18, justifyContent: "center" }}>
            REPORT WAGE THEFT NOW →
          </a>
        </div>
      </div>
    </section>
  );
}

function ResourcesSection() {
  return (
    <section id="resources" className="section section-dark" style={{ padding: "120px 0" }}>
      <div className="container">
        <div className="animate-section" style={{ marginBottom: 72, display: "flex", alignItems: "flex-end", gap: 48, paddingBottom: 40, borderBottom: "2px solid rgba(244,235,215,0.15)" }}>
          <div style={{ flex: 1 }}>
            <span className="eyebrow eyebrow-on-dark">Help & Support</span>
            <h2
              className="section-title"
              style={{ fontSize: "clamp(36px, 5.5vw, 68px)", color: "var(--color-paper)", margin: 0 }}
            >
              <span style={{ color: "var(--color-saffron-2)" }}>HELPLINES</span>{" "}
              & RESOURCES
            </h2>
          </div>
          <div style={{ flex: 1, textAlign: "right" }}>
            <p style={{ fontFamily: "var(--font-condensed)", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-paper)", fontSize: 16, fontWeight: 700, lineHeight: 1.4, opacity: 0.85 }}>
              A SINGLE PHONE CALL CAN STOP EXPLOITATION IN ITS TRACKS.
            </p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: 24 }}>
          {RESOURCES.map((category, i) => (
            <div
              key={category.title}
              className={`animate-section stagger-${Math.min(i + 1, 3)}`}
              style={{
                border: "2px solid rgba(244,235,215,0.2)",
                background: "rgba(244,235,215,0.04)",
                padding: "32px 28px",
                display: "flex",
                flexDirection: "column",
                gap: 28,
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--color-paper)",
                  textTransform: "uppercase",
                  fontSize: "clamp(22px, 2.5vw, 28px)",
                  lineHeight: 1,
                  margin: 0,
                  paddingBottom: 20,
                  borderBottom: "2px solid rgba(244,235,215,0.15)",
                }}
              >
                {category.title}
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {category.items.map((item) => (
                  <div key={item.label}>
                    <div style={{ fontFamily: "var(--font-condensed)", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(244,235,215,0.6)", fontSize: 12, fontWeight: 600, marginBottom: 6 }}>
                      {item.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        color: "var(--color-saffron-2)",
                        fontSize: "clamp(18px, 2vw, 24px)",
                        lineHeight: 1.2,
                      }}
                    >
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function JoinSection() {
  return (
    <section id="join" className="section" style={{ padding: "120px 0", position: "relative", overflow: "hidden" }}>
      {/* Light logo background */}
      <img
        src="/logo.jpg"
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
          className="animate-section"
          style={{
            border: "3px solid var(--color-ink)",
            boxShadow: "10px 10px 0 var(--color-ink)",
            background: "var(--color-paper)",
            padding: "72px 56px",
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
            <span style={{ color: "var(--color-blood)" }}>ORGANIZE.</span>{" "}
            <span style={{ color: "var(--color-saffron-deep)", fontFamily: "Georgia, serif", fontStyle: "italic" }}>FIGHT.</span>
          </h2>

          <div style={{ borderTop: "2px solid var(--color-ink)", borderBottom: "2px solid var(--color-ink)", padding: "28px 0", marginBottom: 40 }}>
            <p style={{ color: "var(--color-ink-2)", fontSize: 18, lineHeight: 1.65, maxWidth: 640, margin: "0 auto" }}>
              Knowledge spreads. Exploitation ends. Share this with your colleagues, your domestic help, your factory supervisor, your gig-worker neighbour.
            </p>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16 }}>
            <a href="#" className="btn-primary" style={{ padding: "18px 36px", fontSize: 16 }}>
              SHARE THE TRUTH
            </a>
            <a href="#" className="btn-secondary" style={{ padding: "18px 36px", fontSize: 16 }}>
              VOLUNTEER NOW
            </a>
          </div>

          <div style={{ marginTop: 48, paddingTop: 32, borderTop: "2px solid var(--color-ink)" }}>
            <p style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-ink-3)", fontSize: 11, marginBottom: 20 }}>
              SPREAD THE WORD
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
              {["WhatsApp", "Twitter / X", "Instagram", "Telegram"].map((platform) => (
                <span
                  key={platform}
                  style={{
                    fontFamily: "var(--font-mono)",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    border: "1.5px solid rgba(26,17,8,0.2)",
                    background: "rgba(26,17,8,0.04)",
                    padding: "8px 16px",
                    fontSize: 11,
                    cursor: "pointer",
                    transition: "all 0.18s",
                  }}
                >
                  {platform}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: "var(--color-ink)", color: "var(--color-paper)", paddingTop: 80 }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, paddingBottom: 60 }}>
          {/* Brand */}
          <div>
            <div style={{ marginBottom: 28, display: "flex", alignItems: "center", gap: 12 }}>
              <img src="/logo.jpg" alt="Dihadi Janta Party" style={{ width: 56, height: 56, borderRadius: "50%", objectFit: "cover", border: "2px solid rgba(244,235,215,0.3)" }} />
              <span style={{ fontFamily: "var(--font-display)", fontSize: 24, lineHeight: 0.94 }}>
                <span style={{ color: "var(--color-blood)" }}>Dihadi</span>{" "}
                <span>Janta Party</span>
              </span>
            </div>
            <p style={{ fontFamily: "var(--font-sans)", color: "rgba(244,235,215,0.6)", maxWidth: 320, fontSize: 15, lineHeight: 1.6 }}>
              A public resource for every worker in India. Know your rights. Protect your future.
            </p>
          </div>

          {/* Link columns */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 36 }}>
            <div>
              <h4 style={{ fontFamily: "var(--font-display)", fontSize: 16, textTransform: "uppercase", marginBottom: 28, paddingBottom: 16, borderBottom: "2px solid rgba(244,235,215,0.15)" }}>
                Know Your Rights
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { label: "Constitutional Rights", href: "#rights" },
                  { label: "Labour Codes", href: "#rights" },
                  { label: "Know Your Rights", href: "#know-your-rights" },
                  { label: "Helplines", href: "#resources" },
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
                  { label: "Report Exploitation", href: "#report" },
                  { label: "Join the Movement", href: "#join" },
                  { label: "Volunteer", href: "#" },
                  { label: "Legal Aid", href: "#" },
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
                About
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 16 }}>
                {["Privacy Policy", "Terms of Use", "Contact", "Press"].map((link) => (
                  <li key={link}>
                    <a href="#" className="footer-link">
                      <span style={{ color: "var(--color-saffron-deep)", fontSize: 12 }}>▸</span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div
          style={{
            borderTop: "1px solid rgba(244,235,215,0.12)",
            padding: "22px 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(244,235,215,0.4)", fontSize: 11 }}>
            © {new Date().getFullYear()} Dihadi Janta Party · A Public Resource Initiative
          </p>
          <div style={{ display: "flex", gap: 24 }}>
            {["Privacy", "Terms", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  fontFamily: "var(--font-mono)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(244,235,215,0.4)",
                  fontSize: 10,
                  transition: "color 0.18s",
                }}
              >
                {item}
              </a>
            ))}
          </div>
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
      <VisionSection />
      <RightsGrid />
      <KnowYourRightsSection />
      <ReportSection />
      <ResourcesSection />
      <JoinSection />
      <Footer />
    </main>
  );
}
