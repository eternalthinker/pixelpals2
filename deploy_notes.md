### Working correctly with gh-pages deployment

As of now, what works for deployment in gh-pages is setting it to build from `docs/`,
and renaming our build folder to docs before deployment.

A .nojekyll file is also required in the docs folder to prevent gh-pages 404 errors.

All the above is handled by the gh-pages script in `gh-pages-deploy.sh`.
Note that `dotfiles: true` option is required for gh-pages module to include .nojekyll file.
