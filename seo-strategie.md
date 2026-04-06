# Stratégie SEO — Clément Fabrié, Ostéopathe D.O. Clapiers Montpellier

> Objectif : **maximiser les impressions** sur Google Search et Maps pour les requêtes locales "ostéopathe Clapiers" et "ostéopathe Montpellier nord"
> Dernière mise à jour : 2026-04-06

---

## 1. Positionnement et mots-clés cibles

### Keyword principal (head term)
| Keyword | Volume estimé | Concurrence | Priorité |
|---------|--------------|-------------|---------|
| `ostéopathe Clapiers` | ~200/mois | Faible | **#1** |
| `ostéopathe Montpellier nord` | ~150/mois | Faible-Moyen | **#1** |
| `ostéopathe Clapiers 34830` | ~50/mois | Très faible | #1 |
| `cabinet ostéopathie Clapiers` | ~100/mois | Faible | #1 |

### Keywords secondaires (longue traîne)
| Keyword | Pourquoi viser |
|---------|----------------|
| `ostéopathe dos Clapiers` | Motif de consultation le plus fréquent |
| `ostéopathe Castelnau-le-Lez` | Commune limitrophe forte (pop. 20k+) |
| `ostéopathe Jacou` | Commune limitrophe |
| `ostéopathe cranien Montpellier` | Spécialité différenciante |
| `ostéopathe ATM Montpellier` | Spécialité rare = trafic qualifié |
| `Clément Fabrié ostéopathe` | Requêtes de marque |
| `ostéopathe sport Clapiers` | Cible sportifs actifs |
| `ostéopathe bebe Clapiers` | Périnatologie = différenciateur fort |
| `ostéopathe urgence Montpellier` | Trafic à forte intention de conversion |
| `prix ostéopathe Clapiers` | Intention transactionnelle |

### Positionnement sémantique
Clément se différencie sur 3 axes :
1. **Spécialiste ATM** (temporo-mandibulaire) — rare en ostéopathie, capte un trafic non-concurrent
2. **Ostéopathie douce** — mots-clés récurrents dans les avis → à amplifier dans le contenu
3. **Méthode avec explications** — thème fort dans les avis → argument de confiance SEO

---

## 2. Optimisations on-page implementées

### 2.1 Balises `<head>`

#### Title tag
```
Clément Fabrié — Ostéopathe D.O. à Clapiers (Montpellier) | Prise de RDV en ligne
```
- Keyword principal en tête : "Ostéopathe D.O. à Clapiers"
- Marque : "Clément Fabrié"
- CTA implicite : "Prise de RDV en ligne"
- Longueur : ~70 caractères (optimal Google)

#### Meta description
```
Clément Fabrié, ostéopathe D.O. diplômé du CSO Toulouse, reçoit au Cabinet Médical L'Adamantium à Clapiers (Montpellier). 5/5 ★ sur 56 avis. Dos, cervicalgie, migraine, sport. RDV en ligne.
```
- Inclut le nom, la ville, la note, les motifs, et un CTA
- Signal social fort : 56 avis 5/5
- Longueur : ~155 caractères

#### Geo meta tags (SEO local)
```html
<meta name="geo.region" content="FR-34">
<meta name="geo.placename" content="Clapiers, Hérault">
<meta name="geo.position" content="43.62742;3.87586">
<meta name="ICBM" content="43.62742, 3.87586">
```
Signal géographique envoyé aux moteurs pour les résultats locaux.

#### Twitter Cards + Open Graph enrichi
Partage social avec image grande format (1200×630), alt text, site_name, image dimensions.

#### Preload LCP
```html
<link rel="preload" as="image" href="assets/img/portrait-hero.webp" fetchpriority="high">
```
Améliore le LCP (Largest Contentful Paint) → facteur de ranking Google.

#### Fonts non-bloquantes
```html
<link rel="stylesheet" media="print" onload="this.media='all'">
```
Les polices Google ne bloquent plus le rendu → améliore FCP et LCP.

---

### 2.2 Schema.org JSON-LD (Données structurées)

6 types de schémas implémentés — ils déclenchent des **rich snippets** dans les SERP :

#### `WebSite`
Établit l'identité du site auprès des moteurs.

#### `Person` (Clément Fabrié)
```json
{
  "@type": "Person",
  "name": "Clément Fabrié",
  "jobTitle": "Ostéopathe D.O.",
  "alumniOf": "CSO Toulouse",
  "worksFor": "#business"
}
```

#### `LocalBusiness` + `MedicalBusiness`
Le type double **LocalBusiness + MedicalBusiness** est essentiel pour :
- Apparaître dans le **Google Local Pack** (3 résultats carte)
- Déclencher le **panneau de connaissance** (Knowledge Panel)
- Indexation dans Google Maps

Éléments clés :
- `aggregateRating` → **étoiles jaunes dans les SERP** (rich snippet)
- `openingHoursSpecification` → horaires affichés directement dans Google
- `geo` → coordonnées GPS pour Maps
- `hasMap` → lien direct vers la carte
- `areaServed` → 10 communes = signal de zone géographique
- `medicalSpecialty` → 6 spécialités = pertinence pour requêtes spécialisées
- `priceRange` → affiché dans Google Maps

