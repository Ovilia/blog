setTimeout(loadMusic, 20000);
function loadMusic() {
    if ($('#music-content')) {
        $('#music-content').append('<iframe frameborder="no" border="0"'
                + ' marginwidth="0" marginheight="0" width=330 height=450'
                + ' src="http://music.163.com/outchain/player?type=0'
                + '&id=49176408&auto=0&height=430"></iframe>');
    }
}

var isFirstToggleMusic = true;
function toggleMusicPanel() {
    $('#music-control').toggleClass('on');
    if (isFirstToggleMusic) {
        _gaq.push(['_trackEvent', 'ToggleMusic', 'InRecent', window.location.pathname]);
        isFirstToggleMusic = false;
    }
}

function hideRecentSectionWhenNoPost() {
    if ($('#post-section-en .post-block').length === 0) {
        $('#post-section-en').hide();
    }
    if ($('#post-section-zn .post-block').length === 0) {
        $('#post-section-zn').hide();
    }
}

function processPageView(rows) {
    if (rows === undefined) {
        return;
    }
    $('.post-block').each(function() {
        var myPath = $(this).children('h2').children('a').attr('href');
        if (myPath) {
            myPath = myPath.slice('http://zhangwenli.com'.length);
            var len = rows.length;
            var cnt = 0;
            for (var i = 0; i < len; ++i) {
                var thatPath = rows[i][0];
                var queryId = thatPath.indexOf('?');
                var mainPath = queryId >= 0 ? thatPath.slice(0, queryId) : thatPath;
                if (thatPath === myPath || mainPath === myPath 
                        || mainPath === myPath + 'index.html' 
                        || myPath === mainPath + 'index.html') {
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
    hideRecentSectionWhenNoPost();

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

        // // google pageview
        // setTimeout(function() {
        //     $.ajax({
        //         url: 'https://ovilia-blog-1234.appspot.com/query?id=ahJzfm92aWxpYS1ibG9nLTEyMzRyFQsSCEFwaVF1ZXJ5GICAgIC6qI4KDA',
        //         dataType: 'jsonp',
        //         timeout: 1000 * 3, // 3 sec
        //         success: function(data) {
        //             processPageView(data.rows);
        //         },
        //         error: function() {
        //             // if fail to get up-to-date data from GAE, get cached local version
        //             console.log('Failed to get page view from GAE!');
        //             $.ajax({
        //                 url: '/blog/pageview.json',
        //                 dataType: 'json',
        //                 success: function(data) {
        //                     console.log('Local page view used.');
        //                     processPageView(data.rows);
        //                 }
        //             })
        //         }
        //     });
        // }, 2000);
    });

    // add target="_blank" for external links
    $(document.links).filter(function() {
        return this.hostname !== window.location.hostname;
    }).attr('target', '_blank');

    // lazy load iframe
    $('iframe').each(function() {
        $(this).attr('src', $(this).attr('data-src'));
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
}, 5000);

// other files for different pages, define loadJs arrary
if (typeof loadCss === 'object') {
    for (var i = 0, len = loadCss.length; i < len; ++i) {
        if (typeof loadCss[i] === 'string') {
            // no callback
            LazyLoad.css(loadCss[i]);
        } else {
            LazyLoad.css(loadCss[i][0], loadCss[i][1]);
        }
    }
}
if (typeof loadJs === 'object') {
    for (var i = 0; i < loadJs.length; ++i) {
        (function(i) {
            if (typeof loadJs[i] === 'string') {
                // no callback
                LazyLoad.js(loadJs[i]);
            } else if (typeof loadJs[i] === 'object') {
                // array of js
                var loadNext = function(j) {
                    if (j < loadJs[i][0].length - 1) {
                        // load next js
                        LazyLoad.js(loadJs[i][0][j], function () {
                            loadNext(j + 1);
                        });
                    }
                    else {
                        // callback
                        LazyLoad.js(loadJs[i][0][j], loadJs[i][1]);
                    }
                };
                loadNext(0);
            } else {
                // one js with callback
                LazyLoad.js(loadJs[i][0], loadJs[i][1]);
            }
        })(i)
    }
}
