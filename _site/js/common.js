window.onload = function() {
    // lazy load js and css
    LazyLoad.js('http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js', function () {
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
                
            });
            emojify.run();
        });
    });
};
