---
title: Installing NodeBB with MongoDB on Mac OS
time: 2016.04.19 18:17:48
layout: post
tags:
- NodeBB
- MongoDB
- NodeJs
excerpt: My attempt to use NodeBB could be largely attributed to the simplicity of its <a href="https://docs.nodebb.org/en/latest/installing/os/osx-mavericks.html" target="_blank">install instructions</a>. Yet I ended up spending much more time fixing all kinds of install problems. So this post serves as a hint for someone who runs into a similar situation.
---

My attempt to use NodeBB could be largely attributed to the simplicity of its [install instructions](https://docs.nodebb.org/en/latest/installing/os/osx-mavericks.html). Yet I ended up spending much more time fixing all kinds of install problems. :joy: So this post serves as a hint for someone who runs into a similar situation.



# Installing MongoDB

{% highlight bash %}
brew install mongodb
{% endhighlight %}

MongoDB can be easily installed on Mac OS [using brew](https://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/#install-mongodb-community-edition).

But after that, I found myself fail to login with terminal.

{% highlight bash %}
$ mongo
MongoDB shell version: 3.2.4
connecting to: test
2016-04-19T16:46:45.522+0800 W NETWORK  [thread1] Failed to connect to 127.0.0.1:27017, reason: errno:61 Connection refused
2016-04-19T16:46:45.524+0800 E QUERY    [thread1] Error: couldn't connect to server 127.0.0.1:27017, connection attempt failed :
connect@src/mongo/shell/mongo.js:224:14
@(connect):1:6
{% endhighlight %}

[Accoding to StackOverflow](http://stackoverflow.com/questions/23418134/cannot-connect-to-mongodb-errno61-connection-refused), this is because `mongodb` service is not running. And it worked after the following instruction.

{% highlight bash %}
brew services start mongodb
{% endhighlight %}



# Connect NodeBB with MongoDB

## Create a user in MongoDB

As NodeBB install instructions states, the interactive installation is available with:

{% highlight bash %}
./nodebb setup
{% endhighlight %}

Well, it failed and gave the following error message:

{% highlight bash %}
error: NodeBB could not connect to your Mongo database. Mongo returned the following error: Authentication failed.
{% endhighlight %}

I don't know the default username and password of my MongoDB. So I created a new user and fixed this problem.

{% highlight bash %}
db.createUser({user:'username', pwd:'password', roles:[{role:'readWrite', db:'db-name'}]})
{% endhighlight %}

Before that, I also created a database called `db-name` by using `use db-name`. But this procedure is unnecessary, which I will explain later.



## You don't have to create the database

After that, I ran into the following error message:

{% highlight bash %}
/Users/baidu/Workspace/NodeBB/src/database/mongo.js:141
                    db.objects.dropIndex({_key:1, value: -1});
                                                             ^
SyntaxError: Unexpected token ;
    at exports.runInThisContext (vm.js:53:16)
    at Module._compile (module.js:373:25)
    at Object.Module._extensions..js (module.js:416:10)
    at Module.load (module.js:343:32)
    at Function.Module._load (module.js:300:12)
    at Module.require (module.js:353:17)
    at require (internal/module.js:12:17)
    at Object.<anonymous> (/Users/baidu/Workspace/NodeBB/install/databases.js:9:9)
    at Module._compile (module.js:409:26)
    at Object.Module._extensions..js (module.js:416:10)
{% endhighlight %}

I searched but found no similar questions, only knowing this concerned with creating something supposed to have unique name.

Yep. That's why I shouldn't create the database `db-name` in MongoDB shell. But this is really weired, right? You need to create a user, but not a database. 



## NodeBB admin should be the same with that of MongoDB

NodeBB told me to create an admin.

{% highlight bash %}
warn: No administrators have been detected, running initial user setup
Administrator username echarts-admin
Administrator email address echarts@baidu.com
Password 
Confirm Password 
{% endhighlight %}

I thought this could be different from my MongoDB, but it turned out to be:

{% highlight bash %}
warn: NodeBB Setup Aborted.
 Error: [[user:change_password_error_length]]
    at Object.User.isPasswordValid (/Users/baidu/Workspace/NodeBB/src/user/create.js:193:20)
    at async.parallel.passwordValid (/Users/baidu/Workspace/NodeBB/src/user/create.js:165:11)
    at /Users/baidu/Workspace/NodeBB/node_modules/async/lib/async.js:718:13
    at async.forEachOf.async.eachOf (/Users/baidu/Workspace/NodeBB/node_modules/async/lib/async.js:233:13)
    at _parallel (/Users/baidu/Workspace/NodeBB/node_modules/async/lib/async.js:717:9)
    at Object.async.parallel (/Users/baidu/Workspace/NodeBB/node_modules/async/lib/async.js:731:9)
    at Object.User.isDataValid (/Users/baidu/Workspace/NodeBB/src/user/create.js:152:9)
    at Object.User.create (/Users/baidu/Workspace/NodeBB/src/user/create.js:22:8)
    at async.waterfall.adminUid (/Users/baidu/Workspace/NodeBB/src/install.js:275:11)
    at fn (/Users/baidu/Workspace/NodeBB/node_modules/async/lib/async.js:746:34)
    at /Users/baidu/Workspace/NodeBB/node_modules/async/lib/async.js:1213:16
    at /Users/baidu/Workspace/NodeBB/node_modules/async/lib/async.js:166:37
    at /Users/baidu/Workspace/NodeBB/node_modules/async/lib/async.js:706:43
    at /Users/baidu/Workspace/NodeBB/node_modules/async/lib/async.js:167:37
    at Object.async.waterfall (/Users/baidu/Workspace/NodeBB/node_modules/async/lib/async.js:710:44)
    at success (/Users/baidu/Workspace/NodeBB/src/install.js:273:10)
{% endhighlight %}

This could be fixed by using the same username and password of your MongoDB user.



# Conclusion

All these steps are described by NodeBB as:

> Run interactive installation:  
> ./nodebb setup  
> You may leave all of the options as default.  

You know what, this is how you teach someone to draw a horse:

{% capture imgSrc %}{{ site.url }}/img/post/2016-04-19-installing-nodebb-on-mac-os-1.jpg{% endcapture %}
{% include figure.html src=imgSrc caption='Image from <a href="http://9gag.com/gag/6261567/how-to-draw-a-horse">9gag.com</a>' %}

Just kidding... I love NodeBB! :heart_eyes:
