---
title: Syntax Highlighting for Jekyll
time: 2014.02.09 22:08:18
layout: post
tags:
- CSS
- jQuery
- JavaScript
excerpt: In this post, I'm going to explain how to set up syntax hightlighting for Jekyll in GitHub style.
---

> ### What You Will Learn In This Post

> In this post, I'm going to explain how to set up syntax hightlighting for Jekyll in GitHub style.

Although I would not say GitHub code syntax style is the prettiest one, it is a good choice if you don't want to write your own.

#pygments-style-github.git

<a href="http://github.com/hugomaiavieira/pygments-style-github" target="_blank">pygments-style-github.git</a> is a greate project designed to create syntax css files in GitHub style.

{% highlight sh %}
$ git clone git://github.com/hugomaiavieira/pygments-style-github.git
$ cd pygments-style-github/
$ (sudo) python setup.py install
$ pygmentize -S github -f html > syntax.css
{% endhighlight %}

That's all you need to do with it. But I spent a lot of time wondering why it's not working, which turns out to be that I typied `$ pygmentize ...` into `$ python ...` by mistake. :sweat:

#_config.yml

Next, you need to change `_config.yml`. Add `pygments: true`.

#Write Blogs

When writing blogs, you may use `{# highlight css #}` and `{# endhighlight #}` to bracket your code (replace `#` with `%`), where `css` may be changed into other languages like `html`, `js` and so on.
