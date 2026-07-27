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
    desc: "Your boss thinks you're a machine. The Constitution disagrees. You have the right to be treated like a human being — not a printer that runs on chai and guilt.",
    span: false,
  },
  {
    icon: "🤝",
    title: "Right to Form Associations",
    article: "Article 19(1)(c)",
    desc: "You can form a union. You can collectively bargain. Your employer cannot fire you for organizing — though they'll try creative ways like 'restructuring' or 'culture fit'.",
    span: false,
  },
  {
    icon: "🚫",
    title: "Right Against Forced Labour",
    article: "Article 23",
    desc: "If you're working 12 hours for 8 hours of pay, congratulations — you've been volunteered for forced labour. The Constitution has a word for that: unconstitutional.",
    span: true,
  },
  {
    icon: "⚖️",
    title: "Right to Equality",
    article: "Articles 14 & 15",
    desc: "Religion, race, caste, sex, place of birth — none of these determine your worth. Your employer's opinion of your worth also doesn't determine your worth.",
    span: false,
  },
  {
    icon: "💰",
    title: "Equal Pay for Equal Work",
    article: "Article 39(d)",
    desc: "If a man and a woman do the same job, they get the same pay. This is not a suggestion. This is the law. Your HR department's spreadsheet doesn't override the Constitution.",
    span: false,
  },
];

const STATUTORY_RIGHTS = [
  {
    icon: "🏛️",
    title: "Code on Wages, 2019",
    items: [
      "Minimum wage fixation — because your landlord doesn't accept 'exposure' as rent",
      "Timely payment — wages by the 7th, not 'when we feel like it'",
      "Equal remuneration — gender doesn't determine your bank account's worth",
    ],
  },
  {
    icon: "🛡️",
    title: "OSH Code, 2020",
    items: [
      "Safe workplace — hard hats are not optional fashion accessories",
      "Weekly off — at least one day to remember what sunlight looks like",
      "Annual leave — because even your laptop needs a reboot occasionally",
    ],
  },
  {
    icon: "📋",
    title: "Social Security Code, 2020",
    items: [
      "EPF coverage — your future self will thank you, unlike your current employer",
      "ESIC — medical benefits that actually cover medical things",
      "Maternity benefit — 26 weeks paid, because growing a human is apparently work",
    ],
  },
  {
    icon: "💼",
    title: "Industrial Relations, 2020",
    items: [
      "Form trade unions — because WhatsApp groups don't count",
      "Collective bargaining — strength in numbers, literally",
      "Fair layoff procedure — they can't just ghost you after 20 years",
    ],
  },
];

