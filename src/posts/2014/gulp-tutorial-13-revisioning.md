---
published: true
title: "Introduction to Gulp.js 13: Revisioning"
author: Stefan Imhoff
date: 2014-10-30T07:45:00+02:00
description: "The ultimative tutorial and guide for Gulp.js: How to use revisioning to allow long caching of your assets and replace them  with hashed file names, that can be cache busted."
categories:
  - code
series:
  - gulp
---

This is the 13th part of my series _Introduction to Gulp.js_. Today I will write the task to revision my static assets.

## Copy Vector Fonts for Production

Before I can work on the fun part of revisioning my asset files I first have to write another boring and short task, which is doing just one simple thing: Copy the fonts to the production assets folder.

#### gulp/config.js

```javascript
copyfonts: {
  development: {
    ...
  },
  production: {
    src:  developmentAssets + '/fonts/*',
    dest: productionAssets + '/fonts'
  }
}
```

#### gulp/tasks/production/copy-fonts.js

```javascript
var gulp = require("gulp");
var config = require("../../config").copyfonts.production;

/**
 * Copy fonts to folder
 */
gulp.task("copy:fonts:production", function () {
  return gulp.src(config.src).pipe(gulp.dest(config.dest));
});
```

## Revisioning

Optimizing of my assets is done. But one important thing is missing: Revisioning.

For better performance, one should always cache the assets for a very long time. Hard drives are huge these days but speed for requesting assets isn’t still that awesome (especially on mobile). But one problem occurs if you cache the assets on a hard drive of a visitor. If you update a file, the browser will still serve the old file. And if you cache it for 10 years the user will never get the new asset, unless s/he deletes the browser cache manually. But which user does this?

That’s why we need to rename every file that has been changed to invalidate the cache. I remember the days when we had to add a number by hand to our assets like `image_r1.png`, `image_r2.png`. This sucks. Today reading the content of a file and generating a checksum can achieve this easier. This checksum will be always the same unless something gets changed.

My next task will rename all assets. This way the `application.css` will become `application-f084d03b.css`. If I change just one dot in this file it will get a new filename.

I install `gulp-rev`, which will handle this renaming of assets:

```bash
$ npm install --save-dev gulp-rev@2.0.1
```

#### gulp/config.js

```javascript
revision: {
  src: {
    assets: [
      productionAssets + '/css/*.css',
      productionAssets + '/js/*.js',
      productionAssets + '/images/**/*'
    ],
    base: production
  },
  dest: {
    assets: production,
    manifest: {
      name: 'manifest.json',
      path: productionAssets
    }
  }
}
```

This task will rename all assets and create a JSON file containing all files, which were renamed and their old and new file names.

#### gulp/tasks/production/revision.js

```javascript
var gulp = require("gulp");
var rev = require("gulp-rev");
var config = require("../../config").revision;

/**
 * Revision all asset files and
 * write a manifest file
 */
gulp.task("revision", function () {
  return gulp
    .src(config.src.assets, { base: config.src.base })
    .pipe(gulp.dest(config.dest.assets))
    .pipe(rev())
    .pipe(gulp.dest(config.dest.assets))
    .pipe(rev.manifest({ path: config.dest.manifest.name }))
    .pipe(gulp.dest(config.dest.manifest.path));
});
```

## Replacing Paths to Assets

The last step of my production build is to replace all occurrences of assets with a revisioned file name in all files.

This task will need `gulp-rev-collector` to replace the paths names to assets:

```bash
$ npm install --save-dev gulp-rev-collector@0.1.1
```

#### gulp/config.js

```javascript
collect: {
  src: [
    productionAssets + '/manifest.json',
    production + '/**/*.{html,xml,txt,json,css,js}',
    '!' + production + '/feed.xml'
  ],
  dest: production
}
```

I replace these paths only in files I know they could contain paths to assets. Don’t include any images or binary files. Revision collector will try to open them and destroy most binary files.

#### gulp/tasks/production/rev-collector.js

```javascript
var gulp = require("gulp");
var collect = require("gulp-rev-collector");
var config = require("../../config").collect;

/**
 * Replace all links to assets in files
 * from a manifest file
 */
gulp.task("rev:collect", function () {
  return gulp.src(config.src).pipe(collect()).pipe(gulp.dest(config.dest));
});
```

This task will look into the `manifest.json` file and replace every path to one of the assets in every HTML, CSS, JavaScript, and Text, etc.

The production build is finished! Only one thing is missing to complete this series of tutorials about Gulp.js: Deploying the Website to my server.

## Conclusion

This concludes the 13th part of my series _Introduction to Gulp.js_. Today we learned how to revision the asset files and replace links to these files.

{% more "View Source on GitHub", "https://github.com/kogakure/gulp-tutorial", true %}
