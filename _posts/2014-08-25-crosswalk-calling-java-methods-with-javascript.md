---
title: Crosswalk Calling Java Methods with JavaScript
time: 2014.08.25 13:34:00
layout: post
tags:
- Crosswalk
- Android
- Java
- JavaScript
excerpt: <a href="https://crosswalk-project.org/" target="_blank">Crosswalk</a> enables Web programmers to develop native Android applications with our familiar HTML, CSS and JavaScript. In some cases, however, we need the help of Java code to do something JavaScript cannot. This post talks about how to call Java methods with JavaScript.
---

> #### What will you learn in this post?

> <a href="https://crosswalk-project.org/" target="_blank">Crosswalk</a> enables Web developers to develop native Android applications with our familiar HTML, CSS and JavaScript. In some cases, however, we need the help of Java code to do something JavaScript cannot. This post talks about how to call Java methods with JavaScript.

Calling native Java methods with JavaScript is not so particular with Crosswalk. Instead, it is a common need when developing using *WebView* on Android. But there are some minor differences for Crosswalk. This post may be of extra help for those Web developers who have limited experience with Android programming.

To get started with Crosswalk, you may refer to the <a href="https://crosswalk-project.org/#documentation/getting_started" target="_blank">official document</a>.

# Enable JavaScript

**This step is very important!** It won't work without the following setting. Typically, we may want to declare them in `onCreate` of our main `Activity`.

{% highlight java %}
mXWalkView = (XWalkView) findViewById(R.id.activity_main);
XWalkSettings webSettings = mXWalkView.getSettings();
webSettings.setJavaScriptEnabled(true);
{% endhighlight %}

Here, we use `webSettings` in `org.xwalk.core.XWalkSettings` instead of `android.webkit.WebSettings`, which is used in a standard Android application.

# Declare a Class as Interface

Next, you need to declare a class as interface for all Java methods to be called uing JavaScript. You may declare them in a new Java file or as a member method of main activity. The following steps are in the former method.

Create a Java file named `JsInterface.js` and edit it as follows.

{% highlight java %}
public class JsInterface {
	public JsInterface() {
	}
	
	@JavascriptInterface
	public String sayHello() {
		return "Hello World!";
	}
}
{% endhighlight %}

> Caution: If you've set your <a href="http://developer.android.com/guide/topics/manifest/uses-sdk-element.html#target" target="_blank">targetSdkVersion</a> to 17 or higher, **you must add the `@JavascriptInterface` annotation** to any method that you want available to your JavaScript (the method must also be public). If you do not provide the annotation, the method is not accessible by your web page when running on Android 4.2 or higher.

> From *<a href="http://developer.android.com/guide/webapps/webview.html#BindingJavaScript" target="_blank">developer.android.com</a>*

# Add JavaScript Interface

In the main activity, add the following statement after `setJavaScriptEnabled`.

{% highlight java %}
mXWalkView.addJavascriptInterface(new JsInterface(), "NativeInterface");
{% endhighlight %}

`"NativeInterface"` can be replaced with any name of object which contains the functions you would like to call with JavaScript later.

# Call in JavaScript

{% highlight java %}
mXWalkView.load("file:///android_asset/index.html", null);
{% endhighlight %}

In the `index.html` that will be loaded in main activity, we create a link that will call `sayHello` when clicked.

{% highlight html %}
<a href="#" onclick="clicked()">Say Hello</a>
{% endhighlight %}

{% highlight js %}
function clicked() {
    alert(NativeInterface.sayHello());
}
{% endhighlight %}

`NativeInterface` is the named in `addJavascriptInterface` in the last step.

You should now get the `Hello World!` information from alert.

# Further Reading

- <a href="http://developer.android.com/guide/webapps/webview.html#BindingJavaScript" target="_blank">http://developer.android.com/guide/webapps/webview.html#BindingJavaScript</a>
- <a href="http://www.sollyu.com/android-software-development-webview-addjavascriptinterface-cycle-of-gradual-one/" target="_blank">android软件开发之webView.addJavascriptInterface循环渐进【一】</a>
