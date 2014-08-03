---
title: 04 - More about CSS Position
time: 2014.07.30 20:09:27
layout: post
tags:
- WebDesign
- Tutorial
- CSS
series: Dive into Web Front-End Programming
shortUrl: http://goo.gl/WtLs40
excerpt: <code>relative</code>, <code>absolute</code>, <code>fixed</code> are three most frequently used CSS `position` values. Even if you think you know them already, this post may surprise you.
---

# CSS `position`

> The `position` CSS property chooses alternative rules for positioning elements, designed to be useful for scripted animation effects.

> A *positioned element* is an element whose computed position property is `relative`, `absolute`, `fixed` or `sticky`.

> An *relatively positioned element* is an element whose computed position property is relative.

> An *absolutely positioned element* is an element whose computed position property is absolute or fixed.

> A *stickily positioned element* is an element whose computed position property is sticky.

> The `top`, `right`, `bottom`, and `left` properties specify the position of positioned elements.

> *From <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/position" target="_blank">Mozilla Developer Network*</a>

This post talks about `relative`, `absolute`, and `fixed`, which are three most frequently used `position` values.

## `relative`

When `position: relative` is set to an element, and its `top` is set to be `20px`, this element's position is lower than its original position at `20px` where `position: relative` is not set. Similarly for `right`, `bottom`, and `left`.

A typical mistake here is to think the element will be *relative* to its parent or the screen.

## `absolute`

We usually use `position: absolute` to set the element's position according to the screen. But it can do more.

## `fixed`

When we want some element to be at a fixed position when user scrolls down, `position: fixed` is used.

# Combination of `position`

## Relative to Parent

Sometimes we need to set an element's position to be a certain value relative to its parent element. How can this be achieved?

First, set the `position` of its parent to be `relative` or `absolute` (if you don't want to change the position of its parent, `relative` will be OK).

Next, set the `position` of the element to be `absolute` and set its `top`, `right`, etc. values.

Now, the element is relative to its parent.

<p class="no-indent"><a href="http://jsfiddle.net/pDdVA/" target="_blank">Run the following code</a></p>

{% highlight html %}
<div id="parent">
    <div id="child">
    </div>
</div>
{% endhighlight %}

{% highlight css %}
#parent {
    background-color: yellow;
    width: 300px;
    height: 200px;
    margin: 50px;
    
    position: relative;
}

#child {
    background-color: green;
    width: 50px;
    height: 50px;
    
    position: absolute;
    top: 20px;
    left: 30px;
}
{% endhighlight %}

<div class="demo-area">
    <div style="background-color: yellow; width: 300px; height: 200px; margin: 50px; position: relative" >
        <div style="background-color: green; width: 50px; height: 50px; position: absolute; top: 20px; left: 30px;" >
        </div>
    </div>
</div>

If its parent's `position` is not set explicitly, then it's `static` by default. And an element of `position: absolute` with a parent of `position: static` will have a position relative to the parent's parent. If its parent's parent's `position` is `static`, then it will be relative to its parent's parent's parent, etc. In the end, it will be relative to the screen. 

<p class="no-indent"><a href="http://jsfiddle.net/pDdVA/1/" target="_blank">Run the following code</a></p>

{% highlight css %}
#parent {
    background-color: yellow;
    width: 300px;
    height: 200px;
    margin: 50px;
}

#child {
    background-color: green;
    width: 50px;
    height: 50px;
    
    position: absolute;
    top: 20px;
    left: 30px;
}
{% endhighlight %}

<div class="demo-area">
    <div style="background-color: yellow; width: 300px; height: 200px; margin: 50px;" >
        <div style="background-color: green; width: 50px; height: 50px; position: absolute; top: 20px; left: 30px;" >
        </div>
    </div>
</div>

## Fixed Position

You may already know that setting `position: fixed` can make an element stay the same position when user scrolls down.

<p class="no-indent"><a href="http://jsfiddle.net/pDdVA/2/" target="_blank">Run the following code</a></p>

{% highlight css %}
#parent {
    background-color: yellow;
    width: 300px;
    height: 200px;
    margin: 50px;
}

#child {
    background-color: green;
    width: 50px;
    height: 50px;
    
    position: fixed;
    top: 20px;
    left: 30px;
}
{% endhighlight %}

If, however, you want to make an element fixed to its parent, you may refer to <a href="http://stackoverflow.com/questions/5209814/can-i-position-an-element-fixed-relative-to-parent#answer-7823145" target="_blank">this answer at StackOverflow</a>. A quick conclusion here is there's no elegant solution currently.

# Homework

Try with different combinations of `position` and raise questions if you may.
