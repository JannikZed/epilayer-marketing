# EpiLayer Marketing Site

Produkt-Marketingseite (Deutsch) für EpiLayer — Next.js App Router, TypeScript, Tailwind CSS.

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
| `/` | Home: Hero, Job-Karten, Email-/Preislisten-/Wiegeschein-Demos, Flow, ERP, CTA |
| `/loesungen/bestellung-aus-der-email` | Job-Page mit EmailOrderDemo |
| `/loesungen/preisliste` | Job-Page mit PriceListDemo |

## Design Tokens

Canvas `#F7F6F2` · Surface `#FFFFFF` · Ink `#1C1B19` · Muted `#5E5A54` · Line `#E4E0D8` · Accent `#C45C26` · OK `#2F6B4F` · Info `#DCE8E4`

Offene Produktentscheidungen: `DECISIONS.md`
