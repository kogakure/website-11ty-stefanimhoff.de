---
title: Vim
author: Stefan Imhoff
date: 2010-10-29T19:00:00+02:00
description: How I became a convinced Vim disciple, why Vim is such an ingenious editor, and how to best practice if you want to learn Vim.
tags:
  - code
---

## By the Power of Vim … I Have the Power!

Something similar said the superhero _He-Man_ from the 80s TV show _Masters of the Universe_, just before he got his superpowers. And Vim exists about as long as the TV show: **22 years**. And the older Vi, on which Vim is based, has been around even longer than I live. So if a _simple_ text editor exists for such a long time and gives such _power_, it just has to be something special about it.

![Vim, Reinigungs- und Poliermittel.](/assets/images/posts/vim-vintage.jpg "Vim - cleanser and polisher. Brightens the home and the age.")

The first time I stumbled upon Vim (or Vi) a couple of years ago, when I first had to edit any file on a server and none of my fancy editors worked there. The first time I worked with Vi(m) was my natural reaction: <q>WTF, I can not tap until I press i? Who invents such a crap?</q>.

But because I, as a web worker inevitably have to work on the server, again and again, I could not avoid learning either Vim or Nano. And so, for years, I coped quite well with four or five Vim keys. But I was **so** wrong. Wrong. Wrong. Really wrong.

Three years ago I had already tried to learn Vim and had failed miserably. Why?

## Vim is Incredible, Incredibly Complex (but Equally Powerful)

There are developers who have been working with Vim for 20 years and still do not think that they have mastered Vim.

That I failed then was sole because I had not started properly. With Vim it is absolutely necessary to start slowly and gradually. As with almost any other art, the basics must first be learned and mastered before moving on to the next level. I simply copied a Vim configuration file and was completely overwhelmed.

So if you want to learn Vim, it’s important to first unlearn what all other editors have taught you wrong. With a text editor - whether Word, Notepad, TextMate, or another editor - you want to edit text. Even if you may think the most important part is typing, that’s not true, not even with a book author, let alone a programmer.

Therefore, the whole philosophy of Vim is different than with any other competitor. You can not even compare the other editors with Vim.

When you use Vim, you feel as if you master the text, as a doctor can dissect the text with a scalpel. You navigate and edit your text in the best and most efficient way I’ve ever seen.

## This is Not a Tutorial

I will not write a beginner’s tutorial here, it would be a waste of work, as there are countless sources on the Internet, and Vim Help is one of the best ever. And you can also just type `vimtutor` on your terminal to start an interactive Vim tutorial. Instead, I want to describe how I got the first steps right.

## The First Steps

First, be sure to put all your Vim files and plugins under version control, so you can restore the same workspace to any computer in seconds. Incidentally, it’s also a good idea to version all Bash files and Unix configuration files.

I have created a repository `dotfile` with Git, which contains subfolders for `bash`, `bin`, `git`, `vim`, and some other programs. My Vim subfolder contains a file `vimrc.vim` and `gvimrc.vim`, as well as various Vim folders. This simple bash installation script installs my environment on a computer if desired:

```bash
#!/bin/bash

cd vim
export VIM_SRC=`pwd`
cd
ln -nfs $VIM_SRC .vim
ln -nfs $VIM_SRC/vimrc.vim .vimrc
ln -nfs $VIM_SRC/gvimrc.vim .gvimrc
```

This script links my configuration files as a symbolic link to the home directory where Vim expects them.

## The Second and Most Important Step

Vim has the nasty feature of scattering files across folders taken from the Unix philosophy and does not exactly facilitate the overview of what has already been installed.

But that’s been over for some time now. Tim Pope has programmed a fantastic plugin that is the last plugin to be installed in the traditional way: **Pathogen**.

