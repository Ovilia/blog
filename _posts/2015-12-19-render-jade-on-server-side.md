---
title: Jade <code>renderFile</code>
time: 2015.12.19 19:02:09
layout: post
tags:
- Jade
- JavaScript
- Node
- ExpressJs
excerpt: This post introduces how to set file path when using <code>renderFile</code> of Jade.
---

One thing you need to keep in mind when using Jade is that it is a template that renders HTML on the server side. In some cases, we need to use the template for contents loaded with AJAX requests. Although a more popular solution would be returning JSON data and having it rendered on the client side using frameworks like Angular.js, here we choose to render it on the server side using Jade.

To do this, you should first install <a href="https://www.npmjs.com/package/jade" target="_blank">jade</a> with npm, and require it where needed. Jade provides a function called `renderFile` to render with a Jade file.

But it gets confusing when setting the path of the Jade file. Say, if we have a jade file called `hello.jade` under `views` directory

{% highlight text %}
h1 Hello, #{name}.
{% endhighlight %}

and a js file under `app/routes` directory

{% highlight js %}
var jade = require('jade');

jade.renderFile(
    'views/hello.jade', {
        name: 'Xianzhe'
    }, function(err, html) {
        if (err) {
            res.status(500).send('Fail to render.');
        } else {
            res.send(html);
        }
    }
);
{% endhighlight %}

Note that the file path has to be `views/hello.jade`, rather than `hello.jade` or `../../views/hello.jade`.

The final result would be

{% highlight html %}
<h1>Hello, Xianzhe.</h1>
{% endhighlight %}
