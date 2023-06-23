### Working correctly with gh-pages deployment

As of now, what works for deployment in gh-pages is setting it to build from `docs/`,
and renaming our build folder to docs before deployment.

A .nojekyll file is also required in the docs folder to prevent gh-pages 404 errors.
The gh-pages script doesn't seem to copy the `.nojekyll` file correctly, although it is created locally.  
So create this file manually in the gh-pages branch docs folder, after the deployment.
This can be done easily from the Github UI.
