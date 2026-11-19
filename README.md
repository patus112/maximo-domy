# Maximo — skladacie modulárne domy

Statický promo web pre MAXIMO TRADE s. r. o. Astro, žiadny backend, žiadne cookies, žiadne analytiky.

## Príkazy

```bash
npm install
npm run dev
npm run build
npm run check    # astro check + eslint + build
npm run test:e2e # Playwright (mobil 390×844, desktop 1440×900, axe)
```

`npm run check` aj testy skladajú web s cestou `/maximo-domy/`, aby fungoval ako projekt na GitHub Pages. Náhľad:

```bash
npm run preview
```

Úvod je na `http://127.0.0.1:4321/maximo-domy/`.

## Vlastná doména neskôr

```bash
SITE_URL=https://www.example.sk SITE_BASE=/ npm run build
```

`SITE_BASE=/` je koreň domény. Predvolené hodnoty v `astro.config.mjs` sú `https://patus112.github.io` a `/maximo-domy/`.

## Nasadenie

Workflow `.github/workflows/pages.yml` sa spustí len vtedy, keď je premenná repozitára `MAXIMO_DEPLOY_APPROVED` presne `true`. Kým nie je, nič sa nenahráva. GitHub Pages sa týmto súborom nezapína a repozitár sa nezverejňuje.

## Kde sa upravuje obsah

- Firemné údaje, telefón, vzorový dom: `src/config/site.ts`
- Rozmery a dispozície: `src/data/models.json` (pole `layout_sk_draft`)
- Výbava: `src/data/options.json`
- E-mail zatiaľ nie je. V `site.ts` je `email: null`. Nevymýšľať adresu.

20 ft má v katalógu 2 spálne. Web dodávateľa uvádzal aj 1 spálňu. Na stránke sa zobrazuje text z katalógu.
