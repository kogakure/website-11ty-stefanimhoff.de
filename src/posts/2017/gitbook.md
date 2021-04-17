---
title: I Wrote a Book in GitBook
author: Stefan Imhoff
date: 2017-06-27T16:16:34+02:00
description: I just finished writing my first book in GitBook. I worked on it the last six month and it’s available to read online, as PDF, ePub and Mobi.
categories:
  - book
---

I just finished writing my first book. I worked on it for the last six months. Actually, I didn’t write it recently, but in the period of 18 years.

[![GitBook: kogakure](/assets/images/posts/gitbook-kogakure.jpg)](https://book.kogakure.de/)

It was always available for _free_ for everyone on [my website](https://www.kogakure.de/). I started writing it 1999 with my first website, containing a collection of notes and thoughts about **Ninja** and their art, **Ninjutsu**.

I never indented writing a book but was asked regularly by visitors to my website, why I didn’t write a book. It was out of the question to write a commercial book because some of the articles on my website are translations of Peter Carlsson, who gave me permission to use the translated version on my website (unfortunately the original is gone).

And furthermore writing a real print book is pain, takes a lot of your life, and isn’t profitable (unless you are some mainstream author). I know of a colleague, who gets a share of **0,95 €** per book sold for **49,95 €** by a well-known publishing company. He worked nearly always on it for a year and sold 3000 copies. That’s something you do to become famous, not to earn money.

## GitBook

Last year I stumbled upon **GitBook**, which is an Open Source [software package](https://github.com/GitbookIO/gitbook) and a [hosting service](https://www.gitbook.com/), and decided to write a book with it.

GitBook’s hosting service has a free plan, which allows public books and a custom domain. And you can add your book from GitHub. You can use the software, without the need to host your book on the hosting service.

## What is Git?

If you’re a software developer, you can probably skip this section. Git is a version control system, created by Linus Torvalds (the creator of Linux) in 2005. It allows to take snapshots of the current state of your project and save them securely for later reference (locally and on servers). It’s best suited for text files, but also allows binary files to be added. With Git it’s easy to create alternative versions of your files, try out different ideas, compare versions, and integrate your ideas with the current state. If you want to learn the basics of Git, GitHub provides a free [15 minutes course in the browser](https://try.github.io/). Because Git is so fantastic, it became the de-facto standard in the last 10 years for using version control.

## Git and Markdown

A book is in its basic form just text with some basic formatting (_italics_, **bold**, quotes, …). I could write my book in Word or some other proprietary software. But then I need to buy software, which allows editing the format.

The files would be most likely saved in some binary format, some local database, or a mixture of text and binary format. This makes it hard to track changes over time (unless the tool provides some history functionality). And even then creating alternative versions would mean duplicating the Word file. The integration of my changes back would be hard or even impossible.

This is one of the reasons, why the combination of [Markdown](https://daringfireball.net/projects/markdown/) and [Git](https://git-scm.com/) is optimal for writing text. Even this blog post is written in Markdown.

You can write your text in any editor you like (even Word would be possible), but optimally it should support Markdown (for a preview). Markdown can be learned in a few minutes. Usually, most Markdown editors allow exporting the text into Word, RTF, or PDF.

## What I’ve learned

It was really fun writing the book in my favorite text editor and _push_ (send on a server) my changes to my GitHub _repository_ (project container). GitBook supports Markdown or AsciiDoc to write text in, supports multiple languages, covers, plugins, a glossary, a nice theme, and much more. It provides a search out of the box. I ran the local GitBook server and while writing the book could always see the end result in my browser.

There are over [600 plugins for GitBook](https://plugins.gitbook.com/) available, but I use only a few (e. g. hint boxes, BibTex support).

As a downside, I found out the glossary feature isn’t usable at the moment.

Firstly, because it doesn’t support any special characters, so non-English languages are out of luck. German umlauts? Nö. Japanese characters? いいえ.

Secondly, the page rendering gets so slow, you can’t work anymore. This is a known [issue](https://github.com/GitbookIO/gitbook/issues/1497) and might be fixed in the future. The more often the term occurs on a page, the slower the rendering gets.

And it’s visually not appealing, because every occurrence of a word gets underlined, not just the first mention in a text. And I used the word _Ninja_ a lot.

GitBook provides a discussion feature and change requests, which make collaborative working probably quite nice (didn’t use it yet). As the book owner you have access to some statistics, can decide if you want to provide E-Books (PDF, MOBI, EPUB), allow discussions, and inline comments (a nice feature to mark typos or grammar errors). You can add collaborators to work with multiple authors in the same book.

GitBook is not only good for books but also to write documentation for anything.

## What’s in my book?

First thing: The book is _only_ in **German** available 😒 (I’m really sorry and always open to translation offers). I reviewed every sentence of the website for the book and changed some parts of it.

I reordered sections and replaced some of the images with better versions (when possible vector images) and added some new images. I would have liked to replace all images of weapons, tools, and techniques, but I couldn’t find the original colored versions of all images or the 3D data on my hard disc. Any skilled illustrator around wanting to contribute to the Open Source project?

I reviewed the whole glossary and unified the writing of all Japanese terms (using the Hepburn system). All changes are mirrored back to the website.

Additionally, I added a section with the history of my website and some screenshots of how the design evolved over the years.

And I needed to design a cover in two sizes for the book.

## Resources

- Download **PDF**, **ePub**, **Mobi** versions on [GitBook](https://github.com/kogakure/book-kogakure/releases)
- Read the [online version](https://book.kogakure.de/) of the book
- [Source code](https://github.com/kogakure/book-kogakure) of the book
- Found an error, typo, mistake? Report it [here](https://github.com/kogakure/book-kogakure/issues) or add a comment on the section of the book (opens a discussion)
- The [website](https://www.kogakure.de/), which is the basis to the book
