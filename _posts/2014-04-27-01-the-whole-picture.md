---
title: 01 - The Whole Picture
time: 2014.04.27 19:38:20
layout: post
tags:
- WebDesign
- Tutorial
- HTML
- CSS
- JavaScript
- jQuery
series: Dive into Web Front-End Programming
shortUrl: http://goo.gl/zeVQhk
excerpt: In this post, we introduced what HTML, CSS and JavaScript are and how they can work together. HTML files define the content of Web pages, CSS the style, and JavaScript the interaction. 
---

**Ideally, HTML files define the content of Web pages (text, image, video, etc.), CSS the style (how they look like), and JavaScript the interaction (e.g., what happens when user clicks the button). ** 

The three of them are designed to be decoupled. But the limitation of them makes it sometimes difficult for us to stick on this golden rule. For example, in some cases, we have to use JavaScript to help change the style because CSS cannot do it. This is bad, but sometimes inevitable. :disappointed:

Before we start, one thing you should always bear it in mind that **never use JavaScript if the effect can be achieved with CSS!** :star2:

You should first have a look at <a href="{{ site.url }}/2014/04/27/00-about-this-series/">the introduction of this series</a> if you haven't.

#HTML

> #### What is HTML?

> *HTML* or *HyperText Markup Language* is the standard markup language used to create web pages.

> HTML is written in the form of HTML elements consisting of tags enclosed in angle brackets (like `<html>`). HTML tags most commonly come in pairs like `<h1>` and `</h1>`, although some tags represent empty elements and so are unpaired, for example `<img>`. The first tag in a pair is the start tag, and the second tag is the end tag (they are also called opening tags and closing tags).

> <a href="http://en.wikipedia.org/wiki/HTML" target="_blank">*From Wikipedia*</a>

##Hello, world!

Generally speaking, the least thing you need for a Web page is an HTML file.

> 1. Create a text file (e.g.: `hi.txt`)
> 2. Edit the content of the file to be `Hello, world!` in your favorite text editor.
> 3. Rename the file with suffix `.html` (e.g.: `hi.html`)
> 4. Open the file with Web browser (e.g.: Chrome, IE)

You should see `Hello, world!` in the Web browser. 

Yes! That's your first Web page! Easy! Right? :satisfied:

> If you are wondering how can this be a Web page, then... 

> Congratulations! Curiosity is one of the most important things to learn Web programming, as well as to learn anything else. Keep ask questions. You may write down them and see if you can answer them by yourself after some time. If not, you're welcomed to email me@zhangwenli.com!

> Here's the explanation. A *Web page* is a plain text file, which means it doesn't have format, like font or color, and everything matters is its content. You may know that an HTML should have tags like `<html>` and `<body>`. But our Web browsers are smart enough to know how to render the page without them.

> This is only a demonstration to show how simple a Web page can be. You should always use tags like `<html>` and `<body>` in real situation.

##A typical Web page

A typical HTML file looks like:

{% highlight html %}
<!DOCTYPE html>
<html>
	<head>
	</head>

	<body>
		Hello, world!
	</body>
</html>
{% endhighlight %}

Change the content of `hi.html` to be the above code and open it in a browser, you'll find the result is the same as the previous example. But this is a standard way to put it.

> `<!DOCTYPE html>` tells the browser that this file should be rendered as an HTML, which always appears in the first line in an HTML file. Although browsers don't rely on it to know it's an HTML, it's always a good habit to write this explicitly.

`<html></html>`, `<head></head>` and `<body></body>` in the above example are called *tags*, which usually appear in pairs. With tags, we can organize the content in a tree-like structure. 

`<html></html>`, `<head></head>` and `<body></body>` should always used in any HTML file. Generally speaking, everything should appear inside `<html></html>` except `<!DOCTYPE html>`. Content of the HTML should be written inside `<body></body>`, while additional information like defining the title or declarating importing other resources usually are inside `<head></head>`.

Different tags have different meanings. We'll discuss more about tags in the next post.

#CSS

> #### What is CSS?

> **Cascading Style Sheets** (CSS) is a style sheet language used for describing the look and formatting of a document written in a markup language.

> CSS is designed primarily **to enable the separation of document content from document presentation**, including elements such as the layout, colors, and fonts. This separation can improve content accessibility, provide more flexibility and control in the specification of presentation characteristics, enable multiple pages to share formatting, and reduce complexity and repetition in the structural content (such as by allowing for tableless web design).

> <a href="http://en.wikipedia.org/wiki/Cascading_Style_Sheets" target="_blank">From Wikipedia</a>

##Change color

If I would like to change the color of the `Hello, world!` to be red, CSS is the one that can help. Remember that CSS is responsible for how it appears to look. :sunglasses:

{% highlight html %}
<!DOCTYPE html>
<html>
	<head>
	</head>

	<body style="color: red">
		Hello, world!
	</body>
</html>
{% endhighlight %}

<img src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2014-04-27-02-the-whole-picture-01.jpg" />

Now, it's red.

##A more complicated example

{% highlight html %}
<!DOCTYPE html>
<html>
	<head>
	</head>

	<body>
		<h1>First</h1>
		Hello, world!
		<h1>Second</h1>
	</body>
</html>
{% endhighlight %}

We want to make `First` and `Second` be red and the background of them be yellow, which can be achieved with the following code:

{% highlight html %}
<!DOCTYPE html>
<html>
	<head>
	</head>

	<body>
		<h1 style="color: red; background-color: yellow">First</h1>
		Hello, world!
		<h1 style="color: red; background-color: yellow">Second</h1>
	</body>
