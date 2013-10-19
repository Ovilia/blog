window.onload = function() {
    // lazy load js and css
    LazyLoad.js('../../ovilia.github.com/js/jquery-1.9.0.js', function () {
        LazyLoad.js('js/unviel.min.js', function () {
            $("img").unveil();
        });
    });
    // emoji
    LazyLoad.css('css/emojify.min.css', function () {
        LazyLoad.js('js/emojify.min.js', function () {
            emojify.setConfig({
                emoticons_enabled: true,
                people_enabled: true,
                
            });
            emojify.run();
        });
    });
};
