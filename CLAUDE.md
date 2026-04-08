# Kudja Travel — Contexte projet pour Claude

## Le projet

Site web de **Kudja Travel**, agence de travel planning spécialisée dans les Antilles françaises et anglophones.

- **URL** : https://kudjatravel.com
- **Dépôt GitHub** : https://github.com/meganeedard-netizen/KudjaTravel-Site
- **Fondatrice** : Mégane Prieto-Blanco, travel planner installée en Guadeloupe
- **Destinations couvertes** : Guadeloupe, Martinique, Dominique, Les Grenadines
- **Offres** : voyages sur-mesure, voyages de noce, EVJF/EVG, voyages en famille, séminaires & incentive

## Structure du site

- Pages destinations : `guadeloupe.html`, `martinique.html`, `dominique.html`, `les-grenadines.html`
- Pages thématiques : `voyages-de-noce.html`, `evjf-aux-antilles.html`, `en-famille.html`, `seminaire-incentive.html`
- Blog : `blog.html`, `blog-guadeloupe-itineraire.html`
- Pages annexes : `a-propos.html`, `services.html`, `cgv.html`, `mentions-legales.html`, `politiques-de-confidentialites.html`
- Version anglaise : dossier `en/`

## Flux de travail

**Tout le travail se fait en local.** Les fichiers sont dans :
`/Users/meganeprietoblanco/Desktop/claude/kudja travel/`

**Les modifications ne sont pushées sur GitHub qu'à la demande explicite de Mégane.** Ne jamais push automatiquement.

Pour pusher quand demandé :
```bash
cd "/Users/meganeprietoblanco/Desktop/claude/kudja travel"
git add .
git commit -m "message"
git push
```

## Règles de rédaction

**Ne jamais utiliser le tiret long (—) dans les textes visibles par les visiteurs.**

Ce signe est associé à l'écriture IA et nuit à l'authenticité du site. À la place :

| Contexte | Remplacer par |
|----------|--------------|
| Introduction d'une conséquence ou conclusion | `. ` (point + nouvelle phrase) |
| Mise en apposition ou précision | `,` (virgule) |
| Lien logique cause/résultat | `:` (deux-points) |
| Parenthèse dans une phrase | `( )` (parenthèses) |

**Exceptions autorisées :**
- Titres de sections légales : `Article 1 — Préambule` (format standard)
- Numérotation visuelle : `01 — Grande Terre` (élément de design)
- Attribution de citation : `— Mégane` (signature d'une quote)
- Sommaire de blog : `Jour 3 — Basse-Terre` (ancres de navigation)

## Ton et style

- Ton chaleureux, personnel, humain — écrire comme Mégane parlerait à une amie
- Éviter le style brochure ou liste à puces façon IA
- Phrases fluides, rythmées, avec une vraie personnalité
- La version française est la référence, la version anglaise (`en/`) suit
