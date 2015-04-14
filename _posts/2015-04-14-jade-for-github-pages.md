---
title: Jade for GitHub Pages
time: 2015.04.14 20:42:36
layout: post
tags:
- Jade
- GitHub
- gulp.js
series: Polyvia
excerpt: This post talks about setting up Jade environment on GitHub Pages. GitHub Pages uses Jekyll for static HTML generating, which is how this very blog be hosted. You may probably find Jekyll lovely, after some period of adapting. Jekyll is especially more suitable for generating blogs than some random Websites. But for a general Website, we usually need to save ourselves from writing tags after tags. And Jade is what we needed.
---

> #### What will you learn in this post?

> This post talks about setting up Jade environment on GitHub Pages.

# Why Jade?

<a href="https://pages.github.com" target="_blank">GitHub Pages</a> uses <a href="http://jekyllrb.com/" target="_blank">Jekyll</a> for static HTML generating, which is how this very blog be hosted. You may probably find Jekyll lovely, after some period of adapting. However, Jekyll is more suitable for generating blogs than some random Websites. For a more general Website, we usually need to save ourselves from writing tags after tags.

And <a href="http://jade-lang.com" target="_blank">Jade</a> is what we needed.

# Jade for GitHub

For sure, we can use `npm install jade` to install Jade locally and run `$ jade` afterwards to use it. But can we just upload `*.jade` files to GitHub and have GitHub Pages generate and serve the static HTML for us, as we do with `*.md` files with Jekyll?

**Unfortunately, the answer is no.**

Those who are familiar with Jekyll must know that we shouldn't upload `_site` folder since GitHub Pages will generate the Website from markdown and other files for us. This design idea is clean and clear, that **we should only provide the least necessary source file**, rather than with files that can be generated from these source file.

But, no, GitHub won't generate Websites from `*.jade` for us.

So, uploading both `*.jade` and the generated `*.html` files could be a solution, if not an elegant one.

# Adding Gulp

This is not a post on <a href="http://gulpjs.com" target="_blank">Gulp</a>, so you may have some basic idea of it before reading the following section.

With Gulp, we can have the HTML files generated instantly when we change the Jade file.

Include `gulp-jade` in `package.json` and ddd the following code to your `gulpfile.js` at suitable position.

{% highlight js %}
gulp.task('jade', function() {
    gulp.src('*.jade')
        .pipe(jade())
        .pipe(gulp.dest('.'))
});
gulp.run('jade');
gulp.watch(['*.jade', 'js/*', 'css/*']);
{% endhighlight %}

I would also recommend <a href="https://github.com/shakyShane/jekyll-gulp-sass-browser-sync" target="_blank">jekyll-gulp-sass-browser-sync</a>, which synchronizes the Web pages in the Browser once the watched files had changed.

# Conclusion

With `gulp-jade`, we can generate the HTML files from Jade files locally and upload them to GitHub.
