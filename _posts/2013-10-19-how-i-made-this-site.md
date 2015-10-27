---
title: How I made this site
time: 2013.10.19 21:47:00
layout: post
tags:
- WebDesign
- JavaScript
- CSS
- Project
excerpt: I've re-designed my personal site recently since the old version had too much description words, which is not the best design I could offer as a Web Front-End Designer :smirk:. You may probably find some interesting features at this site (especially the home page), so this post is served as an introduction of how to implement them.
series: How I made ...
---

I've re-designed [my personal site][1] recently since the old version had too much description words, which is not the best design I could offer as a Web Front-End Designer :smirk:. You may probably find some interesting features at this site (especially the [home page][1]), so this post is served as an introduction of how to implement them.

> #### What You Will Learn In This Post

> ##### Shadow Effect

> There's a *Tao*-like image at [home page][1] (you should probably have a look at it if you haven't yet). With mouse moving around, its shadow would move correspondingly with mouse position, which makes your mouse seem like a light source! 

> ##### Paper-like Background

> Background of this post looks like 3 sheets of paper. If you found that interesting, you may learn how to implement it in the following introduction.

Now, let's start to learn how to make this cool site! :yum:

#Shadow Effect

Notice the difference between the following two images. 

<img src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2013-10-19-how-i-made-this-site-1.png" />
<img src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2013-10-19-how-i-made-this-site-2.png" />

I would not regard this amazing without the interaction with mouse moving. But it's a really cool effect when your mouse seems to be a light source.

This can be easily achieved using CSS and a little JavaScript. And now I'm going to explain how to do it.

#### First of all, I Photoshoped two *Tao*-like images.

<img src="{{ site.loadingImg }}" data-src="http://zhangwenli.com/image/tao.png" width="200px" />
<img src="{{ site.loadingImg }}" data-src="http://zhangwenli.com/image/taoWords.png" width="200px" />

Make sure they are of the same size and the second image cover on the first one entirely so that it looks like:

<img src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2013-10-19-how-i-made-this-site-3.png" />

This can be easily achieved by using some simple CSS. Set the CSS of the second image to be `position: relative;` and `top: -400px;`, which means to move the second image `400px` (height of the images) up than its original position.

{% highlight css %}
/* The first image */
#titleTao {
    width: 400px;
    height: 400px;
}

/* The second image */
#titleWords {
    width: 400px;
    height: 400px;
    position: relative;
    top: -400px;
}
{% endhighlight %}

> If you're wondering why we don't just Photoshop the image merged by these two image, that's because only in this way can we change the `opacity` of the second image, which will be explained later.

#### Secondly, add another `div` to be shadow.

We need the `div` to be a circle with the same size with those in the images. So we set its `border-radius` to be the radius of cicles in the images, which is `5 / 6` of `400px`, and its `width` and `height` to be double radius size. The left `1 / 6` can be occupied by `margin`.

We set the `box-shadow` to be `100px 100px 100px #333` now just to check if everything's going on well here.

{% highlight css %}
#titleCircle {
    width: 333px;
    height: 333px;
    border-radius: 176px;
    margin: 33px 0 0 33px;
    position: relative;
    top: -767px;
    box-shadow: 100px 100px 100px #333;
}
{% endhighlight %}
    
#### What's wrong?

Suppose you did everything as was told above, you should probably get something like this:

<img src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2013-10-19-how-i-made-this-site-4.png" />

It seem's that the shadow is slightly way from the images. But the fact is that even the two images are not in the same position, althrough you may not notice this due to the transparent background.

So, what's wrong?

If you're careful enough, you may find that two adjcent images will have a *gap* even if `margin` and `padding` are set to be `0`. This is exactly what caused the problem in our case, and can be settled by setting the `display` attribute of image to be `block`.

Now, we have the gap eliminated:

<img src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2013-10-19-how-i-made-this-site-5.png" />

####Then, add mouse event.

We want to create soft-shadow effect as shown in the following image:

<img src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2013-10-19-how-i-made-this-site-2.png" />

The idea here is to add a mouse move event listener and change the `opacity` to be smaller and shadow `offset` to be larger when mouse position is away from the center of screen. 

Here's how to implement it with jQuery.

We first calculate mouse position in screen with unified `x` and `y`. So top-left corner of the screen is `(-1, -1)` and bottom-right is `(1, 1)`:

{% highlight js %}
$(window).mousemove(function(e) {
    var x = (0.5 - e.clientX / $(window).width()) * 2;
    var y = (0.5 - e.clientY / $(window).height()) * 2;
    // ...
});
{% endhighlight %}
    
