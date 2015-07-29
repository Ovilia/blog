---
title: JavaScript Function Arguments Assignment
time: 2015.07.29 09:30:22
layout: post
tags:
- JavaScript
excerpt: This post introduces what happens when you assign new values to arguments fo a function. <code>arguments</code> is a special variable passed to all functions so that <em>actual parameters</em> are accessible even when they are not declared as <em>formal parameters</em>.
---

`arguments` is a special variable passed to all functions so that *actual parameters* are accessible even when they are not declared as *formal parameters*.

{% highlight js %}
function a() {
    console.log(arguments[0], arguments[1]); // a b
}
a('a', 'b');
{% endhighlight %}

In most cases, `arguments` is an alias name for formal parameters.

{% highlight js %}
function a(x, y) {
    x = 1;
    arguments[1] = 2;
    console.log(arguments[0], arguments[1], x, y); // 1 2 1 2
}
a('a', 'b');
{% endhighlight %}

Here's how it goes interesting.

{% highlight js %}
a('a', undefined); // 1 2 1 2
a('a');            // 1 2 1 undefined
{% endhighlight %}

When an actual parameter is not passed to the function, its behavior is not exactly the same as passing an `undefined`. A more profound explanation under the hood should be given once I knew more about JavaScript.
