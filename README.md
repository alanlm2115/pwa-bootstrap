## CSS Framework
- **Elegido:** Bootstrap 5 (latest)
- **Cómo se integra:**
  - `npm i bootstrap @popperjs/core`
  - `src/styles.scss`: `@import "bootstrap/scss/bootstrap";`
  - `src/main.ts`: `import 'bootstrap';`
## Créditos y licencia

Este proyecto usa el template [Freelancer](https://startbootstrap.com/theme/freelancer) de **Start Bootstrap**.

- Autor: Start Bootstrap (David Miller)
- Repositorio original: https://github.com/StartBootstrap/startbootstrap-freelancer
- Licencia del template: MIT © 2013–2025 Start Bootstrap LLC  
  (ver el archivo `LICENSE` incluido y la licencia original en el repo)

> Código liberado bajo la licencia MIT; puedes usarlo para cualquier fin, incluso comercial, siempre que conserves el aviso de copyright y la licencia.

- **Build prod:** `npx ng build -c production`
- **Servidor local:** `npx --yes http-server ./dist/pwa-bootstrap/browser -p 4300 -c-1 -o`
- **Verificación (Chrome):**
  - Application → Service Workers: `ngsw-worker.js` activo.
  - Application → Manifest: manifest e íconos OK.
  - Network → Offline → recargo `http://localhost:4300/` y la **Home** funciona offline:
    - App shell (index, bundles CSS/JS).
    - `assets/template/js/scripts.js`.
    - Imágenes clave: `avataaars.svg` + portfolio (`cabin.png`, `cake.png`, `circus.png`, `game.png`, `safe.png`, `submarine.png`).