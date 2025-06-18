# Lokale Entwicklung

`npm start`
Starts the development server.

`npm run build`
Bundles your website into static files for production.

`npm run serve`
Serves the built website locally.

`npm run deploy`
Publishes the website to GitHub pages.

`npm run build`
This command generates static content into the `build` directory and can be served using any static contents hosting service.

# Deployment zu GitHub Pages

`GIT_USER=<git-username> npm run deploy`

- https://docusaurus.io/docs/deployment#triggering-deployment-with-github-actions

Using SSH:

```bash
USE_SSH=true npm run deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
