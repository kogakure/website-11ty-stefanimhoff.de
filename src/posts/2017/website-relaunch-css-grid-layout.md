---
title: Website Relaunch with CSS Grid Layout
date: 2017-08-14T12:00:00+02:00
author: Stefan Imhoff
description: I redesigned my martial arts website with CSS Grid Layout and added a Service Worker.
tags:
  - code
  - design
---

4 months of work, 49 hours of coding, plus more hours for designing a new homepage, creating a new OTF font, and polishing up my old 3D models. But now my martial arts website [kogakure.de](https://www.kogakure.de/) is online.

![Website Relaunch](/assets/images/posts/kogakure-2017.jpg)

The old website used Jekyll, and it took a long time to generate and deploy my website. For the same reasons I migrated this website to [Hugo](https://gohugo.io/) – which are speed and getting rid of Ruby – I decided to do the same for [kogakure.de](https://www.kogakure.de/).

## CSS Grids

But I had more in mind: I always wanted to create a website with the new [CSS Grid Layout Module Level 1](https://www.w3.org/TR/css-grid-1/), or in short _CSS Grids_. This spec landed in all modern browsers (including mobile browsers) this spring. CSS Grids are one of the coolest additions of the last 15 years. Finally, Responsive Layout with CSS opens possibilities for new layouts never seen before. Everything, which is possible in Print should be possible with CSS Grids, but much more, because of the responsiveness build into CSS Grids.

## Technology

I upgraded my tech stack while doing the migration: JavaScript is written in [ES6](http://es6-features.org/), compiled with [Babel](https://babeljs.io/), and packaged with [Webpack](https://webpack.js.org/). I use a _Service Worker_ to bring offline support to the website.

The build and development environment runs with [Gulp.js](https://gulpjs.com/) and [Yarn](https://yarnpkg.com/).

For CSS, I use as with this website [PostCSS](https://postcss.org/) but removed _PreCss_ and many plugins, instead just use [CSSnext](http://cssnext.io/) with support for CSS custom properties, custom media queries, `@apply` and more.

## Mozilla Firefox CSS Grid Inspector

Special thanks to [Mozilla](https://www.mozilla.org/) for their fantastic [Firefox](https://www.mozilla.org/firefox/) browser. The Firefox _Nightly_ Edition includes a new _CSS Grid Inspector_, which is outstanding. And it was needed, my homepage uses **12 different grids**. Yes, you read correctly. 12. CSS Grid Layout _can_ be used for the page layout, but developers are encouraged to use it on a component basis.

![My grids inspected with the Mozilla Firefox CSS Grid Inspector](/assets/images/posts/css-grid-inspector.jpg)

## Source Code

The [source code](https://github.com/kogakure/website-hugo-kogakure.de) for my website is completely open, the content is as always provided with a [Creative Commons license](https://creativecommons.org/licenses/by-nc/3.0/). The unique design is not free, but everybody is encouraged to learn from the code and reuse the code of the website.