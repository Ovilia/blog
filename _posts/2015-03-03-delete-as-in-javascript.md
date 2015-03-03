---
title: Delete As In JavaScript
time: 2015.03.03 20:16:04
layout: post
tags:
- JavaScript
series: JavaScript Language Feature
excerpt: Something you may not know about JavaScript delete.
---

> The delete operator removes a property from an object. Its single operand should be a property access expression.

> *JavaScript: The Definitive Guide, 6th Edition*

`delete` is used to remove a properpty from an object.

{% highlight js %}
var a = {x: 2, y: 3};
delete a.x; // Returns true; `a` is changed to be {y: 3}
{% endhighlight %}

But there are circumstances that we may expect the wrong result from it. Here's what *JavaScript: The Definitive Guide* tells us.

<blockquote>
<p>A <code>delete</code> expression evaluates to <code>true</code> if the delete succeeded or if the delete had no effect (such as deleting a nonexistent property). <code>delete</code> also evaluates to <code>true</code> when used (meaninglessly) with an expression that is not a property access expression:</p>

{% highlight js %}
o = {x:1};         // o has own property x and inherits property toString
delete o.x;        // Delete x, and return true
delete o.x;        // Do nothing (x doesn't exist), and return true
delete o.toString; // Do nothing (toString isn't an own property), return true
delete 1;          // Nonsense, but evaluates to true
delete a.x;        // returns true and `a` is changed to be {y: 3}
{% endhighlight %}

<p><code>delete</code> does not remove properties that have a configurable attribute of <code>false</code>. (Though it will remove configurable properties of nonextensible objects.) Certain properties of built-in objects are nonconfigurable, as are properties of the global object created by variable declaration and function declaration. In strict mode, attempting to delete a nonconfigurable property causes a TypeError. In non-strict mode (and in ECMAScript 3), <code>delete</code> simply evaluates to <code>false</code> in this case:</p>

{% highlight js %}
delete Object.prototype; // Can't delete; property is non-configurable
var x = 1;               // Declare a global variable
delete this.x;           // Can't delete this property
function f() {}          // Declare a global function
delete this.f;           // Can't delete this property either
{% endhighlight %}

<p><em>JavaScript: The Definitive Guide, 6th Edition</em></p>
</blockquote>

As mentioned several times above, what is *configurable*?

> The *configurable* attribute controls at the same time whether the property can be deleted from the object and whether its attributes (other than writable) can be changed.

> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#Configurable_attribute" target="_blank">*Object.defineProperty() - JavaScript | MDN*</a>

Be careful when deleting on global objects. Here are some interesting results that may be confusing.

{% highlight js %}
// In global scope
var x = 1;  delete this.x; // Returns false;
y = 1;      delete this.y; // Returns true;
this.z = 1; delete this.z; // Returns true;

var x = 1;  delete x;      // Returns false;
y = 1;      delete y;      // Returns true;
this.z = 1; delete z;      // Returns true;
{% endhighlight %}

Why? How is `x` different from `y` in this case?

We know that `y`, an undeclared variable can be used in almost the same way like declared variables like `x`. Then, how are they different in this case?

<a href="http://stackoverflow.com/users/1306809/matt-coughlin" target="_blank">Matt Coughlin</a> gives a very clear <a href="http://stackoverflow.com/questions/15985875/effect-of-declared-and-undeclared-variables#answer-16007360" target="_blank">answer</a> to this question, which I'd suggest reading. To be brief, for declared global variables, the *configurable* attribute is `false`. For undeclared global variables, it's `true`. And properties can be deleted only when it's `configurable` attribute is `true`.
