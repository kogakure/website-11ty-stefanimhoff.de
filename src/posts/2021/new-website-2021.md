---
title: New Website 2021
date: 2021-04-24T16:29:32+02:00
author: Stefan Imhoff
description: I relaunched my website again, after only 10 month. The previous stack was too slow and work-intensive and prevented me from writing. I picked Eleventy for my new website, the development was quick and fun.
tags:
  - code
  - design
  - personal
---

My brand-new website is online, using [Eleventy](https://www.11ty.dev/) as its static site generator. The development was quick and fun, and Eleventy gives me a huge amount of flexibility. And it’s fast, very fast. Burned by my last technology choice I did this time a performance test _before_ picking the tool. I created 1000 large Markdown pages and let Eleventy render them to HTML. It was done in astonishing 3.8 seconds.

![New Website 2021 Homepage](/assets/images/posts/new-website-2021.jpg)

## What’s New?

My new website looks familiar but different. I changed the complete code and picked a much simpler technology stack while keeping the design. I polished it everywhere, removed unneeded or complicated parts of the website, and extended it to other parts.

### Typography

I exchanged the font because [Mert](https://mertbulan.com/) wouldn’t stop complaining about how unreadable it was. The new font is [Secuela](https://fontesk.com/secuela-typeface/), a variable font with weights from thin to black. The new font allows having a slimmer weight for the dark mode. This ensures the contrast doesn’t bleed and blends the eyes.

### Projects

The project area is now generated from a data file. Adding a new project needs no additional CSS or Markup.

### Haiku

I simplified the [Haiku](/haiku/) section and removed unnecessary sections. It’s now a short introduction and links to my Haiku. Gone are the different colored layouts. Haiku was the only section using the green layout. Sketchnotes were the only section using the brown layout. The blue layout I didn’t use at all. All these are gone.

### Sketchnotes

The last [Sketchnote](/sketchnotes/) section didn’t get a lot of love. The relaunch brings a nice grid layout with a detail page for each item.

### Journal

The [journal](/journal/) got the biggest change. I started splitting my posts into three categories: Posts, links, and quotes. Posts are my articles and essays, links are my retired monthly link post and the new irregular link post format. I added a quote format because _some_ quotes are too good not to be shared. I took the time to extract all interesting quotes from my monthly posts and create separate quote posts out of them.

The overview page of the journal is now chronological, groups by year. Small icons added to link or quote posts differentiate those from regular posts.

### Homepage

I added a new section showing featured posts, the latest posts, links, or quotes.

### RSS/Atom Feeds

The feed produced by Gatsby created a lot of problems. I was not able to remove the CSS classes added by Styled-Components and the custom MSX tags blew up the file size so much that a lot of feed readers couldn’t parse it anymore.

All these problems are history with Eleventy. I even created four different feeds to subscribe to: [Posts, Links, and Quotes](/index.xml) combined, or [Posts](/feed-posts.xml), [Links](/feed-links.xml), and [Quotes](/feed-quotes.xml) as separate feeds. Subscribe to what you like.

## Why Did I Change the Technology Stack?

Given the fact that my last relaunch was 10 months ago, why did I relaunch again?

The short answer is: **Gatsby was too slow**.

While I was still developing my last website, I felt it getting slower with advancing development time. Each GraphQL query, each Markdown file, each image, each technology added increased the build times.

To give you hard numbers: Building my previous Gatsby site with 77 articles took up to 3 minutes on a MacBook Pro 16" 2020 with 16 GB RAM:

```bash
success open and validate gatsby-configs - 0.307s
success load plugins - 5.841s
success onPreInit - 0.041s
success delete html and css files from previous builds - 0.005s
success initialize cache - 0.007s
success copy gatsby files - 0.215s
success onPreBootstrap - 0.047s
success createSchemaCustomization - 0.005s
success Checking for changed pages - 0.003s
success source and transform nodes - 15.801s
success building schema - 0.565s
success createPages - 0.122s
success Checking for changed pages - 0.004s
success createPagesStatefully - 0.471s
success update schema - 0.040s
success onPreExtractQueries - 0.001s
success extract queries from components - 4.080s
success write out redirect data - 0.012s
success Build manifest and related icons - 0.483s
success onPostBootstrap - 0.499s
info bootstrap finished - 35.813s
success run static queries - 6.581s - 22/22 3.34/s
success run page queries - 24.880s - 114/114 4.58/s
success write out requires - 0.006s
success Building production JavaScript and CSS bundles - 40.079s
success Rewriting compilation hashes - 0.004s
success Building static HTML for pages - 18.687s - 114/114 6.10/s
success Generating image thumbnails - 105.103s - 521/521 4.96/s
success onPostBuild - 35.452s
info Done building in 163.798668245 sec
```

My new technology stack is so fast, the JavaScript compiles in **422ms**, the [PostCSS](https://postcss.org/) is converted to CSS in **900ms**, Eleventy generated over 230 files and copies over 300 files to the `dist` folder in **3.62s**. This includes a plugin doing work on my images (adding sizes, lazy loading, and blur up). Adding time between the processes and the generation of a service worker with [Workbox](https://developers.google.com/web/tools/workbox/), my whole production build is done in **14,5s**.

That’s the time Gatsby needed for processing the GraphQL queries. 😳

My old stack was so slow I had to switch from building via GitHub on [Netlify](https://www.netlify.com/) to building locally and uploading via the Netlify CLI because my 300 free build minutes per month were used up early each month. And a build took nearly 8 minutes on Netlify.

Over the last months, my frustration rose with each article I wanted to write, because seeing a mistake in the published text and fixing it could take up to 30 minutes of my time.

## High Maintenance

Let’s be honest: My old stack was too complicated for a website. A blog shouldn’t be a SPA (Single Page App), a good old MPA (Multi-Page App), or a website (as we used to call it) is the right choice.

I used [TypeScript](https://www.typescriptlang.org/), [Styled-Components](https://styled-components.com/), [MDX](https://mdxjs.com/), [GraphQL](https://graphql.org/), wrote hundreds of [Jest](https://jestjs.io/) unit tests, and used 120 npm packages. Updating and keeping a stack like this alive is work, not fun. The Saturday morning is gone, after updating 120 packages with dozens of major updates.

## The New Tech Stack

### Eleventy

[Eleventy](https://www.11ty.dev/) is flexible. Multiple template languages are officially supported, more can be added with plugins. I picked [Nunjucks](https://mozilla.github.io/nunjucks/) as my template engine because it’s inspired by the Django template engine which I liked a lot.

Eleventy takes a lot of the ideas of [Jekyll](https://jekyllrb.com/) and adds more features on top. It’s easy to create collections out of data or files. Every JSON file in the `data` folder is automatically available to each template. Adding tags to content creates [collections](https://www.11ty.dev/docs/collections/). This can be done quickly per folder in a JSON file. It‘s possible to create custom collections and sort, modify, or group collections with JavaScript.

With YAML frontmatter layouts can be chosen for each file or collection of files, permalinks can be generated programmatically or per file.

[Filters](https://www.11ty.dev/docs/filters/) allow the modification of content, a few are build into Eleventy, others depend on the template language. It’s effortless to create your own filters.

[Shortcodes](https://www.11ty.dev/docs/shortcodes/) allow creating custom helpers to be used and generate output. I used them to replace a lot of my components.

I used four Eleventy plugins:

- [eleventy-plugin-lazyimages](https://github.com/liamfiddler/eleventy-plugin-lazyimages) – Adds width and height attribute to all images, lazy loading and blur up technique.
- [eleventy-plugin-reading-time](https://github.com/johanbrook/eleventy-plugin-reading-time) – Calculates the reading time.
- [@11ty/eleventy-plugin-rss](https://www.11ty.dev/docs/plugins/rss/) – Helps creating RSS/Atom feeds.
- [@11ty/eleventy-plugin-syntaxhighlight](https://www.11ty.dev/docs/plugins/syntaxhighlight/) – Adds code highlighting via [Prism](https://prismjs.com/) on build time.

Eleventy uses [Markdown It](https://markdown-it.github.io/) as the default Markdown parser. I added plugins to support footnotes, GitHub headings, spoiler, sub, sup, and external anchors.

### PostCSS

I used [PostCSS](https://postcss.org/) to generate the CSS of my website, with very few plugins. I added a few features to use SASS-style variables. I might move to CSS custom properties in the future, for now, I use these only for color variables.

Another thing added is the nesting of CSS, because it makes the writing easier and it’s more clear what belongs together.

Sorting media queries is a helpful plugin when using nested media queries. The plugin collects all CSS of one media query size and combines them.

### Rollup

I started without any JavaScript bundler, but it’s convenient to be able to use modules or ES6 syntax. I decided to go with [Rollup](https://rollupjs.org/) because it _seemed_ to be the simplest tool. It was still a mess to get it doing exactly what I wanted. That was the only part in the development which was frustrating. I hate all JavaScript bundlers available. They are all too complicated or don’t do as I want.

In the end, I replaced my custom PostCSS NPM task to run with Rollup.

## Source Code

I learned a lot by looking at other developers Eleventy code, honorable mention goes to:

- [Zach Leatherman](https://www.zachleat.com/), the creator of _Eleventy_.
- [Jecelyn Yeen](https://jec.fyi/), who wrote a [full series on creating a blog with Eleventy](https://jec.fyi/blog/building-my-static-site-with-11ty).
- [Phil Hawksworth](https://www.hawksworx.com/) who created [multiple Eleventy starters](https://github.com/philhawksworth/) to learn from.
- [Stephanie Eckles](https://thinkdobecreate.com/), who created [11ty Rocks!](https://11ty.rocks/), wrote multiple articles about Eleventy, and created a free [Egghead course](https://egghead.io/courses/build-an-eleventy-11ty-site-from-scratch-bfd3).
- [Max Böck](https://mxb.dev/), who writes a lot about Eleventy in his blog.

My [source code](https://github.com/kogakure/website-11ty-stefanimhoff.de) is as always open to everyone, including all commits I did since I started the project in mid-March 2021.
