---
title: 03 - Dive into CSS
time: 2014.05.18 14:28:00
layout: post
tags:
- WebDesign
- Tutorial
- CSS
series: Dive into Web Front-End Programming
shortUrl: http://goo.gl/5pYBni
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

This post mainly focuses on CSS positioning. But before that, I'd like to introduce some frequently used CSS propertyies. To learn CSS, you don't have to know it property by property. Instead, you can totally get to know a new property once you meet with it. Although to be a good Web designer, you need to have a good command of coloring, in this post, we are just going to have a basic idea of it.

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

<img src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2014-05-18-dive-into-css-01.png" />

## Width and Height

If you don't set the width and height of a component, it depends on the content.

{% highlight html %}
<div>xxxxx x xxxx xxxxxxxxxx xxxxxxxx xxxxxxxx xxxxxx xxxxxxxx xxx xxxxx xxxxxxxxx xxxxxxxx xxxxxxx xxxxxx xxxxxxx xxxxxxxxxxxx xxxxxxxxxxxxx xxxxxxx xxxxxxxx xxxxxxxxx xxxxxxxxx.</div>
{% endhighlight %}

<img src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2014-05-18-dive-into-css-02.png" />

If the width is set, the height depends on the content.

{% highlight css %}
div {
    width: 200px;
    color: rgb(255, 255, 0);
    background-color: #ff6600;
    border: 1px solid blue;
}
{% endhighlight %}

<img src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2014-05-18-dive-into-css-03.png" />

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

<img src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2014-05-18-dive-into-css-04.png" />

You can set the overflowed content to be hidden using `overflow: hidden;`, or display a scroll bar when overflow using `overflow: auto`. If you don't want a horizontal scroll bar, you can set `overflow-x: hidden; overflow-y: auto;`.

Besides `px` unit, which stands for pixel, you can also use percentage to represent width and height. `width: 80%;` set the width to be 80% of its parent's. For `body`, the `width: 100%` and `height: 100%` are the width and height of the browser content, which is equal to `window.innerWidth` and `window.innerHeight` in JavaScript.

# Margin and Padding

Margin is the outside distance from other elements, while padding is the inside distance from its child elements. Let's see the following example to have a general idea. 

{% highlight html %}
<div style="width: 500px; background-color: yellow;">
    <div style="padding: 50px; margin: 20px; width: 200px; background-color: red;">I'm red.</div>
</div>
{% endhighlight %}

<img src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2014-05-18-dive-into-css-09.png" />

> DIY

> Use *Inspect Element* of Chrome or *Firebug* of Firefox to have a more deep understanding of this example.

# Position

CSS position can sometimes be confusing and in this post, I'm going to talk about it in detail.

## `display`

`display` is one of the CSS properties that determines position, whose frequently used values are `block`, `inline`, `inline-block` and `none`.

Different elements have different default values for `display`, even possibly different default values in different Web browsers. For example, `display` of `<div>`, `<p>` is `block` by default, while that of `<span>`, `<a>` is `inline` by default. We can overwrite `display` using CSS as we can always do with other CSS properties.

Next, I'm going to explain what these values mean in detail.

### `display: block`

Element with `display: block` takes the position of area of its own size and the right area of its parents. It's quite ambiguous to say so... Let's see it in an example.

{% highlight html %}
<div style="width: 500px; background-color: yellow;">
    <div style="width: 200px; height: 100px; background-color: red;"></div>
    <div style="width: 100px; height: 50px; background-color: green;"></div>
</div>
{% endhighlight %}

<img src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2014-05-18-dive-into-css-05.png" />

Because the default value of `display` of `<div>` is `block`, here although the total width of the red block and the green one is less than that of the yellow block, the green block is shown below the red one, rather than at the right side of the red one.

> #### DIY

> Use *Inspect Element* of Chrome or *Firebug* of Firefox to see the `width`, `margin` of these elements and the highlighted area when hovering an element in *Inspect Window*.

### `display: inline-block`

We set the `display` property to be `inline-block` to the previous example and now the green block is shown right to the red one, since their total width are less than their parent's width.

{% highlight html %}
<div style="width: 500px; background-color: yellow;">
    <div style="display: inline-block; width: 200px; height: 100px; background-color: red;"></div>
    <div style="display: inline-block; width: 100px; height: 50px; background-color: green;"></div>
</div>
{% endhighlight %}

