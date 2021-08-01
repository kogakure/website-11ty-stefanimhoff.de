---
title: DEVONthink and Obsidian – The Perfect Pair of Tools for Note-Taking
date: 2021-07-23T09:08:49+02:00
author: Stefan Imhoff
description: With the release of the mobile versions of Obsidian, my note-taking workflow with Obsidian and DEVONthink is now even more fun than before.
tags:
  - productivity
  - software
  - note-taking
---

With the release of the mobile versions of [Obsidian](https://obsidian.md/) last week, my note-taking workflow got even more comfortable.

The mobile versions are fantastic. They support all plugins of the Desktop version, even community plugins.

A few of the plugins do make not a lot of sense, though (like Sliding Panes on a mobile phone) and I hope a future version brings the option to turn off specific extensions _just_ on mobile.

The mobile version has mobile-only settings, to customize the toolbar and quick action.

## Synchronization

To sync between Desktop and mobile devices the Obsidian vaults have to be moved in an iCloud system folder.

The synchronization is super fast (I assume thanks to Apple CloudKit). It takes 2-3 seconds to see a change reflected live on another device.

## My Updated Setup

I moved my Obsidian vault to the iCloud system folder to be able to synchronize between devices. I kept the Git Repository and commit changes regularly every day. I use this simple shell script for that:

```bash
#!/bin/sh

gstatus=`git status --porcelain`

if [ ${\#gstatus} -ne 0 ]
then
  git add --all
  git commit -m `date +%Y-%m-%d-%H%m%S`
  git pull --rebase
  git push
fi
```

{% banner "Note" %}

You need to remove the `\` in front of `#gstatus` to get the script working. The Markdown parser didn’t like it unescaped. 🤷‍♂️

{% endbanner %}

I plan to run this script soon with a daemon in regular intervals.

The same vault is indexed into my [DEVONthink](https://devontechnologies.com/apps/devonthink) **Archive** database.

And because the vault lives in iCloud, all changes in Obsidian or DEVONthink to any file are reflected immediately. DEVONthink supports the Markdown syntax of Obsidian which makes it very comfortable to edit files no matter in which of the two applications.

Obsidian has better tools for linking and thinking than DEVONthink, but DEVONthink is more powerful in storing reference items, analyzing text, tagging, and a lot of other features.

## My Note-Taking Workflow

When I come across an interesting article, quote, audio, or video, I capture the item as explained in my previous article [How I Process Information Into Notes](/processing-information-into-notes/).

If it is text in an image I use the OCR feature to convert it into selectable text. I’m really curious how my workflow will improve with the upcoming Apple updates this fall, which will bring native text selection in images.

Articles I save always as Markdown to my reference database for later reference. The DEVONthink capture feature is one of the most useful features I know. It grabs the article, cleans it from advertising and layout elements, and converts it Markdown, including all links.

I use the Markdown highlight feature (`==hightlight==`) to mark interesting parts of the text. These parts get converted into permanent notes in Obsidian. To remember where I got the note from I create a new entry in a [BibDesk](https://bibdesk.sourceforge.io/) database (which lives inside my Obsidian vault in a subfolder) and add the reference key to the note.

I tag my notes with hashtags (`#tag`) which I convert to system tags with DEVONthink.

To link notes together I use the auto-complete feature of Obsidian to find related notes.
