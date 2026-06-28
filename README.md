# Navire Express

Site vitrine de **Navire Express**, entreprise de déménagement résidentiel et commercial à Montréal.

**Site en ligne :** [NavireExpress.com](https://NavireExpress.com)  
**Téléphone :** (514) 839-0212

---

## Stack technique

| Outil | Rôle |
|-------|------|
| [React 18](https://react.dev/) | Interface utilisateur |
| [Vite 6](https://vite.dev/) | Build et serveur de dev |
| [React Router 7](https://reactrouter.com/) | Navigation multi-pages (SPA) |
| [Tailwind CSS 4](https://tailwindcss.com/) | Styles |
| [Motion](https://motion.dev/) | Animations |
| [Lucide](https://lucide.dev/) | Icônes |

---

## Prérequis

- **Node.js 18+** (20 recommandé)
- **npm** (inclus avec Node.js)

> Le projet utilise un `package-lock.json`. Utilisez **npm**, pas besoin de pnpm.

Vérifier votre installation :

```bash
node -v
npm -v
```

---

## Installation

```bash
git clone https://github.com/<votre-compte>/Navireexpress.git
cd Navireexpress
npm install
```

---

## Commandes

| Commande | Description |
|----------|-------------|
| `npm run dev` | Lance le serveur local sur [http://localhost:5173](http://localhost:5173) |
| `npm run build` | Génère le site de production dans `dist/` |
| `npm run build:gh-pages` | Build + copie `404.html` pour GitHub Pages |
| `npm run preview` | Prévisualise le build de production localement |

---

## Structure du projet

```
Navireexpress/
├── src/
│   ├── app/
│   │   ├── components/   # Layout, TruckScene, composants UI
│   │   ├── pages/        # Accueil, Services, À propos, Contact, Témoignages
│   │   ├── App.tsx
│   │   └── routes.tsx
│   ├── imports/          # Images (logo, camion, maison)
│   ├── styles/           # CSS global, thème, polices
│   └── main.tsx
├── scripts/
│   └── copy-spa-fallback.mjs   # Fallback SPA pour GitHub Pages
├── dist/                 # Sortie du build (généré)
├── vite.config.ts
├── netlify.toml          # Config Netlify
└── package.json
```

### Pages

| Route | Fichier | Contenu |
|-------|---------|---------|
| `/` | `Home.tsx` | Accueil, hero, animation camion |
| `/services` | `Services.tsx` | Offres de déménagement |
| `/about` | `About.tsx` | Histoire de l'entreprise |
| `/contact` | `Contact.tsx` | Formulaire et coordonnées |
| `/testimonials` | `Testimonials.tsx` | Avis clients |

---

## Build de production

```bash
npm run build
```

Les fichiers statiques sont créés dans `dist/`. Pour tester localement :

```bash
npm run preview
```

### Problèmes fréquents

**`pnpm : commande introuvable`**  
Le README précédent mentionnait pnpm, mais le projet est configuré pour npm. Utilisez :

```bash
npm install
npm run build
```

**`npm run build` échoue après un clone**  
Installez d'abord les dépendances :

```bash
npm install
```

**Page blanche après déploiement sur GitHub Pages**  
Utilisez le script dédié avec le bon chemin de base (remplacez `Navireexpress` par le nom de votre dépôt) :

```bash
# PowerShell (Windows)
$env:VITE_BASE_PATH="/Navireexpress/"; npm run build:gh-pages

# Bash / macOS / Linux
VITE_BASE_PATH=/Navireexpress/ npm run build:gh-pages
```

---

## Déploiement

### GitHub Pages

1. Poussez le code sur GitHub.
2. Allez dans **Settings → Pages → Build and deployment** et choisissez **GitHub Actions**.
3. À chaque push sur `main` ou `master`, le workflow `.github/workflows/deploy.yml` build et publie le site.

URL : `https://<utilisateur>.github.io/<nom-du-depot>/`

### Netlify

1. Connectez le dépôt sur [Netlify](https://www.netlify.com/).
2. Configuration automatique via `netlify.toml` :
   - **Build command :** `npm run build`
   - **Publish directory :** `dist`
3. Redirections SPA déjà configurées pour React Router.

Aucune variable d'environnement requise pour un déploiement à la racine du domaine.

---

## Développement

Le serveur de dev recharge automatiquement à chaque modification :

```bash
npm run dev
```

Les alias de chemins `@/` pointent vers `src/` (configuré dans `vite.config.ts`).

---

## Licence

Projet privé — Navire Express. Tous droits réservés.
