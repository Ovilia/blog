---
title: Angular.js Pagination with Bootstrap
time: 2016.05.11 16:01:49
layout: post
tags:
- AngularJs
- Bootstrap
excerpt: This post introduces how to make a pagination component with Angular.js and Bootstrap.
---

This post introduces how to make a pagination component with Angular.js and Bootstrap.

The following shows an expected state of our pagination component.

<img class="single-img" src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2016-05-11-angularjs-pagination-with-bootstrap-01.png" />

which could be modeled into

<img class="single-img" src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2016-05-11-angularjs-pagination-with-bootstrap-02.png" />

The left part is for the starting pages, right for ending pages, and center for pages around current one.

For example, for the second page, `page - 1` is the same as `1` and `page` is the same as `2`, so we need to hide `1`, `2`, and `...` in the left part.

In fact, this task is more difficult than one might imagine, since there are many possible situations of our pagination. And this post is going to talk about how to make it.



# Controller

In Angular controller, we define the page data, which could be replaced by backend data.

{% highlight js %}
angular.module('app')
    .controller('PageController', function() {
        var vm = this;
        vm.page = {
            page: 5,
            total: 20
        };
    });
{% endhighlight %}



# HTML

In HTML, we use `ng-if` to hide unnecessary tags, and `ng-class` to add class conditionally.

```html
<ul class="pagination">
    <li ng-class="{true:'disabled'}[vm.page.page === 1]">
        <a href="#">&laquo;</a>
    </li>
    <li ng-if="vm.page.page-1>1">
        <a href="#">1a</a>
    </li>
    <li ng-if="vm.page.page-1>2">
        <a href="#">2b</a>
    </li>

    <li ng-if="vm.page.page-1>2+1">
        <a>...</a>
    </li>
    <li ng-if="vm.page.page>1">
        <a href="#">{{ "{{ vm.page.page - 1 "}}}}c</a>
    </li>
    <li class="active">
        <a href="#">{{ "{{ vm.page.page "}}}}d</a>
    </li>
    <li ng-if="vm.page.page<vm.page.total">
        <a href="#">{{ "{{ vm.page.page + 1 "}}}}e</a>
    </li>
    <li ng-if="vm.page.page+1<vm.page.total-1-1">
        <a>...</a>
    </li>

    <li>
        <a href="#" ng-if="vm.page.page+1<vm.page.total-1">{{ "{{ vm.page.total - 1 "}}}}f</a>
    </li>
    <li>
        <a href="#" ng-if="vm.page.page+1<vm.page.total">{{ "{{ vm.page.total "}}}}g</a>
    </li>
    <li ng-class="{true:'disabled'}[vm.page.page === vm.page.total]">
        <a href="#">&raquo;</a>
    </li>
</ul>
```

I added `abcd..g` at the end for you to understand better.

Here is the pagination for varied pages.

<img class="single-img" src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2016-05-11-angularjs-pagination-with-bootstrap-03.png" />