Pathogen makes it possible to store plugins as bundles, individually and bundled together as a nice package. All you have to do is download [pathogen.vim](https://github.com/tpope/vim-pathogen) and place it in the Vim folder in a subfolder `autoload` (if not already created, create it). The next step is to create a `bundle` folder in the Vim folder and open your `.vimrc` file. There you write at the very beginning:

#### .vimrc

```vim
silent! call pathogen#runtime_append_all_bundles()
silent! call pathogen#helptags()
```

Plugins are now not unpacked and moved complicated into the correct subfolders, but simply put per plugin in a separate folder under `bundle`. For Vim, there are unfortunately some, various ways to install extensions, simple scripts, automatic installer, and, thank God, also Git checkouts.

**Update:** A few years ago I switched to [vim-plug](https://github.com/junegunn/vim-plug), a minimalist Vim Plugin Manager. It has a lot of nice features.

My recommendation is to switch completely to git checkouts. This has recently become very easy because some diligent gnome has set a mirror of most scripts under [vim-scripts](https://github.com/vim-scripts) on Github and thus allows the automatic update of the plugins via Git.

Some people clone the plugins they want as submodules, I use a small Ruby script from [Tammer Saleh](http://tammersaleh.com/posts/the-modern-vim-config-with-pathogen/), which I use Update my git repositories:

```ruby
#!/usr/bin/env ruby

git_bundles = [
  "git://github.com/scrooloose/nerdtree.git",
  "git://github.com/kogakure/snipmate.vim.git",
  "git://github.com/vim-scripts/vim-surround.git"
  # …
]

require 'fileutils'

bundle_dir = File.expand_path('../bundle/', __FILE__)

git_bundles.each do |url|
  dirname = File.basename(url)
  puts "* Extract #{url} → #{dirname}"
  dir = File.join(bundle_dir, dirname)
  cd #{dir} 2>/dev/null && git pull || git clone #{url} #{dir}
end
```

This great script clones my bundles or updates them from different places (Github, my own server). The advantage is that in my repository I always have everything with me and I have not gotten it with a submodule command.

## Basic Configuration

Next, you should open the `.vimrc` and enter some basic settings. To find out which ones are the best, you can have a look at the blogs and screencasts mentioned below. I strongly recommend that you always write comments next to each command that explains exactly what it does.

My file is divided into several areas: First, the basic settings are line width, wrapping, colors, backups, line numbering, etc. Then follows an area for abbreviations, then the area for the mappings, then file-type settings, and at the end functions.

## Keyboard Shortcuts

My biggest problem at some point was that my keyboard had no keys left, just about all the function keys and almost all the other keys were used. The consequence of this was that I constantly had to find out which function, which plugin or mapping now creates a conflict. But thank God, the ominous `Leader`, a key that you can press and then press any key combination. By default, this key is located on the <kbd>\\</kbd> and is therefore not easy to reach, which is why most people put it on the comma:

```vim
let mapleader=','
```

By pressing the comma in NORMAL mode followed by my keyboard shortcuts, I can easily execute arbitrary commands.

## Get Back Cherished Functions Through Plugins

Of course, if you switch from TextMate to Vim (or another editor), you’re bound to miss some of your editor’s favorite opportunities. If the missing feature does not work in Vim by itself, it will most likely work with one of the thousands of plugins.

A sidebar, in which all files are to be seen in the tree structure, can for example added with [NERD tree](https://github.com/scrooloose/nerdtree). At first, I thought, I’ll need this functionality **undoubtedly**, but since I know the buffers and splits of Vim, I use the NERD tree actually only very rarely.

Wincent Colaiuta has written [Command-T](https://wincent.com/products/command-t) an ingenious plugin that reproduces TextMate’s ability to open any file in the project with a few keystrokes.

Just as essential is the plugin [surround.vim](https://github.com/tpope/vim-surround) that lets you manipulate, add or delete enclosures such as parentheses, tags, single quotes.

TextMate was probably the first program that introduced snippets on a large scale. I’ve has been working with TextMate for years and could not work properly without snippets. Vim even offers several implementations for snippets. Personally, I use [snipmate](https://github.com/msanders/snipmate.vim) even though there is a more powerful (but also more complicated plugin) for Power users. Snipmate offers almost all the functions that TextMate had, the snippets can almost be copied and modified with just a few changes.

Peteris Krumin introduces on his blog [Vim Plugins You Should Know About](http://www.catonmat.net/blog/vim-plugins-surround-vim/).

## Omnicomplete Power

Vim offers an unbeatable tool since version 7 with Omnicomplete. Omnicomplete complements just about everything: simple words, dictionaries, functions, classes, file names. This is a genius. I’ve just hooked up a 7 MB dictionary with German spelling, and now Vim complements any word that complicated.

## There Will Be Color

One likes it bright, one likes it dark and one beige. For Vim there are almost countless color schemes that can be easily downloaded and changed in seconds. There is even the possibility to convert TextMate themes into Vim color schemes. The color files can be easily adjusted until the last one is satisfied.

## And Where Do I Start Now?

If you have an hour and a half, check out the video from GoogleTechTalk, in which the developer of Vim, the Dutchman Bram Moolenaar, shows in [7 Habits For Effective Text Editing 2.0](https://youtu.be/p6K4iIMlouI) which is so impressive on Vim.

There are also two fantastic articles I can recommend: [Coming Home to Vim](http://stevelosh.com/blog/2010/09/coming-home-to-vim/) by Steve Losh and [How I boosted my vim](https://nvie.com/posts/how-i-boosted-my-vim/) by Vincent Driessen.

## The Best Comes Last

But the best way to get started is with two fantastic screencast series. [Derek Wyatt’s Vim Tutorial Videos](http://derekwyatt.org/vim/tutorials/) and the [Screencasts at vimcasts.org](http://vimcasts.org/). If you have little time to read through the blogs, take the time to watch his screencasts. They are between 5 and 30 minutes long and he has made quite a number of them. I’ve rarely laughed that way because Derek not only shows how a professional works with Vim, but also has a fantastic sense of humor. It’s best to start with the beginner videos, and more specifically you should start with the introductory video [Welcome to Vim](http://derekwyatt.org/vim/tutorials/novice/). The screencasts on vimcasts.org are also highly recommended.

Do not try too much at once, learn the basics, especially the motion commands, search commands, and string manipulations. And use them too, even if you think the old way would go faster! In the beginning, you will be very slow and feel that you are less productive with Vim. But that’s misleading, since you’ll get better quickly and then depend on every other editor. The transition is not easy, I’ve been trying it for a month and it’s difficult to get rid of all those awful habits: the constant grasp of the mouse or the nonsensical arrow keys to operate.

If you use Vim, you will have to type far less, you will be able to edit your text much faster, but above all, you will be constantly excited again when you have discovered a new way to write a better, faster, and be more efficient.
