---
title: Design of My New Logo
author: Stefan Imhoff
date: 2014-04-18T19:00:00+02:00
description: "Insight into the design of my new logo and Rakkan: idea, research and a short digression on the Chinese script."
tags:
  - design
---

Since a logo is one of the essential elements that recognize a website, I wanted from the beginning to design a logo that fits the theme of the rest of the design of the site.

Although I am of the opinion that a private person does not need a logo, but without a logo is a nice visual element missing that can be used later in all sorts of places, for example as the favicon.

It was already clear to me quite early that I wanted to use a _Rakkan_ instead of a modern logo.

## Rakkan

A Rakkan (or Hanko) is called in Japan a seal, which is usually carved in stone, representing the signature of an artist and is stamped under the artwork, and thus works as a signature.

![Rakkan written ink below symbol](/assets/images/posts/rakkan.jpg "Imprint of my Rakkan below a symbol for 忍 (Shinobi) written by me.")

Even with my [martial arts portal](https://www.kogakure.de/) I use such a seal as a logo, only there was the template for this logo at that time my real seal, which I had commissioned from an artist.

## Research

Before I could start designing my new seal, I first had to conduct research. For this, I have looked at historical stamps in a large number of works and studied their style and characteristics.

Most stamps use multiple characters, often four or even more. They exist in all forms, with the angular shape seeming to be the most common.

The next step was to choose the right font. As a typeface, most artists choose the _small seal script_, which was introduced by the Chinese Emperor Qin Shi Huang about 2200 years ago.

## Tour in Chinese Writing Styles

First Chinese characters were scratched on potsherds 6000 years ago. The so-called [oracle bone script](https://en.wikipedia.org/wiki/Oracle_bone_script) was developed 3400 years ago during the Shang Dynasty and was used for prophecy with animal bone oracles.

As the bronze casting technique around the 11th century BC the [bronze inscriptions](https://en.wikipedia.org/wiki/Chinese_bronze_inscriptions) was developed, which was used to write texts for politics, trade, military, administration, and oracles.

At the time of the Seven Kingdoms (475-221 BC), brush and ink were invented and written on bamboo, wood, and silk.

However, there were many different spellings of the characters, which was not conducive to exchange and trading. King Zhou Xuanwang tried to solve this problem through the [large seal script](https://en.wikipedia.org/wiki/Large_seal_script), which he did not succeed. Only as Emperor Qin Shin Huang unified the empire at 221 BC, he ordered a uniform font. Chancellor Li Si eliminated characters and reduced strokes thus founded the [small seal script](https://en.wikipedia.org/wiki/Small_seal_script).

The small seal is indeed beautiful by its curved lines but was too cumbersome to write in everyday use. At the beginning of the Han Dynasty, the [clerical script](https://en.wikipedia.org/wiki/Clerical_script), which had much straighter lines and was easier and faster to write. Many characters were further abstracted by this font.

Also at the same time, the _cursive script_ was invented, which is also called [grass font]. It was used for private correspondence but also written by the common people. In this font, the strokes are often connected, so it often looks like the brush has not been lifted off the paper.

[grass font]: https://en.wikipedia.org/wiki/Cursive_script_(East_Asia)

In the 2nd century AD, scribes who did not like the concept of chancery script developed the [regular script](https://en.wikipedia.org/wiki/Regular_script).

At the end of the Han Dynasty, there was another style for private use besides the grass script: the [semi-cursive script](https://en.wikipedia.org/wiki/Semi-cursive_script).

The next significant change took place in 1956 when the government simplified the text. More than 1000 characters were deleted and with 2200 characters the number of lines was reduced. This should lead to a better literacy of the population.

## The Meaning of the Characters on My Rakkan

For my new Rakkan I have taken over the characters of my old Rakkan and then added two more characters. The old character contains the characters 木隠 (kogakure), which is not only the name of my martial arts portal but also my pseudonym on the Internet for many years. Translated it means <q>hidden behind trees and leaves</q>.

The two new characters to the left of it mean 草 (grass) and 刀 (blade) in the small seal script. The signs allow numerous possibilities of interpretation and interpretation, which I will not go into here to keep anyone bored.

Such a seal can be created in two different variants: **Yin** or **Yang** (☯). In the Yin variant (as I have it on [kogakure.de](https://www.kogakure.de/)), only the letters are carved out of the stone, the surface remains. This time, I wanted to create a rakkan in the yang variant where everything is cut away except for the letters (and an edge).

## The Creation of the Rakkan

First, I made numerous pencil drawings, first of individual characters that I liked, later of combinations. I wondered how an artist would carve a traditional stamp, how the letters touch, and support to give the seal the necessary stability.

![Moleskine mit Bleistiftzeichnungen von Schriftzeichen](/assets/images/posts/moleskine-pencil-drawings.jpg "Double page from my Moleskine with pencil drawings of various characters.")

After I had developed my final variant, I drew the pencil lines with a very thick highlighter (not without almost ruining my bamboo table, since I _of course_ omitted out of laziness to use a pad). The texture that emerges when ink spreads through the paper looks very much like a stone-carved edge.

In the next step, I then digitized the Rakkan and slightly corrected it in Adobe Photoshop to remove unsightly parts or improve the lines a little.

To create a vector shape from this pixel image, I imported the image into Adobe Illustrator and converted it to a vector shape, then reduced the number of vector points and exported it as an SVG file.

To use my logo as a vector font on the page, I used [Font Custom](http://fontcustom.com/) to convert SVG graphics into web fonts. Thus, several vector graphics are combined as a single character in a font file. Once the font is loaded, the icons can then be displayed in any size and styled with CSS.

## The Font

Now the Rakkan can be used as a character and can easily be generated by a CSS class attribute on any element. Then, the character can be colored at will and get the desired font size or text effects (such as a shadow edge).
