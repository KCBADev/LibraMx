"use client";

import { useState } from "react";

const currency = new Intl.NumberFormat("es-MX", {
  style: "currency",
  currency: "MXN",
  maximumFractionDigits: 0,
});

function ArrowUpRight() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M5 15 15 5M6 5h9v9" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function FinanceMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" fill="none">
      <rect x="2" y="2" width="44" height="44" rx="14" stroke="currentColor" />
      <path
        d="M12 32h5V22h-5v10Zm10 0h5V16h-5v16Zm10 0h5V10h-5v22Z"
        fill="currentColor"
      />
      <path
        d="m12 19 9-6 7 2 9-7"
        stroke="#62B0F4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M33 8h4v4" stroke="#62B0F4" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

const steps = [
  {
    number: "01",
    title: "Platiquemos",
    description:
      "Cuéntanos sobre tu negocio y tus planes. Una persona real te acompaña desde el primer día.",
  },
  {
    number: "02",
    title: "Diseñamos tu plan",
    description:
      "Encontramos juntos una solución de financiamiento que se ajuste a tu empresa.",
  },
  {
    number: "03",
    title: "Hazlo realidad",
    description:
      "Recibe el impulso que necesitas y enfócate en hacer crecer lo que has construido.",
  },
];

const faqs = [
  {
    question: "¿Qué tipo de empresas pueden solicitar financiamiento?",
    answer:
      "Trabajamos con empresas mexicanas de distintos tamaños y sectores. Nuestro equipo revisa cada caso para entender las necesidades y el potencial de tu negocio.",
  },
  {
    question: "¿Qué documentos necesito?",
    answer:
      "Los requisitos dependen de la solución que mejor se adapte a tu empresa. En la primera conversación te compartimos una lista clara y personalizada.",
  },
  {
    question: "¿Cuánto financiamiento puedo solicitar?",
    answer:
      "Neriva ofrece financiamiento para negocios desde $100 mil hasta $20 millones de pesos. El monto y las condiciones están sujetos a la evaluación de tu empresa.",
  },
];

