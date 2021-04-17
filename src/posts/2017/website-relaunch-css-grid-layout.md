---
title: Website Relaunch with CSS Grid Layout
date: 2017-08-14T12:00:00+02:00
author: Stefan Imhoff
description: I redesigned my martial arts website with CSS Grid Layout and added a Service Worker.
tags:
  - code
  - design
---

4 months of work, 49 hours of coding, plus more hours for designing a new homepage, creating a new OTF font, and polishing up some of my old 3D models. But now my martial arts website [kogakure.de](https://www.kogakure.de/) is online.

![Website Relaunch](/assets/images/posts/kogakure-2017.jpg)

The old website still used Jekyll, and it took a long time to generate and deploy my website. For the same reasons I migrated this website to [Hugo] – which are speed and getting rid of Ruby – I decided to do the same for [kogakure.de].

## CSS Grids

But I had more in mind: I always wanted to create a website with the new [CSS Grid Layout Module Level 1], or in short _CSS Grids_. This spec landed in all modern browsers (including mobile browsers) this spring. CSS Grids are one of the coolest additions of the last 15 years. Finally, Responsive Layout with CSS opens up possibilities to new layouts never seen before. Everything, which is possible in Print should be possible with CSS Grids, but much more, because of the responsiveness build into CSS Grids.

## Technology

I upgraded my tech stack while doing the migration: JavaScript is written in [ES6], compiled with [Babel], and packaged with [Webpack]. I use a _Service Worker_ to bring offline support for the website.

The build and development environment runs with [Gulp.js] and [Yarn].

For CSS I use as with this website [PostCSS], but removed _PreCss_ and a lot of plugins, instead just use [CSSnext] with support for CSS custom properties, custom media queries, `@apply` and more.

## Mozilla Firefox CSS Grid Inspector

Special thanks to [Mozilla] for their fantastic [Firefox] browser. The Firefox _Nightly_ Edition includes already a **new** _CSS Grid Inspector_, which is **awesome**. And it was really needed, my homepage uses **12 different grids**. Yes, you read correctly. 12. CSS Grid Layout _can_ be used for the overall page layout, but developers are encouraged to also use it on a component basis.

![My grids inspected with the Mozilla Firefox CSS Grid Inspector](/assets/images/posts/css-grid-inspector.jpg)

## Hosting on Netlify

My new website is hosted on [Netlify]. A fantastic service, which comes with deployment via Git, build hooks, single page pre-rendering, asset optimization, forms, split testing, notifications, and free SSL with [Let’s Encrypt], and you can set a custom domain. And they have a global CDN, which means assets are delivered much fast, wherever you live.

You can create unlimited sites, add unlimited collaborators, and even use it for commercial projects. **For free**. And of course, they have packages for users and companies, who need more control or reliability.

## Source Code

The [source code] for my website is completely open, the content is as always provided with a [Creative Commons license]. The unique design is not free, but everybody is encouraged to learn from the code and reuse the code of the website.

[hugo]: https://gohugo.io/
[kogakure.de]: https://www.kogakure.de/
[css grid layout module level 1]: https://www.w3.org/TR/css-grid-1/
[es6]: http://es6-features.org/
[babel]: https://babeljs.io/
[webpack]: https://webpack.js.org/
[gulp.js]: https://gulpjs.com/
[yarn]: https://yarnpkg.com/
[postcss]: https://postcss.org/
[cssnext]: http://cssnext.io/
[mozilla]: https://www.mozilla.org/
[firefox]: https://www.mozilla.org/firefox/
[netlify]: https://www.netlify.com/
[let’s encrypt]: https://letsencrypt.org/
[source code]: https://github.com/kogakure/website-hugo-kogakure.de
[creative commons license]: https://creativecommons.org/licenses/by-nc/3.0/
