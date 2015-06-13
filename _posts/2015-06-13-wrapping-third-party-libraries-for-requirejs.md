---
title: Wrapping Third-Party Libraries for RequireJS
time: 2015.06.13 22:42:58
layout: post
tags:
- JavaScript
- RequireJS
series: Polyvia
excerpt: Third-Party libraries sometimes come without <a href="http://requirejs.org/docs/whyamd.html" target="_blank">AMD</a> version. This post introduces a method to wrap them using *<a href="http://www.requirejs.org/docs/api.html#config-shim" target="_blank">shim</a>*. I'm going to take <a href="https://github.com/mrdoob/three.js" target="_blank">Three.js</a> as example.
---

> RequireJS is a JavaScript file and module loader. It is optimized for in-browser use, but it can be used in other JavaScript environments, like Rhino and Node. Using a modular script loader like RequireJS will improve the speed and quality of your code.

> From *<a href="http://requirejs.org/" target="_blank">RequireJS</a>*

Third-Party libraries sometimes come without <a href="http://requirejs.org/docs/whyamd.html" target="_blank">AMD</a> version. This post introduces a method to wrap them using *<a href="http://www.requirejs.org/docs/api.html#config-shim" target="_blank">shim</a>*. I'm going to take <a href="https://github.com/mrdoob/three.js" target="_blank">Three.js</a> as example. The file structure is shown below. `three.js` and `three.EdgeShader.js` are required in `A.js`, and the later of which depends on the former one.

{% highlight text %}
index.html
    /vendor
        three.js
        three.EdgeShader.js
    /src
        /js
            A.js
{% endhighlight %}

In `index.html`, we use shim for `three` and `threeEdge`. The `deps` attribute of `threeEdge` denotes the dependence on `three`, and `exports` makes `THREE` and `THREE.EdgeShader` accessible elsewhere.

{% highlight js %}
require.config({
    baseUrl: './src/js',
    paths: {
        'three': '../../vendor/three',
        'threeEdge': '../../vendor/three.EdgeShader',
    },
    shim: {
        'three': {
            exports: 'THREE'
        },
        'threeEdge': {
            deps: ['three'],
            exports: 'THREE.EdgeShader'
        }
    }
});
{% endhighlight %}

In `A.js`, they can be accessed by calling `require('three')` and `require('threeEdge')`.

{% highlight js %}
var THREE = require('three');
THREE.EdgeShader = require('threeEdge');
{% endhighlight %}
