// lazy load js and css
LazyLoad.js('/blog/js/jquery-1.11.1.min.js', function () {
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
// google fonts
var url = ('https:' == document.location.protocol ? 'https' : 'http') +
        '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
WebFontConfig = {
    google: { families: [ 'Lato:400,900:latin' ] }
};
LazyLoad.js(url);