<img src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2014-05-18-dive-into-css-06.png" />

Please pay attention to how the green block is aligned with the red one.

<blockquote>
<p>If you are wondering about the gap between the elements, see <a href="http://stackoverflow.com/questions/1833734/display-inline-block-extra-margin" target="_blank">StackOverflow: display: inline-block extra margin</a>.</p>

<p>The gap can be easily removed by writing the red and green block in the same line with no space in-between.</p>

{% highlight html %}
<div style="width: 500px; background-color: yellow;">
    <div style="display: inline-block; width: 200px; height: 100px; background-color: red;"></div><div style="display: inline-block; width: 100px; height: 50px; background-color: green;"></div>
</div>
{% endhighlight %}
</blockquote>

### `display: inline`

If we set `display` property to be `inline` to the previous example, we'll see they are *not displayed* at all.

{% highlight html %}
<div style="width: 500px; background-color: yellow;">
    <div style="display: inline; width: 200px; height: 100px; background-color: red;"></div>
    <div style="display: inline; width: 100px; height: 50px; background-color: green;"></div>
</div>
{% endhighlight %}

<img src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2014-05-18-dive-into-css-07.png" />

In fact, we can't say *they are not displayed*. Let's see another example.

{% highlight html %}
<div style="width: 500px; background-color: yellow;">
    <div style="display: inline; width: 200px; height: 100px; background-color: red;">I'm red.</div>
    <div style="display: inline; width: 100px; height: 50px; background-color: green;">I'm green.</div>
</div>
{% endhighlight %}

<img src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2014-05-18-dive-into-css-08.png" />

You see in this example that they are displayed when there's text in them. You can see now that when `display` is set to be `inline`, the element is rendered, but we can't control other properties like `width`, `height`, `margin`, `padding` and etc. any more. You may find it a little confusing, but this is very useful in some cases. For example, we can use `<span style="color: red"></span>` to highlight some content without changing the text's position.

### `display: none`

As we can guess from this code, elements with `display: none` will not be displayed. Why bother writing elements that are not displayed? You may find it extremely helpful when you want to toggle some elements to display and hide.

## `float`

You may probably be familiar with setting an image to float to left or right in *Office Word*. In CSS, you can also float elements to left or right of its parent. But careful! It can be somehow surprising to you.

Basically, you can set `float` of the element to be `left`, `right` or `none` if not to float.

{% highlight html %}
<div style="width: 500px; background-color: yellow;">
    <div style="float: left; width: 200px; height: 100px; background-color: red;"></div>
    <div style="float: right; width: 100px; height: 50px; background-color: green;"></div>
</div>
{% endhighlight %}

<img src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2014-05-18-dive-into-css-10.png" />

Why isn't yellow displayed?

This is because when an element is set to be `float: left` or `float: right`, it's height will be no longer counted when computing its parent's height. So you may need to do as following. See <a href="http://css-tricks.com/almanac/properties/c/clear/" target="_blank">CSS Tricks</a> for more information.

{% highlight html %}
<div style="width: 500px; background-color: yellow;">
    <div style="float: left; width: 200px; height: 100px; background-color: red;"></div>
    <div style="float: right; width: 100px; height: 50px; background-color: green;"></div>
    <div style="clear: both"></div>
</div>
{% endhighlight %}

<img src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2014-05-18-dive-into-css-11.png" />

## `display: inline-block` vs. `float: left`

You may find `display: inline-block` and `float: left` are quite similar in some ways. So how should we choose between them?

The first thing you need to note is that `display: inline-block` align at top vertically, while `float: left` align at bottom.

`display: inline-block`:

<img src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2014-05-18-dive-into-css-06.png" />

`float: left`:

<img src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2014-05-18-dive-into-css-12.png" />

There're posts explained this topic in detail. If you are interested, you can refer to <a href="http://www.ternstyle.us/blog/float-vs-inline-block" target="_blank">Float vs. Inline-Block</a> and <a href="http://www.onderhond.com/blog/inline-block-vs-float" target="_blank">INLINE-BLOCK VS FLOAT / thinking horizontal</a>.

# Conclusion

We talked about some useful CSS properties in this post and most importantly, how to control the position of elements. By the end of this post, you should have learnt how to implement Web designs into code. But practice is extremely important in learning HTML and CSS. You need to be patient and learn bit by bit.

You are welcomed to tell me if you find this series helpful and about how you would like me to improve it to help you learn better.

