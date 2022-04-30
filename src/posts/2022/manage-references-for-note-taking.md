---
title: Manage References for Note-Taking
date: 2022-04-22T18:00:00+02:00
updated: 2022-04-30
author: Stefan Imhoff
description: When writing notes, it’s important to keep references somewhere to make sure our ideas are backed and we can quote the source accordingly. This is how I work with my references.
tags:
  - note-taking
  - productivity
  - tip
---

When using a note-taking system like **Zettelkasten**, it’s important to always keep references somewhere (preferable separate from your notes). This way you make sure to attribute where your ideas came from and make sure you don’t plagiarize.

Taking notes is like a funnel. You put in a lot of stuff, but only very few refined ideas come out at the end.

The input can come from a broad variety of sources. Books, articles, scientific papers, quotes, graphs, podcasts, movies, tv shows, videos, or images.

Not every source is of the same quality, but even the most mundane, low-quality reference might have this one paragraph worth remembering.

## Feedly

I follow most of my sources at one location, in [Feedly](https://feedly.com/), my RSS/Atom Feed-Reader. It doesn’t matter if it’s a blog, a news site, a YouTube channel subscription, a Twitter user, a Reddit thread, a newsletter, Companies, Technologies, Trends, etc.

I picked Feedly because I want to read and watch everything in one source. Of course, I have additional sources like books or podcasts that can’t be added to Feedly.

I use an approach probably most people follow. If I see an interesting item, I open it and skim the content. I decide if this is interesting to be read/watched later or not. If it’s a (potential) interesting item, I move to the next step.

## Pocket

I recently made a huge change to my workflow. I used Pocket for many years as the tool of choice for collecting items to process. But in the last months, I got more and more unhappy with Pocket. Even though it’s still the best-integrated tool of that kind, I had the feeling the company focuses on the wrong things. Instead of improving the interface and retrievability of my collected items, they focused on features to discover new things. I don’t need nor want that, I distrust algorithms, because they just transport the bias of their programmers. And most programmers (me included) are left-leaning, the result is an inaccurate and biased view of the world. I decide whom I follow and what I consume.

Instead of allowing me to use the full size of my monitor to quickly browse my collection on a masonry grid, everything is still crammed into small columns with small thumbnails. At least the tagging feature got some love lately.

And the search is a nightmare, it simply doesn’t work. It’s slow and even if I remember reading an item two weeks ago and searching for the exact words, it’s unlikely to be in the results. The results are pages long, but sometimes outright wrong. Filtering for oldest/newest/relevance seems to be broken because it doesn’t work anymore. Once something is in Pocket, I will _never_ find it again.

## Raindrop.io

In 2020 I stumbled on the new bookmark manager [Raindrop.io](https://raindrop.io/). I used it for a while, tried Pro for a year, and then quit it again. It was nice but somehow didn’t convince me. I continued using it, by transferring my Pocket bookmarks with [IFTTT](https://ifttt.com/) to Raindrop.io.

Sometimes I used its nice big view and ultra-fast and fantastic search to find a bookmark, but I used Pocket to collect and read my items.

Over the next year, Pocket became more annoying to me and I used Raindrop.io more often. Last month they added the brand-new _Highlights_ feature and it is fantastic. It allows to highlight text on any website (in four different colors) and to add notes. A browser extension even keeps the highlight active the next time you visit the website. Additionally, the highlights are collected in a highlights section of the app.

I decided to look into the features of Raindrop.io again and discovered things I didn’t know it was able to do. Each collection can have a different view (List, Card, Headlines, Moodboard). You can upload PDFs, images, and videos. There is an [Alfred Plugin](https://www.packal.org/workflow/search-raindropio), manual sorting, export functionality of your bookmarks, and a shortcut to search inside the browser bar for bookmarks. The Pro version allows full-text search, nested collections, permanent copies, finding duplicates, and broken links. I decided to go Pro again.

And last week I discovered that it’s possible to share [collections publicly](https://raindrop.io/kogakure) or with specific people. It’s also possible to collect with different people to collections, and if the owner of a collection has a Pro plan, every collaborator has access to the Pro features. 🤩

Two weeks ago I switched the direction from Raindrop.io to Pocket. Now my items in Raindrop.io get copied with IFTTT to Pocket. I use the fantastic Raindrop.io [browser extension](https://raindrop.io/download) to collect items.

Of course, Raindrop isn’t perfect, and some features, I would like to see are still missing, for example, a connection to [Readwise](https://readwise.io/). I read [they already contacted Readwise](https://better.raindrop.io/feature-requests/p/readwise), now that their Highlights feature was released.

I would also like to see a full export of my uploaded assets to start using it as a Pinterest replacement to collect inspirations.

One thing I _really_ like about Raindrop.io is how they handle bugs and feature requests. They created an [extra website](https://better.raindrop.io/) where users can post feature, translation, and integration requests or vote on them and report bugs. Labels transparently show what features they work on, and are planned or reviewed. 👍

There is too much content to write notes on. I use Readwise.io to find it in the future. The fast search, collections, and tags help finding interesting items again, should I want to research a specific topic more in the future.

After I consumed the content I collected, I add tags and then I move it to an archive folder.

## DEVONthink

If a reference is very important to me, I’ll collect it into [DEVONthink](https://devontechnologies.com/apps/devonthink). Even though Raindrop.io has an offline feature, allowing to keep articles, if the content goes offline, I still never trust cloud solutions fully. In DEVONthink the content is mine, it’s offline. I usually save articles with the DEVONthink web clipper as Markdown (sometimes PDF, or full websites) into my reference archive.

I have currently 21K bookmarks in Raindrop.io and 5K reference items in DEVONthink, so roughly ¼ of all reference items make it offline.

## BibDesk

If I decide to write a note or article on a topic that references a reference item, I’ll create an entry in my [BibDesk](https://bibdesk.sourceforge.io/) database. Currently, I have 457 entries in that database.

BibDesk allows adding Bibliography, like author, title, date, or link, and creates a unique cite key.

The items are recorded in a specific format in the background:

```tex
@webpage{Thiel2022vp,
	author = {Thiel, Peter},
	date-added = {2022-04-12 14:59:36 +0200},
	date-modified = {2022-04-12 15:00:10 +0200},
	journal = {Bitcoin 2022 Conference},
	keywords = {BitCoin},
	month = {04},
	title = {Paypal Co-Founder Peter Thiel - Bitcoin Keynote},
	url = {https://youtu.be/ko6K82pXcPA},
	year = {2022},
	bdsk-url-1 = {https://youtu.be/ko6K82pXcPA}}
```

If I want to use this key in a note in [Obsidian](https://obsidian.md/), I can use my Markdown template to copy the entry and paste it into the note.

```md
[#Thiel2022vp]: Peter Thiel (2022): _Paypal Co-Founder Peter Thiel - Bitcoin Keynote_, <https://youtu.be/ko6K82pXcPA>.
```

The format is not official Markdown syntax, but citations from [MultiMarkdown](https://rawgit.com/fletcher/MultiMarkdown-6-Syntax-Guide/master/index.html). Even if a tool doesn't support it, you can still read it. If a tool supports it, like [iA Writer](https://ia.net/writer), you get automatically nice reference notes.

If I want to write a note and add a reference I would do it like this:

```md
[[Peter Thiel]] mentioned that [[ESG]] is a hate
factory that is used to label enemies. There is
nothing _environmental_, _social_ or _governance_
with the companies labeled ESG-friendly, the CCP
is ESG-friendly.[#Thiel2022vp]
```

When I decide to write a Markdown post that should be published I can convert the MultiMarkdown to regular footnotes, but replacing the `#` in the cite key with `^`.

```md
A sentence, that references the footnote.[^thiel2022vp]

[^thiel2022vp]: Peter Thiel (2022): _Paypal Co-Founder Peter Thiel - Bitcoin Keynote_, <https://youtu.be/ko6K82pXcPA>.
```

I consume probably between 100 and 300 items per week and produce around 10-15 notes. Only 3-15 % of the stuff I consume will create a note. The rest is waiting easily accessible and findable for potential future usage.
