function processPageView(rows) {
    if (rows === undefined) {
        return;
    }
    var myPath = window.location.pathname;
    var len = rows.length;
    var cnt = 0;
    for (var i = 0; i < len; ++i) {
        var thatPath = rows[i][0];
        if (thatPath === myPath || thatPath.slice(0, thatPath.indexOf('?')) === myPath) {
            cnt += parseInt(rows[i][1]);
        }
    }
    updatePageView(cnt);
}

function updatePageView(cnt) {
    var txt = '';
    if (cnt === 0) {
        txt = 'WoW! You seems to be the first visitor to this page! Thanks for visiting! :thumbsup:';
    } else if (cnt === 1) {
        txt = 'You\'re the 2nd visitor to this page. Come earlier next time! :smirk:';
    } else if (cnt === 2) {
        txt = 'You\'re the 3rd visitor to this page. Not bad! :grin:';
    } else if (cnt < 10) {
        txt = 'You\'re the ' + (cnt + 1) + 'th visitor to this page. Thanks for support! :kissing_closed_eyes:';
    } else if ((cnt + 1) % 100 === 0) {
        txt = 'You seems to be the ' + (cnt + 1) + 'th visitor to this page! Lucky you! :open_mouth:';
    } else if (cnt < 200) {
        txt = 'You\'re the ' + (cnt + 1) + 'th visitor to this page.';
    } else if (cnt < 1000) {
        txt = 'You\'re the ' + (cnt + 1) + 'th visitor to this page. Why didn\'t come earlier to visit me! :rage:';
    } else {
        txt = 'You\'re the ' + (cnt + 1) + 'th visitor to this page. I guess I get popular recently. :satisfied:';
    }
    $('#page-view').text(txt);
    if (typeof emojify !== 'undefined') {
        emojify.run();
    }
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
            if ($('#page-view').length > 0) {
                // load pageview if this page has #page-view div
                $.ajax({
                    url: 'https://ovilia-blog-1234.appspot.com/query?id=ahJzfm92aWxpYS1ibG9nLTEyMzRyFQsSCEFwaVF1ZXJ5GICAgIC6qI4KDA',
                    dataType: 'jsonp',
                    timeout: 1000 * 30, // 30 sec
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
            }
        }, 5000);
    });
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
