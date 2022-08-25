---
title: Automated Installation for macOS
author: Stefan Imhoff
date: 2014-04-04T21:09:00+02:00
description: How to automatically install software on macOS using Homebrew and Homebrew Cask. Homebrew Cask can install over 1300 applications, including many commercial products.
tags:
  - software
---

The installation of the software has always been poor on macOS. There are too many ways of installation.

Whether packed archives (ZIP, TAR, and others), disk images, application bundles, installers, and now the App Store. What was meant to be a simple installation for beginners has become a nightmare for them.

There was a long lack of package management, as it can be found under any Linux distribution. Apple itself has never tried to offer a solution here. MacPorts was an initiative that should address this problem. However, MacPorts installed its packages in a dedicated location on the hard drive, making the package management barely better.

## Homebrew

Then [Homebrew](https://brew.sh/) came on stage, a software that calls itself <q>The missing package manager for macOS.</q> In a short time, this program became the default for macOS developers. With a simple one-line command, Homebrew is installed in a fixed location on the system and symbolic links (symlinks) are created to the default locations.

With _Homebrew_, packages can be installed via the terminal:

```bash
brew install vim
```

But in addition to software packages, you use many programs that cannot be installed via _Homebrew_ (browsers, graphics, sound or video editing programs, and utilities).

## Homebrew Cask

For this purpose, [Homebrew Cask](https://github.com/caskroom) was developed. This software is as easy to install as _Homebrew_ and works much the same, except that programs can be installed with it, which will then be linked to the macOS application folder.

```bash
brew --cask install google-chrome
```

Among the meanwhile 1375 software packages that can be installed with _Cask_ is about every known software, including many commercial products.

## Automation

As long as you have a few programs and buy a new computer every 5-6 years, it is to go to the manufacturers’ websites and download the latest software there. However, if you use many software products, or have to install them on multiple computers, this is a time-consuming activity that can take 1-2 days to complete.

_Homebrew_ and _Homebrew Cask_ have recently been offering the possibility of automation. _Ruby_ or _Ruby on Rails_ has a `Gemfile` in which all dependencies are defined. _Node.js_ has a `package.json` to do this task. And Homebrew has the possibility to create a `Brewfile` and automatically install numerous software packages with a new command.

```bash
brew bundle Brewfile
```

## Conclusion

With Homebrew and Homebrew Cask, there is finally a utility available that makes it possible to equip a new computer quickly and without much effort with the desired software.
