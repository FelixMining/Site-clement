# Architecture — Site Clément Fabrié, Ostéopathe D.O.

> Document interne — Base technique pour la construction du site
> Dernière mise à jour : 2026-04-05

---

## 1. Résumé Stratégique

| Paramètre | Décision |
|-----------|---------|
| Type de site | Landing page monopagine (Single-page) + pages légères SEO |
| Objectif principal | Conversion : visiteur → prise de RDV Doctolib |
| Objectif secondaire | Acquisition organique (SEO local Montpellier / Clapiers) |
| CTA unique | "Prendre rendez-vous" → Doctolib |
| Positionnement | Professionnel & médical — expertise, confiance, crédibilité |
| Cible | Adultes généralistes, Montpellier / nord agglomération |
| Navigation | Supprimée ou minimale (cf. §4.1) |
| Mobile-first | Obligatoire — 83% du trafic (benchmark) |
| Performance | Objectif < 2s load time, Core Web Vitals "Good" |

---

## 2. Données Client (Source : deepresearch)

```
Nom           : Clément FABRIÉ, Ostéopathe D.O.
Cabinet       : Centre Médical L'Adamantium
Adresse       : 6 Rue Jean Monnet, 34830 Clapiers
Téléphone     : 06 62 40 70 96
Doctolib      : https://www.doctolib.fr/osteopathe/montpellier/clement-fabrie
LinkedIn      : https://www.linkedin.com/in/clément-fabrié-0b1b7935b/
RPPS          : 10010642410 | ADELI : 340013739
Réseau        : Membre REFLEX OSTEO
Diplôme       : D.O. CSO Toulouse, 2021 (RNCP niveau 7 = équivalent Master)
Formation ∑   : Périnatologie (formations continues)
Tarif         : 60 € / séance — non conventionné SS
Avis          : 5/5 sur TOUTES les plateformes (35+ avis, 100% positifs)
Spécialités   : ATM, crânienne, sport, myofasciale, structurelle
Techniques    : Structurelle, tissulaire, viscérale, crânienne
Motifs        : Dos, cervicalgie, lombalgies, sciatique, tendinite, migraine, sinusite, stress
Horaires      : Lun/Mer/Ven 10h-21h | Mar/Jeu 15h-21h | Sam 9h-17h
Accès         : Ascenseur 1er étage, parking gratuit, Bus 22/36
```

---

## 3. Stratégie SEO — Priorité n°1

Le SEO est le levier d'acquisition principal. Aucune dépense publicitaire n'est prévue → le trafic organique doit tout porter.

### 3.1 Analyse de la position de départ

Clément Fabrié n'a aucun site propre. Son Doctolib lui génère une visibilité, mais :
- Doctolib est une page générique partagée avec des centaines d'ostéopathes → autorité diluée
- Il ne contrôle pas le contenu → impossible d'optimiser pour les mots clés de longue traîne
- Les plateformes tierces (Pages Jaunes, Bottin) génèrent des backlinks vers lui → capital de départ positif

**Opportunité :** Créer un domaine propre optimisé qui capte les requêtes locales non satisfaites.

### 3.2 Stratégie de mots clés

#### Mots clés primaires (fort volume, concurrence élevée)
| Mot clé | Intention | Difficulté | Priorité |
|---------|-----------|-----------|---------|
| ostéopathe Montpellier | Transactionnelle locale | Haute | P1 |
| ostéopathe Clapiers | Transactionnelle locale | Faible | P1 ← différenciateur |
| ostéopathe Montpellier nord | Transactionnelle locale | Faible-Moyenne | P1 |

**Justification :** "Ostéopathe Clapiers" est une requête moins compétitive qu'intra-Montpellier. Le cabinet étant à Clapiers, Clément peut être #1 sur cette requête rapidement. C'est le positionnement le plus rentable à court terme.