#### `Review` (5 avis individuels)
Les avis en données structurées **renforcent** l'aggregateRating et peuvent déclencher des **étoiles supplémentaires** dans les résultats.

#### `FAQPage` (7 questions)
Chaque Q&A peut apparaître en **accordéon directement dans la SERP** → augmente massivement la surface occupée sur la page de résultats.

Questions ciblées :
- Requêtes conversationnelles ("faut-il une ordonnance ?")
- Requêtes locales ("ostéopathe à Clapiers sans ordonnance ?")
- Requêtes transactionnelles ("mutuelle rembourse ostéopathie ?")

#### `BreadcrumbList`
Affiche le fil d'Ariane dans les SERP → améliore le CTR.

---

### 2.3 Structure du contenu (H1/H2/H3)

```
H1 : "Ostéopathe D.O. à Clapiers — nord Montpellier"
  H2 : "Pour quoi consulter ?"
    H3 : "Dos & Colonne", "Nuque & Tête", "Mâchoire (ATM)"...
  H2 : "Clément Fabrié" (section À propos)
  H2 : "Comment se déroule votre séance ?"
    H3 : "Bilan initial", "Examen ostéopathique", "Traitement manuel"
  H2 : "Centre Médical L'Adamantium"
  H2 : "Ce que disent mes patients"
  H2 : "Questions fréquentes"
  H2 : "Ostéopathe à Clapiers et dans tout le nord Montpellier" ← zones
  H2 : "Prendre rendez-vous"
```

**Règle appliquée :** keyword principal ou géographique dans 3+ H2.

---

### 2.4 Section "Zones desservies" (SEO local longue traîne)

```html
<section class="zones">
  <h2>Ostéopathe à Clapiers et dans tout le nord Montpellier</h2>
  <!-- 12 communes avec temps de trajet -->
</section>
```

**Impact SEO :** chaque ville citée devient un keyword indexé sur la page.  
Les tags de zone ont le double rôle :
1. Signaler les communes desservies aux moteurs (text + Schema.org `areaServed`)
2. Rassurer les utilisateurs des communes voisines

Communes ciblées : Clapiers, Montpellier nord, Castelnau-le-Lez, Saint-Clément-de-Rivière, Jacou, Prades-le-Lez, Le Crès, Teyran, Vendargues, Grabels, Juvignac, Saint-Gély-du-Fesc.

---

### 2.5 NAP (Name, Address, Phone) — cohérence locale

Le NAP est **identique** dans :
- L'en-tête du site
- La section Contact
- Le footer
- Le Schema.org JSON-LD

**Pourquoi c'est critique :** Google vérifie la cohérence NAP entre le site, Google Business Profile, Doctolib et les annuaires. Toute divergence nuit au référencement local.

NAP officiel :
```
Clément Fabrié — Ostéopathe D.O.
6 Rue Jean Monnet, 34830 Clapiers
06 62 40 70 96
```

---

## 3. Fichiers techniques

### `robots.txt`
```
User-agent: *
Allow: /
Disallow: /ressoruces-brutes/
Disallow: /search-output/
Sitemap: https://clement-fabrie-osteopathe.fr/sitemap.xml
```
- Autorise tous les bots sur le site
- Bloque les dossiers de travail internes (non indexables)
- Pointe vers le sitemap

### `sitemap.xml`
Référence la page principale + 5 ancres clés avec :
- `lastmod` : date de dernière modification
- `changefreq` : fréquence de crawl suggérée
- `priority` : poids relatif (1.0 pour l'accueil, 0.9 pour le contact/RDV)

---

## 4. Core Web Vitals (Performance = facteur de ranking)

### Optimisations implémentées
| Métrique | Optimisation |
|----------|-------------|
| **LCP** (Largest Contentful Paint) | Preload de l'image hero, `fetchpriority="high"` |
| **FCP** (First Contentful Paint) | Fonts en `media="print"` non bloquantes |
| **CLS** (Cumulative Layout Shift) | Dimensions `width/height` sur toutes les images |
| **INP** / FID | `passive: true` sur les event listeners scroll |

### Cibles à atteindre
- LCP < 2.5s ✅ (image preload + WebP)
- CLS < 0.1 ✅ (dimensions images définies)
- INP < 200ms ✅ (JS minimal, pas de framework lourd)

---

## 5. Stratégie hors-site (off-page)

### 5.1 Google Business Profile (priorité absolue)
**C'est l'action la plus impactante sur les impressions locales.**

Créer/revendiquer le profil Google Business Profile :
- URL : https://business.google.com
- Catégorie principale : **Ostéopathe**
- Catégories secondaires : Médecin, Centre médical
- Compléter 100% du profil (description, photos, horaires, site web)
- Activer les messages et la prise de RDV
- Répondre à chaque avis Google (signal de qualité)
- Publier des posts réguliers (1/mois minimum)

**Impact :** apparition dans le **Local Pack** (3 résultats carte) pour "ostéopathe Clapiers" et "ostéopathe Montpellier" — visible avant les résultats organiques.

### 5.2 Cohérence des citations locales (NAP)
Vérifier et corriger le NAP sur toutes les plateformes :
- [ ] Doctolib (déjà OK)
- [ ] Google Maps (créer/revendiquer)
- [ ] Pages Jaunes (https://www.pagesjaunes.fr)
- [ ] Annuaire Santé (https://www.annuaire.sante.fr)
- [ ] Osteopathe.do (déjà présent)
- [ ] Reflex Osteo (déjà présent)
- [ ] Yelp France
- [ ] Vélizy (annuaire médical)

### 5.3 Netlinking local
Liens entrants depuis des sites d'autorité locale :
- Site du Centre Médical L'Adamantium (lien "nos praticiens")
- Associations sportives de Clapiers / Castelnau (partenariat)
- Médecins généralistes référents (échange de liens)
- Presse locale Hérault (article de présentation)

### 5.4 Avis Google (levier n°1 du local pack)
Actuellement : 56 avis sur Doctolib/Reflex Osteo.
**Objectif : transférer des avis sur Google Business Profile.**

Action : après chaque séance, envoyer par SMS/email un lien direct vers la page d'avis Google. Formule simple :
> "Merci pour votre confiance. Si vous êtes satisfait(e), un avis Google m'aiderait beaucoup : [lien direct]"

**Impact SEO :** les avis Google = facteur #1 du classement dans le Local Pack.

---

## 6. Soumission et indexation

### Immédiat (dès le déploiement)
1. **Google Search Console** — soumettre l'URL et le sitemap.xml
   - https://search.google.com/search-console
   - Vérifier la propriété avec balise HTML ou fichier de vérification
   - Inspecter l'URL → Demander l'indexation
   - Ajouter le sitemap : `https://clement-fabrie-osteopathe.fr/sitemap.xml`

2. **Bing Webmaster Tools** — 30% du trafic desktop en France
   - https://www.bing.com/webmasters
   - Import automatique depuis Google Search Console

3. **Fetch & Render** — forcer le recrawl après chaque mise à jour majeure

### Validation Schema.org
Tester les données structurées :
- Google Rich Results Test : https://search.google.com/test/rich-results
- Schema Markup Validator : https://validator.schema.org

---

## 7. KPIs à suivre (Google Search Console)

| Métrique | Baseline | Objectif 3 mois | Objectif 6 mois |
|----------|----------|-----------------|-----------------|
| Impressions/mois | 0 (nouveau site) | 500+ | 2 000+ |
| Clics organiques | 0 | 50+ | 200+ |
| CTR moyen | - | >5% | >8% |
| Position moyenne | - | <20 | <10 |
| Keywords positionnés | 0 | 20+ | 50+ |

---

## 8. Évolutions futures (phases 2-3)

### Phase 2 — Pages spécialisées (3-6 mois)
Créer des pages dédiées par spécialité pour capter les longues traînes :
- `/osteopathie-sport/` — "ostéopathe sport Clapiers"
- `/osteopathie-cranienne/` — "ostéopathe cranien Montpellier"
- `/osteopathie-atm/` — "ostéopathe ATM Montpellier" (très peu de concurrence)
- `/osteopathie-bebe/` — "ostéopathe bébé Clapiers" (si Clément fait de la périnatologie)

### Phase 3 — Blog (6-12 mois)
Le blog est le **levier SEO le plus puissant** à long terme :
- 1 article/mois sur des requêtes informatives :
  - "Comment savoir si j'ai besoin d'un ostéopathe ?"
  - "Ostéopathie et sport : pourquoi consulter ?"
  - "Douleurs de dos : quand consulter un ostéopathe ?"
- Chaque article crée des backlinks naturels et augmente les impressions

### Optimisations techniques avancées
- Migrer vers HTTPS/HTTP2 (obligatoire si pas encore fait)
- Implémenter le cache HTTP avec en-têtes `Cache-Control`
- Envisager un CDN (Cloudflare = gratuit + améliore TTFB)
- Ajouter une `Web App Manifest` pour PWA-lite

---

## 9. Récapitulatif des actions par priorité

### 🔴 Critique (semaine 1)
1. Déployer le site avec domaine `clement-fabrie-osteopathe.fr`
2. Activer HTTPS
3. Créer/revendiquer Google Business Profile
4. Soumettre à Google Search Console + sitemap
5. Compléter 100% le Google Business Profile (photos, horaires, description)

### 🟠 Important (mois 1)
6. Vérifier et corriger le NAP sur Doctolib, Pages Jaunes, annuaire.sante.fr
7. Demander des avis Google aux patients existants (lien direct)
8. Valider les données structurées (Rich Results Test)
9. Soumettre à Bing Webmaster Tools

### 🟡 À planifier (mois 2-3)
10. Répondre à tous les avis Google
11. Publier 1 post Google Business par mois
12. Construire des citations locales (annuaires médicaux)
13. Envisager les pages de spécialités

---

*Document rédigé dans le cadre de la création du site clement-fabrie-osteopathe.fr*  
*Stratégie basée sur les données collectées via deepresearch (12 sources, 6 axes) en avril 2026*
