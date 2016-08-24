---
title: Using ECharts with TypeScript
time: 2016.08.24 19:54:27
layout: post
tags:
- ECharts
- TypeScript
- JavaScript
excerpt: This post introduces how to set up TypeScript environment with ECharts.
---

> This post introduces how to set up TypeScript environment with ECharts.

First, we need to install [typings](https://github.com/typings/typings), which is a definition manager for TypeScript.

~~~bash
npm install typings --global
~~~

And then, install ECharts with `typings`.

~~~bash
typings install echarts=github:DefinitelyTyped/DefinitelyTyped/echarts/echarts.d.ts#3305eb6f74a2de17d208dfaaa20d69cfb912f871 --save --global
~~~

In this stage, ECharts interface has been defined. Finally, we need to install ECharts with `npm`.

~~~bash
npm install echarts
~~~

Now, `echarts` can be accessed in your TypeScript file.

~~~ts
import {Component} from '@angular/core';
import * as echarts from 'echarts';


@Component({
  templateUrl: 'build/pages/page1/page1.html'
})
export class Page3 {
  constructor() {
    console.log(echarts); // works here
  }
}
~~~

# Explanation

ECharts TypeScript definition (non-official) can be found at [DefinitelyTyped/echarts](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/echarts/echarts.d.ts).

`3305eb6f74a2de17d208dfaaa20d69cfb912f871` is the commit hash code, which can be replaced by the lasted one. This hash code is optional. Without it, `typings` will give the error message as:

> typings WARN badlocation "github:DefinitelyTyped/DefinitelyTyped/echarts/echarts.d.ts" is mutable and may change, consider specifying a commit hash

`--save` changes settings in `typings.json`, in pretty much the similar way as `npm install ... --save`.

`--global` tells TypeScript that the package to install, in our case, ECharts, should be accessed with `window.xxx`. So, if you install a global package without this tag, you will probably get:

> typings ERR! message Attempted to compile "echarts" as an external module, but it looks like a global module. You'll need to enable the global option to continue.

After installation, we can use `git status` to see what's installed.

~~~bash
$ git status
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

    modified:   typings.json
    modified:   typings/index.d.ts

Untracked files:
  (use "git add <file>..." to include in what will be committed)

    typings/globals/echarts/

no changes added to commit (use "git add" and/or "git commit -a")


$ git diff
diff --git a/betterfly/typings.json b/betterfly/typings.json
index c44aff9..73add38 100644
--- a/betterfly/typings.json
+++ b/betterfly/typings.json
@@ -2,6 +2,7 @@
   "dependencies": {},
   "devDependencies": {},
   "globalDependencies": {
+    "echarts": "github:DefinitelyTyped/DefinitelyTyped/echarts/echarts.d.ts#3305eb6f74a2de17d208dfaaa20d69cfb912f871",
     "es6-shim": "registry:dt/es6-shim#0.31.2+20160602141504"
   }
 }
diff --git a/betterfly/typings/index.d.ts b/betterfly/typings/index.d.ts
index 841268a..991e3f1 100644
--- a/betterfly/typings/index.d.ts
+++ b/betterfly/typings/index.d.ts
@@ -1 +1,2 @@
+/// <reference path="globals/echarts/index.d.ts" />
 /// <reference path="globals/es6-shim/index.d.ts" />
~~~

In brief, this tells TypeScript the interface of ECharts when compiling TypeScript into JavaScript.

Enjoy ECharts now!
