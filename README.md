# EpilaYer Marketing Site

Produkt-Marketingseite (Deutsch) für **EpilaYer** — Next.js App Router, TypeScript, Tailwind CSS.

## Lokal starten

```bash
cd /workspace/epilayer-site
npm install
npm run dev
```

Öffnen: [http://localhost:3000](http://localhost:3000)

## Build

```bash
npm run build
npm start
```

Statischer Export:

```bash
npm run build:static   # schreibt nach out/
```

## Seiten

| Route | Inhalt |
|---|---|
| `/` | Home: Positioning-Hero, Job-Routing, Email-/Preislisten-Demos, Mobile+Metz, Flow, ERP, CTA |
| `/loesungen/bestellung-aus-der-email` | Job-Page mit EmailOrderDemo |
| `/loesungen/preisliste` | Job-Page mit PriceListDemo |
| `/loesungen/wiegeschein` | Job-Page mit WiegescheinDemo |
| `/impressum` | Stub · trieb.work OHG, Leonhardstr 20a |
| `/datenschutz` | Stub |

## Design Tokens

Canvas `#F7F6F2` · Surface `#FFFFFF` · Ink `#1C1B19` · Muted `#5E5A54` · Line `#E4E0D8` · Accent `#C45C26` · OK `#2F6B4F` · Info `#DCE8E4`

Entscheidungen: `DECISIONS.md`
