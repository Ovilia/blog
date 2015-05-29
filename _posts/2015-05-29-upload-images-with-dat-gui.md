---
title: Upload Images with dat.GUI
time: 2015.05.29 14:10:27
layout: post
tags:
- JavaScript
series: Polyvia
excerpt: This post introduces how to use JavaScript to upload a single image with dat.GUI. The file name of the image would be displayed in dat.GUI once the user chose an image.
---

> #### What will you learn in this post?

> This post introduces how to use JavaScript to upload a single image with dat.GUI.

# dat.GUI

<a href="https://github.com/dataarts/dat.gui" target="_blank">dat.GUI</a> is a lightweight controller library for JavaScript, which I think is a quite nice and elegant GUI.

To use dat.GUI, you need to create an object containing the parameters you want, and then add it to the GUI.

{% highlight js %}
var GuiConfig = function() {
    this['Vertex Cnt'] = 1000;  // default number value

    this['Edge Weight'] = 0.8;  // default number value

    this['Apply'] = function() {  // the function will be called
        console.log('apply!');    // when `Apply` is clicked
    };
};
var config = new GuiConfig();

var gui = new dat.GUI();
gui.add(config, 'Vertex Cnt', 100, 5000).step(100);  // number range and step
gui.add(config, 'Edge Weight', 0, 1).step(0.05);  // number range and step
gui.add(config, 'Apply');  // add a function button
{% endhighlight %}

# The Real Magic

Two elements are to be added to dat.GUI, a function element as button to trigger file explorer, and a label element to display the file name of the chosen image.

{% highlight js %}
var GuiConfig = function() {
    this['Image Path'] = '18.jpg';  // default image path

    this['Upload Image'] = function() {
        // you need to create an input element in HTML, explained later
        var input = document.getElementById('img-path');
        input.addEventListener('change', function() {
            var file = input.files[0];
            config['Image Path'] = file.name;
            // update all controllers
            for (var i in gui.__controllers) {
                gui.__controllers[i].updateDisplay();
            }
        });
        input.click();
    };
};
var config = new GuiConfig();
gui.add(config, 'Image Path', config['Image Path']);
gui.add(config, 'Upload Image');
{% endhighlight %}

We also need to add another `<input>` in the HTML with the type of `file`, which is the real magic to load file explorer.

{% highlight html %}
<input id="img-path" type="file" />
{% endhighlight %}

And use CSS to hide it, cause it's magic!!!

{% highlight css %}
#img-path {
    display: none;
}
{% endhighlight %}

# Under The Hood

The user need to click the `Upload Image` button, which is a function element, and it will add a `change` event listener to a file input element. And then the input click event is triggered, so that user can choose an image in file explorer, and the `change` event will then be triggered. In the `change` event, dat.GUI is to be updated according to the file name of the input image.

And that's how our magic works.

Hope you enjoyed it! :smiley:

# Reference

- <a href="http://workshop.chromeexperiments.com/examples/gui/#9--Updating-the-Display-Automatically" target="_blank">Updating the Display Manually with dat.GUI</a>
- <a href="http://help.dottoro.com/ljoiurdq.php" target="_blank">JavaScript onchange event</a>
- <a href="https://stackoverflow.com/questions/23417991/load-a-file-using-a-dat-gui-button#" target="_blank">Load a file using a dat.GUI button?</a>
- <a href="http://stackoverflow.com/questions/6250704/view-image-selected-from-file-system-on-client-side-before-upload" target="_blank">View image selected from file-system on client-side before upload?</a>
