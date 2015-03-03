---
title: Converting To Numbers In JavaScript
time: 2013.10.23 15:56:00
layout: post
tags:
- JavaScript
series: JavaScript Language Feature
excerpt: Sometimes we think someone or something is strange only because we expect differently. `Number()`, `parstInt()` and `parseFloat` are three ways to convert to `Number` type in JavaScript. However, they act differently and may suprise you in some cases. In this post, I would like to talk about what to expect from them and why they act differently.
---

> #### What you will learn in this post

> `Number()`, `parstInt()` and `parseFloat` are three ways to convert to `Number` type in JavaScript. However, they act differently and may suprise you in some cases. In this post, I would like to talk about what to expect from they and why they act differently.

JavaScript is **STRANGE**!

Sometimes we think someone or something is strange only because we expect differently.

So, rather than complaining about how strange JavaScript is, why don't we get to know more about it, and learn what to expect from it? After all, everything and everyone are imperfect in this world, and you can't just abandon them all and be alone by yourself, not to mention that even yourself may seem strange to others. :cry:

# Types In JavaScript

There're five ***primitive types*** in JavaScript, namely `Null`, `Undefined`, `Boolean`, `Number` and `String`. Other than that is the `Object` type, which is called the ***reference type***.

> Primitive values are simple pieces of data that are stored on the stack, which is to say that their value is stored directly in the location that the variable accesses. Reference values, on the other hand, are objects that are stored in the heap, meaning that the value stored in the variable location is a pointer to a location in memory where the object is stored.

> *Professional JavaScript for Web Programmers, Nicholas C. Zakas*

When you assign a variable to be primitive type, the value of the variable on the right side is copied. As for reference type, the reference of the variable on the right side is assign to left one.

{% highlight js %}
var a = 32;
var b = a;
b = 16;
console.log(a); // a is still 32

var a = {
    x: 2,
    y: 3
};
var b = a;
b.x = 4;
console.log(a); // a is {x: 4, y: 3}

b = {           // reference b to another object
    u: 5,
    v: 6
}; 
console.log(a); // a is still {x: 4, y: 3}
{% endhighlight %}

You may be suprised at `String`'s being a primitive type if you are from C++ or some other languages. But in JavaScript, once a `String` is created, it cannot be changed anymore. 

{% highlight js %}
var a = "Hello, ";
a += "World!";
{% endhighlight %}

In the above code, when executing the second line, the previous value `"Hello, "` and the new value `"World!"` are used to create a new `String` object and make `a` reference the concatenated result.

# Convertion Rules

`Number()` is the constructor of `Number` type. With `Number("2.3")`, we can get a number `2.3`. `parseInt()` converts input to an integer, while `parseFloat()` to a float number.

> `+` operator does exactly as `Number()` when converting.

*Professional JavaScript for Web Programmers* described the convertion rules in full but you may find it hard to remember all these rules. So, let's first have a look at them and then I'll explain about it.

> #### `Number()`

> The `Number()` function performs conversions based on these rules:

>- When applied to `Boolean` values, `true` and `false` get converted into `1` and `0`, respectively.
>- When applied to numbers, the value is simply passed through and returned.
>- When applied to `null`, `Number()` returns `0`.
>- When applied to `undefined`, `Number()` returns `NaN`.
>- When applied to strings, the following rules are applied:
>    - If the string contains only numbers, optionally preceded by a plus or minus sign, it is always converted to a decimal number, so `"1"` becomes `1`, `"123"` becomes `123`, and `"011"` becomes `11` (note: leading zeros are ignored).
>    - If the string contains a valid floating-point format, such as `"1.1"`, it is converted into the appropriate floating-point numeric value (once again, leading zeros are ignored).
>    - If the string contains a valid hexadecimal format, such as `"0xf"`, it is converted into an integer that matches the hexadecimal value.
>    - If the string is empty (contains no characters), it is converted to `0`.
>    - If the string contains anything other than these previous formats, it is converted
into `NaN`.
>- When applied to objects, the `valueOf()` method is called and the returned value is converted based on the previously described rules. If that conversion results in `NaN`, the `toString()` method is called and the rules for converting strings are applied.

> #### `parseInt()`

> The `parseInt()` function examines the string much more closely to see if it matches a number pattern.

