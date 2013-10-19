window.onload = function() {
    // lazy load js and css
    LazyLoad.js('http://zhangwenli.com/js/jquery-1.9.0.js', function () {
        LazyLoad.js('http://zhangwenli.com/blog/js/unviel.min.js', function () {
            $("img").unveil();
        });
    });
    // emoji
    LazyLoad.css('http://zhangwenli.com/blog/css/emojify.min.css', function () {
        LazyLoad.js('http://zhangwenli.com/blog/js/emojify.min.js', function () {
            emojify.setConfig({
                emoticons_enabled: true,
                people_enabled: true,
                
            });
            emojify.run();
        });
    });
};
