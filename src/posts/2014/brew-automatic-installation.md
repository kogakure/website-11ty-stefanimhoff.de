---
published: true
title: Automated Installation for MacOS
author: Stefan Imhoff
date: 2014-04-04T21:09:00+02:00
description: How to automatically install software on MacOS using Homebrew and Homebrew Cask. Homebrew Cask can install over 1300 applications, including many commercial products.
categories:
  - software
---

The installation of software has always been poor on MacOS. There are just too many different ways of installation.

Whether packed archives (ZIP, TAR, etc.), disk images, application bundles, installers, and now also the AppStore. What was meant to be a simple installation for beginners has become a nightmare for them.

Also, there was a long lack of package management, as it can be found under any Linux distributions. Apple itself has never tried to offer a solution here. MacPorts was an initiative that should fix this problem. However, MacPorts installed its packages in a dedicated location on the hard drive, making the package management barely better.

## Homebrew

Then [Homebrew] came on stage, a software that calls itself <q>The missing package manager for macOS</q>. In a short time, this program became the default for macOS developers. With a simple one-line command, Homebrew is installed in a fixed location on the system and symbolic links (symlinks) are created to the default locations.

With _Homebrew_, packages can be easily installed via the terminal:

```bash
$ brew install vim
```

But in addition to software packages, you also use a large number of programs that can not be installed via _Homebrew_ (browsers, graphics, sound or video editing programs, utilities, etc.).

## Homebrew Cask

For this purpose [Homebrew Cask] was developed. This software is just as easy to install as _Homebrew_ and works very much the same, except that programs can be installed with it, which will then be linked to the macOS application folder.

```bash
$ brew cask install google-chrome
```

Among the meanwhile 1375 software packages that can be installed with _Cask_ is just about every known software, including many commercial products.

## Automation

As long as you have only a few programs and maybe only buy a new computer every 5-6 years, it is no problem to go to the manufacturers’ websites and download the latest software there. However, if you use a large number of software products, often or have to install many computers, this is a time-consuming activity that can take 1-2 days to complete.

_Homebrew_ and also _Homebrew Cask_ have recently been offering the possibility of automation. As in the development with _Ruby_ or _Ruby on Rails_, where there is a `Gemfile` in which all dependencies are defined or in _Node.js_, where a `package.json` does this task, there is the possibility to create a `Brewfile` and `Caskfile` and automatically install a large number of software packages with a new command.

```bash
$ brew bundle Brewfile
$ brew bundle Caskfile
```

## Conclusion

With [Homebrew] and [Homebrew Cask] there are finally a number of utilities available which make it possible to equip a new computer relatively quickly and without much effort with the desired software.

[homebrew cask]: https://github.com/caskroom
[homebrew]: https://brew.sh/
