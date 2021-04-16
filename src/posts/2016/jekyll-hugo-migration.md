---
published: true
title: Migrating to Hugo
author: Stefan Imhoff
date: 2016-08-27T13:05:57+02:00
description: A blog post about the migration from Jekyll to Hugo and why it’s worth to try out Hugo.
categories:
  - code
---

## Migrating from Jekyll to Hugo

After running over 2 years with [Jekyll](https://jekyllrb.com/) I recently replaced it with [Hugo](https://gohugo.io/), a static site generator written in Go.

I did this mainly because of two reasons: _Firstly_, Jekyll ist just **too slow** (because Ruby is slow). The site generation takes forever, with tags and category generation it gets even worse. I had to limit the amount of generated pages to 5 during development, to have a nearly instant update of the stuff I write. And my blog has just around 80 articles. I’ve read stories of large sites, where the generation takes hours. _Secondly_ I wanted to stop updating Node packages _and_ Gems (one ecosystem is enough).

## Researching the options

Before I decided on Hugo, I did quite long research on the possible [static site generators](https://www.staticgen.com/).

### Hexo

[Hexo](https://hexo.io/) was quite interesting because it’s written in JavaScript. It’s very, very similar to Jekyll (it even supports the plugins of Jekyll). But after some tests, I found out it’s not faster in generating sites like Jekyll. Additionally, it comes as an out-of-the-box thing, where everything is a plugin. And I try to separate my build and development workflows (written in [Gulp](/series/gulp/)) from the generation of my site. This helps me avoiding to lock too much into a tool.

### Roots

Another tool, which looked quite nice was _Roots_. But after some research, I found out it’s already discontinued.

### Gatsby

I like the idea of [Gatsby](https://github.com/gatsbyjs/gatsby) because it uses React templates to build static sites. But currently, it’s unusable, because it bundles all articles into _one_ JavaScript file. Sure, this allows browsing the website offline and with instant page changes. But having a 500-800 KB JavaScript file is just not a thing I’ll ever allow. If Gatsby would allow deciding on smaller Webpack bundle packages (e. g. a bundle for a _tag_ or a _year_) it would be an option.

## Choosing Hugo

In the end, the features of Hugo were just too good and after testing it for some days I decided to use it, despite having no clue of Go.

The first thing which is surprising: Hugo is a binary, which is cross-platform and after installing it, that’s it. It’s as easy on a Mac as this:

```bash
$ brew install hugo
```

The main reason for switching was for my speed. And fast it is. Generating my whole site, with **86** articles, **125** tags, **21** categories and **2** series takes **~700 ms**. This means everything included, even moving all the assets. If I wouldn’t use my _Related Articles_ section, I could cut the time in half. Since I use Gulp and minimize, optimize and do a lot to my files, my production Gulp task needs now **~30 seconds** (including syncing the files to the server), compared to **2-3 minutes** before.

How fast Hugo _really_ is can be best seen in this video: [Hugo benchmark - 5,000 posts in seconds](https://youtu.be/CdiDYZ51a2o).

## Templates

Hugo comes without a plugin system, but I didn’t miss any and could find a solution for everything I had on my Jekyll site before. The templates are written in [Go html/template](https://golang.org/pkg/html/template/), Ace or Amber. The latter looks very familiar to people, who know Jade/Pug. But I choose the Go html/template. The syntax needs some time to get used to, as it’s so different from all template engines I’ve used before. But if I got stuck with a problem the [Hugo Discussion Board](https://discourse.gohugo.io) could help out in all cases. Hugo comes with specific rules for templates, how to name them, and rules in which order templates get rendered.

## Themes

It also has a nice Theme system, which allows creating very modular Themes. And because creating a theme is so easy there are [a lot very good of them](https://themes.gohugo.io/) available.

## Shortcodes

Instead of plugins Hugo uses [Shortcodes](https://gohugo.io/content-management/shortcodes), which is very refreshing. Writing plugins in Jekyll was _not_ fun. With Shortcodes it’s possible to create the same functionality without needing to know Ruby and the [Liquid for Programmers](https://github.com/Shopify/liquid/wiki/Liquid-for-Programmers) guidelines and still getting the same result with fewer lines and writing mostly Markup.

## Content

Another nice thing is the organization of the content. You can create multiple sections and or types of content, serving them at your chosen URL. And you can create pages or content just out of data (Jekyll has this, too).

Content is written in Markdown (or Asciidoc, reStructuredText) and can be extended with Frontmatter (in TOML, YAML or JSON).

Hugo comes with Menu generation and a Taxonomy system, which lets you create as many Taxonomies (tags, categories, etc.) as you like.

## Conclusion

Converting my site from Jekyll to Hugo just took three days. My tendency of over-engineering and perfection allocated a lot of the time. And because of that, I started simplifying my CSS and Gulp tasks and will further simplify the site. But it was fun and if you need a static site you should have a look into Hugo.

{% more "View Source on GitHub", "https://github.com/kogakure/hugo-stefanimhoff.de", true %}
