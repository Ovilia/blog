---
title: Upload Canvas Snapshots to Node.js
time: 2015.12.27 21:33:35
layout: post
tags:
- NodeJs
- JavaScript
- Canvas
- BOS
excerpt: This post talks about how to generate a snapshot image from canvas and upload to Node.js, and then save to <a href="http://bce.baidu.com/doc/BOS/index.html" target="_blank">BOS</a>. Since BOS has a limit for file name, we first save it locally on Node.js server  and then upload to BOS.
---

> #### What can you learn from this post?

> This post talks about how to generate a snapshot image from canvas and upload to Node.js, and then save to <a href="http://bce.baidu.com/doc/BOS/index.html" target="_blank">BOS</a>. Since BOS has limit for file name, we first save it locally on Node.js server  and then upload to BOS.



## Generate Images from Canvas

{% highlight js %}
canvas.toDataURL();
{% endhighlight %}

This generates a path starting with `data:image/png;base64,` and if you enters this path in Web Browsers, it gives the image generated.



## Upload to Node.js Server

I use jQuery to post the data url to Node.js.

{% highlight js %}
$.post('http://localhost/...', {
    img: canvas.toDataURL()
});
{% endhighlight %}

On the server side, we use `req.body.img` to get the posted parameter.

{% highlight js %}
exports.upload = function(req, res) {
    var dataUrl = req.body.img;
};
{% endhighlight %}

Since Node.js has a limit for post data, we need to set the limit to be large enough in `app.js`.

{% highlight js %}
var bodyParser = require('body-parser');

app.use(bodyParser.json({
    limit: '16mb'
}));

app.use(bodyParser.urlencoded({
    extended: false,
    limit: '16mb'
}));
{% endhighlight %}



## Upload to BOS

<a href="http://bce.baidu.com/doc/BOS/index.html" target="_blank">BOS</a> is a object storage service provided by Baidu. With <a href="https://www.npmjs.com/package/baidubce-sdk" target="_blank">npm baidubce-sdk</a>, we can have an easy access to it with Node.js. Here is an example of uploading file to BOS.

{% highlight js %}
var bce = require('baidubce-sdk');

var config = {
    credentials: {
        ak: '...',
        sk: '...'
    },
    endpoint: 'http://bj.bcebos.com'
};

var bucket = 'bucket-name-here';

exports.put = function (localName, remoteName, callback) {
    var client = new bce.BosClient(config);
    client.putObjectFromFile(bucket, remoteName, localName)
        .then(function() {
            return client.getObjectMetadata(bucket, remoteName);
        })
        .then(function(response) {
            if (callback) {
                callback(null, response);
            }
        })
        .catch(function(error) {
            console.error(error);
            if (callback) {
                callback(error);
            }
        });
};
{% endhighlight %}

Here, `localName` is the file name on Node.js server, while `remoteName` is the file name you want to store in the BOS bucket.

BOS has a limit for file name, so we can't just use the generated base64 name `data:image/png;base64,...` as `localName`.

One approach is to save the image on Node.js server as temporary image with random name and upload to BOS, which will then be deleted from Node.js server afterwards.

{% highlight js %}
exports.saveImage = function (dataUrl) {
    var matches = dataUrl.match(/^data:.+\/(.+);base64,(.*)$/);
    var buffer = new Buffer(matches[2], 'base64');

    var savePath = path.resolve(__dirname + '../../../tmp/'
        + Math.floor(Math.random() * 1000000) + '.png');
    fs.writeFileSync(savePath, buffer);
    return savePath;
};

exports.removeImage = function (savePath) {
    fs.unlinkSync(savePath);
};
{% endhighlight %}
