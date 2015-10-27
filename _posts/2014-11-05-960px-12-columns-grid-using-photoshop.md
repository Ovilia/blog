---
title: Sketch Up a 960px 12 Columns Grid Using PhotoShop
time: 2014.11.05 17:25:48
layout: post
tags:
- PhotoShop
- Design
- Grid
excerpt: In this post, we are going to introduce how to make a Grid with 12 columns on an A4 paper, which can be later printed and for sketching Website prototype.
series: How I made ...
---

> #### What You Will Learn In This Post

> In this post, we are going to introduce how to make a Grid with 12 columns on an A4 paper, which can be later printed and for sketching Website prototype.

# Why make it?

960px Grid with 12 columns is a frequently used Grid System style. Before writing code to make a Website, it's more efficient and flexible to sketch it on the paper, and then in PhotoShop on a computer.

I wanted to buy this kind of paper or notebooks, but none of them is very ideal. So I decided to make it by myself.

# Download

<a href="{{ site.url }}/img/post/2014-11-05-960px-12-columns-grid-using-photoshop-9.png" target="_blank">
    <img src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2014-11-05-960px-12-columns-grid-using-photoshop-8.png" />
</a>

For those just want to download it, you may skip the following steps and just download it <a href="{{ site.url }}/img/post/2014-11-05-960px-12-columns-grid-using-photoshop-9.png" target="_blank">here</a>. 

# Step-by-Step Tutorial

## 1. Create a new pattern image

A **pattern** in Photoshop is something that can be used to fill an area, which is used in this case to create grids.

`File -> New` and set the width to be `80px` and height to be `50px`

<img src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2014-11-05-960px-12-columns-grid-using-photoshop-1.png" />

## 2. Add guide lines

`View -> New Guide` and set it to be `15px` and `65px` vertically.

## 3. Draw lines

Set the color to be `#ccc` and draw lines with pencil while keeping the **shift** key down so that you can get this.

<img src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2014-11-05-960px-12-columns-grid-using-photoshop-2.png" />

Then, set the color to be `#999` and draw lines similarly at borders. Note that we only draw the top-left part, since the bottome-right borders will be drawn by another's top-left border. Now, you can get this.

<img src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2014-11-05-960px-12-columns-grid-using-photoshop-3.png" />

Paint the rest of it as white.

## 4. Define it as a `pattern`

`Edit -> Define Pattern`

## 5. Create a new A4 image

This image file will then be used for printing.

<img src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2014-11-05-960px-12-columns-grid-using-photoshop-4.png" />

## 6. Add guide lines

`View -> New Guide` and set it to be `280px` and `220px` vertically, and `160px` and `3360px` horizontally.

## 7. Create a layer and paint the area bordered with guide lines

<img src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2014-11-05-960px-12-columns-grid-using-photoshop-5.png" />

You can paint it with any color.

## 8. Set pattern

Double click the new layer and in `Pattern Overlay` tab, select the pattern you've just created, and then click `Snap to Origin`.

<img src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2014-11-05-960px-12-columns-grid-using-photoshop-6.png" />

## 9. Draw borders

You can hide the guide lines with `ctrl + ;`. You can then see that the bottom-right border is not drawn so you need to draw it with pencil while keeping the `shift` key pressed as we did before.

<img src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2014-11-05-960px-12-columns-grid-using-photoshop-7.png" />

## 10. Print and adjust

Now it's almost done. And all you need to do is to adjust the brightness of the lines (by changing the opacity of the layer) and see what goes best with your printer.

*Hope you can draw excellent prototype with it!*
