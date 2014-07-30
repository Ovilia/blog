---
title: 04 - More about CSS
time: 2014.07.30 17:53:00
layout: post
tags:
- Web-Design
- Tutorial
- CSS
series: Dive into Web Front-End Programming
excerpt: relative, absolute, fixed are three most frequently used CSS `position` values. Even if you think you know them already, this post may surprise you.
---

# CSS `position`

> The `position` CSS property chooses alternative rules for positioning elements, designed to be useful for scripted animation effects.

> A *positioned element* is an element whose computed position property is `relative`, `absolute`, `fixed` or `sticky`.

> An *relatively positioned element* is an element whose computed position property is relative.

> An *absolutely positioned element* is an element whose computed position property is absolute or fixed.

> A *stickily positioned element* is an element whose computed position property is sticky.

> The `top`, `right`, `bottom`, and `left` properties specify the position of positioned elements.

> *From <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/position" target="_blank">Mozilla Developer Network*</a>

This post talks about `relative`, `absolute`, and `fixed`, which are three most frequently used `position` values.

## `relative`

When `position: relative` is set to an element, and its `top` is set to be `20px`, this element's position is lower than its original position at `20px` where `position: relative` is not set. Similarly for `right`, `bottom`, and `left`.

A typical mistake here is to think the element will be *relative* to its parent or the screen.

## `absolute`

We usually use `position: absolute` to set the element's position accoring the screen. But it can do more.

## `fixed`

When we want some element to be at a fixed position when user scrolls down, `position: fixed` is used.

# Combination of `position`

## Relative to Parent

Sometimes we need to set an element's position to be a certain value relative to its parent element. How can this be achieved?

First, set the `position` of its parent to be `relative` or `absolute` (if you don't want to change the position of its parent, `relative` will be OK).

Next, set the `position` of the element to be `absolute` and set its `top`, `right`, etc. values.

Now, the element is relative to its parent.

If its parent's `position` is not set explicitly, then it's `static` by default. And an element of `position: absolute` with a parent of `position: static` will have a position relative to the screen. 