const KNOW_YOUR_RIGHTS = [
  {
    number: "01",
    title: "Minimum Wage is NOT Optional",
    body: "Your employer must pay at least the minimum wage. 'But we're like a family here' is not a legal tender. If you're paid less, you're not underpaid — you're being robbed with extra steps.",
  },
  {
    number: "02",
    title: "No Contract? No Work!",
    body: "No written appointment letter? That's not 'informal culture' — that's illegal. The law demands written terms. Your employer demands silence. Choose wisely.",
  },
  {
    number: "03",
    title: "Overtime = DOUBLE Pay",
    body: "Beyond 9 hours a day or 48 hours a week? That's double pay territory. 'We need you to stay late' is not a get-out-of-paying card. Print the labour code. Frame it. Gift it to your manager.",
  },
  {
    number: "04",
    title: "Sexual Harassment is a CRIME",
    body: "Every employer MUST have an Internal Complaints Committee. If they don't, they're breaking the law. Your right to a safe workplace is not negotiable — unlike your salary apparently.",
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
    "12-HOUR SHIFTS WITHOUT OVERTIME IS ILLEGAL",
    "NO CONTRACT? NO WORK!",
    "YOUR BOSS IS NOT YOUR KING",
    "IGNORANCE IS THEIR BIGGEST WEAPON",
    "DEMAND YOUR DUES — THEY ALREADY SPENT THEM",
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
          You have rights. Your boss hopes you don't know them. This website exists to ruin that plan. No legal jargon. No fine print. Just the law — written in a language humans understand.
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
          <span className="eyebrow">Chapter One — Filed Under: General Disgruntlement</span>
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
            Millions of workers in India sign contracts they cannot read, accept wages below the minimum, and suffer silent exploitation — because nobody told them the law exists. The system runs on your silence. We&apos;re here to turn up the volume.
          </p>
          <p style={{ color: "var(--color-ink-2)", fontSize: 18, lineHeight: 1.7, textAlign: "center" }}>
            This platform exists to shatter that silence. No legal jargon. No fine print. Just clear, actionable knowledge of what you are owed — written in a language your HR department hopes you never learn.
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
              KNOWLEDGE IS YOURS. THEY CAN&apos;T REVOKE IT.
            </span>
          </div>
        </div>
      </div>
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
        padding: "100px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Tricolor ribbon */}
      <div className="tricolor-ribbon" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />
      <div className="tricolor-ribbon" style={{ position: "absolute", bottom: 0, left: 0, right: 0 }} />

      <div className="container animate-section" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", position: "relative", zIndex: 1 }}>
        <img
          src="/logo.jpg"
          alt="Dihadi Janta Party"
          style={{
            width: 160,
            height: 160,
            borderRadius: "50%",
            objectFit: "cover",
            border: "4px solid var(--color-saffron)",
            boxShadow: "0 0 60px rgba(224,101,30,0.3)",
            marginBottom: 48,
          }}
        />

        <h2
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--color-paper)",
            fontSize: "clamp(36px, 6vw, 72px)",
            lineHeight: 0.95,
            margin: "0 0 32px",
            maxWidth: "20ch",
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
            maxWidth: 600,
            margin: "0 auto 40px",
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
          DIHADI JANTA PARTY — EST. 2026
          <span style={{ width: 40, height: 1, background: "var(--color-saffron)", display: "inline-block" }} />
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
          <div
            style={{
              border: "3px solid var(--color-ink)",
              boxShadow: "8px 8px 0 var(--color-ink)",
              background: "var(--color-paper)",
              padding: "40px 48px",
              marginBottom: 48,
            }}
          >
            <span className="eyebrow">Legal Framework — Yes, It Actually Exists</span>
            <h2 className="section-title" style={{ fontSize: "clamp(36px, 5vw, 56px)", margin: "0 0 16px" }}>
              Constitutional{" "}
              <span style={{ color: "var(--color-blood)" }}>Rights</span>
            </h2>
            <p style={{ color: "var(--color-ink-2)", fontSize: 19, lineHeight: 1.6, maxWidth: 700 }}>
              These are NOT privileges your boss graciously bestows upon you. They are constitutional guarantees. Your employer&apos;s opinion is irrelevant. The Constitution says so.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 20 }}>
            {RIGHTS.map((right, i) => (
              <div
                key={right.title}
                className={`animate-section stagger-${Math.min(i + 1, 6)}`}
                style={{
                  border: right.span ? "3px solid var(--color-blood)" : "2px solid var(--color-ink)",
                  boxShadow: right.span ? "8px 8px 0 var(--color-blood)" : "6px 6px 0 var(--color-ink)",
                  background: right.span ? "var(--color-blood)" : "var(--color-paper)",
                  color: right.span ? "var(--color-paper)" : "var(--color-ink)",
                  padding: "32px 28px",
                  gridColumn: right.span ? "span 2" : undefined,
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                  transition: "all 0.15s ease",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 40 }}>{right.icon}</span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      fontSize: 11,
                      color: right.span ? "var(--color-paper)" : "var(--color-saffron-deep)",
                      border: `1px solid ${right.span ? "var(--color-paper)" : "var(--color-saffron-deep)"}`,
                      padding: "5px 12px",
                      fontWeight: 600,
                    }}
                  >
                    {right.article}
                  </span>
                </div>
                <h3 style={{
                  fontFamily: "var(--font-display)",
                  letterSpacing: "0.02em",
                  textTransform: "uppercase",
                  fontSize: 22,
                  lineHeight: 1.1,
                }}>
                  {right.title}
                </h3>
                <p style={{
                  fontSize: 15,
                  lineHeight: 1.6,
                  flex: 1,
                  color: right.span ? "rgba(244,235,215,0.85)" : "var(--color-ink-2)",
                }}>
                  {right.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Labour Codes */}
        <div className="animate-section">
          <div
            style={{
              border: "3px solid var(--color-ink)",
              boxShadow: "8px 8px 0 var(--color-ink)",
              background: "var(--color-ink)",
              color: "var(--color-paper)",
              padding: "40px 48px",
              marginBottom: 48,
            }}
          >
            <span className="eyebrow eyebrow-on-dark">Statutory Protection — Laws That Actually Have Teeth</span>
            <h2 className="section-title" style={{ fontSize: "clamp(36px, 5vw, 56px)", margin: "0 0 16px", color: "var(--color-paper)" }}>
              The{" "}
              <span style={{ color: "var(--color-saffron-2)", fontFamily: "Georgia, serif", fontStyle: "italic" }}>
                Labour Codes
              </span>
            </h2>
            <p style={{ color: "rgba(244,235,215,0.7)", fontSize: 19, lineHeight: 1.6, maxWidth: 700 }}>
              Four codes that govern every workplace in India. Your employer&apos;s lawyer has read them. Now it&apos;s your turn. Ignorance of the law is not an excuse — it&apos;s their business model.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(480px, 1fr))", gap: 20 }}>
            {STATUTORY_RIGHTS.map((code, i) => (
              <div
                key={code.title}
                className={`animate-section stagger-${Math.min(i + 1, 4)}`}
                style={{
                  border: "3px solid var(--color-ink)",
                  boxShadow: "8px 8px 0 var(--color-saffron-deep)",
                  background: "var(--color-paper)",
                  padding: "32px 32px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24, paddingBottom: 20, borderBottom: "2px solid var(--color-ink)" }}>
                  <span style={{
                    fontSize: 32,
                    width: 52,
                    height: 52,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "var(--color-saffron-deep)",
                    color: "var(--color-paper)",
                    border: "2px solid var(--color-ink)",
                  }}>{code.icon}</span>
                  <h3 style={{ fontFamily: "var(--font-display)", letterSpacing: "0.04em", textTransform: "uppercase", fontSize: 20, fontWeight: 700, lineHeight: 1.1 }}>
                    {code.title}
                  </h3>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 16 }}>
                  {code.items.map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 15, lineHeight: 1.55 }}>
                      <span style={{
                        color: "var(--color-saffron-deep)",
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                        flexShrink: 0,
                        marginTop: 2,
                        fontSize: 16,
                      }}>→</span>
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
          <span className="eyebrow eyebrow-on-dark">Things Your Employer Hopes You Never Read</span>
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
            Print this page. Paste it on the break room wall. Screenshot it. Send it to every worker you know. The more people who know, the harder it is to exploit.
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
                  KNOW / {item.number}
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
            <span className="eyebrow">Stop Suffering in Silence</span>
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
              Withholding wages? Denying leave? Violating labour laws? Your employer is counting on your silence. Don&apos;t give them the satisfaction. Your identity can be protected — the law is on your side, even if your HR isn&apos;t.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { icon: "🔒", title: "CONFIDENTIAL", desc: "Your identity is protected. Unlike your salary, this is actually private." },
                { icon: "📜", title: "DOCUMENTED", desc: "Every report creates a timestamped record. Screenshots are great, but legal records are better." },
                { icon: "⚖️", title: "ACTION TAKEN", desc: "Forwarded to the Labour Commissioner. Yes, the one with actual authority." },
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
              YOUR EVIDENCE KIT
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 24 }}>
              {[
                "Write down everything: date, time, location, who saw it. Memory is unreliable, courts are not.",
                "Photocopy your appointment letter and salary slips. Hide them somewhere your employer can't 'accidentally' delete.",
                "Screenshot every threatening WhatsApp message, email, or 'casual conversation' that turned legal.",
                "Note your EPF/UAN number NOW — before they 'lose' your records.",
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
                This is not legal advice. For serious threats, approach the nearest legal services authority immediately. Or call a lawyer. Or both.
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
            <span className="eyebrow eyebrow-on-dark">Numbers That Actually Help</span>
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
              A SINGLE PHONE CALL CAN STOP EXPLOITATION. YOUR BOSS&apos;S PR TEAM CAN&apos;T SPIN AWAY A LABOUR COMPLAINT.
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
              Knowledge spreads. Exploitation ends. Send this to your colleague, your domestic help, your factory supervisor, your gig-worker neighbour. The more people who know, the harder it is to exploit. That&apos;s not a slogan — that&apos;s game theory.
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
              SPREAD THE WORD — YOUR BOSS CERTAINLY ISN&apos;T GOING TO
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
              A public resource for every worker in India. Funded by nothing. Sponsored by no one. Powered by the radical notion that workers deserve to know the law.
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
            © {new Date().getFullYear()} Dihadi Janta Party · All Rants Reserved
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
      <LogoBanner />
      <RightsGrid />
      <KnowYourRightsSection />
      <ReportSection />
      <ResourcesSection />
      <JoinSection />
      <Footer />
    </main>
  );
}
