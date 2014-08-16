---
title: In-page Anchors When Mouse Moved On
subtitle: How to refer to a specific section in your blog?
time: 2014.08.16 17:22:00
layout: post
tags:
- JavaScript
- jQuery
- WebDesign
shortUrl: http://goo.gl/h7trIC
excerpt: When we want to refer to a specific post in our blog, we usually use an anchor like <code>&lt;a href="all.html"&gt;a full list of my posts&lt;/a&gt;</code>. Then, what if we want to refer to a specific section in a post, say, <code>&lt;h1&gt;Who am I?&lt;/h1&gt;</code> in <code>about-me.html</code>? The point is, instead of wasting our visitors' time reading everything before it, we'd like them to skip to that section with the URL provided. This post introduces how you can achieve this.
---

> #### What will you learn in this post?

> When we want to refer to a specific post in our blog, we usually use an anchor like <code>&lt;a href="all.html"&gt;a full list of my posts&lt;/a&gt;</code>. Then, what if we want to refer to a specific section in a post, say, <code>&lt;h1&gt;Who am I?&lt;/h1&gt;</code> in <code>about-me.html</code>? The point is, instead of wasting our visitors' time reading everything before it, we'd like them to skip to that section with the URL provided. This post introduces how you can achieve this.

# See The Result First

You may now hover on the above title `See The Result First` and you'll probably see a red `#`. If you click it, the URL will be changed into `.../#see-the-result-first` and the page will start from this section. By linking to this URL, you can make reference to this section anywhere.

> The <a href="http://www.w3.org/TR/html4/struct/global.html#adef-id" target="_blank">`id`</a> attribute may be used to create an anchor at the start tag of any element (including the <a href="http://www.w3.org/TR/html4/struct/links.html#edef-A" target="_blank">`a`</a> element).

> from *<a href="http://www.w3.org/TR/html4/struct/links.html#h-12.2.3" target="_blank">W3C Recommendation</a>*

The next part of this post explains how to achieve this effect.

# The General Idea

The general idea is that we dynamically add an `id` attribute for the headline `<h1>` (or possibly also for `<h2>` and `<h3>` if you wish) based on the text of the headline when a user's mouse hovers on it. And then, we append an anchor element `<a>#</a>` linking to that id. And that's almost everything you need to do.

The whole solution doesn't rely on *jQuery* but it can save you some time to do so.

Now, let's explain this in more detail.

# JavaScript Part

## Step 1. Append To Headline

With jQuery, we can use `$('h1').each(function() {});` to detail with each headline and the following steps are all declared inside this function.

## Step 2. Generate `id`

A typical headline may be `Step 2. Generate id`, which will be more suitable as an `id` after being transformed into `step-2-generate-id`. Here's how to do so.

### 2.1 Replace All Spaces with `-`

{% highlight js %}
var id = $(this).text().replace(/\ /g, '-');
{% endhighlight %}

### 2.2 Remove Non-word Character Except `-`

{% highlight js %}
var id = $(this).text().replace(/\ /g, '-')
        .replace(/\W^\-/g, '')
{% endhighlight %}

> `\W` Matches any non-word character. Equivalent to `[^A-Za-z0-9_]`. For example, `/\W/` or `/[^A-Za-z0-9_]/` matches `%` in `50%`.

> From *<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions" target="_blank">Mozilla Developer Network</a>*

### 2.3 Transfer to Lower Case

{% highlight js %}
var id = $(this).text().replace(/\ /g, '-').replace(/\W^\-/g, '')
        .toLowerCase();
{% endhighlight %}

## Step 3. Set `id` to the Headline

Sometimes, the headline may be `=D`, whose `id` will be `''` after calculation. In this case, we will do nothing further. Otherwise, we will then set the id to the headline.

{% highlight js %}
if (id !== '') {
    $(this).attr('id', id);
}
{% endhighlight %}

## Step 4. Append `#` to the Headline

{% highlight js %}
if (id !== '') {
    $(this).attr('id', id).append(' <a class="h1-link" href="#' + id + '">#</a>');
}
{% endhighlight %}

Here we append an anchor with class `h1-link`. So, next time when `hover` is called, we can check if `.h1-link` already exists and only do the previous steps if `$(this).children('.h1-link').length === 0`.

## Complete JavaScript Code

{% highlight js %}
$('h1').each(function() {
    if ($(this).children('.h1-link').length === 0) {
        var id = $(this).text().replace(/\ /g, '-').replace(/\W^\-/g, '').toLowerCase();
        if (id !== '') {
            $(this).attr('id', id).append(' <a class="h1-link" href="#' + id + '">#</a>');
        }
    }
});
{% endhighlight %}

And that's all you need for the JavaScript part.

Next, we need to setup some CSS style to make it looks better.

# CSS Part

There're not much things we need to do with CSS. In order to make our headline neat and clean as before, we want to show the `#` only if the mouse is hovering on the headline. It be can easily achieved with the following code.

{% highlight css %}
.h1-link {
	display: none;
}

h1:hover .h1-link {
	display: inline;
}
{% endhighlight %}

Now, refer to these links as you wish!