>- Leading white space in the string is ignored until the first non–white space character is found.
>- If this first character isn't a number, the minus sign, or the plus sign, `parseInt()` always returns `NaN`, which means the
empty string returns `NaN` (unlike with `Number()`, which returns `0`).
>- If the first character is a number, plus, or minus, then the conversion goes on to the second character and continues on until either the end of the string is reached or a nonnumeric character is found. For instance, `"1234blue"` is converted to `1234` because `"blue"` is completely ignored. Similarly, `"22.5"` will be converted to `22` because the decimal is not a valid integer character.
>- Assuming that the first character in the string is a number, the `parseInt()` function also recognizes the various integer formats (decimal, octal, and hexadecimal, as discussed previously). This means when the string begins with `"0x"`, it is interpreted as a hexadecimal integer; if it begins with `"0"` followed by a number, it is interpreted as an octal value.

> #### `parseFloat()`

> The `parseFloat()` function works in a similar way to `parseInt()`, looking at each character starting in position `0`. It also continues to parse the string until it reaches either the end of the string or a character that is invalid in a floating-point number. This means that a decimal point is valid the first time it appears, but a second decimal point is invalid and the rest of the string is ignored, resulting in `"22.34.5"` being converted to `22.34`.

> Another difference in `parseFloat()` is that initial zeros are always ignored. This function will recognize any of the floating-point formats discussed earlier, as well as the decimal format (leading zeros are always ignored). Hexadecimal numbers always become `0`. Because `parseFloat()` parses only decimal values, there is no radix mode. 

> A final note: if the string represents a whole number (no decimal point or only a zero after the decimal point), `parseFloat()` returns an integer.

> *Professional JavaScript for Web Programmers, Nicholas C. Zakas*

OK, I doubt you've read that word by word. :stuck_out_tongue:

Well, you don't have to, because I'm going to explain those confusing rules.

# Learn By Examples

Converting string to number is always the most confusing part for all `Number()`, `parseInt()` and `parseFloat()` methods. Although we can infer that the results of passing `"2.3"` to those functions would be `2.3`, `2`, and `2.3` respectively, we may probably be wrong when things get complicated.

## Float Number

First of all, we want to know when they will return a float number.

> In JavaScript, there's no strict line between an integer and a float number. Numbers are stored as integer if there's no decimal part. So both `console.log(3.0)` and `console.log(3)` output `3`.

It's clear that `parseInt()` always returns an integer if input is legal while float number for `parseFloat()`. But what about `Number()`?

{% highlight js %}
Number("1.2");   // 1.2
Number("2.0");   // 2.0
Number("3");     // 3
{% endhighlight %}

## Unexpected Characters

There are characters which are not expected in a number (e.g.: `"r"` and `"t"` are never expect, while `"e"` may be part of a scientific notion (but not `"ee"`)). `Number()`, `parseInt()` and `parseFloat()` judge them differently and may result in `NaN` (stands for *Not a Number*) or just ignore them. So, let's try them out one by one.

### `"e"`

{% highlight js %}
Number("9.1e3");        // 9100
parseInt("9.1e3");      // 9
parseFloat("9.1e3");    // 9100
{% endhighlight %}

`"9.1e3"` is a legal form of scientific notion, so we *expect* JavaScript gives us the correct answer `9100`. But unfortunately, `parseInt()` surprised us with the output of `9`. I said that we should learn JavaScript better and know what to expect. So let's think about why it gives `9`.

`parseInt()` always returns an integer if the input is legal (in the way it thinks). So a simple implementation is to check from the first character whether is a number. If true, loop until the last character which is a number. So `parseInt("g34")` returns `NaN` and `parseInt("34g")` returns `34`.

It won't check if there's `"e"` for scientific notion. This is another example of <a href="http://www.jwz.org/doc/worse-is-better.html" target="_blank">*Worse is Better*</a>, which argues ***It is more important for the implementation to be simple than the interface***. This makes sense to me. After all, you can still use `Number()` and `parseFloat()` in this case.

> `parseInt()` and `parseFloat()` are similar in that they both ignore from the first illegal character. But `"e"` is illegal to `parseInt()` but legal to `parseFloat()`.

> This may seems a little confusing, but I believe this is because scientific notion is mostly used as float rather than integer.

Now, I'd like to test the case when `"e"` is in an illegal position (as defined in scientific notion).

{% highlight js %}
Number("e3");        // NaN
parseInt("e3");      // NaN
parseFloat("e3");    // NaN

Number("3e");        // NaN
parseInt("3e");      // 3
parseFloat("3e");    // 3
{% endhighlight %}

