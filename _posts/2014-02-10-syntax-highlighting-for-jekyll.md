---
title: Syntax Highlighting for Jekyll
time: 2014.02.10 01:27:57
layout: post
tags:
- SyntaxHighlighting
- GitHub
- Jekyll
excerpt: In this post, I'm going to explain how to set up syntax hightlighting for Jekyll in GitHub style. Although I would not say GitHub code syntax style is the prettiest one, it is a good choice if you don't want to write your own.
---

> #### What You Will Learn In This Post

> In this post, I'm going to explain how to set up syntax hightlighting for Jekyll in GitHub style. Although I would not say GitHub code syntax style is the prettiest one, it is a good choice if you don't want to write your own.

If you are using Jekyll, then <a href="http://pygments.org/" target="_blank">pygments</a> enables you to write syntax-highlighted code like:

{% highlight text %}
{{ '{' }}{{ '%' }} highlight js {{ '%' }}}
alert('Hello, world!');
{{ '{' }}{{ '%' }} endhighlight {{ '%' }}}
{% endhighlight %}

<p class="no-indent">which will be then generated into:</p>

{% highlight js %}
alert('Hello, world!');
{% endhighlight %}

To enable pygments, you just need to add `pygments: true` in `_config.yml`.

# pygments-style-github.git

<a href="http://github.com/hugomaiavieira/pygments-style-github" target="_blank">pygments-style-github.git</a> is a great project designed to create syntax CSS files in GitHub style.

{% highlight sh %}
$ git clone git://github.com/hugomaiavieira/pygments-style-github.git
$ cd pygments-style-github/
$ (sudo) python setup.py install
$ pygmentize -S github -f html > syntax.css
{% endhighlight %}

That's all you need to do with it. But I spent a lot of time wondering why it's not working, which turns out to be that I typied `$ pygmentize ...` into `$ python ...` by mistake. :sweat:

# Writing Blogs

When writing blogs, you may use `{{ '{' }}{{ '%' }} highlight css {{ '%' }}}` and `{{ '{' }}{{ '%' }} endhighlight {{ '%' }}}` to bracket your code, where `css` may be changed into other languages like `html`, `js` and so on.

# Further Reading

If you want to display the language of the syntax-highlighted code, be sure to check out <a href="{{ site.url }}/2014/08/31/display-language-title-of-syntax-highlighting/">this post</a>.
