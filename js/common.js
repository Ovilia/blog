function processPageView(rows) {
    if (rows === undefined) {
        return;
    }
    $('.post-block').each(function() {
        var myPath = $(this).children('h2').children('a').attr('href');
        if (myPath) {
            myPath = myPath.slice('http://zhangwenli.com'.length);
            console.log(myPath);
            var len = rows.length;
            var cnt = 0;
            for (var i = 0; i < len; ++i) {
                var thatPath = rows[i][0];
                if (thatPath === myPath || thatPath.slice(0, thatPath.indexOf('?')) === myPath) {
                    cnt += parseInt(rows[i][1]);
                }
            }
            if ($(this).hasClass('cn')) {
                $(this).append('<div class="view-cnt">（' + cnt + ' 人已阅）</div>');
            } else {
                $(this).append('<div class="view-cnt">(' + cnt + ' viewed)</div>');
            }
        }
    });
}

LazyLoad.css('/blog/css/font.css');

LazyLoad.js('/blog/js/jquery-1.11.1.min.js', function () {
    $('h1').each(function() {
        if ($(this).children('.h1-link').length === 0) {
            var id = $(this).text().replace(/\ /g, '-').replace(/\W^\-/g, '')
                    .toLowerCase();
            if (id !== '') {
                $(this).attr('id', id)
                        .append(' <a class="h1-link" href="#' + id + '">#</a>');
            }
        }
    });

    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) === false) {
        LazyLoad.js('/blog/js/jquery.timeago.min.js', function () {
            $('.timeago').timeago().show();
        });
    }

    LazyLoad.js('/blog/js/unviel.min.js', function () {
        $("img").unveil();

        // google pageview
        setTimeout(function() {
            $.ajax({
                url: 'https://ovilia-blog-1234.appspot.com/query?id=ahJzfm92aWxpYS1ibG9nLTEyMzRyFQsSCEFwaVF1ZXJ5GICAgIC6qI4KDA',
                dataType: 'jsonp',
                timeout: 1000 * 5, // 5 sec
                success: function(data) {
                    processPageView(data.rows);
                },
                error: function() {
                    // if fail to get up-to-date data from GAE, get cached local version
                    console.log('Failed to get page view from GAE!');
                    $.ajax({
                        url: '/blog/pageview.json',
                        dataType: 'json',
                        success: function(data) {
                            console.log('Local page view used.');
                            processPageView(data.rows);
                        }
                    })
                }
            });
        }, 2000);
    });

    if (typeof jQueryCallBack === 'function') {
        jQueryCallBack();
    }
});

// emoji
setTimeout(function() {
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
}, 10000);