</html>
{% endhighlight %}

<img src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2014-04-27-02-the-whole-picture-02.jpg" />

But what if there're much more `<h1>` elements need to be in this style? Do we have to write `style="color: red; background-color: yellow"` each time? If we want to change the style afterwards, do we have to change each of them?

You may wonder if we can write a statement like `make all h1 to be in red color and the background-color to be yellow`. Yes, we can! :scream:

##Three styles of CSS

There are three styles of CSS.

1. Inline (defined in each tag, as we did above)
2. Internal (defined at the `<head></head>` part of current HTML
3. External (defined in a CSS file and include it at the `<head></head>` part of current HTML

###Inline style

{% highlight html %}
<!DOCTYPE html>
<html>
	<head>
	</head>

	<body>
		<h1 style="color: red; background-color: yellow">First</h1>
		Hello, world!
		<h1 style="color: red; background-color: yellow">Second</h1>
	</body>
</html>
{% endhighlight %}

Inline style is easy to write as a demo. But in real situation, it makes it impossible to reuse the style and the content and style will be coupled tighted, which is the last thing we want. So, **never use inline style in real programming**! :boom:

###Internal style

An internal style looks like:

{% highlight html %}
<!DOCTYPE html>
<html>
	<head>
		<style type="text/css">
			h1 {
				color: red;
				background-color: yellow;
			}
		</style>
	</head>

	<body>
		<h1>First</h1>
		Hello, world!
		<h1>Second</h1>
	</body>
</html>
{% endhighlight %}

You may notice that it helps reuse the style and the content and style are decoupled in internal style.

###External style

In internal style, style can be reused within this HTML. But in real applications, usually most of the Web pages share the same style. So, how can we reuse the CSS in different HTML files?

The answer is to put the CSS style in a `.css` file rather than inside the HTML file, and include the CSS file in HTML files.

Now, we have a `mystyle.css` file:

{% highlight css %}
h1 {
	color: red;
	background-color: yellow;
}
{% endhighlight %}

And a HTML file:

{% highlight html %}
<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" type="text/css" href="mystyle.css" />
	</head>

	<body>
		<h1>First</h1>
		Hello, world!
		<h1>Second</h1>
	</body>
</html>
{% endhighlight %}

External style makes it possible to reuse CSS inter- and intra-HTML. Use this style whenever possible.

#JavaScript

Now that we have a basic idea of what HTML and CSS are and how they can work together. If you learn the two of them well enough, it's enough to deal with the most part of a Web page. But from Web 2.0, more interaction with user has been introduced. So knowing about HTML and CSS only is far from enough.

> JavaScript (JS) is a dynamic computer programming language. It is most commonly used as part of web browsers, whose implementations allow client-side scripts to interact with the user, control the browser, communicate asynchronously, and alter the document content that is displayed.

> <a href="http://en.wikipedia.org/wiki/JavaScript" target="_blank">From Wikipedia</a>

##Hello, again!

As a programming language, JavaScript can be much more complexity than HTML or CSS. Luckily, I don't want to freak you out here. :joy: So I'm going to introduce the simple examples of how you can use JavaScript along with HTML and CSS.

We want to open a message box to say hello to the user when a button is clicked. Here's how you can do this:

{% highlight html %}
<!DOCTYPE html>
<html>
	<head>
	</head>

	<body>
		<button onclick="alert('Hello, again!')">Say hello!</button>
	</body>
</html>
{% endhighlight %}

<img src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2014-04-27-02-the-whole-picture-03.jpg" />

You may notice this is like the inline style of CSS. Yes! JavaScript can also be written in the internal and external style.

Internal:

{% highlight html %}
<!DOCTYPE html>
<html>
	<head>
		<script type="text/javascript">
		function sayHello() {
			alert('Hello, again!');
		}
		</script>
	</head>

	<body>
		<button onclick="sayHello()">Say hello!</button>
	</body>
</html>
{% endhighlight %}

External JavaScript `hello.js`:

{% highlight js %}
function sayHello() {
	alert('Hello, again!');
}
{% endhighlight %}

External HTML:

{% highlight html %}
<!DOCTYPE html>
<html>
	<head>
		<script type="text/javascript" src="hello.js"></script>
	</head>

	<body>
		<button onclick="sayHello()">Say hello!</button>
	</body>
</html>
{% endhighlight %}

External JavaScript is prefered in most cases. Before you know which cases are excluded, you should always use external style.

##Use JavaScript to Change CSS

Again, **never use JavaScript if the effect can be achieved with CSS!**

For example, if you want to change the color when mouse is moved on an element, CSS is enough:

{% highlight css %}
h1 {
	color: red;
}
h1:hover {
	color: blue;
}
{% endhighlight %}

But if you want to change the color when mouse has been clicked, only JavaScript can do it:

{% highlight html %}
<!DOCTYPE html>
<html>
	<head>
		<script type="text/javascript">
		function change(element) {
			element.style.color = 'blue';
		}
		</script>
	</head>

	<body>
		<h1 onclick="change(this)">Change Color!</h1>
	</body>
</html>
{% endhighlight %}

#Conclusion

In this post, we introduced what HTML, CSS and JavaScript are and how they can work together. HTML files define the content of Web pages, CSS the style, and JavaScript the interaction. 

In the following posts, we are going to dig into and have a better understanding of each of them. :clap:
