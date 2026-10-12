# Abdelrahman Ashraf – React Portfolio

## Run
```
npm install
npm run dev      # development
npm run build    # production build (output in /dist)
npm run preview  # preview the build
```

## Replace things
- **Personal info / links / tagline**: `src/config/profile.js`
- **CV**: put your PDF in `public/` named exactly `Abdelrahman_Ashraf_CV.pdf` (the buttons already point to it)
- **Profile photo**: replace `public/profile-placeholder.svg` or change `image` in `profile.js` (e.g. `/me.jpg` after adding `public/me.jpg`)
- **Project screenshots**: add images to `public/` and set `image` in `src/data/projects.js`

## Add content
- **Project**: copy an object in `src/data/projects.js`; fill `repo` and `demo` (leave `null` to use the GitHub profile link / hide the demo button); `featured: true` shows it on Home.
- **Skill**: add `{ name, badge }` to a category in `src/data/skills.js`.
- **Training / certificate**: add an object in `src/data/experience.js`.

## Notes
- The contact form has no backend: a valid submit opens the visitor's email app (mailto).
- Colors and spacing live in the `:root` variables in `src/styles/global.css`.
