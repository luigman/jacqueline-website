# jacqueline-website

Run `npm run start` from Demo to run the site. Source code exists on the `source` branch. `main` is unused for now.

To deploy, run `npm run deploy` from Demo. This will push the changes to the `gh-pages` branch.

If testing static file linking, run `npm run build; npm run serve`. Static files aren't served correctly with `gatsby develop` (see https://github.com/gatsbyjs/gatsby/issues/13072).