# Homework

The inspiring news is that you can make Web sites now!

To build a Web site, you should first design what to show and how to display it. Since we haven't talked about how to design yet, in this homework, you are given a design image and your task is to implement the design (including all description in the image).

<img src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2014-05-18-dive-into-css-13.png" />

I suggest you put your code on GitHub and share a link as comment to this post, so that we can discuss more about it.

## Suggested Answer

Here we give a possible solution. You should ask yourself why this is different from your implementation and ask me if you have any wonder. :smiley: You can use <a href="http://jsfiddle.net/" target="_blank">jsFiddle</a> to share your code.

A better way to check this is to <a href="{{ site.url }}/demo/2014-05-18-03-dive-into-css-01.html" target="_blank">run the demo</a> and use *Inspect Element* for information.

{% highlight html %}
<!DOCTYPE html>
<html>
    <head>
        <style type="text/css">
            * {
                /* Don't use default padding and margin.
                 * Check: http://css-tricks.com/margin-0-padding-0-no-longer-cool/
                 */
                padding: 0;
                margin: 0;
                
                box-sizing: border-box;
            }
            
            html, body {
                /* Usually used for one-screen page.
                 * height: 100%; means to set the height to be 100% of its parent's.
                 * Only then, can #left's height: 100% be equal to full window height.
                 * Otherwise, #left's height: 100% will be 0.
                 */
                width: 100%;
                height: 100%;
                
                font-family: Arial;
            }
            
            p {
                font-size: 20px;
                margin: 5px 0; /* top and bottom are 5px while left and right are 0. */
            }
            
            #left {
                background-color: #f00;
                width: 200px;
                height: 100%;
                float: left;
                
                padding: 10px;
                
                /* For #l-bottom to relative to #left, #left should be set to relative
                 * and #l-bottom to absolute. Otherwise, #left will be relative to html.
                 */
                position: relative;
            }
            
            #l-bottom {
                position: absolute;
                bottom: 20px;
                right: 20px;
                
                text-align: right;
            }
            
            #circle {
                background-color: #fff;
                width: 60px;
                height: 60px;
                border-radius: 30px;
                float: right;
            }
            
            #right {
                background-color: #ff0;
                height: 100%;
                margin-left: 200px;
                padding: 20px 50px 20px 20px; /* top right bottom left */
                position: relative;
            }
            
            #r-top {
                background-color: #0f0;
                padding: 10px;
                margin-bottom: 20px;
            }
            
            #title {
                font-size: 50px;
                color: #f00;
                text-align: center;
            }
            
            .center {
                background-color: #0ff;
                width: 30%; /* width 30% each, width margins of 5%. */
                margin-left: 0%;
                height: 160px;
                float: left;
                padding: 10px;
            }
            
            .center+.center {
                /* + selects next element in the same level, which is the second
                 * and the third elements in this case.
                 */
                margin-left: 5%;
            }
            
            #r-bottom {
                position: absolute;
                bottom: 20px;
                /* Note how we set position instead of setting a width */
                left: 20px;
                right: 50px;
                
            }
            
            .r-b {
                padding: 5px;
                margin: 5px 0;
                color: #fff;
                height: 30px;
            }
            
            #r-b1 {
                background-color: #0000ff;
            }
            
            #r-b2 {
                background-color: #ff00ff;
            }
            
        </style>
    </head>
    
    <body>
        <div id="left">
            <p>#f00</p>
            <p>width: 200px</p>
            <div id="l-bottom">
                <p>radius: 65px</p>
                <p>margin: 20px</p>
                <div id="circle"></div>
            </div>
        </div>
        
        <div id="right">
            <div id="r-top">
                <p>#0f0, margin: right: 50px, other: 20px</p>
                <div id="title">Title</div>
                <p>Title: center vertically and horizontally</p>
            </div>
            
            <div id="r-center">
                <div class="center">
                    <p>color: #0ff</p>
                    <p>height: 160px</p>
                </div>
                <div class="center"></div>
                <div class="center"></div>
            </div>
            <p>#ff0, width: window width - 200px</p>
            
            <div id="r-bottom">
                <p>The next two are aligned at bottom, height: 60px</p>
                <div id="r-b1" class="r-b">
                    #0000ff
                </div>
                <div id="r-b2" class="r-b">
                    #0000ff
                </div>
            </div>
        </div>
    </body>
</html>
{% endhighlight %}
