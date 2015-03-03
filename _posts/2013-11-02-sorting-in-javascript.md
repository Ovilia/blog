---
title: Sorting In JavaScript
time: 2013.11.02 14:39:00
layout: post
tags:
- JavaScript
series: JavaScript Language Feature
excerpt: How JavaScript <code>Array.prototype.sort</code> behaviors and what you should be careful with when you use it.
---

Method of sorting an array is defined in `Array.prototype.sort`. So in most cases, you don't have to think about how to implement a sort algorithm when writing in JavaScript. But you still need to be careful when you use it, since JavaScript is fragile. :disappointed:

# What's The Problem?

JavaScript provides sorting method for `Array` type, so that you don't have to write it by yourself.

Don't celebrate too early! JavaScript may not behave in the way you think it should. :fearful:

{% highlight js %}
var colors = ['red', 'green', 'blue', 'yellow', 'white'];
console.log(colors.sort());    // ["blue", "green", "red", "white", "yellow"]
console.log(colors);           // ["blue", "green", "red", "white", "yellow"]
{% endhighlight %}

Two things we can know from the above example are: Firstly, `String` type is sorted in an alphabetic order. Secondly, `sort()` method changes the original array rather than generating a new array.

But it's not sorted in *an alphabetic order* in fact.

{% highlight js %}
var colors = ['red', 'green', 'blue', 'Yellow', 'White'];
console.log(colors.sort());    // ["White", "Yellow", "blue", "green", "red"]
{% endhighlight %}

It compares by each character's <a href="http://www.asciitable.com/" target="_blank">ASCII code</a> so that uppercase letters are always *smaller* than lowercase ones.

Another thing you need to be careful with is when you sort an array with numbers.

{% highlight js %}
var money = [12, 3, 7.4, 200];
console.log(money.sort());    // [12, 200, 3, 7.4]
{% endhighlight %}

:open_mouth: Surprise?

# Why

By default, the `sort()` method converts *everything* into `String` and then compares letter by letter. You may wonder why JavaScript isn't smart enough to tell this is an array of numbers and then sort it by numbers' value.

But if you think twice, you may find that an array can contain different types in JavaScript, so what do you expect to get from the following sorted array?

{% highlight js %}
var everything = ['Red', '$200', 'white', 7.4, 12, true, 0.3, false];
console.log(everything.sort());
{% endhighlight %}

Although I doubt it's a good idea to put all these different types together in an array, this is totally legal in JavaScript. If you think `12` should be thought as *larger* than `7.4`, then, how to sort the whole array?

OK. Here's how JavaScript deals with it: Convert to `String` and compare letter by letter in ASCII code order. So `true` is converted to `"true"` and `false` is converted to `"false"` when comparing.

{% highlight js %}
var everything = ['Red', '$200', 'white', 7.4, 12, true, 0.3, false];
console.log(everything.sort()); 
// ["$200", 0.3, 12, 7.4, "Red", false, true, "white"]
{% endhighlight %}

# Comparing Function

Sorting arrays with numbers only is still a very common need. So how can I sort them by comparing numbers' value?

Pass a comparing function to it!

## Comparing Numbers

{% highlight js %}
var money = [12, 3, 7.4, 200];
var compare = function(a, b) {return a - b;};
console.log(money.sort(compare)); // [3, 7.4, 12, 200]
{% endhighlight %}

Now, you get what you wanted. :grinning: 

What happens here is that `compare` function takes two element and returns a negative number if `a` is smaller than `b`, `0` if `a` is equal to `b`, a positive number if `a` is larger than `b`.

## Comparing Objects

Comparing function is also useful when we compare objects. Let's say that we want to sort people by their `id` rather than their `name`, we can define a function to compare people by `id`.

{% highlight js %}
var people = [{
    name: 'Alice',
    id: 1234
}, {
    name: 'Bob',
    id: 567
}];
var compare = function(a, b) {return a.id - b.id;}
console.log(people.sort(compare)); // Bob is before Alice now
{% endhighlight %}

## Compare Everything

What if we sort `everything` with `compare`?

{% highlight js %}
var everything = [4, 'Red', '$200', 'white', 7.4, 12, true, 0.3, false];
var compare = function(a, b) {return a - b;};
console.log(everything.sort(compare)); 
{% endhighlight %}

Chrome and Opera: `[4, "Red", "$200", "white", false, 0.3, true, 7.4, 12]`; 

Firefox: `[false, 0.3, true, 4, "Red", "$200", "white", 7.4, 12]`; 

IE: `["Red", "$200", false, 0.3, true, 4, "white", 7.4, 12]`.

This is so weird! :scream:

When comparing, `a - b` is calculated in `compare` so that every element in `everything` is converted to `Number` when comparing and then do the minus operation. As `Number('Red')`, `Number('$200')` and `Number('white')` give `NaN` all, comparing function `compare` returns `NaN` when they compare to any other element. With the existance of this `NaN`, the behavior of `Array.prototype.sort` is not defined in the <a href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.11" target="_blank">ECMA Specification</a>, so it depends on each platform's implementation.

> Calling `comparefn(a,b)` always returns the same value `v` when given a specific pair of values `a` and `b` as its two arguments. Furthermore, `Type(v)` is `Number`, and `v` is not `NaN`. Note that this implies that exactly one of `a <CF b`, `a =CF b`, and `a >CF b` will be true for a given pair of a and b.

> <a href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.11" target="_blank">*ECMA 262 Specification*</a>

The lesson learned here is that the behavior of sorting with a comparing function that will return `NaN` is unpredictable and you should be careful when choosing a suitable comparing function. Again, it's not a good idea to put everything with different types all together in the same array.
