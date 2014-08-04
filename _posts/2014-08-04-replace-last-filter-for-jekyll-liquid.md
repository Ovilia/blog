---
title: Replace-Last Filter for Jekyll Liquid
time: 2014.08.04 21:54:08
layout: post
tags:
- Jekyll
- Liquid
- Filter
- GitHub
shortUrl: http://goo.gl/tTyFjx
excerpt: There are only <code>replace</code> and <code>replace-last</code> filter in Liquid gramma. So how can we replace the last character in Jekyll? This post introduces an ad-hoc method to do this, as well as how to make a <em>View Source on GitHub</em> feature.
---

> #### What will you learn in this post?

> There are only <code>replace</code> and <code>replace-last</code> filter in Liquid gramma. So how can we replace the last character in Jekyll? This post introduces an ad-hoc method to do this, as well as how to make a <em>View Source on GitHub</em> feature.

# Why did I need this filter?

I was making a *View Source in GitHub* feature for my blog and needed to replace `/` with `-` in `{{ "{{ page.url" }}}}`, which is `/2014/07/15/jekyll/related/posts/without/plugin/`, so as to generate a link like `https://raw.githubusercontent.com/Ovilia/blog/gh-pages/_posts/2014-07-15-jekyll-related-posts-without-plugin.md`.

As we can see, `https://raw.githubusercontent.com/Ovilia/blog/gh-pages/_posts/` and `.md` remains always the same. So we just need to get `2014-07-15-jekyll-related-posts-without-plugin` from `/2014/07/15/jekyll/related/posts/without/plugin/`, which seems to be a piece of cake, right?

## No! Not with Liquid.

# `replace` and `remove-first`

> #### Good Resource of Liquid Gramma

> <a href="https://github.com/Shopify/liquid/wiki/Liquid-for-Designers#standard-filters" target="_blank">Standard Filters - Liquid for Designers</a>

We can use `replace` to replace `/` with `-`. But we want to get rid of the first and last `/` in `/2014/07/15/jekyll/related/posts/without/plugin/`. The first `/` can be easily removed using `remove-first`, but how about the last one?

Apparently, there's no Liquid filter we can use. But you have to do something to stay alive with Liquid. :smirk:

# `append`?!

As traditional Chinese philosophy told us, *One must first give, when he wants to get*. When we can't find any solution to *remove*, why not consider *append*?

> One must first open, when he wants to close.  
> One must first strengthen it, when he wants to weaken something.  
> One must first embrace, when he wants to abolish.  
> One must first give, when he wants to get.  

> from *Tao Te Ching*

We first append a character which is considered never to be in the post URL. For example, we choose `@` here and put our trust on it that it will never betray us. :joy:

Append `@` to the end of the string and remove `-@` helps to remove the last `-` in the original string.

The complete code is:

<script src="https://gist.github.com/Ovilia/1f319438fc4174a1202a.js"></script>
