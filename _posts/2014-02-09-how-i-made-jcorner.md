---
title: How I made jCorner
time: 2014.02.09 22:08:18
layout: post
tags:
- CSS
- jQuery
- JavaScript
- Project
excerpt: In this post, I'm going to explain how to make <a href="http://zhangwenli.com/jCorner" target="_blank">jCorner</a>, a jQuery plugin to create paper folding effect at the bottom-right corner.
series: How I made ...
---

> #### What You Will Learn In This Post

> In this post, I'm going to explain how to make <a href="http://zhangwenli.com/jCorner" target="_blank">jCorner</a>, a jQuery plugin to create paper folding effect at the bottom-right corner.

<img src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2014-02-09-how-i-made-jcorner-1.png" />

<a href="http://zhangwenli.com/jCorner" target="_blank">jCorner</a> is a jQuery plugin to create paper folding effect at the bottom-right corner, as shown above.

I used *CSS Border tricks* to make this, without using any image. So, we can use this plugin to create foldered corner of any size.

#CSS Border

CSS Border is an attribute that even beginners of Web programmers are familiar with. We use styles like `border: 1px solid #f00;` to create borders everywhere.

Now, CSS Border has a new use to us.

<a href="http://jonrohan.me/guide/css/creating-triangles-in-css/" target="_blank">Jonrohan</a> explained in detail how to use this trick to create triangles. The main idea is to create an element of `width: 0; height: 0;` and set the width of four borders respectively and thus creating four triangles.

<div style="border-color: red green blue orange; border-style:solid; border-width:25px 10px 15px 30px; width:0; height:0;"></div>

{% highlight css %}
.css-arrow-acute {
    border-color: red green blue orange;
    border-style: solid;
    border-width: 25px 10px 15px 30px;
    width: 0;
    height: 0;
}
{% endhighlight %}

#Divide-and-Conquer

<div style="width: 200px; height: 100px; background-color: #11A7FC; position: relative;">
    <div class="jCorner" style="position: absolute; bottom: 0; right: 0; width: 50px; height: 25px;">
        <div class="jCorner_left" style="width: 0; height: 0; border-color: transparent transparent #999 transparent; border-width: 0 0 25px 25px; border-style: solid; float: left; z-index: 10; opacity: 0.6;"></div>
        <div class="jCorner_right" style="width: 0; height: 0; border-width: 0 0 25px 25px; border-color: transparent transparent #eee transparent; border-style: solid; float: left;"></div>
        <div class="jCorner_center" style="border-width: 25px 25px 0 0; left: 25px; top: -25px; border-color: #fff transparent transparent transparent; width: 0; height: 0; position: relative; float: left; z-index: 10; opacity: 0.6; border-style: solid;"></div>
    </div>
</div>

In order to generate paper folding effect as shown above, we need to divide them into three triangles and then use CSS Border to create them all.

##`.jCorner`

First, we create a div `<div class="jCorner"></div>` to be positioned at the bottom-right coner, which will later be the root of our foldering corner elements.

Suppose each triangle's right-angle sides are of `25px`, then, width and height of `.jCorner` should be set to `width: 50px; height: 25px;`. 

In order to make it at the bottom-right part of its parent, we had to set `position` of its parent (the one with blue blackground) to be `relative`. And then set `position` of `.jCorner` to be `absolute`, and `bottom: 0; right: 0;`.

{% highlight css %}
.jCorner {
    position: absolute; 
    bottom: 0; 
    right: 0; 
    width: 50px; 
    height: 25px;
}
{% endhighlight %}

`.jCorner` has three children representing three triangles.

{% highlight html %}
<div class="jCorner">
    <div class="jCorner_left"></div>
    <div class="jCorner_right"></div>
    <div class="jCorner_center"></div>
</div>
{% endhighlight %}

That's all we need to do with `.jCorner`.

##`.jCorner_left`

We use the CSS Border tricks to create triangls, as talked before.

{% highlight css %}
.jCorner_left {
    width: 0; 
    height: 0; 
    border-color: transparent transparent #999 transparent; 
    border-width: 0 0 25px 25px; 
    border-style: solid; 
    float: left; 
    z-index: 10; 
    opacity: 0.6;
}
{% endhighlight %}

##`.jCorner_right`

Watch carefully and you may find that `.jCorner_left` and `.jCorner_right` are of the same direction and only differ in color.

{% highlight css %}
.jCorner_right {
    width: 0; 
    height: 0; 
    border-color: transparent transparent #eee transparent; 
    border-width: 0 0 25px 25px; 
    border-style: solid; 
    float: left;
}
{% endhighlight %}

##`.jCorner_center`

`.jCorner_center` is a little bit different from the former two. Pay attention to the difference with border attributes.

{% highlight css %}
.jCorner_center {
    border-width: 25px 25px 0 0; 
    left: 25px; 
    top: -25px; 
    border-color: #fff transparent transparent transparent; 
    width: 0;
    height: 0; 
    position: relative; 
    float: left; 
    z-index: 10; 
    opacity: 0.6; 
    border-style: solid;
}
{% endhighlight %}

By now, we can create folding effect completely. Next, we need to make a jQuery plugin, which can set the size and more.

#jQuery Plugin

This is the second jQuery plugin I wrote. Last year, I wrote <a href="http://01org.github.com/jWebAudio/" target="_blank">a jQuery plugin for Web Audio</a>, so it's easy for me to pick it up a year later.

jQuery official site provides <a href="http://learn.jquery.com/plugins/basic-plugin-creation/" target="_blank">a good example</a> to start.

For jCorner, it's quite simple to implement. The idea is to generate a string to append to the parent element. Don't forget to set `position` of the parent to be `relative`.

{% highlight js %}
(function($) {
    $.fn.jCorner = function(options) {
        return this.each(function() {
            var settings = $.extend({
                size: 40,
                id: undefined,
                link: undefined,
                background: '#fff' 
            }, options);

            var id = settings.id === undefined ? '' : ' id="' 
                    + settings.id + '"';
            var a_start = settings.link === undefined ? '' : '<a href="'
                    + settings.link + '" target="_blank">';
            var a_end = settings.link === undefined ? '' : '</a>';
            var element = '<div' + id + ' class="jCorner" style="width: '
                    + settings.size * 2 + 'px; height: ' + settings.size
                    + 'px;">' + a_start
                    + '<div class="jCorner_left" style="border-width: 0 0 '
                    + settings.size + 'px ' + settings.size 
                    + 'px;"></div><div class="jCorner_square" '
                    + 'style="border-width: 0 0 ' + settings.size + 'px '
                    + settings.size 
                    + 'px; border-color: transparent transparent ' 
                    + settings.background 
                    + ' transparent;"></div><div class="jCorner_right" '
                    + 'style="border-width: ' + settings.size + 'px ' 
                    + settings.size + 'px 0 0; left: ' + settings.size 
                    + 'px; top: -' + settings.size + 'px;"></div>' 
                    + a_end;

            return $(this).append(element).css('position', 'relative');
        });
    }
}(jQuery));

{% endhighlight %}

<a href="https://github.com/Ovilia/jCorner" target="_blank">View on GitHub</a>
