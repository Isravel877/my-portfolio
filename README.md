# Isravel R: Portfolio (React + Vite)

    npm install
    npm run dev        # http://localhost:5173
    npm run build      # production build in dist/
    npm run preview    # serve the build locally

## Replace before publishing (all in `src/data.js`)
- `profile.github` and `profile.linkedin`
- `repo` and `demo` for each project (empty values show a "coming soon" placeholder)
- `public/resume.pdf` is your uploaded resume; swap it for a newer file with the same name.

## Notes
- The DisasterConnect panel and hero code are labelled illustrations, not screenshots of your app.
- The contact form opens the visitor's email app; there is no backend.
- Review project wording so it matches what is actually implemented.

## Structure
    public/resume.pdf
    index.html  package.json  vite.config.js
    src/main.jsx  App.jsx  data.js  styles.css
    src/components/  Navbar Hero Section About Skills Projects Education Highlights Contact Footer
