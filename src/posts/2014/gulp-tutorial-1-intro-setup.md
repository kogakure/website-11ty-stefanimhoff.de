---
title: "Introduction to Gulp.js 01: Intro and Setup"
author: Stefan Imhoff
date: 2014-10-18T08:35:47+02:00
description: "The ultimative tutorial and guide for Gulp.js: The first part of my series on Gulp.js. What is Gulp.js? Why to use it? And how to install Gulp and Jekyll."
tags:
  - code
series:
  - gulp
---

My website is running [Jekyll](https://jekyllrb.com/) now since the beginning of 2014. But I wasn’t quite happy with my build and development process. I started out with Rake tasks and chose later [Grunt.js](https://gruntjs.com/) as my build system, but parts of the process were left in Ruby. I used [Compass](http://compass-style.org/) a lot and [Jekyll Assets](http://ixti.net/jekyll-assets/) was handling my versioning. But Grunt.js and the Jekyll Asset Pipeline didn’t play well together. Then a new solution came along: [Gulp.js](https://gulpjs.com/).

## What to expect from this Tutorial

This is the first part in a series of posts where I describe my whole development and build process step-by-step from start to finish. I am sick of all these _Hello World_ tutorials spreading around the Internet, describing just the basics and don’t show a whole process, go deeper or share things learned during the process.

I’ll describe everything **step-by-step** and provide **specific version numbers** for modules, to make sure you’ll have no problem in getting it running on your computer. Whenever you have problems feel free to compare your code to the finished [GitHub repository](https://github.com/kogakure/gulp-tutorial). Each tutorial builds on the stuff done before, so if you need some specific thing better look at the final codebase. You’ll learn how I created my complete development and build process, which I use on this website and my [Ninja & Ninjutsu website](https://www.kogakure.de). Both website’s sources can be found on my [GitHub account](https://github.com/kogakure).

It’s the first series of posts I write in English, which is not my native language. So if you find some spelling mistakes or false grammar, just send me a message.

When I started with Gulp.js, I fortunately stumbled upon a GitHub project called <del>gulp-starter</del> <ins>[blendid](https://github.com/vigetlabs/blendid)</ins>, that helped me a lot to structure my code and understand Gulp.js. So my process is partly derived from this fantastic project.

## What is Gulp.js?

Gulp.js is _the streaming build system_ and its main focus is speed, efficiency, and simplicity. Where Grunt.js uses a lot of configuration with the actual process hidden in plugins, Gulp.js uses a simple and minimal API. You code your own build process by yourself and use JavaScript as the language. Of course, you don’t have to program everything by yourself, there are nearly 800 plugins ready for Gulp.js. But even more Node.js modules can be used to build the perfect build and development process for **your** needs.

## Why do I want this at all?

As a front-end developer or web designer you will most likely need a lot of things to build a modern website: a development server, a preprocessor for your [Sass](http://sass-lang.com/), [Less](http://lesscss.org/) or [Stylus](http://learnboost.github.io/stylus/) files, some automation to bundle your JavaScript, tools to optimize your code, to compress, compile or move things around. And if you change something, you want your files to update automatically, refresh the browser, and so on. You don’t want to do this by hand, do you?

It’s 2014 and we don’t copy our files per drag-and-drop on a server via a FTP program, reload our browser by hitting continuously <kbd>F5</kbd> or crunch our images for a smaller file size by hand. Right? **We don’t**!

## Node.js

Gulp and all plugins are written in JavaScript and use the Node.js® platform. You don’t have to know Node.js (but it will help a lot), but basic JavaScript skills are required to follow along. To start with my tutorial you need to install Node.js on your computer. This can be done by installing the package on the [Node.js website](https://nodejs.org/). Advanced users may install Node.js with their favorite package installer (Homebrew etc.).

## Gulpfile

As with Grunt.js, all you need to start is the main file. In Gulp.js this file is called `gulpfile.js`. The first thing I learned from `gulp-starter` was to write my project in small parts and don’t use a large monolithic file with everything in it. This way I can easily share my Gulp.js files with other projects or just pass individual tasks around.

So my base `gulpfile.js` is very short:

#### gulpfile.js

```javascript
var requireDir = require("require-dir");

// Require all tasks in gulp/tasks, including subfolders
requireDir("./gulp/tasks", { recurse: true });
```

All this task is doing is loading all tasks that live in `./gulp/tasks` or in any subfolder.

## First things first

The first thing to do is installing the required Node module `require-dir`. To reinstall all my node modules later, I will need to have a file where this information is saved.

You may use the installation helper by typing the command `npm init`. But I find it faster to create a new file `package.json` and fill it with these values:

#### package.json

```json
{
  "name": "gulp-build",
  "version": "0.0.1",
  "description": "The build process of my website with Gulp.js",
  "private": true
}
```

Now I am able to install Node modules and save them to this file for later reinstallation. Go ahead and install `require-dir`:

```bash
$ npm install --save-dev require-dir@0.3.0
```

This will install our first Node module and place it into a folder with the name `node_modules`. So don’t delete this folder or you will have to reinstall all modules again. This can be done later with `npm install`. The command will install all modules in the `package.json` file.

My Jekyll website lives in a folder called `app`. All my tasks will be placed in a folder with the name `gulp`. Go ahead and create a folder and within a subfolder with the name `tasks`. After installing the first module the structure of our project will look like this:

```bash
.
├── app
│   ├── _assets
│   ├── _data
│   ├── _drafts
│   ├── _includes
│   ├── _layouts
│   ├── _plugins
│   ├── _posts
│   └── index.html
├── gulp
│   └── tasks
├── gulpfile.js
├── node_modules
│   └── require-dir
└── package.json
```

## Jekyll

This tutorial uses [Jekyll](https://jekyllrb.com/) to build the HTML of the website. Creating a new Jekyll website is fast and easy:

```bash
$ gem install jekyll
$ jekyll new app
$ cd app
$ jekyll serve
```

But I actually don’t install Jekyll globally, but with [Bundler](https://bundler.io/). This way all my Gems will be installed with my project and I don’t have to be concerned about the correct version.

I install Bundler globally:

```bash
$ gem install bundler
```

Now I create an empty file in my projects folder with the name `Gemfile` and add these lines:

```ruby
source "https://rubygems.org"

gem 'jekyll', '~> 2.5.2'
gem 'sass', '>= 3.3'
```

Now I install the Gems by typing:

```bash
$ bundle install
```

If you installed Jekyll with Bundler run inside of your project directory:

```bash
$ bundle exec jekyll new app
```

Did you install it globally? Then just drop the `bundle exec` from the command.

## Conclusion

This concludes the 1st part of my series _Introduction to Gulp.js_. We learned what Gulp.js is used for and created the basic folder structure for the project.

{% more "View Source on GitHub", "https://github.com/kogakure/gulp-tutorial", true %}