Then, calculate `r` to represent distance from center to mouse position. We use `var r = Math.sqrt((x * x + y * y) / 2);` instead of `var r = Math.sqrt((x * x + y * y));` so that `r` is also unified (between `0` and `1`).

We can set the `opacity` to be `1 - r` or, in my case, to be `1 - Math.sqrt(r);`, so that it's non-linear and may offer better effect.

The complete code would be:

{% highlight js %}
$(window).mousemove(function(e) {
    var x = (0.5 - e.clientX / $(window).width()) * 2;
    var y = (0.5 - e.clientY / $(window).height()) * 2;
    var r = Math.sqrt((x * x + y * y) / 2);
    var op = 1 - Math.sqrt(r);
    $('#titleCircle').css({
        'box-shadow': 300 * x + 'px ' + 300 * y + 'px '
            + 300 * r + 'px #333',
        'opacity': op
    });
    $('#titleWords').css({
        'opacity': op
    });
});
{% endhighlight %}

> `$('#titleCircle')` is the circle used as shadow and `$('#titleWords')` is the image with words on it.

# Paper-like Background

#### It's easy to make the background of this post to be *paper-like*.

1) PhotoShop a paper-like image.

<img src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/sketch.png" />

2) Set the background of this post to be this image.

{% highlight css %}
.page {
    background: url(../image/sketch.png);
    background-color: #eee;
}
{% endhighlight %}

3) Add some shadow if you wish.

{% highlight css %}
.page {
    background: url(../image/sketch.png);
    background-color: #eee;
    box-shadow: 0px 0px 10px 5px #666;
}
{% endhighlight %}
    
#### Key step: Add another two sheets with rotation.

`.pageBack` is used for all sheets of paper in the background.

{% highlight css %}
.pageBack {
    width: 100%;
    height: 200px;
    background: url(../image/sketch.png);
    background-color: #eee;
    z-index: -10;
    position: relative;
    box-shadow: 0px 0px 10px 5px #666;
    -webkit-backface-visibility: hidden;
}
{% endhighlight %}

> `-webkit-backface-visibility: hidden;` is used to eliminate the jaggies caused by rotation which works only on webkit platform.

We need another two classes to represent rotation of two sheets:

{% highlight css %}
.rotLeft {
    transform: rotate(5deg);
    -ms-transform: rotate(5deg);
    -webkit-transform: rotate(5deg);
    -moz-transform: rotate(5deg);
    -o-transform: rotate(5deg);
}

.rotRight {
    transform: rotate(-5deg);
    -ms-transform: rotate(-5deg);
    -webkit-transform: rotate(-5deg);
    -moz-transform: rotate(-5deg);
    -o-transform: rotate(-5deg);
}
{% endhighlight %}
    
Now, with HTML

{% highlight html %}
<div class="rotLeft rotTop pageBack"></div>
<div class="rotRight rotTop pageBack"></div>
<div class="page">
    <!-- content here -->
</div>
<div class="rotLeft rotBottom pageBack"></div>
<div class="rotRight rotBottom pageBack"></div>
{% endhighlight %}
    
we can get:

<img src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2013-10-19-how-i-made-this-site-6.png" />

To make it look better, we would like to move the sheets in the background a little.

{% highlight css %}
.rotTop.rotLeft {
    left: 10px;
}

.rotTop.rotRight {
    left: -10px;
}
{% endhighlight %}

Now, we can get an elegant effect:

<img src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2013-10-19-how-i-made-this-site-7.png" />

# More About My Blog

I use [GitHub][5] to host my blog and I don't have any database which can be accessed all the time. So I decide to build a static blog. After some research, I chose [Jekyll][6] out of its competitors, due mostly to its close relation to GitHub.

There're many good posts about how to set up a blog with Jekyll and GitHub, and I'm not going to dive into it. For those who want to know about this, I would recommend *Andrew Munsell*'s article [Learning Jekyll By Example: Build a Jekyll Website, Start to Finish][7].

[StackEdit][15] is used to edit my posts and [emojify.js][14] is used to interprete emotion expressions like `:smiley:` into :smiley:.

I'm going to write more about Web Front-End technology and possibly some other interesting topics (e.g.: Face Detection and Machine Learning). Hope it can be helpful for you! :blush:

  [1]: http://zhangwenli.com
  [4]: https://github.com/hassankhan/emojify.js
  [5]: https://github.com
  [6]: http://jekyllrb.com
  [7]: http://www.andrewmunsell.com/tutorials/jekyll-by-example/
  [14]: https://github.com/hassankhan/emojify.js
  [15]: http://benweet.github.io/stackedit/
