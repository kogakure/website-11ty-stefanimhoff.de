---
published: true
title: Git
author: Stefan Imhoff
date: 2009-02-10T20:00:00+02:00
description: An extensive collection of links to tutorials, tutorials, screencasts and documentations on Git.
categories:
  - code
---

## Introduction to Git

I have been using the Git version control system for almost one and a half years and am thrilled every day. Even at my employer, switching from Subversion to Git seems close at hand.

At home, there are almost only Git repositories on my hard drive, and I can not imagine working without Git anymore. Git has improved a lot over the last year and a lot of additional software, documentation, and films have been released for Git.

I replace the now obsolete article of 2007 with a large list of helpful links to Git:

## Official Website

- [Git – Fast Version Control System](https://git-scm.com/)

## Tutorials and Documentations

- [The Git Community Book](https://git-scm.com/book) – The community book, available online and as a PDF

### Short Instructions

- [tryGit](http://try.github.io/levels/1/challenges/1) – Learn Git interactive in the browser
- [Git Immersion](http://gitimmersion.com/) – Beautifully designed Guided Tour through the basics of Git
- [git – the simple guide](http://rogerdudler.github.io/git-guide/) – Git in a nutshell (on a long page)
- [Official Git Tutorial](https://www.kernel.org/pub/software/scm/git/docs/gittutorial.html)
- [SVN Crash Course](https://git-scm.com/course/svn.html) – A crash course for people who already know SVN
- [Effectively Using Git With Subversion](https://www.viget.com/articles/effectively-using-git-with-subversion) – A good introduction on how to use Subversion (SVN) with Git
- [Git Ready](http://gitready.com/) – Short git tips for beginners, advanced and professionals
- [Sei (k)ein Blödmann und nimm Git: Einführung in Versionskontrolle mit Git](https://www.slideshare.net/kogakure/sei-kein-bldmann-und-nimm-git-1830449/) – my German presentation about Git

### Instructions with More Detail

- [Intro to Distributed Version Control (Illustrated)](https://betterexplained.com/articles/intro-to-distributed-version-control-illustrated/) – Detailed, illustrated explanation of distributive version control
- [Git for Computer Scientists](http://eagain.net/articles/git-for-computer-scientists/) – A quick introduction to the technical details in Git
- [Git User’s Manual](https://www.kernel.org/pub/software/scm/git/docs/user-manual.html) – The Official User Guide
- [Git Magic](http://www-cs-students.stanford.edu/~blynn/gitmagic/) – An alternative book
- [The GitHub Guides](https://help.github.com/) – GitHub tips and tutorials
- [An Illustrated Guide to Git on Windows](http://nathanj.github.io/gitguide/) – Step-by-step guide for Windows users
- [vss2git](https://github.com/trevorr/vss2git) – A Windows GUI that exports an existing Microsoft Visual SourceSafe 6.0 (VSS) repository to a new Git repository.

## References

- [Reference Manual](https://www.kernel.org/pub/software/scm/git/docs/) – Detailed reference of all commands
- [Git Cheat Sheet](http://zrusin.blogspot.com/2007/09/git-cheat-sheet.html) – A useful cheat sheet

## Videos and Screencasts

- [Official Git Screencasts](https://git-scm.com/videos)
- [Google Tech Talk: Linus Torvalds on git](https://youtu.be/4XpnKHJAok8) – Linus Torvalds presents Git at Google
- [Google Tech Talk: Git](https://youtu.be/8dhZ9BXQgc4) – Randal Schwartz introduces Git for an hour
- [Git the basics](http://excess.org/article/2008/07/ogre-git-tutorial/) – Bart Trojanowski introduces Git (2 parts)

## Git Hosting

- [GitHub](https://github.com/)
- [Bitbucket](https://bitbucket.org/)

## Software

### MacOS

- [Gity](https://github.com/beheadedmyway/gity) – Git-GUI with many features in the Snow Leopard style (now under OpenSource!)
- [GitX](http://gitx.frim.nl/) – Chic Git GUI for Mac OS X.
- [ProjectPlus](http://ciaranwal.sh/2008/08/05/textmate-plug-in-projectplus) – TextMate plug-in, the Git, Mercurial, Bazaar and SVN status flags supported
- [Git TextMate bundle](https://github.com/jcf/git-tmbundle) – TextMate bundle

### Windows

- [Git for Windows](https://gitforwindows.org/) – A Windows Git GUI
- [Git Extensions](http://gitextensions.github.io/) – A sleek Windows Git GUI, with 5 screencasts to use
- [TortoiseGit](https://tortoisegit.org) – Git as a Windows Explorer shell extension
- [SmartGit](https://www.syntevo.com/smartgit/) – Commercial solution for Windows, Mac OS X and Linux

## Conclusion

There’s no reason now to **not** switch to Git, and any ridiculous argument against Git can be casually refuted. Although there are still a lot of subversion repositories, even _these_ can be cloned without problems thanks to `git-svn` (which is installed with Git).

Subversion and Git (Mercurial, Bazaar, …) are not really possible to be compared, because their approach is quite different. With Git you can work in the same way (central repository) as with Subversion, but you also have the possibility to work distributed and to use the many fantastic possibilities of Git (local branches, offline work, hardly any server load, small file size, …).

If Subversion is still used in your company and it does not work to introduce Git (despite Git’s clear, business benefits), then just use git-svn for a transitional period (people will not even know). Although not all options are available from Git, the work is at least easier.
