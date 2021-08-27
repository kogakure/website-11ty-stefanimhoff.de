---
title: Typography of My Website
author: Stefan Imhoff
date: 2014-06-19T10:30:00+02:00
description: "About the typography of my new website: scale, font, vertical rhythm, font size, font size and sentence width."
tags:
  - design
  - code
  - typography
---

I’m _typophil_. But this is nothing for a self-help group because it simply means love or affection to typography. It was clear to me from the start that I would start with typography for my new website.

Normally, only designers pay attention to typography, the rest of the people is usually relatively unimportant. But typography influences each of us, consciously and subconsciously.

Simple things like readability or contrast decide whether the message of a text reaches the reader at all. And since words have incredible power, typography is often underestimated.

The right choice of font, font size, weight, layout, sentence width, lead, letter-spacing, or many other things unconsciously affect the reader and thus transport the statement. Proper typography can support and reinforce a message that makes the wrong message even meaningless or ridiculous.

I’ve always found typography fascinating, but only after reading the book <cite>{% affiliate "The Elements of Typographic Style", "0881792128" %}</cite> by _Robert Bringhurst_ I studied the matter more deeply. There is a Web-adapted version of his book on the website [The Elements _of_ Typographic Style Applied _to the_ Web](http://webtypography.net/).

{% bookshelf %}
{% book "0881792128" %}
{% endbookshelf %}

## Typography

Good typography does not just mean selecting a scripture but is an art form that I am still far from mastering.

It is important to choose the right page layout, the right sentence width, the correct lead, the right combination of fonts, the right scale, the correct font size, and a variety of other guidelines.

## Scale

Several years ago I stumbled on two interesting lectures by Tim Brown on typography. Tim Brown works as _Type Manager_ for [Adobe Typekit](https://typekit.com/), a platform that offers Webfont hosting. In his lectures, he offers a very interesting insight into the history of typography and how to achieve good typography.

I decided to start with the selection of a scale. A typographic scale is the selection of harmonic proportions, which are then applied to font size, sentence width, and other parts.

The most famous proportion is _Golden Ratio_, which has a ratio of `1:1.618`. But there are many other proportions that have their origins in geometry, music, nature, or history. Tim Brown has even created the website [Modular Scale](http://www.modularscale.com/), on which such a scale can be calculated.

But this was not necessary for my project, because Team-Sass offers a [SASS extension](https://github.com/modularscale/modularscale-sass).

So I add the gem to my Gemfile first:

#### Gemfile

```ruby
source "https://rubygems.org"

group :development do
  gem 'modular-scale'
end
```

Then I load the Compass plugin in `config.rb`:

#### config.rb

```ruby
# Require any additional compass plugins here.
require 'modular-scale'
```

Afterward only the module of Compass has to be loaded in a partial:

#### helpers/\_imports.scss

```scss
@import "compass";
@import "compass/reset";
@import "modular-scale";
```

I've decided to use the _golden ratio_ and then select the ideal text size and an important number:

```scss
$ms-base: 16px 18px;
$ms-ratio: $golden;
```

Now the helpers of Gems can be used everywhere in the SCSS. So instead of writing somewhere manually `42px` (`41.887px`) or `2.618em`, I just write `modular-scale(4)` to choose the fourth value of the scale:

```scss
$font-scale-h1: modular-scale(4);
```

## Sentence Width

Of course, I could have started to choose the sentence width (line length), and then choose the grid appropriately. However, now that a scale has been selected, you can use it for the correct sentence width.

Of course, a responsive website with fluid line length is not an optimal prerequisite for a fixed sentence width. There are all sorts of values circulating on the Internet, which is an optimal line length. All sorts of truisms such as no less than 45 characters, no more than 85 characters, or similar values can be found there. But nothing is scientifically proven, and one should measure in words rather than in characters because we see word images and not letters.

If the line is too long, the eyes are tired and the readers may lose the connection to the next line, if the line is too short, the constant interruption of the reading flow will be equally severe. There is only one thing to say: The correct line length does not exist, it depends on the font, typesetting, and line spacing.

So I tried to determine the optimal line length of my website with about 66 characters or about 10 words. Depending on the browser size, the line length then shrinks, but only up to a threshold that I have selected. If this falls below, I select a different number of columns of the grid.

But I make sure that the line length is not wider than I determined to be optimal because as soon as the head has to be moved, the line is clearly too long.

## Vertical Rhythm

Next, I set the line spacing and decided in addition to the technique of _vertical rhythm_. In the case of fonts of different sizes, the line spacing is mathematically changed in such a way that two different sized fonts would still be visually adjacent to each other.

Very handy is that the relatively annoying mathematics behind the formula (which spits out mostly crooked values with many decimal places) does not have to be calculated by yourself. Compass already comes with a [module](http://compass-style.org/reference/compass/typography/vertical_rhythm/) for it.

There are some variables to be set:

```scss
$base-font-size: modular-scale(1); // 18px
$base-line-height-count: 1.5;
$base-line-height: $base-font-size * $base-line-height-count; // 27px
$relative-font-sizing: true; // use em and not px
$round-to-nearest-half-line: true; // prevent too big gaps between lines
```

A simple call to this mixin activates the vertical rhythm:

```scss
@include establish-baseline();
```

To adjust a font size you do not use absolute values anymore, but a mixin. This can of course also be used in combination with the Mixin of _Modular Scale_:

```scss
h1 {
  @include adjust-font-size-to(modular-scale(6));
  @include trailer(1, modular-scale(6), margin);
}
```

You also no longer directly define the distances above or below an element, but use mixins, as in the example `trailer`.

## Fonts

I had the most problems choosing the font, as this is a difficult task. There are tons of fonts, but finding the right one for the occasion is a big hassle. To make matters worse, there are far more bad fonts on the Internet than good fonts.

Creating a font is an immense effort and therefore a license for a font step also costs a lot of money. But to use web typography, the designer of a font must, of course, release it for embedding in a web site. Beautiful, free fonts are available for example on [The League of Movable Type](https://www.theleagueofmoveabletype.com/).

In addition to owning the font, there is still the possibility to integrate the font of a web service. There are for example pay-as-you-go solutions such as [Adobe Typekit](https://typekit.com/), which offer many professional fonts. Anyone who is unwilling to regularly pay to use a font can still choose from a large number of fonts that have been freely made available by nice designers.

I first looked at Typekit, but then chose two free fonts that I integrate into my website via [Google Fonts](https://fonts.google.com):

- _Gentium Basic_ for long-running texts
- _Yanone Kaffeesatz_ for headlines and shorter texts, as on the homepage

Gentian Basic is a very appealing typeface with serifs and an italic typeface, while Yanone Kaffeesatz is a sans serif typeface. Both fonts in combination offer a harmonious picture.

## Font Size

On November 17, 2006, Oliver Reichenstein wrote on the Blog of Information Architects about the [100% Easy-2-Read Standard](https://ia.net/topics/100e2r), this concept was completely new to me. At that time, the font on websites was consistently set too small. The browser standard has always been `16px`. But most pages use values between 10 and 12 pixels.

After this blog post, designers started to increase the base font size. I even use `18px` for my floating text font.

## Font Weight

I load _Gentium Basic_ in 400 and 700 and _Yanone Kaffeesatz_ in 200 and 400. So I can put bold parts of the body text in 700 and the rest in 400. On the homepage, I only use _Yanone Kaffeesatz_ and use for high-resolution displays (Retina) one Font size of 200, for all other displays 400.

## Tracking, Widows and Orphans

_Tracking_, the inserting of spaces between individual letters, I use on my website only in a few places and _Kerning_, reducing the spacing between individual letters, not at all. Manual kerning on the Internet is a task that is simply too time-consuming. There are some JavaScript solutions, but the whole thing is simply not worth the effort or load size on the web.

To prevent a single word from being alone on a new line, I have been using JavaScript for a while. Since this jQuery plugin did not work reliably in some cases and also had a rather large file size, I removed it after a few weeks.

## Other Typographic Formatting

I use some more typographic formatting, such as centered verse blocks, correct quotation marks for inline citations depending on the language, and I’ve written myself a Jekyll plugin that ensures that things like `e.g.`, `1000 €` or `5 + 3` are provided with invisible spaces so that everything slips as a block in a new line and not character by character.

## Interesting Links About Typography

For those who have become curious about typography, I have put together a small list of recommended links to this topic:

- [The Elements _of_ Typographic Style Applied _to the_ Web](http://webtypography.net/)
- [Thinking with Type](http://thinkingwithtype.com/)
- [Butterick’s Practical Typography](https://practicaltypography.com/)
- [Type Basics](http://www.typeworkshop.com/index.php?id1=type-basics)
- [Web Design is 95% Typography](https://ia.net/topics/the-web-is-all-about-typography-period)
- [Five simple steps to better typography](https://markboulton.co.uk/journal/2005-04-13.five-simple-steps-to-better-typography/)
- [Nice Web Type](http://nicewebtype.com/)
- [More MeaningFull Typography](https://alistapart.com/article/more-meaningful-typography)
- [A List Apart: Typographie](https://alistapart.com/topic/design/typography/)
- [Kerntype](https://type.method.ac/)
- [Modular Scale](http://www.modularscale.com/)
- [Helvetica – A Documentary Film by Gary Hustwit](https://www.hustwit.com/helvetica/)
