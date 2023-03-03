# WYPPUG Website

This is the source for the website at [https://www.wyppug.org.uk](https://www.wyppug.org.uk)

The easiest way to edit the site is using the [CMS at https://www.wyppug.org.uk/admin/](https://www.wyppug.org.uk/admin/). You can use this even if you don't have commit access - a PR will be submitted.

## How this site works.

This site is generated using Gatsby static site engine.

A Netlify CMS is configured to allow easy editing of some content. Any content that is exposed via the CMS is in the /data folder. Netlify CMS pushes the changes to a PR int the GitHub repo. A preview is then generated using Netlify and associated with the PR. The PR can be approved once the changes have been checked.

Whenever PRs are merged (or other direct changes to "main" branch), Github Actions builds the site using Gatsby and deploys the results to Github Pages.