export default function Home() {
  const [amount, setAmount] = useState(1_000_000);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main>
      <div className="announcement">
        <span className="announcement-dot" />
        Financiamiento para empresas que piensan en grande
        <a href="#soluciones">
          Descubre cómo <span aria-hidden="true">→</span>
        </a>
      </div>

      <header className="site-header">
        <a className="wordmark" href="#inicio" aria-label="Neriva, inicio">
          ner<span>i</span>va<span className="wordmark-dot">.</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"}>
          <a href="#soluciones" onClick={() => setMenuOpen(false)}>
            Soluciones
          </a>
          <a href="#nosotros" onClick={() => setMenuOpen(false)}>
            Nosotros
          </a>
          <a href="#proceso" onClick={() => setMenuOpen(false)}>
            Cómo funciona
          </a>
          <a href="#preguntas" onClick={() => setMenuOpen(false)}>
            Preguntas
          </a>
          <a className="nav-cta" href="#contacto" onClick={() => setMenuOpen(false)}>
            Hablemos <ArrowUpRight />
          </a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-content">
          <div className="hero-brand" aria-label="Neriva, financiamiento empresarial">
            <FinanceMark />
            <span>
              <strong>NERIVA</strong>
              <small>FINANCIAMIENTO EMPRESARIAL</small>
            </span>
          </div>
          <span className="eyebrow hero-eyebrow">
            <span className="eyebrow-line" />
            FINANCIAMIENTO PARA NEGOCIOS
          </span>
          <h1>
            Los empresarios
            <br />
            <span>construyen</span> el futuro.
            <br />
            Nosotros les damos
            <br />
            las herramientas
            <br />
            para <span>lograrlo.</span>
          </h1>
          <p className="hero-copy">
            Financiamiento para negocios desde $100 mil hasta $20 millones de
            pesos, en un plazo de hasta 5 días hábiles.*
          </p>
          <div className="hero-actions">
            <a className="button button-lime" href="#contacto">
              Solicitar financiamiento <ArrowUpRight />
            </a>
            <a className="button hero-secondary-button" href="#soluciones">
              Conoce nuestras soluciones
            </a>
          </div>
          <div className="hero-footnote">
            <span>01 / 03</span>
            <span className="footnote-rule" />
            <span>* TIEMPO PROMEDIO EN RECIBIR PROPUESTA</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Empresaria trabajando en su negocio">
          <div className="hero-photo" />
          <div className="hero-photo-overlay" />
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <div className="hero-floating-note">
            <span className="floating-icon">↗</span>
            <span>
              <strong>Tu siguiente paso</strong>
              <small>Empieza hoy</small>
            </span>
          </div>
          <div className="hero-caption">
            <span className="caption-indicator" />
            UN ALIADO QUE SÍ TE ENTIENDE
          </div>
          <span className="hero-vertical-label">HECHO PARA IR MÁS LEJOS</span>
        </div>
        <div className="hero-bottom-bar">
          <span>Impulsamos empresas. Construimos futuro.</span>
          <a href="#nosotros">
            CONOCE NERIVA <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      <section className="trust-strip" id="nosotros">
        <div className="trust-intro">
        </div>
        <div className="trust-stat">
          <strong>+5,100</strong>
          <span>créditos otorgados</span>
        </div>
        <div className="trust-stat">
          <strong>+6,000<span> MDP</span></strong>
          <span>financiados a empresas mexicanas</span>
        </div>
        <div className="trust-stat trust-last">
          <strong>+11<span> años</span></strong>
          <span>impulsando negocios en México</span>
        </div>
      </section>

      <section className="solutions section-pad" id="soluciones">
        <div className="section-heading">
          <div>
            <span className="eyebrow"><span className="eyebrow-line" />LO QUE TU EMPRESA NECESITA</span>
            <h2>
              Tu empresa.
              <br />
              <span>Tu visión.</span> Nuestro respaldo.
            </h2>
          </div>
          <p>
            No hay dos negocios iguales. Por eso empezamos por escucharte y
            encontramos contigo el camino que hace sentido.
          </p>
        </div>
        <div className="solution-grid">
          <article className="solution-card solution-card-primary">
            <div className="solution-card-top">
              <span className="card-index">01 — CRECIMIENTO</span>
              <span className="round-arrow"><ArrowUpRight /></span>
            </div>
            <div className="growth-art" aria-hidden="true">
              <span className="growth-orbit growth-orbit-a" />
              <span className="growth-orbit growth-orbit-b" />
              <span className="growth-spark">✳</span>
              <span className="growth-arrow">↗</span>
              <span className="growth-label">NEXT<br />CHAPTER</span>
            </div>
            <div className="solution-card-copy">
              <h3>Capital de trabajo</h3>
              <p>Obtén liquidez para aprovechar oportunidades y mantener tu negocio en movimiento.</p>
              <a href="#contacto">Financiamiento sin garantía <span>→</span></a>
            </div>
          </article>
          <article className="solution-card solution-card-light">
            <div className="solution-card-top">
              <span className="card-index">02 — FLEXIBILIDAD</span>
              <span className="round-arrow"><ArrowUpRight /></span>
            </div>
            <div className="flex-art" aria-hidden="true">
              <div className="flex-card">
                <span className="flex-card-brand">neriva<span>.</span></span>
                <span className="flex-card-chip" />
                <span className="flex-card-number">•••• &nbsp; •••• &nbsp; •••• &nbsp; 2048</span>
                <span className="flex-card-name">TU EMPRESA, EN MOVIMIENTO</span>
              </div>
              <span className="flex-art-spark">✳</span>
            </div>
            <div className="solution-card-copy">
              <h3>Financiamiento solar</h3>
              <p>Invierte en energía renovable y acelera el crecimiento sostenible de tu empresa.</p>
              <a href="#contacto">Conoce nuestras soluciones <span>→</span></a>
            </div>
          </article>
        </div>
      </section>

      <section className="calculator-section">
        <div className="calculator-intro">
          <span className="eyebrow"><span className="eyebrow-line" />PONLE NÚMEROS A TU IDEA</span>
          <h2>
            Un primer vistazo
            <br />
            <span>a lo que sigue.</span>
          </h2>
          <p>
            Cada empresa tiene su propio camino. Usa esta simulación como punto
            de partida y platiquemos sobre el tuyo.
          </p>
          <a className="text-link" href="#contacto">Así trabajamos <span>→</span></a>
        </div>
        <div className="calculator-card">
          <div className="calculator-card-head">
            <div>
              <span className="calculator-label">FINANCIAMIENTO NERIVA</span>
              <h3>¿Cuánto necesita tu empresa?</h3>
            </div>
            <span className="calculator-spark">✳</span>
          </div>
          <div className="amount-display">
            <span>MONTO DE FINANCIAMIENTO</span>
            <strong>{currency.format(amount)}</strong>
          </div>
          <input
            aria-label="Monto de financiamiento"
            className="amount-slider"
            type="range"
            min="100000"
            max="20000000"
            step="100000"
            value={amount}
            onChange={(event) => setAmount(Number(event.target.value))}
            style={{ "--range-progress": `${((amount - 100000) / 19900000) * 100}%` } as React.CSSProperties}
          />
          <div className="range-labels"><span>$100 mil</span><span>$20 millones</span></div>
          <div className="payment-estimate">
            <div>
              <span>MONTO SELECCIONADO</span>
              <strong>{currency.format(amount)} <small>MXN</small></strong>
            </div>
            <span className="estimate-period">A tu medida</span>
          </div>
          <p className="estimate-disclaimer">
            Monto sujeto a evaluación. Las condiciones de financiamiento se
            definen de acuerdo con las necesidades de cada empresa.
          </p>
          <a className="button button-dark" href="#contacto">Hablemos de tu proyecto <ArrowUpRight /></a>
        </div>
      </section>

      <section className="process-section section-pad" id="proceso">
        <div className="process-heading">
          <span className="eyebrow"><span className="eyebrow-line" />ASÍ DE FÁCIL EMPIEZA</span>
          <h2>
            Un buen aliado
            <br />
            <span>hace toda la diferencia.</span>
          </h2>
          <p>Un proceso claro. Una conversación honesta. Un equipo de tu lado.</p>
        </div>
        <div className="steps-grid">
          {steps.map((step) => (
            <article className="step-card" key={step.number}>
              <div className="step-top"><span>{step.number}</span><span className="step-cross">✳</span></div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              <span className="step-bottom-line" />
            </article>
          ))}
        </div>
      </section>

      <section className="quote-section">
        <div className="quote-photo" />
        <div className="quote-content">
          <span className="eyebrow"><span className="eyebrow-line" />CREEMOS EN LO QUE CONSTRUYES</span>
          <span className="quote-mark">“</span>
          <blockquote>
            Detrás de cada empresa hay una historia. Y toda gran historia merece
            la oportunidad de llegar más lejos.
          </blockquote>
          <div className="quote-signature"><span className="signature-mark">n.</span><span>Somos Neriva.<small>Un respaldo para lo que sigue.</small></span></div>
        </div>
      </section>

      <section className="faq-section section-pad" id="preguntas">
        <div className="faq-heading">
          <span className="eyebrow"><span className="eyebrow-line" />BUENO SABERLO</span>
          <h2>
            ¿Tienes
            <br />
            <span>preguntas?</span>
          </h2>
          <p>Estamos para hacer que todo sea más sencillo.</p>
          <a className="text-link" href="mailto:hola@neriva.mx">Escríbenos <span>→</span></a>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <article className={openFaq === index ? "faq-item is-open" : "faq-item"} key={faq.question}>
              <button
                type="button"
                aria-expanded={openFaq === index}
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <span>{faq.question}</span>
                <span className="faq-toggle">{openFaq === index ? "−" : "+"}</span>
              </button>
              {openFaq === index && <p>{faq.answer}</p>}
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contacto">
        <div className="contact-decoration" aria-hidden="true">n.</div>
        <div className="contact-content">
          <span className="eyebrow"><span className="eyebrow-line" />EL SIGUIENTE PASO ES TUYO</span>
          <h2>
            Lo mejor de tu
            <br />
            empresa <span>está por venir.</span>
          </h2>
          <p>Platícanos qué tienes en mente. Aquí empieza algo bueno.</p>
          <a className="button button-lime" href="mailto:hola@neriva.mx">
            Hablemos de tu empresa <ArrowUpRight />
          </a>
        </div>
        <div className="contact-side-note"><span /> TU EMPRESA. TU VISIÓN. NUESTRO RESPALDO.</div>
      </section>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <a className="wordmark footer-wordmark" href="#inicio">ner<span>i</span>va<span className="wordmark-dot">.</span></a>
            <p>Tu empresa. Tu visión.<br />Nuestro respaldo.</p>
          </div>
          <div className="footer-links">
            <div><span className="footer-label">EXPLORA</span><a href="#soluciones">Soluciones</a><a href="#nosotros">Nosotros</a><a href="#proceso">Cómo funciona</a></div>
            <div><span className="footer-label">ESTAMOS CERCA</span><a href="mailto:hola@neriva.mx">hola@neriva.mx</a><a href="#contacto">Hablemos</a></div>
            <div><span className="footer-label">SÍGUENOS</span><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram ↗</a></div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Neriva. Todos los derechos reservados.</span>
          <span className="footer-legal"><a href="#contacto">Aviso de privacidad</a><a href="#contacto">Términos y condiciones</a></span>
          <span>HECHO CON VISIÓN EN MÉXICO <span className="mexico-dot">✳</span></span>
        </div>
      </footer>
    </main>
  );
}
