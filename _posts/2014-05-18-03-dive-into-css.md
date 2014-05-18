---
title: 03 - Dive into CSS
time: 2014.05.18 14:28:00
layout: post
tags:
- Web-Design
- Tutorial
- CSS
series: Dive into Web Front-End Programming
excerpt: In this post, we introduce the CSS properties and most importantly, CSS position.
---

CSS enables us to change the style of the content. It controls how the content is rendered.

A CSS rule is made up of a *selector* and a group of *declarations*. A CSS declaration consists of a *property* (e.g., `color`) and a *value* (e.g., `red`).

Here is an example of typical CSS rules:

{% highlight css %}
body {
    color: red;
    background-color: #ff0;
    padding: 20px;
}

p {
    margin: 10px 0;
}
{% endhighlight %}

# Basic Properties

This post mainly focuses on CSS positioning. But before that, I'd like to introduce some frequently used CSS propertyies. To learn CSS, you don't have to know it property by property. Instead, you can totally get to know a new property once you meet with it.

## Color

There are several types to represent colors. You can use words like `red`, `green`, `yellow` and etc. for *color names*. But they're quite limited. A full list is available at <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value" target="_blank">https://developer.mozilla.org/en-US/docs/Web/CSS/color_value</a>.

Usually, we can represent a color using the proportion values of red, green and blue. In CSS, a hex value `#f31492` or an RGB group value `rgb(24, 52, 200)` can be used to represent colors.

For hex value `#f31492`, the first two digits `f3` are used to present the red proportion, the next two digits `14` are for green, the last two digits `92` are for blue. Since two hex digits can represent values from `00` to `ff`, each of red, green, blue components are from 0 to 255. So, `#f00910` is equal to `rgb(240, 9, 16)`.

If the hex value is formed like `#ff7733`, it can be abbreviated to `#f73`.

### `color`, `background-color`, `border-color`

`color` is used to set the color of text, while `background-color` and `border-color` set the color of background and border respectively.

{% highlight html %}
<div>Hello, world!</div>
{% endhighlight %}

{% highlight css %}
div {
    width: 200px;
    height: 100px;
    color: rgb(255, 255, 0);
    background-color: #ff6600;
    border: 1px solid blue;
}
{% endhighlight %}

<img src="{{ site.url }}/img/loading.gif" data-src="{{ site.url }}/img/post/2014-05-18-dive-into-css-01.png" />

## Width and Height

If you don't set the width and height of a component, it depends on the content.

{% highlight html %}
<div>xxxxx x xxxx xxxxxxxxxx xxxxxxxx xxxxxxxx xxxxxx xxxxxxxx xxx xxxxx xxxxxxxxx xxxxxxxx xxxxxxx xxxxxx xxxxxxx xxxxxxxxxxxx xxxxxxxxxxxxx xxxxxxx xxxxxxxx xxxxxxxxx xxxxxxxxx.</div>
{% endhighlight %}

<img src="{{ site.url }}/img/loading.gif" data-src="{{ site.url }}/img/post/2014-05-18-dive-into-css-02.png" />

If the width is set, the height depends on the content.

{% highlight css %}
div {
    width: 200px;
    color: rgb(255, 255, 0);
    background-color: #ff6600;
    border: 1px solid blue;
}
{% endhighlight %}

<img src="{{ site.url }}/img/loading.gif" data-src="{{ site.url }}/img/post/2014-05-18-dive-into-css-03.png" />

If both width and height are set, the content may overflow.

{% highlight css %}
div {
    width: 200px;
    height: 100px;
    color: rgb(255, 255, 0);
    background-color: #ff6600;
    border: 1px solid blue;
}
{% endhighlight %}

<img src="{{ site.url }}/img/loading.gif" data-src="{{ site.url }}/img/post/2014-05-18-dive-into-css-04.png" />

You can set the overflowed content to be hidden using `overflow: hidden;`, or display a scroll bar when overflow using `overflow: auto`. If you don't want a horizontal scroll bar, you can set `overflow-x: hidden; overflow-y: auto;`.

# Position

CSS position can sometimes be confusing and in this post, I'm going to talk about it in detail.

(To be continued...)
