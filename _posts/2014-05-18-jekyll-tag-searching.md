---
title: Jekyll Tag Searching
time: 2014.05.18 12:19:00
layout: post
tags:
- Jekyll
- Tag
- Liquid
- JavaScript
excerpt: This post introduces how to achieve searching tags with Jekyll, without using a Jekyll Plugin. The basic idea is to display all posts grouped by tags, and then use CSS to hide all except posts with the searching tag. We can get the searching tag in URL query string using JavaScript.
---

> #### What will you learn in this post?

> This post introduces how to achieve searching tags with Jekyll, without using a Jekyll Plugin.

Since Jekyll is a *static* Website generator, which means the pages are already there before you request, it is hardly possible to for Liquid to get the query string in URL. However, we can use some tricks to make it looks like so.

The basic idea is to display all posts grouped by tags, and then use CSS `display: none` for all except posts with the searching tag. We can get the searching tag in URL query string using JavaScript.

#Display Posts Grouped by Tags

### 1. Create a page called `tags.html`.

Tags can be then searched like `http://.../tags/?tag=css`.

### 2. Get all the tag names in `site.tags`.

You'd better use `-` instead of space in your tag names. Otherwise, if you have a tag named `Hello World`, then `site.tags` contains `Hello` and `World`. To avoid this, use `Hello-World` as tag name instead.

### 3. For each tag, list all the posts with that tag name.

Here we create a `<div></div>` for each tag with `id` and `class` so that it can be manipulated more easily later.

<script src="https://gist.github.com/Ovilia/5248cd4f9b7f50d9652b.js"></script>

### 4. Hide all those `tag-posts`.

Use CSS to set `display: none;` to `.tag-posts`.

### 5. Get query string using JavaScript.

{% highlight js %}
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
{% endhighlight %}

### 6. Show posts with the searching tag.

{% highlight js %}
window.onload = function() {
    var tag = getParameterByName('tag');
    if (tag && document.getElementById('tag-' + tag)) {
        document.getElementById('tag-' + tag).style.display = 'block';
        document.getElementById('tagTitle').innerHTML = tag;
    } else {
        document.getElementById('tagTitle').innerHTML = 'Illegal Tag Query';
    }
};
{% endhighlight %}

### 7. Add links to tags.

Now, you can search tags like `/tags?tag=Jekyll`.

#Conclusion

Full code is available at <a href="https://github.com/Ovilia/blog/blob/63b3ea5aaf5475670930b54207d694479dd46a60/tags.html" target="_blank">GitHub</a>.

This is an easy way to achieve searching tag for static Jekyll. One disadvantage is that a full list of all posts grouped by tags needs to be loaded whenever a tag is searched. This is not so good when blog posts become large enough. However, this is by far the simplest implementation I can think of.

#Reference

- StackOverflow: <a href="http://stackoverflow.com/questions/1408824/an-easy-way-to-support-tags-in-a-jekyll-blog#answer-21002505" target="_blank">An easy way to support tags in a jekyll blog</a>

- StackOverflow: <a href="http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript#answer-901144" target="_blank">How can I get query string values in JavaScript?</a>
