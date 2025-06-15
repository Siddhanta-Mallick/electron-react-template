# Electron + React (Vite) Starter Template

A clean starter template that combines Electron with React and Vite for fast and efficient desktop app development using modern web technologies.

---

## Features

- React with Vite: Uses Vite for a fast development environment and optimized builds.
- Electron integration: Configured to run and package desktop apps.
- Windows build only: Electron builder is currently configured only for Windows. MacOS and Linux configurations are not yet set up.
- TailwindCSS: This template is updated to include TailwindCSS.
- Includes a dummy `desktopIcon.png` file, which is necessary to create a working Windows build.
- `signAndEditExecutable` is set to `false` in the `electron-builder` config to avoid symbolic link permission errors during Windows builds.

---

## Project Structure

```
/src
├── /ui         -> Contains all React (frontend) code
└── /electron   -> Contains all Electron (backend) code
```

- The `src/ui` directory contains all React code.
- The `src/electron` directory contains all Electron main process code.

---

## Development Mode

During development:

- React is served using the Vite development server on port `5123`.
- Electron loads the main window from `http://localhost:5123`.
- The port and strict behavior are configured in `vite.config.js`.

To start development, use:

```bash
npm run dev
```

This uses `npm-run-all` to run both the Vite server and Electron process in parallel. Thanks to Vite's hot module replacement (HMR), changes in the React code are reflected live in the Electron window.

---

## Production Build

In production:

- React is built into static files inside the `dist-react` folder.
- Electron loads the UI from the static `dist-react` folder.
- The final packaged app is output to the `dist` directory using `electron-builder`.

---

## Additional Notes

- Uses `cross-env` to set the environment mode (`development` or `production`) in a platform-independent way.
- Make sure the Vite dev server is running before launching the Electron app in development.
- A placeholder `desktopIcon.png` is required by `electron-builder` to create a valid Windows build.

---

## To Do

- Add support for MacOS and Linux in `electron-builder`.
- Create a TailwindCSS version of this template.
