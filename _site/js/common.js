window.onload = function() {
    // lazy load js and css
    LazyLoad.js('http://zhangwenli.com/blog/js/jquery-1.11.1.min.js', function () {
        LazyLoad.js('/blog/js/unviel.min.js', function () {
            $("img").unveil();
        });
    });
    // emoji
    LazyLoad.css('/blog/css/emojify.min.css', function () {
        LazyLoad.js('/blog/js/emojify.min.js', function () {
            emojify.setConfig({
                emoticons_enabled: true,
                people_enabled: true,
                nature_enabled: true
            });
            emojify.run();
        });
    });
};
