---
title: 使用 ECharts 与 ionic 创建原生应用
time: 2017.08.29 18:48:08
layout: post
tags:
- 中文
- ECharts
- TypeScript
- JavaScript
- ionic
- 教程
excerpt: 在这个教程中，我们将使用 ionic 创建原生应用，并用 ECharts 创建饼图和水球图。ionic 项目开发语言是 TypeScript，而 ECharts 的官方版本是基于 JavaScript 的，本教程将带你轻松实现在 TypeScript 中创建 ECharts 图表。
---

在这个教程中，我们将使用 [ionic](http://ionicframework.com/) 创建原生应用，并用 [ECharts](http://echarts.baidu.com) 创建饼图和水球图。ionic 项目开发语言是 TypeScript，而 ECharts 的官方版本是基于 JavaScript 的，本教程将带你轻松实现在 TypeScript 中创建 ECharts 图表。

最终，我们将实现这样的效果：

<img class="single-img" src="{{ site.url }}/img/post/2017-08-29-echarts-with-ionic-bottle.gif" alt="运行结果">

这篇教程将会教你：

- 安装 ionic
- 在 TypeScript 中使用 ECharts
- 在 ionic 项目中创建 ECharts 图表
- 在 ionic 项目中创建 ECharts 水球图

它不会教你：

- [ECharts](http://echarts.baidu.com) 是什么
- [ionic](http://ionicframework.com/) 是什么
- [Angular](https://angular.io/) 是什么
- [TypeScript](https://www.typescriptlang.org/) 是什么

# 新建 ionic 项目

ionic 官网有详细的[安装教程](http://ionicframework.com/docs/intro/installation/)，这里我们简单介绍一下我们的操作步骤。

首先，安装全局的 ionic 和 cordova npm 包，前者是用来在命令行操作 ionic 的，后者是提供从网页到原生应用的底层支持的库。

```sh
$ npm install -g ionic cordova
```

然后就可以创建项目了，我们的当前操作目录在 `~/Workspace`，想创建一个名为 `pretty-charts` 的项目，执行：

```sh
$ ionic start pretty-charts
```

这样就会自动下载项目的模板，并且一键安装各种 npm 包之类的。是不是超简单的！

现在，我们可以 `cd` 到 `pretty-charts` 目录下运行项目。

```sh
$ cd pretty-charts
$ ionic serve
```

`ionic serve` 会编译你的代码（什么？你还没写？没关系，模板都帮你写好了），并且起一个本地的服务器，自动打开一个浏览器运行代码。看到的效果类似这样：

<img class="single-img" src="{{ site.url }}/img/post/2017-08-29-echarts-with-ionic-init.png" alt="初始化项目运行结果">

> 目前 ionic 3 的运行需要 Node 6.0+，可以通过 nvm 安装并切换 Node 版本。
>
> 首先运行 `node -v` 查看 Node 版本，如果不是 6.0+，可以运行 `npm i -g nvm; nvm install 6; nvm use 6`。


# 在 TypeScript 中引入 ECharts

之前我有写过一篇教程介绍如何用 typings 1.x 在 TypeScript 中引入 ECharts，想了解原理的可以参考[这篇教程]({{ site.url }}/2016/08/24/using-echarts-with-typescript/)。下面我们使用的方法是基于 typings 2.x 的。

首先我们安装 typings 库，以及 ECharts：

```sh
npm install typings echarts --global
```

然后，安装 ECharts 的 TypeScript 定义文件，这个文件来自社区贡献。

```sh
npm install @types/echarts --save
```

现在，我们可以在 TypeScript 文件中访问 ECharts 库了：

```ts
import * as echarts from 'echarts';
```

typings 实际上是为 JavaScript 的库提供了一个接口声明的作用，有点类似 C++ 的头文件的意思，但不对其作检查。具体来说，我们刚才下载的文件来自 [DefinitelyTyped/types/echarts/index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/echarts/index.d.ts)，但是这个接口是否和 ECharts 吻合是不会有东西去检查的。

比如我们在项目的 `src/pages/home.ts` 中，引入并使用 ECharts，可以发现 `echarts` 这个变量是正确能访问的，但是如果我们访问 `echarts.version` 的话，就会编译报错。

```ts
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    console.log(echarts); // This is ok
    console.log(echarts.version); // Compile-time error
  }

}
```

这是因为在 typings 定义的文件中，不存在 version 这个变量。而我们安装的当前版本的 ECharts 3.7.0 其实是有这个变量的，因此这是 TypeScript 编译器的误报。

对于这种情况，我们可以提 Pull Request，或者用这样的方式让 TypeScript 不对 ECharts 做类型检查：

```ts
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    const ec = echarts as any;
    console.log(ec.version); // '3.7.0'
  }

}
```

现在，你就可以按一般使用 ECharts 的方法使用它了。

# 初始化图表

我们在 `home.html` 中创建一个 DIV 元素作为图表的容器：

```html
<ion-content>
  <div id="chart"></div>
</ion-content>
```

在 `home.scss` 中将其 CSS 设为：

```scss
page-home {
    #chart {
        position: absolute;
        width: 100%;
        height: 100%;
    }
}
```

但是，我们不能在 `HomePage` 的构造函数中初始化图表，因为这时候页面还没有构建， `document.getElementById('chart')` 返回的是 `null`。

正确的做法是，在 `ionViewDidEnter` 这个 ionic 特定的函数中初始化图表，它将在进入这个页面后调用。这时候页面中已经有这个 DIV 并且正确的宽高了。整个 `home.ts` 文件是这样的：

```ts
import { Component } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor() {
  }

  ionViewDidEnter() {
    const ec = echarts as any;
    const container = document.getElementById('chart');
    console.log(container.offsetWidth, container.offsetHeight);
  }

}
```

现在，我们可以创建一个饼图了：

```ts
const ec = echarts as any;
const container = document.getElementById('chart');

const chart = ec.init(container);
chart.setOption({
    series: {
        type: 'pie',
        data: [{
            name: 'A',
            value: 10
        }, {
            name: 'B',
            value: 20
        }, {
            name: 'C',
            value: 30
        }]
    }
});
```

运行结果：

<img class="single-img" src="{{ site.url }}/img/post/2017-08-29-echarts-with-ionic-pie.png" alt="饼图">

# 使用水球图

ECharts 水球图是作为扩展存在的，因此不在 ECharts 项目中，但是使用起来也是意外地简单呢！

首先，我们使用 npm 安装：

```sh
npm install --save echarts-liquidfill
```

代码如下：

```ts
import { Component } from '@angular/core';
import * as echarts from 'echarts';
import 'echarts-liquidfill';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor() {
  }

  ionViewDidEnter() {
    const ec = echarts as any;
    const container = document.getElementById('chart');

    const chart = ec.init(container);
    chart.setOption({
      series: {
        type: 'liquidFill',
        data: [0.5, 0.4, 0.3, 0.2]
      }
    });
  }

}
```

这样就能得到水球图啦！

<img class="single-img" src="{{ site.url }}/img/post/2017-08-29-echarts-with-ionic-liquidfill.png" alt="水球图">

是不是超简单的？

如果我们再配置一下水球图，就能得到更好玩的结果啦：

{% capture imgSrc %}{{ site.url }}/img/post/2017-08-29-echarts-with-ionic-bottle.gif{% endcapture %}
{% include figure.html src=imgSrc caption='图标来自 <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> 的 <a href="http://www.freepik.com" title="Freepik">Freepik</a>，基于 <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a> 发布' %}

这里，我们使用 SVG Path 定义了水球图的形状，并且在 HTML 中加入瓶子的图片，就能得到一个奶瓶啦！完整代码请参见 [GitHub 项目](https://github.com/Ovilia/echarts-with-ionics/tree/master/src/pages/home)。

是不是很酷呢？
