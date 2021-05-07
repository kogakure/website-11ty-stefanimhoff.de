---
title: How I Process Information Into Notes
date: 2021-05-13T10:00:00+02:00
author: Stefan Imhoff
description: My process of extracting information out of books, articles, podcasts, videos and creating atomic notes.
tags:
  - productivity
  - tip
---

Everybody is consuming content, through books, articles, videos, podcasts, or other media. We consume content for entertainment, to be informed, or to learn and grow. But few people take the time to extract the valuable parts from the content they are consuming.

As I wrote in my previous essay [Zettelkasten Note-Taking Method With DEVONthink](/zettelkasten-note-taking-devonthink/) we are prone to the _Collectors Fallacy_, the belief that consuming information enables us automatically to remember and apply this knowledge later. This is sadly not true. The only way to remember things is by writing them down, create connections between them, and regularly revisit them.

I started using the Zettelkasten note-taking method a year ago and this article is an overview of the different types of content and how and with what tools I process them.

## Tools

Before I go into details of the different media types and how I process them, I want to mention my main tools. These don’t change too often—if at all—and I use them for many years.

### DEVONthink

[DEVONthink](https://www.devontechnologies.com/apps/devonthink) is my main tool to store content: Text, images, documents, and much more. All content is stored safely and securely on my local hard drive (good for backups) but is at the same time shared (encrypted) through a Cloud provider with my different mobile devices and computers.

It would take an extra article to mention all the features of DEVONthink. With [DEVONthink 3.7](https://www.devontechnologies.com/blog/20210422-devonthink-37) the tool got fantastic support for Markdown, including the different syntax of tools like Roam, Obsidian, and iA Writer.

### MindNode

[MindNode](https://mindnode.com/) is the app I use to prepare content for processing. I dump in the ideas and connect them to Mindmaps, add tags and links. When I have a rough idea about the structure, I move the ideas to notes in Obsidian. You can see one of my mind maps I created to study [Japanese Design and Aesthetics](https://my.mindnode.com/FGhdh66uMbi1aJ9RfriKUL3JoMCHd18aS8z9Uayw) online.

### Obsidian

[Obsidian](https://obsidian.md/) is my favorite tool to create notes. My Obsidian note vault lives locally on my hard drive in a Git repository, synchronized with a private GitHub repository. Additionally, it is indexed in DEVONthink and synced across all devices.

### iA Writer

[iA Writer](https://ia.net/writer) is my favorite text editor. I write all text with iA Writer. I sometimes open Obsidian notes in iA Writer to check my syntax. It is a simple and powerful text editor with a minimalistic interface and helpful tools for writers.

## Automation

I like to automate my workflow as much as possible because manual work sucks. The only part that _needs_ to be manual is the note creation part, because of how the brain works. A note needs to be written in your own words, to be able to remember the content.

I use [IFTTT](https://ifttt.com/) for as many services as possible. I created applets that will save items to [Pocket](https://getpocket.com/) when I like, star, upvote, or interact with them.

Other applets do things after I processed content in Pocket. I transfer items to Feedly boards, to [Raindrop.io](https://raindrop.io/), or [Pinboard](https://pinboard.in/).

Raindrop.io is one of the newer services I started using. I like it in particular because it’s convenient to browse and search archived content later to find something again.

## Getting Content Into the System

There are many different media types I regularly consume. Each type needs a different approach to process the information, text is the easiest to process in my opinion.

### Books

Text comes in many forms, the most valuable is in my opinion the book. Books are content-rich, the authors condense a lot of information to make a topic accessible.

I read my books mainly as eBooks these days because it’s convenient, the books are easy to carry around, you can read in low-light conditions, and highlighting is easy. I highlight interesting paragraphs and add letters as comments to categorize them: `Q` for quotes, `E` for examples, `R` for further research. I took this idea from [Tim Ferris](https://youtu.be/YQOrqAKKcUQ).

I extract the highlights from my eBook reader with a bookmarklet I wrote for myself with JavaScript.

Hardcopy books I read with my [Traveler’s Notebook Passport Size](https://www.travelers-company.com/products/trnote/starter-kit-passport) nearby to transfer the notes I highlighted on a page. I add the page number in case I need to revisit the section. Later, after I finished reading I transfer the notes to Obsidian.

Additionally, I add each book I’ve read to a [BibDesk](https://bibdesk.sourceforge.io/) library that lives in my Obsidian vault. A (modified) plugin for Markdown, as described in [Manage Citations for a Zettelkasten](https://zettelkasten.de/posts/bibliography-zettelkasten/) helps me adding the citations to my notes. I do the same with articles, podcasts, videos, or other content I want to remember the citation.

### Documents

All the papers companies send to me (invoices, contracts, reports, …) get converted into PDF (with OCR) via [Scanner Pro](https://readdle.com/scannerpro). Automation in DEVONthink copies them from iCloud to my inbox in DEVONthink. I add tags and archive them with the _move_ shortcut into year folders in a document database.

### Articles

If I come across an interesting article on the internet, I use [Pocket](https://getpocket.com/) (Premium) to save it for later reading. The Premium version of Pocket saves the full text offline and allows searching all text, even if the article isn’t available anymore.

I don’t use the highlight feature of Pocket but instead, annotate in [Feedly](https://feedly.com/). I transfer articles to work on with [IFTTT](https://ifttt.com/) to Feedly, where I annotate or add my comments.

The majority of my articles I read directly in Feedly. I use it since Google Reader was discontinued in 2013.

I consume everything possible now exclusively in Feedly: RSS/Atom Feeds, YouTube videos, Twitter feeds, Reddit topics, Google News keywords, Google Alerts, newsletters, … I can read it in my time, and chronological order. The Leo bot summarises the content, my favorite topics are shown in an extra tab, and I use Mute filters to remove specific topics.

Content is automatically downloaded into Dropbox. I save interesting content to topic boards.

Interesting articles I save as cleaned up Markdown with the DEVONthink Clipper to my inbox. This is one of my favorite features of DEVONthink. The Markdown files are stored in yearly folders in my Reference database.

### Photos & Images

I love collecting inspiring photos and images. Architecture and Interior, Logos, Typography, Sculptures, Japanese Tattoos, UI Design, Advertising, … if I like it, I’ll save it. My Inspiration database has more than 30.000 items.

I either save them directly into [DEVONthink to Go](https://www.devontechnologies.com/apps/devonthinktogo) or export them from iPhoto into it when I’m on the sofa or away from my computer. When I’m at my computer I drag items directly into my Inbox.

If I come across an article with multiple photos I use the [Fatkun AI Downloader](https://chrome.google.com/webstore/detail/fatkun-ai-downloadervideo/ddicoofdkbcdkkeecgafcoabogcgicfp) to download all images at once.

### Audio

Podcasts are my main way of interacting with audio, but sometimes I create voice memos to remember something.

I am using [Airr](https://www.airr.io/) as my podcast app. Airr allows me to add podcast episodes to a queue and set my preferred playback speed to 1.8x. The best feature of Airr is _AirrQuotes_. They allow to press a button and bookmark a specific time range of the podcast episode, add comments, and if available, read the transcript. This can be done in private or publicly. Public _AirrQuotes_ by other people can be seen for a given episode.

When I’m walking outside while hearing podcasts I bookmark all interesting parts. It automatically bookmarks 90 seconds before the bookmark. Later I edit the bookmark to include the exact start and end of an interesting section and add comments.

It’s convenient to export the notes and transcript as Markdown from the app to create notes.

### Video

A lot of content I consume comes from videos. I watch videos with at least 1.6x the speed and use [Video Speed Controller](https://chrome.google.com/webstore/detail/video-speed-controller-ex/hechlhgpdpfdikhmacjfnpphbbpcjpek) to change the speed and jump forward and back in the video. Other plugins I use are [Enhancer for YouTube](https://chrome.google.com/webstore/detail/enhancer-for-youtube/ponfpcnoihfmfllpaingbgckeeldkhle) and [Unhook](https://chrome.google.com/webstore/detail/unhook-remove-youtube-rec/khncfooichmfjbepaaaebmommgaepoid) to remove annoying and distracting parts of YouTube.

One browser extension I use to write notes on interesting videos is [YiNote](https://chrome.google.com/webstore/detail/yinote/fhpgggnmdlmekfdpkdgeiccfkignhkdf). It allows watching a video and creating notes in a side drawer. It’s possible to export the notes as a PDF including a screenshot of the frame with the note and the time code. I convert these notes then into notes in Obsidian and store the document as a reference.

## Working with Notes

The most important part of note-taking is to connect ideas. _Sönke Ahrens_, the author of {% affiliate "How to Take Smart Notes", "1542866502" %} explains the science why this method works. I recommend reading the fantastic book, it is useful for anybody who wants to write notes.

There is an [interesting interview with him on YouTube](https://youtu.be/kXnR7qX3BDc) if you don’t want to invest the time and money for the book.

Connecting ideas is the first step. The long-term goal is to either understand a topic in more depth or to create output, as in articles, essays, or books.

### Obsidian

I use [Obsidian](https://obsidian.md/) and the [Zettelkasten note-taking method](https://writingcooperative.com/zettelkasten-how-one-german-scholar-was-so-freakishly-productive-997e4e0ca125) for that. Obsidian is _by far_ the best tool if have ever used for note-taking.

Obsidian has many different ways of customizing and making it work for _your_ workflow, starting from the look-and-feel with themes to an ever-growing collection of plugins and community plugins.

### Plugins

I make regular use of a lot of the [core plugins](https://help.obsidian.md/Plugins/Zettelkasten+prefixer).

The Graph View is incredibly useful. It allows to see and navigate the connection between notes. It is possible to search, filter, group notes, drag them around, and explore similar or related notes.

I use starred notes to remember notes to work on and use a lot of Tags. Tags allow a secondary layer of connecting notes without directly connecting them. I covert the hashtag syntax of my notes to MacOS tags with DEVONthink.

My favorite feature is the WikiLink syntax including a fast fuzzy search. One of the guidelines of the Zettelkasten method is to connect notes to similar other notes. I search for keywords or topics in the search menu of WikiLinks and connect any note that might be a good companion.

### Community Plugins

Obsidian started to allow community plugins. Every time I look into the collection there are new fantastic plugins to improve my workflow.

[Sliding Panes](https://github.com/deathau/sliding-panes-obsidian) is one of the plugins I love, because it enables me to keep 10-20 notes (depending on the monitor size) at the same time open and moves between the notes to compare or connect notes.

I found recently [Note Refactor](https://github.com/lynchjames/note-refactor-obsidian). The plugin allows me to write all my notes to a topic in one note and later extract parts into separate smaller (atomic) notes with the help of a shortcut. It takes over the work of creating the filename, using a preferred file template. It moves the section to the new file and links to it in the original note.

## Connecting Notes To Understand and Create

I use the Zettelkasten method for more than a year and Obsidian since May 2020. The first time I had an “Aha” moment was after three months when I found a connection of a node to an existing cluster of notes. Since then this feeling repeated regularly and I love it.

The Graph view in particular allows me to see if a specific topic isn’t yet good enough researched because there are not a lot of notes connected to it.

The final step is to produce content out of the notes. I have MindNode open on one monitor and my Obsidian vault on the second monitor and follow the links and connections of a topic to write an Outline for the article. Because the notes are small it is possible to quickly create the outline and create a structure to tell a story.

The final step is then to write the text in iA Writer. My vault has now more than 1,000 notes but compared to Niklas Luhmann’s 70,000 notes when he died this is nothing. I’m curious how the note collection improves over time as long as I add, edit and link notes.
