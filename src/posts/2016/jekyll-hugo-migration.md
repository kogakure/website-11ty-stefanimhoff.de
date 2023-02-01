---
title: Migrating to Hugo
permalink: /jekyll-hugo-migration/
author: Stefan Imhoff
date: 2016-08-27T13:05:57+02:00
description: A blog post about the migration from Jekyll to Hugo and why it’s worth trying out Hugo.
tags: ["code"]
---

## Migrating from Jekyll to Hugo

After running over 2 years with [Jekyll](https://jekyllrb.com/), I recently replaced it with [Hugo](https://gohugo.io/), a static site generator written in Go.

I did this mainly because of two reasons: Firstly, Jekyll is too slow (because Ruby is slow). The site generation takes forever, with tags and category generation it gets even worse. I had to limit the amount of generated pages to 5 during development, to have nearly instant updates. My blog has around 80 essays. I’ve read stories of large sites, where the generation takes hours. Secondly, I wanted to stop updating Node packages and Gems (one ecosystem is enough).

## Researching the options

Before I decided on Hugo, I did long research on the possible [static site generators](https://www.staticgen.com/).

### Hexo

[Hexo](https://hexo.io/) was interesting because it’s written in JavaScript. It’s similar to Jekyll (it even supports the plugins of Jekyll). But after testing it, I found out it’s not faster in generating sites like Jekyll. Additionally, it comes as an out-of-the-box thing, where everything is a plugin. And I try to separate my build and development workflows (written in Gulp) from the generation of my site. This helps me to avoid locking too much into a tool.

### Roots

Another tool, which looked nice, was _Roots_. But after research, I found out it’s discontinued.

### Gatsby

I like the idea of [Gatsby](https://github.com/gatsbyjs/gatsby) because it uses React templates to build static sites. Yet currently, it’s unusable because it bundles all posts into _one_ JavaScript file. Sure, this allows browsing the website offline and with instant page changes. But having to load a 500-800 KB JavaScript file is not a thing I’ll ever allow on my website. If Gatsby allowed deciding on smaller Webpack bundle packages (e.g., a bundle for a tag or a year) it would be an option.

## Choosing Hugo

In the end, the features of Hugo were good and after testing it for days I decided to use it, despite having no clue about Go.

The first thing which is surprising: Hugo is a binary, which is cross-platform and after installing it, that’s it. It’s as easy on a Mac as this:

```bash
$ brew install hugo
```

The main reason for switching was the speed. And fast it is. Generating my whole site, with **86** essays, **125** tags, **21** categories and **2** series takes **~700 ms**. This means everything included, even moving all the assets. If I wouldn’t use my _Related Posts_ section, I could cut the time in half. Since I use Gulp and minimize, optimize and do a lot to my files, my production Gulp task needs now **~30 seconds** (including syncing the files to the server), compared to **2-3 minutes** before.

How fast Hugo is, can be best seen in this video: [Hugo benchmark – 5,000 posts in seconds](https://youtu.be/CdiDYZ51a2o).

## Templates

Hugo comes without a plugin system, but I didn’t miss any and could find a solution for everything I had on my Jekyll site before. The templates are written in [Go html/template](https://golang.org/pkg/html/template/), Ace or Amber. The latter is familiar to people, who know Jade/Pug. But I choose the Go html/template. The syntax requires time to get used to, as it’s different from all template engines I’ve used before. Whenever I got stuck with a problem, the [Hugo Discussion Board](https://discourse.gohugo.io) could help out in all cases. Hugo comes with specific rules for templates, how to name them, and rules in which order templates get rendered.

## Themes

It has a nice Theme system, which allows the creation of modular themes. And because creating a theme is easy, there are [plenty of good themes](https://themes.gohugo.io/) available.

## Shortcodes

Instead of plugins, Hugo uses [Shortcodes](https://gohugo.io/content-management/shortcodes), which is refreshing. Writing plugins in Jekyll was not fun. With Shortcodes it’s possible to create the same functionality without needing to know Ruby and the [Liquid for Programmers](https://github.com/Shopify/liquid/wiki/Liquid-for-Programmers) guidelines and getting the same result with fewer lines and writing Markup.

## Content

Another pleasant thing is the organization of the content. You can create multiple sections and types of content, serving them at your chosen URL. And you can create pages or content out of data (Jekyll has this).

Content is written in Markdown (or Asciidoc, reStructuredText) and can be extended with Frontmatter (in TOML, YAML, or JSON).

Hugo comes with Menu generation and a Taxonomy system, which lets you create as many Taxonomies (tags, categories) as you like.

## Conclusion

Converting my site from Jekyll to Hugo took three days. My tendency to over-engineering and perfection allocated a lot of my time. And for that reason, I started simplifying my CSS and Gulp tasks and will further simplify the site. But it was fun and if you need a static site you should have a look into Hugo.

{% more "View Source on GitHub", "https://github.com/kogakure/hugo-stefanimhoff.de", true %}
