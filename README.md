# Navire Express

Site web vitrine pour Navire Express — services de déménagement à Montréal.

## Prérequis

- Node.js 18+
- pnpm (recommandé) ou npm

## Installation

```bash
pnpm install
```

## Développement

```bash
pnpm dev
```

## Production

```bash
pnpm build
```

Les fichiers de production sont générés dans le dossier `dist/`.

## Déploiement

### GitHub Pages

1. Poussez le dépôt sur GitHub.
2. Allez dans **Settings → Pages → Build and deployment** et choisissez **GitHub Actions** comme source.
3. À chaque push sur `main` (ou `master`), le workflow `.github/workflows/deploy.yml` build et publie le site.

URL du site : `https://<utilisateur>.github.io/<nom-du-depot>/`

Pour un build local compatible GitHub Pages (remplacez `Navireexpress` par le nom de votre dépôt) :

```bash
set VITE_BASE_PATH=/Navireexpress/ && npm run build:gh-pages
```

### Netlify

1. Connectez le dépôt sur [Netlify](https://www.netlify.com/).
2. La configuration est lue depuis `netlify.toml` :
   - **Build command** : `npm run build`
   - **Publish directory** : `dist`
3. Les redirections SPA sont déjà configurées pour le routage React Router.

Aucune variable d'environnement n'est requise — le site est servi à la racine du domaine.
