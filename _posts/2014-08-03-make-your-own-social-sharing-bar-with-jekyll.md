---
title: Make Your Own Social Sharing Bar with Jekyll
time: 2014.08.03 23:29:19
layout: post
tags:
- Jekyll
- ShareLink
- SocialShare
shortUrl: http://goo.gl/6gu1dr
excerpt: From time to time do we need a customerized social sharing bar for our blog, for reasons like to harmonize the appearance of the share link with blog. This post talks about how to use Jekyll to generate static links for blog posts, with no JavaScript or anything difficult involved.
---

> #### What will you learn in this post?

> From time to time do we need a customerized social sharing bar for our blog, for reasons like to harmonize the appearance of the share link with blog. This post talks about how to use Jekyll to generate static links for blog posts, with no JavaScript or anything difficult involved.

# Sharing Service

SNS usually provides sharing service that takes parameters in URL and then generates a sharing post. Take <a href="https://twitter.com" target="_blank">Twitter</a> for example, we can enter the following address in the address bar, <a href="https://twitter.com/intent/tweet?text=hello+world&url=http://google.com" target="_blank">https://twitter.com/intent/tweet?text=hello+world&url=http://google.com</a>. Since I'm logged in as <a href="https://twitter.com/OviliaZhang" target="_blank">@OviliaZhang</a>, I can see something like this.

<img src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2014-08-03-make-your-own-social-sharing-bar-with-jekyll-01.png" />

# Using Jekyll

## Generate Static Link

The following steps are quite clear.

We first get information (e.g. page title, url, and etc.) from Jekyll and then use that to generate static page. For example, in a post layout, I can write the following code.

<script src="https://gist.github.com/Ovilia/906e8a1ed4bfdae5d9a3.js"></script>

## Add Tags

Further more, we can add tags to this post.

Twitter uses tag lists in the URL in the form of `tag=apple,orange,banana`. So we can use `capture` to do this.

<script src="https://gist.github.com/Ovilia/e479e5b17fb2b49a67a4.js"></script>

In each iteration, a tag in `page.tags` is appended to `tagStr` following with a comma.

## Shorten URL

Since Twitter allows at most 140 characters in each tweet, we'd better shorten our post URL, which can be sometimes as long as `http://zhangwenli.com/blog/2014/07/30/04-more-about-css-position/`.

We can use URL shorten services like <a href="https://goo.gl/" target="_blank">https://goo.gl/</a>.

> For Google Plus, however, you may probably want to use original URL rather than shortened one, since it will fail to craw content if you use the shortened URL.

After we get the shortened URL, we should add it to each post.

{% highlight text %}
---
title: Make Your Own Social Sharing Bar with Jekyll
time: 2014.08.03 23:29:19
layout: post
tags:
- Jekyll
- ShareLink
- SocialShare
series: Dive into Web Front-End Programming
shortUrl: http://goo.gl/WtLs40
excerpt: From time to time do we need a customerized social sharing bar for our blog, for reasons like to harmonize the appearance of the share link with our blog. This post talks about how to use Jekyll to generate static links for blog posts, with no JavaScript or anything difficult involved.
---
{% endhighlight %}

Then, in the post layout, we should check if `shortUrl` is `null`, so that we don't have to add `shortUrl` to all of our old posts.

<script src="https://gist.github.com/Ovilia/91e4a71cfed792aae5ec.js"></script>

# Prepare SNS Icons

As we said, we are making our own sharing bar since we want it looks well with our blog style, so you need to make SNS icons to fit with blog.

Icons I used are modified based on the works by Daniel Bruce, Elegant Themes, Freepik, SimpleIcon, Icomoon from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a>, which is a great place to find licensed icons.

# Final Results

Other sharing services are quite similar. I've implemented that of Twitter, Facebook, Google Plus, LinkedIn, and Sina Weibo. Here's the complete code.

<script src="https://gist.github.com/Ovilia/13d261366ad91aecc202.js"></script>

Now, why not share this post with the following buttons? :smiley:
