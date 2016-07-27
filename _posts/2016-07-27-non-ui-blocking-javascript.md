---
title: Non UI-Blocking JavaScript
time: 2016.07.27 13:44:48
layout: post
tags:
- JavaScript
excerpt: JavaScript often behaves like a multi-thread language with it's event-based nature. But it's not. In this post, I'm talking about how to prevent blocking UI when doing some heavy work in JavaScript.
---

JavaScript often behaves like a multi-thread language with it's event-based nature.

But it's not.

John Resig, author of *Secrets of JavaScript Ninja*, explained [how timers work in JavaScript](http://ejohn.org/blog/how-javascript-timers-work/).

Of course, you may use [Web Works](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) to do the labor. But it's [support situation](http://caniuse.com/#search=worker) is quite a drawback.

In this post, I'm talking about how to prevent blocking UI when doing some heavy work in JavaScript.

# A Naïve Version

We have some job that cannot be paused, called `doHeavyJob` in this case. During the job, however, we want to know how many loops have be run. So we update the content of a log `<div>` in each loop, after a turn of `doHeavyJob` is done.

This is what may probably come to our mind by intuition.

{% highlight html %}
<div id="log"></div>
{% endhighlight %}

{% highlight js %}
var logPanel = document.getElementById('log');
function log(txt) {
  logPanel.innerHTML += txt + ', ';
  console.log(txt);
}

for (var i = 0; i < 100; ++i) {
    doHeavyJob();
    log(i); // update UI in each loop
}

function doHeavyJob() {
  for (var j = 0; j < 10000000; ++j) {
    Math.random();
  }
}
{% endhighlight %}

If you open console, you should find log information is printed with each loop of `i`, but DOM is not updated until all 100 loops are finished.

Since JavaScript is single-thread, UI shares the same thread with logic. So how should we tell the logic to stop some time for UI to update?

# An Attempt with `setTimeout`

With `setTimeout(func, 0)`, we can tell JavaScript to execute a function immediately once it's free from previous work.

Guess how this may work?

{% highlight js %}
for (var i = 0; i < 100; ++i) {
    doHeavyJob();

    (function (i) {
        setTimeout(function() {
            log(i);
        }, 0);
    })(i);
}
{% endhighlight %}

Hopefully, you won't get too surprised to see the `(function (i) { ... })(i)` part. It's a [Immediately-Invoked Function Expression (IIFE)](http://benalman.com/news/2010/11/immediately-invoked-function-expression/) to make sure `i` remains expected after the `for` loop ends.

Anyway, this attempt expects `setTimeout` to *create a new thread* to update DOM, and keeps `doHeavyJob` running alongside.

But as we talked above, **there won't be a new thread after all**.

What happens here is that, `setTimeout` is called in each loop, and `function() { log(i); }` is pushed into a queue to be executed once it's free.

And when will it be free?

The answer is, after 100 loops of `doHeavyJob`. So, DOM is updated only after that.

# Another Attempt with `setTimeout`

This time, we put `doHeavyJob` into another `setTimeout`.

{% highlight js %}
for (var i = 0; i < 100; ++i) {
    setTimeout(function() {
        doHeavyJob();
    }, 0);
  
    (function (i) {
        setTimeout(function() {
            log(i);
        }, 0);
    })(i);
}
{% endhighlight %}

It works in a way that a group of `i`'s are printed at the same time after interval. This is because the `setTimeout` of `doHeavyJob` gives chances for others to execute, which includes DOM updating.

# More Aggressively?

For some cases, we want to know more than a rough impression of progress bar. In this case, you may add a `pause` and `resume` function for `heavyJob` so as to break the elephant into pieces. And there should be a consideration over the balance between the accuracy of progress and the overall efficiency.
