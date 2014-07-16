---
title: Jekyll Related Posts without Plugin
time: 2014.07.15 22:57:38
layout: post
tags:
- Jekyll
- Liquid
- GitHub
- Ruby
excerpt: This post introduces how to implement *related posts* function with Jekyll. Since GitHub disables plugin for security reasons, plugins like <a href="https://github.com/LawrenceWoodman/related_posts-jekyll_plugin" targe="_blank">LawrenceWoodman / related_posts-jekyll_plugin</a> cannot be used. Default `site.related_posts` may return recent posts when there aren't enough posts sharing the same tags with current post.
---

> #### What will you learn in this post?

> This post introduces how to implement *related posts* function with Jekyll. Since GitHub disables plugin for security reasons, plugins like <a href="https://github.com/LawrenceWoodman/related_posts-jekyll_plugin" targe="_blank">LawrenceWoodman / related_posts-jekyll_plugin</a> cannot be used. Default `site.related_posts` may return recent posts when there aren't enough posts sharing the same tags with current post.

# Jekyll's Native Support

Jekyll has native support for related posts function, which can be used with Liquid as `site.related_posts`.

However, as we can see from its <a href="https://github.com/jekyll/jekyll/blob/df8458275de4dc3d0f9b92c5247ff20832d1cc8e/lib/jekyll/related_posts.rb" target="_blank">source code</a>, it lists posts with mutual tags without ordering by how many mutual tags they share. In this way, if `A` post is tagged with `a`, `b` and `c`, `B` post is tagged with `a` and `C` post is tagged with `a` and `c`, `A`'s related posts may contain only `B` but not `C` if you set the limit to be `1`. Apparently, this doesn't make sense.

# Using Plugin

<a href="https://github.com/LawrenceWoodman/related_posts-jekyll_plugin" targe="_blank">LawrenceWoodman / related_posts-jekyll_plugin</a> is an easy-to-use Jekyll plugin to implement *related posts* feature.

It solves the above problem by calculating how many mutual tags they share and sort by it, as we can see from the <a href="https://github.com/LawrenceWoodman/related_posts-jekyll_plugin/blob/master/_plugins/related_posts.rb" target="_blank">source code</a> below.

{% highlight ruby %}
def related_posts(posts)
    return [] unless posts.size > 1
    highest_freq = Jekyll::Post.tag_freq(posts).values.max
    related_scores = Hash.new(0)
    posts.each do |post|
        post.tags.each do |tag|
            if self.tags.include?(tag) && post != self
                cat_freq = Jekyll::Post.tag_freq(posts)[tag]
                related_scores[post] += (1+highest_freq-cat_freq)
            end
        end
    end

    Jekyll::Post.sort_related_posts(related_scores)
end
{% endhighlight %}

But just as the default Jekyll behaves, it returns recent posts if there aren't enough posts sharing the same tags. I think this doesn't make sense. After all, why should a post called `How to become a good programmer` be related to `I was bitten by a bug yesterday` just because there are no other related posts?

So, I improved it with the following code and <a href="https://github.com/Ovilia/related_posts-jekyll_plugin/commit/4562de1b048a5dbce5f533d343be30254427160e" target="_blank">pulled a request</a>.

{% highlight ruby %}
related_scores.each do |post, score|
    if score < 0
        related_scores.delete(post)
    end
end
{% endhighlight %}

I have almost no experience with Ruby, but this isn't too hard for me.

# Without Plugin

After I've done with the previous improvement and pushed my blog code to GitHub with joy, I found it didn't word! :scream:

I thought it was the cache, but it still doesn't change when I tried to clear the cache and even visit it using a different browser and a different device.

Finally, I realized that this is caused by GitHub's disabling plugins for security concerns. I knew this before, but didn't know that this is the reason I was looking for.

Then, I improved the default one and return only those with mutual tags. It still cost me much time, since the syntax of Liquid is so strange! :weary:

<script src="https://gist.github.com/Ovilia/ea95e762544d84f00281.js"></script>

You can't use `!abc` to check if `abc` is `false`. Instead, you should use `abc == false`.

You can't use `abc++` or even `abc = abc + 1` to increment a variable. Instead, you should use something as strange as {% capture abc %}{{ abc }}*{% endcapture %} appending a character `*` at a time, and then check `abc.size` to get its length as a string and this is how you increment a variable! :joy: But, believe me, this is not the strangest syntax when you use Liquid.

Who can tell me why this syntax is so strange!