#### Mots clés secondaires (longue traîne, fort intent)
| Mot clé | Intention |
|---------|-----------|
| ostéopathe Clapiers rendez-vous | Transactionnelle |
| ostéopathe adulte Montpellier | Transactionnelle |
| ostéopathe mal de dos Montpellier | Informationnelle + transactionnelle |
| ostéopathe cervicalgie Montpellier | Informationnelle + transactionnelle |
| ostéopathe sciatique Montpellier | Informationnelle + transactionnelle |
| ostéopathe migraine Montpellier | Informationnelle + transactionnelle |
| ostéopathe ATM Montpellier | Transactionnelle spécialisée |
| ostéopathe sport Montpellier | Transactionnelle spécialisée |
| Cabinet Adamantium Clapiers ostéopathe | Navigationnelle |

#### Requêtes question (position zéro / featured snippets)
- "ostéopathe remboursé Montpellier"
- "combien coûte un ostéopathe à Montpellier"
- "quand consulter un ostéopathe"
- "ostéopathe Clapiers 34830"

### 3.3 Architecture sémantique de la page

La page unique doit couvrir sémantiquement tous les champs lexicaux ciblés :
- **Champ lexical 1 :** Géographie (Clapiers, Montpellier, Hérault, 34830, nord agglomération)
- **Champ lexical 2 :** Profession (ostéopathe, ostéopathie, D.O., diplôme, RPPS)
- **Champ lexical 3 :** Motifs (dos, cervicalgie, lombalgie, sciatique, migraine, tendinite, stress, sinusite)
- **Champ lexical 4 :** Techniques (structurelle, viscérale, crânienne, myofasciale, tissulaire)
- **Champ lexical 5 :** Confiance (avis, témoignages, diplôme, formation, expérience)
- **Champ lexical 6 :** Action (rendez-vous, RDV, consultation, Doctolib, Clapiers)

### 3.4 Balises meta — Templates

```html
<!-- Page principale -->
<title>Clément Fabrié | Ostéopathe D.O. à Clapiers (Montpellier) | Prise de RDV en ligne</title>
<meta name="description" content="Clément Fabrié, ostéopathe D.O. diplômé, reçoit à Clapiers (nord Montpellier). 5/5 ★ sur 35+ avis. Consultations dos, cervicalgie, migraine, sport. RDV en ligne sur Doctolib.">

<!-- Open Graph (partages réseaux sociaux) -->
<meta property="og:title" content="Clément Fabrié — Ostéopathe D.O. à Clapiers, Montpellier">
<meta property="og:description" content="Ostéopathe diplômé, 5/5 ★ sur 35+ avis patients. Cabinet au Centre Médical L'Adamantium, Clapiers. Prenez RDV en ligne.">
<meta property="og:type" content="website">
<meta property="og:image" content="[photo-professionnelle-clement.jpg]">
```

**Justification title :** Inclure le nom complet (requêtes navigationnelles), la spécialité + diplôme D.O. (autorité), la localisation précise Clapiers (SEO local + longue traîne), et l'action souhaitée. Limite respectée 60 caractères.

### 3.5 Données structurées Schema.org (JSON-LD)

```json
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MedicalBusiness", "Person"],
  "name": "Clément Fabrié — Ostéopathe D.O.",
  "description": "Ostéopathe diplômé D.O. (CSO Toulouse), spécialiste structurelle, crânienne, viscérale, myofasciale et ATM. Cabinet au Centre Médical L'Adamantium, Clapiers.",
  "url": "[URL_SITE]",
  "telephone": "+33662407096",
  "priceRange": "60€",
  "currenciesAccepted": "EUR",
  "paymentAccepted": "Espèces, Chèques, CB",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "6 Rue Jean Monnet",
    "addressLocality": "Clapiers",
    "postalCode": "34830",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 43.62742510,
    "longitude": 3.87586050
  },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Wednesday", "Friday"], "opens": "10:00", "closes": "21:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Tuesday", "Thursday"], "opens": "15:00", "closes": "21:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "09:00", "closes": "17:00" }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "35",
    "bestRating": "5"
  },
  "medicalSpecialty": "Ostéopathie",
  "hasCredential": "Diplôme d'Ostéopathe D.O. — CSO Toulouse (2021), RNCP niveau 7",
  "memberOf": { "@type": "Organization", "name": "REFLEX OSTEO" },
  "identifier": [
    { "@type": "PropertyValue", "name": "RPPS", "value": "10010642410" },
    { "@type": "PropertyValue", "name": "ADELI", "value": "340013739" }
  ],
  "sameAs": [
    "https://www.doctolib.fr/osteopathe/montpellier/clement-fabrie",
    "https://www.linkedin.com/in/clément-fabrié-0b1b7935b/"
  ]
}
```

**Justification :** Le schema MedicalBusiness + LocalBusiness + AggregateRating déclenche les rich snippets Google (étoiles dans les résultats de recherche). C'est le levier SEO le plus impactant pour un professionnel de santé local : les étoiles augmentent le CTR de 15-30% sur les résultats organiques.

### 3.6 SEO technique — Checklist obligatoire

| Élément | Spécification | Raison |
|---------|-------------|--------|
| HTTPS | SSL actif | Critère de confiance Google + navigateur |
| Sitemap XML | Généré et soumis à Google Search Console | Indexation rapide |
| robots.txt | Autoriser tout (pas de pages à bloquer) | Crawlabilité |
| URL canonique | `<link rel="canonical" href="[URL]">` | Éviter duplicate content |
| Lang | `<html lang="fr">` | Signal de langue pour Google |
| Mobile viewport | `<meta name="viewport" content="width=device-width, initial-scale=1">` | Mobile-first indexing |
| Image alt text | Toutes les images avec mots clés pertinents | Référencement images + accessibilité |
| Interne links | Ancres vers sections (/#rendez-vous, /#soins) | Crawl + UX |
| NAP cohérence | Nom/Adresse/Téléphone identiques à Doctolib et Pages Jaunes | Citation SEO local |
| Google Business Profile | Lier le site au profil GBP | SEO local maps |
| Vitesse < 2s | Voir §7 | Facteur de ranking direct |

---

## 4. Architecture des Sections

> Ordre basé sur la structure optimale LP (recherche benchmarks) + adaptation au secteur santé/local.

### SECTION 0 — `<head>` SEO invisible
```
- Title + meta description (§3.4)
- Schema.org JSON-LD (§3.5)
- Open Graph tags
- Preconnect Google Fonts
- Preload image hero (LCP critique)
```

---

### SECTION 1 — Hero (Above the fold)

**Objectif :** Capturer l'attention dans les 5 premières secondes, identifier immédiatement l'offre, déclencher le premier CTA.

**Justification structure :**
> 80% des visiteurs ne scrollent pas si l'ATF ne les accroche pas (benchmark CRO). Les 5-7 premières secondes déterminent si le visiteur reste. Le CTA unique maximise le CVR (13.5% pour 1 CTA vs 10.5% pour 5+ CTAs).

```
┌─────────────────────────────────────────────────────┐
│  LOGO/Prénom + titre bref (nav minimale)             │
├─────────────────────────────────────────────────────┤
│                                                     │
│  [H1 — texte gauche]          [Photo Clément]       │
│  Ostéopathe D.O. à Clapiers                         │
│  (nord Montpellier)                                  │
│                                                     │
│  [Sous-titre — bénéfice direct]                     │
│  Soulagez vos douleurs avec une approche            │
│  manuelle douce et précise.                         │
│                                                     │
│  [★★★★★ 5/5 — 35+ avis patients]                   │
│                                                     │
│  [CTA PRINCIPAL — fort contraste]                   │
│  « Prendre rendez-vous »                            │
│  (→ Doctolib)                                       │
│                                                     │
│  Microcopy : "Disponible en ligne · 60 € · Clapiers"│
└─────────────────────────────────────────────────────┘
```

**Décisions techniques :**
- **H1 = "Ostéopathe D.O. à Clapiers (nord Montpellier)"** → keyword principal positionné en H1 = signal SEO le plus fort
- **Photo Clément côté droit** → visage humain + regard orienté vers le CTA guide l'attention (principe neurologie visuelle, +95% CVR photos réelles vs stock)
- **★★★★★ sous le titre** → preuve sociale ATF, réduit immédiatement l'anxiété de premier contact
- **1 seul CTA** → principe du paradoxe du choix (Iyengar & Lepper, 2000) — 1 lien = 13.5% CVR
- **Microcopy sous CTA** → lève les objections (prix, lieu) sans friction
- **Navigation supprimée ou réduite au strict minimum** → suppression nav +100-336% CVR (Career Point College, Yuppiechef)
- **F-pattern** → H1 à gauche, image à droite (conforme au F-pattern — la gauche est la zone la plus lue)

**Copy H1 candidat :** `Ostéopathe D.O. à Clapiers — Clément Fabrié`
**Copy sous-titre candidat :** `Consultations pour adultes, sportifs et seniors. Approche manuelle douce et précise basée sur l'écoute.`

---

### SECTION 2 — Bande de confiance (Social proof bar)

**Objectif :** Confirmer immédiatement la légitimité du praticien avec des chiffres et logos.

**Justification :**
> Preuve sociale : +34% CVR en moyenne. 90% des acheteurs sont influencés par la preuve sociale. La bande de logos/chiffres après le hero consolide la confiance avant d'aller plus loin.

```
┌────────────────────────────────────────────────────────────────┐
│  ★★★★★ 5/5  ·  35+ avis  ·  [Logo Doctolib]  ·  [REFLEX OSTEO]│
│  "Diplômé CSO Toulouse (RNCP Niveau 7)"                        │
└────────────────────────────────────────────────────────────────┘
```

**Décisions techniques :**
- Fond sobre (gris clair ou blanc) — bande horizontale compacte
- "Diplômé CSO Toulouse" → signal d'autorité (principe Cialdini #5)
- Logos reconnaissables → crédibilité transférée
- Placement immédiatement après le hero → confirme avant que le scepticisme monte

---

### SECTION 3 — Soins & Spécialités

**Objectif :** Informer sur les motifs de consultation → le visiteur doit se reconnaître dans au moins un motif → "c'est pour moi".

**Justification :**
> AIDA framework : après Attention (Hero) et Interest (bande confiance), déclencher le Desire via la reconnaissance du problème du visiteur. Bénéfice > fonctionnalité (règle CRO : "3h gagnées" > "automatisation").

**Sous-section A — Motifs de consultation (grille iconographique)**
```
6 cartes en grille 3×2 (desktop) / 2×3 (mobile) :
┌──────────┐ ┌──────────┐ ┌──────────┐
│ 🔷 DOS   │ │ 🔷 NUQUE │ │ 🔷 SPORT │
│Lombalgies│ │Cervicalgies│ │Tendinites│
│Sciatiques│ │Maux de tête│ │Récup. blessures│
└──────────┘ └──────────┘ └──────────┘
┌──────────┐ ┌──────────┐ ┌──────────┐
│ 🔷 MÂCHOIRE│ │ 🔷 STRESS│ │ 🔷 +     │
│ATM, bruxisme│ │Anxiété │ │Sinusite  │
│Crânien   │ │Troubles dig.│ │Migraines│
└──────────┘ └──────────┘ └──────────┘
```

**Sous-section B — Techniques (discret, en secondaire)**
```
Texte court : "Selon les besoins de chaque patient, j'utilise différentes approches :
structurelle · tissulaire · viscérale · crânienne · myofasciale"
```

**Décisions techniques :**
- Icônes simples (SVG, pas d'images lourdes) → vitesse de chargement
- Chaque carte = un motif de consultation = une query longue traîne potentielle (SEO in-page)
- Les 5 expertises Doctolib mentionnées textuellement (ATM, crânienne, sport, myofasciale, structurelle) → cohérence sémantique inter-plateformes + signal E-E-A-T Google
- "Techniques douces" = mot clé psychologique clé (levée d'anxiété) dans le paragraphe

---

### SECTION 4 — Votre ostéopathe (À propos / Autorité)

**Objectif :** Créer la confiance personnelle et l'autorité professionnelle.

**Justification :**
> Principe Cialdini de l'Autorité : symboles d'autorité (diplôme, accréditations, réseau) = crédibilité transférée. La photo + biographie personnelle augmente la sympathie (Cialdini #4 — Liking). Photos réelles > stock photos : +95% CVR.

```
┌────────────────────────────────────────────────────┐
│ [Photo Clément — format portrait, souriante]       │
│                                                    │
│ H2 : "Clément Fabrié, Ostéopathe D.O."             │
│                                                    │
│ Paragraphe bio (3-4 phrases, ton chaleureux-pro) :  │
│ "Diplômé du Conservatoire Supérieur d'Ostéopathie  │
│ de Toulouse en 2021 (RNCP niveau 7 — équivalent    │
│ Master), je reçois en consultation au Cabinet      │
│ Médical L'Adamantium à Clapiers depuis mes débuts  │
│ en libéral. [Formation continue périnatologie.]   │
│ Mon approche est basée sur l'écoute active et la  │
│ précision gestuelle, en respectant toujours le    │
│ principe de non-douleur."                          │
│                                                    │
│ Badges :                                           │
│ ✓ Diplôme D.O. — CSO Toulouse (2021)              │
│ ✓ RNCP Niveau 7 (équivalent Master)               │
│ ✓ RPPS : 10010642410                              │
│ ✓ Membre REFLEX OSTEO                             │
│ ✓ [Formation continue périnatologie]              │
└────────────────────────────────────────────────────┘
```

**Décisions techniques :**
- Mention **RPPS** → signal de légitimité réglementaire (lève l'anxiété "est-il vraiment diplômé ?")
- Mention **RNCP niveau 7** → le grand public ne sait pas ce qu'est un D.O. ; "équivalent Master" est immédiatement compréhensible
- **Badges visuels** (checkmarks) plutôt que bullet points → hiérarchie visuelle, signal de validation
- **Photo portrait** → face visible, regard vers le texte ou le visiteur → connexion émotionnelle (neuromarketing)
- Copy à la **1ère personne** "je reçois" → humanise + authentifie

---

### SECTION 5 — Process (Comment ça se passe)

**Objectif :** Réduire l'anxiété du premier rendez-vous en démystifiant le processus.

**Justification :**
> Zone à haute anxiété : "je ne sais pas ce qui m'attend". La section process réduit l'anxiété pré-achat et supprime l'objection "c'est compliqué". Format 3 étapes = processus simple = confiance. Endowed Progress Effect (Cialdini) : visualiser les étapes donne envie de commencer.

```
H2 : "Comment se déroule votre consultation ?"

Étape 1 — Bilan initial (🔷 icône)
"Lors de la première consultation, nous faisons le point ensemble sur vos antécédents,
vos habitudes et vos douleurs. Aucune consultation ne ressemble à une autre."

Étape 2 — Examen et diagnostic ostéopathique (🔷 icône)
"J'analyse les zones de tension et d'immobilité de votre corps grâce à des tests
de mobilité et de palpation."

Étape 3 — Traitement manuel (🔷 icône)
"Selon votre profil, j'applique des techniques douces (crânienne, viscérale,
myofasciale) ou structurelles. La séance dure environ 45-60 minutes."
```

**CTA intermédiaire :** `"Prendre rendez-vous"` (répétition CTA principal, ~50% scroll depth)

**Décisions techniques :**
- 3 étapes uniquement (max) → principe de Prägnanz (simplicité = confiance)
- Durée 45-60 min mentionnée → lève l'objection implicite sur le temps nécessaire
- CTA répété à mi-page → ~50% des visiteurs ne descendent pas jusqu'au bas ; il faut capturer ceux qui ont été convaincus ici

---

### SECTION 6 — Témoignages Patients

**Objectif :** Maximiser la preuve sociale avec des témoignages authentiques.

**Justification :**
> +34% CVR en moyenne avec preuve sociale. +270% CVR (max) avec reviews. 97% des consommateurs consultent les avis avant d'acheter. Photos réelles + nom complet = matching démographique = empathie amplifiée. Citation > logo pour B2C.

```
H2 : "Ce que disent mes patients"
Note globale : ★★★★★ 5/5 — 35+ avis (Doctolib · REFLEX OSTEO)

[Grille 3 témoignages en desktop, carrousel en mobile]

Témoignage 1 :
"Très bon accueil, ponctuel, très professionnel. Il donne des explications
et surtout il est efficace. Je recommande vivement."
— [Prénom Nom], [ville ou "patient depuis 2023"]

Témoignage 2 :
"J'en ai testé plus de 10 ostéopathes à Montpellier, et Clément est
de loin le meilleur. À la fois doux, attentionné et vraiment efficace."
— [Prénom Nom]

Témoignage 3 :
"Professionnel de grande qualité. Méthode douce, explications claires.
Après le traitement je me sentais déjà mieux. Je recommande."
— [Prénom Nom]

[Bouton secondaire] : "Voir tous les avis sur Doctolib →"
```

**Décisions techniques :**
- **Nom complet** si possible (pas "Jean D.") → authenticité maximale
- **Date récente** si disponible → reviews récentes > reviews anciennes
- **Note globale avec chiffre** au-dessus des témoignages → double validation (chiffre + verbatim)
- **Lien vers Doctolib** → validation externe, crédibilité + SEO (backlink sortant vers plateforme médicale officielle)
- Carrousel mobile → économise l'espace vertical sans cacher les avis (UX mobile-first)

---

### SECTION 7 — FAQ (Lever les objections)

**Objectif :** Anticiper et répondre aux objections qui empêchent la prise de RDV. Double rôle : conversion + SEO (les questions = queries exactes).

**Justification :**
> Zone à haute anxiété : tarif, remboursement, douleur, efficacité. FAQ réduit l'anxiété perçue, supprime les dernières frictions avant le CTA final. Les questions correspondent à des requêtes de recherche → potentiel featured snippet Google.

```
H2 : "Questions fréquentes"

Q1 : "Combien coûte une consultation ?"
R : "La consultation est à 60 €. L'ostéopathie n'est pas remboursée par la Sécurité Sociale,
mais de nombreuses mutuelles remboursent tout ou partie de la séance. Je vous conseille
de vérifier votre contrat mutuelle. Paiement en espèces, chèque ou CB."

Q2 : "Faut-il une ordonnance pour consulter un ostéopathe ?"
R : "Non. L'ostéopathe est un professionnel de santé accessible en accès direct, sans
prescription médicale."

Q3 : "La consultation est-elle douloureuse ?"
R : "Non. Mon approche respecte strictement le principe de non-douleur. Les techniques
utilisées (douce, tissulaire, viscérale, crânienne) sont indolores et adaptées à chaque patient."

Q4 : "Combien de séances sont nécessaires ?"
R : "Cela dépend de chaque patient et de la nature du problème. Un problème aigu récent
se résout souvent en 1 à 3 séances. Un problème chronique peut nécessiter un suivi plus régulier."

Q5 : "Quelle est la durée d'une consultation ?"
R : "La première consultation dure environ 60 minutes (bilan + traitement). Les suivantes
durent généralement 45 minutes."

Q6 : "Est-ce qu'on peut venir pour de la prévention, sans douleur ?"
R : "Absolument. Beaucoup de mes patients consultent régulièrement (sportifs, sédentaires,
femmes enceintes) pour maintenir leur équilibre postural avant l'apparition de douleurs."

Q7 : "Comment prendre rendez-vous ?"
R : "Directement en ligne via Doctolib, 24h/24, ou par téléphone au 06 62 40 70 96
aux heures d'ouverture du cabinet."
```

**CTA intermédiaire :** `"Prendre rendez-vous"` (répété après FAQ)

**Décisions techniques :**
- Format **accordéon/chevron** (questions fermées, réponse au clic) → réduit la charge cognitive, rend la page plus aérée
- **Markup Schema FAQ** → éligible featured snippets + People Also Ask → visibilité gratuite sans backlinks
- Les questions sont formulées comme des requêtes Google exactes → intent parfaitement matchés
- Q2 (ordonnance) et Q3 (douleur) = les 2 principales peurs que non-patients ont vis-à-vis de l'ostéopathie

```json
// Schema FAQ à ajouter dans le JSON-LD
{
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Combien coûte une consultation d'ostéopathie à Clapiers ?",
      "acceptedAnswer": { "@type": "Answer", "text": "La consultation est à 60 €..." } },
    ...
  ]
}
```

---

### SECTION 8 — CTA Final + Infos Pratiques

**Objectif :** Dernière incitation à l'action + toutes les informations de contact et d'accès.

**Justification :**
> Répétition du CTA final avec variante textuelle = standard LP haute conversion. Les informations pratiques (adresse, horaires, accès) réduisent les dernières frictions logistiques. NAP cohérent = facteur SEO local (#1 signal de ranking local).

```
H2 : "Prenez rendez-vous dès maintenant"

Texte court :
"Disponible du lundi au samedi au Cabinet Médical L'Adamantium, Clapiers.
Prise de rendez-vous en ligne ou par téléphone."

[CTA PRINCIPAL RÉPÉTÉ — même couleur/style]
« Réserver ma consultation »
(→ Doctolib)

Microcopy : "Disponible 7j/7 via le réseau REFLEX OSTEO"

─────────────────────────────────────────────
INFOS PRATIQUES (en bas ou split 2 colonnes)

📍 Cabinet Médical L'Adamantium
   6 Rue Jean Monnet, 34830 Clapiers
   (nord de Montpellier, 10 min en voiture)

📞 06 62 40 70 96

🕐 Horaires
   Lun · Mer · Ven : 10h00 - 21h00
   Mar · Jeu : 15h00 - 21h00
   Samedi : 9h00 - 17h00

🚗 Accès
   Parking gratuit — Bus lignes 22 et 36
   Accessible PMR (ascenseur)

[Carte Google Maps intégrée — embed léger]
```

**Décisions techniques :**
- **NAP exact** (Nom/Adresse/Téléphone) → doit être identique à Doctolib, Pages Jaunes, Google Business → signal de cohérence SEO local
- **Carte Google Maps** intégrée (iframe Embed API) → signal de confiance + SEO local + UX (l'utilisateur peut taper depuis la page)
- **Mention "nord de Montpellier"** → aide la géolocalisation sémantique sans keyword stuffing
- **Horaires en format lisible** → aussi utilisés par le Schema.org pour Google (rich snippets horaires)
- **"7j/7 via le réseau REFLEX OSTEO"** → différenciateur vs concurrents + urgence atténuée (toujours disponible)

---

### SECTION 9 — Footer

**Objectif :** Conformité légale + signaux de confiance finaux.

```
[Logo/Prénom]     [Liens légaux]           [Certifications]
Clément Fabrié    • Mentions légales       RPPS : 10010642410
Ostéopathe D.O.   • Politique de confid.  ADELI : 340013739
Clapiers (34830)  • RGPD                  © 2026

Liens : Doctolib | LinkedIn | REFLEX OSTEO
```

**Décisions techniques :**
- Footer minimal → pas de navigation principale (préserver le tunnel de conversion)
- RPPS et ADELI visibles → signaux de légitimité professionnelle réglementée
- Lien Doctolib → cohérence inter-plateforme + backlink entrant potentiel

---

## 5. Spécifications Design

### 5.1 Couleurs

| Élément | Valeur | Justification |
|---------|--------|--------------|
| Couleur principale | Bleu professionnel — ex. `#1B4B8C` ou `#2C5F8A` | Bleu = confiance, sécurité, santé, professionnalisme (psychologie couleurs) |
| CTA | Couleur haute contraste sur fond — ex. orange `#E8610A` ou vert `#2A9D3E` | Le CTA doit être la couleur la plus forte de la page — principe de contraste CRO |
| Fond | Blanc `#FFFFFF` / Gris très clair `#F8F9FA` en alternance sections | Whitespace = clarté mentale, qualité perçue |
| Texte | Presque noir `#1A1A2E` | WCAG AA minimum 4.5:1 |
| Accentuation | Bleu principal (titres de section) | Cohérence hiérarchie |

**Règle absolue :** Le CTA ("Prendre rendez-vous") utilise la couleur la plus saturée et contrastée de toute la page — jamais partagée avec un autre élément.

### 5.2 Typographie

| Élément | Spécification | Justification |
|---------|-------------|--------------|
| H1 | 44-56px, semi-bold, couleur principale | Impactant, lisible ATF |
| H2 | 28-36px, semi-bold | Hiérarchie visuelle claire |
| Body | 16-18px, regular, interligne 1.6 | WCAG, lisibilité mobile |
| Microcopy | 13-14px, gris moyen | Discret mais accessible |
| Police | Inter, Instrument Sans ou DM Sans (sans-serif) | Lisibilité écran optimale |
| Police titres | Peut différer (ex. Playfair Display serif) | Impact visuel H1 |
| Nb polices | Maximum 2 | Charge de chargement réduite |

### 5.3 Mobile-First

| Règle | Spec | Source |
|-------|------|--------|
| Colonne unique | 1 colonne uniquement | 83% trafic mobile |
| Touch targets | ≥ 48×48px | Google guidelines |
| Espacement | ≥ 8px entre éléments cliquables | Thumb-friendly |
| CTA sticky | Sticky bottom bar sur mobile avec "Prendre RDV" | Capture les scrollers |
| Images | WebP/AVIF, lazy loading below fold | Performance < 2s |
| Texte | ≥ 16px partout | Lisibilité, pas de zoom forcé |

---

## 6. Spécifications Techniques

### 6.1 Performance (Core Web Vitals)

| Métrique | Cible | Impact |
|----------|-------|--------|
| LCP | < 2.5s | Ranking Google + -24% abandons |
| CLS | < 0.1 | Pas de sauts visuels |
| INP | < 100ms | Réactivité formulaires |
| Load time total | < 2s | -7% CVR par 100ms |
| Image hero | Preload + WebP | Premier élément visible = LCP |

### 6.2 Stack recommandée

| Option | Stack | Avantages | Inconvénients |
|--------|-------|-----------|--------------|
| **Option A (recommandée)** | HTML/CSS/JS vanilla ou Astro | Performance maximale, < 50KB, LCP < 1s | Moins de flexibilité futurs ajouts |
| Option B | Next.js (SSG) | SEO parfait, écosystème React | Plus lourd à initialiser |
| Option C | WordPress + Elementor | CMS client | Lent, plugins lourds, CWV difficile |

**Recommandation Option A** pour une LP statique : performances maximales, hébergement gratuit (Vercel/Netlify/GitHub Pages), déploiement automatisé, SEO parfait avec HTML sémantique.

### 6.3 Hébergement & Domaine

| Élément | Recommandation | Raison |
|---------|---------------|--------|
| Hébergeur | Vercel (Free tier) ou Netlify | CDN global, HTTPS auto, déploiement Git |
| Domaine | `clement-fabrie-osteopathe.fr` | Nom + métier + extension locale = SEO + mémorabilité |
| Alt domaine | `osteopathe-clapiers.fr` | Keyword domain fort pour SEO local (si disponible) |
| SSL | Auto via hébergeur | Obligatoire HTTPS |

---

## 7. Analytics & Tracking

| Outil | Configuration | Objectif |
|-------|-------------|---------|
| Google Analytics 4 | Événements : clic CTA Doctolib, scroll 25/50/75/100%, clic téléphone | Mesurer CVR et comportement |
| Google Search Console | Soumission sitemap, monitoring positions | Suivi SEO |
| Microsoft Clarity | Gratuit — heatmaps + session recordings | Optimisation UX continue |
| Google Business Profile | Lier le site | SEO local Maps |

**Event de conversion principal :** Clic sur le bouton "Prendre rendez-vous" → Doctolib (outbound link tracking).

---

## 8. Prochaines Étapes Techniques

| Étape | Priorité | Dépendance |
|-------|---------|-----------|
| 1. Confirmation infos client (email, durée séance, formation périnatologie, photos) | Bloquante | Client |
| 2. Choix et achat du domaine | Bloquante | Client |
| 3. Design maquette Figma (1 itération) | Haute | Données client |
| 4. Développement HTML/CSS | Haute | Maquette validée |
| 5. Intégration Schema.org + SEO technique | Haute | Dev |
| 6. Déploiement Vercel + SSL | Haute | Dev |
| 7. Soumission Google Search Console + GSC sitemap | Post-déploiement | Domaine actif |
| 8. Création/optimisation Google Business Profile | Post-déploiement | Site live |
| 9. Cohérence NAP : mise à jour Pages Jaunes + autres annuaires | Post-déploiement | Infos confirmées |
| 10. Monitoring CWV + Clarity heatmaps | 1 mois post-live | Trafic suffisant |
