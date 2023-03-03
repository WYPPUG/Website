# WYPPUG Website

This is the source for the website at [https://www.wyppug.org.uk](https://www.wyppug.org.uk)

The easiest way to edit the site is using the [CMS at https://www.wyppug.org.uk/admin/](https://www.wyppug.org.uk/admin/) however this requires commit access to this repo.

Other contributors without commit access may submit a PR.

## How this site works.

This site is generated using Gatsby static site engine.

A Netlify CMS is configured to allow easy editing of some content. Any content that is exposed via the CMS is in the /data folder. Netlify CMS pushes the changes directly to the GitHub repo.

Whenever something changes in the repo, Github Actions builds the site using Gatsby and deploys the results to Github Pages.