# ConversAIlabs Note Asignment

## Live Link
https://conversailabs-notes-app-by-manash.netlify.app

## Tech Stack
- React.Js
- Tailwind CSS
- localStorage

## Why (Logics) 

- localStorage to store ConversAIlabs_Notes: Keeps data client-side with scoped key naming for easy access.
- useState/useEffect: Simpler state management for this small project, avoids Redux overhead.
- Tailwind CSS: Speeds up styling with utility classes, responsiveness of the site.
- Simple navigation : Keeps UI intuitive and avoids router overhead.

## Run Locally
git clone <repo>
cd note-app
npm install
npm run dev



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
