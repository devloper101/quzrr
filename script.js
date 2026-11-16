* {
  box-sizing: border-box;
}

:root {
  --bg: #0b1020;
  --bg-alt: #121a2d;
  --panel: #182540;
  --panel-2: #1d2d4a;
  --text: #edf3ff;
  --muted: #b4c2df;
  --primary: #7cc6ff;
  --primary-strong: #43a2ff;
  --accent: #a7ffb5;
  --border: rgba(255, 255, 255, 0.08);
  --shadow: rgba(10, 18, 29, 0.45);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  background: linear-gradient(180deg, #09111d 0%, #0d1627 100%);
  color: var(--text);
  line-height: 1.6;
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: var(--primary);
  text-decoration: none;
}

p {
  margin: 0 0 1rem;
  color: var(--muted);
}

.container {
  width: min(1100px, calc(100% - 2rem));
  margin: 0 auto;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(8px);
  background: rgba(9, 17, 29, 0.7);
  border-bottom: 1px solid var(--border);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 72px;
  gap: 1rem;
}

.brand {
  font-size: 1.2rem;
  font-weight: 800;
  letter-spacing: 0.04em;
}

.nav-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 0.95rem;
}

.hero {
  padding: 5rem 0 3.5rem;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 2rem;
  align-items: center;
}

.eyebrow {
  display: inline-block;
  color: var(--accent);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

h1, h2, h3 {
  margin-top: 0;
  line-height: 1.2;
}

h1 {
  font-size: clamp(2.75rem, 6vw, 4.5rem);
  margin-bottom: 1rem;
}

h2 {
  font-size: clamp(2rem, 3vw, 2.7rem);
  margin-bottom: 0.7rem;
}

.lead {
  max-width: 60ch;
  font-size: 1.08rem;
}

.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1.5rem;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.9rem 1.4rem;
  border-radius: 999px;
  font-weight: 700;
  transition: transform 0.15s ease, opacity 0.15s ease;
}

.button:hover {
  transform: translateY(-1px);
}

.button.primary {
  background: linear-gradient(135deg, var(--primary), var(--primary-strong));
  color: #06121d;
}

.button.secondary {
  border: 1px solid var(--border);
  background: rgba(255,255,255,0.02);
  color: var(--text);
}

.hero-card,
.info-box,
.feature-card,
.warning-box,
.source-box {
  background: linear-gradient(180deg, rgba(24, 37, 64, 0.96), rgba(17, 27, 45, 0.96));
  border: 1px solid var(--border);
  border-radius: 18px;
  box-shadow: 0 18px 40px var(--shadow);
}

.hero-card {
  padding: 1.5rem 1.4rem;
}

.hero-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.75rem;
  color: var(--muted);
}

.section {
  padding: 4rem 0;
}

.section.alt {
  background: rgba(11, 16, 32, 0.55);
}

.section-heading {
  margin-bottom: 1.5rem;
}

.info-grid,
.feature-list {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.25rem;
}

.feature-list {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.info-box,
.feature-card {
  padding: 1.4rem 1.2rem;
}

.module-table-wrap {
  overflow-x: auto;
  background: rgba(10, 16, 28, 0.7);
  border: 1px solid var(--border);
  border-radius: 16px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  text-align: left;
  padding: 0.95rem 1rem;
  border-bottom: 1px solid var(--border);
  vertical-align: top;
}

th {
  background: rgba(255,255,255,0.02);
  color: var(--text);
}

td {
  color: var(--muted);
}

.check-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.8rem 1.5rem;
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem;
  color: var(--muted);
}

.check-list li::before {
  content: "✓";
  color: var(--accent);
  margin-right: 0.6rem;
  font-weight: 800;
}

.warning-box {
  padding: 1.5rem;
  border-color: rgba(255, 182, 106, 0.2);
}

.warning-box h3 {
  color: #ffd29d;
}

.source-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.5rem;
}

.site-footer {
  border-top: 1px solid var(--border);
  padding: 1rem 0 2rem;
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  color: var(--muted);
  font-size: 0.95rem;
}

@media (max-width: 800px) {
  .hero-grid,
  .info-grid,
  .feature-list,
  .check-list {
    grid-template-columns: 1fr;
  }

  .source-box,
  .nav,
  .footer-inner {
    flex-direction: column;
    align-items: flex-start;
  }

  .nav {
    padding: 1rem 0;
  }
}