When `"e"` is at the first position, all of them give `NaN`, which make sense as they're illegal, although the whole story is more complicated than you might think.

When `"e"` is at the last position, however, `parseInt()` and `parseFloat()` returns `3`. It's easy to understand that of `parseInt()`, since we've discussed above. But it may surprise you a little that `parseFloat()` also returns `3`. In this case, `parseFloat()` is different from `Number()` in their judging method. `parseFloat()` checks until the first illegal (which does not include `"e"`) or last character, while the last `"e"` falls in `Number()` is rule of *If the string contains anything other than these previous formats, it is converted into NaN*, as mentioned in *Professional JavaScript for Web Programmers*.

In this way, all results of `"3e"` are the same as that of `"3ee3"` respectively.

### Decimal Point

{% highlight js %}
Number(".3");        // 0.3
parseInt(".3");      // NaN
parseFloat(".3");    // 0.3
{% endhighlight %}

Decimal point (`.`) is legal to `Number()` and `parseFloat()`, but illegal to `parseInt()`. Since there's no legal character before an illegal one, `parseInt()` returns `NaN`. 

If you think this is strange, consider the following case:

{% highlight js %}
Number("2.3");       // 2.3
parseInt("2.3");     // 2
parseFloat("2.3");   // 2.3
{% endhighlight %}

There's nothing magic here. But if you think twice, you would probably find `parseInt()`'s judging algorithm is efficient since it just ignore from the starting illegal character.

Now, what if we abuse decimal point?

{% highlight js %}
Number("2..3");        // NaN
parseInt("2..3");      // 2
parseFloat("2..3");    // 2

Number("2.3.4");       // NaN
parseInt("2.3.4");     // 2
parseFloat("2.3.4");   // 2.3
{% endhighlight %}

Just bear it in mind that `parseInt()` and `parseFloat()` tends to ignore from the first illegal character while `Numbur()` checks them completely.

### Other Characters

Other illegal characters include `"q"`, `"@"`, `"?"` and so on. 

{% highlight js %}
Number("d");            // NaN
parseInt("d");          // NaN
parseFloat("d");        // NaN

Number("2.3d");         // NaN
parseInt("2.3d");       // 2
parseFloat("2.3d");     // 2.3
{% endhighlight %}

I believe you are more confident now.

## Hexadecimal and Octal

<a href="http://stackoverflow.com/questions/2803145/is-there-0b-or-something-similar-to-represent-a-binary-number-in-javascript#answer-2803188" target="_blank">JavaScript does't support numeric literals in binary.</a>

{% highlight js %}
// Hexadecimal
Number("0x11");            // 17
parseInt("0x11");          // 17
parseFloat("0x11");        // 0

// Octal
Number("011");             // 11
parseInt("011");           // 11
parseFloat("011");         // 11
{% endhighlight %}

`"0x11"` is recognized as hexadecimal by `Number()` and `parseInt()`, but as decimal by `parseFloat()` (the leading zero is ignored). `"011"` is not recognized as octal in all cases.

> There is a discrepancy between ECMAScript 3 and 5 in regard to using parseInt() with a string that looks like an octal literal. For example:

>     // 56 (octal) in ECMAScript 3, 0 (decimal) in ECMAScript 5
>     var num = parseInt("070");

> *Professional JavaScript for Web Programmers, Nicholas C. Zakas*

With `parseInt()`, you can set the radix explicitly.

{% highlight js %}
parseInt("010", 2);       // 2
parseInt("010", 3);       // 3
parseInt("010", 8);       // 8
parseInt("010", 16);      // 16
{% endhighlight %}

In general, `Number()` supports hexadecimal but not octal; `parseInt()` recognize in hexadecimal be default but can set the radix explicitly; `parseFloat()` only support decimal form.

# Conclusion

In conclusion, `Number()` checks the whole string so it's more strict than the other two methods. `parseInt()` and `parseFloat()` stop checking and ignore from the first illegal character, although they may have different judgment on whether a character is legal. `Number()` and `parseFloat()` supports scientific notion while `parseInt()` enables you to set radix explicitly.

There's no remarkable advantage over the choice of `Number()`, `parseInt()` and `parseFloat()`. You'd better have more information of your input and output form and then, choose a more suitable one for your situation.

I believe the above hasn't covered all conditions when converting to numbers in JavaScript. But hopefully, it does offer some information on how JavaScript deals with number converting. :yum:
