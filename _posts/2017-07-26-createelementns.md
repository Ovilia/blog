---
title: "Document.createElementNS: What's the difference and why we need it"
time: 2017.07.26 14:09:28
layout: post
tags:
- JavaScript
- HTML
- SVG
excerpt: 'Yesterday, I was stuck with a mysterious problem, that the SVG elements are not updated on screen after I dynamically changed them. But on the other hand, if I copy the generated SVG and run it on [jsfiddle.net](http://jsfiddle.net), it rendered correctly. After some attempts, I found this problem was caused by using `document.createElement` instead of `document.createElementNS` to insert elements into SVG. So, what is this `document.createElementNS` after all?'
---

Yesterday, I was stuck with a mysterious problem, that the SVG elements are not updated on screen after I dynamically changed them. But on the other hand, if I copy the generated SVG and run it on [jsfiddle.net](http://jsfiddle.net), it rendered correctly.

After some attempts, I found this problem was caused by using `document.createElement` instead of `document.createElementNS` to insert elements into SVG.

So, what is this `document.createElementNS` after all?

# What is `document.createElementNS`

Most of us may be more familiar with `document.createElement`, which we used to create a new tag node. Accordingly, `document.createElementNS` does much the same thing, only that it takes an extra *namespace URI* as parameter.

Valid namespace URIs include:

- `http://www.w3.org/1999/xhtml` for HTML
- `http://www.w3.org/2000/svg` for SVG
- `http://www.mozilla.org/xb` for XBL
- `http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul` for XUL

As we can see above, this namespace is used to identify which type of XML this tag node belongs to.

For example, if we want to create a rectangle in SVG, we should use

```js
document.createElementNS('http://www.w3.org/2000/svg', 'rect');
```

instead of

```js
document.createElement('rect');
```

But why?

# Why is namespace necessary

If we insert the tag node created by `document.createElement`, we may find the DOM looks the same as we do with `document.createElementNS`. So why do we need to specify a namespace when we create a node?

Let's have a look at this document:

> We envision applications of Extensible Markup Language (XML) where a single XML document may contain elements and attributes (here referred to as a "markup vocabulary") that are defined for and used by multiple software modules. One motivation for this is modularity; if such a markup vocabulary exists which is well-understood and for which there is useful software available, **it is better to re-use this markup rather than re-invent it**.
>
> Such documents, containing multiple markup vocabularies, pose problems of **recognition and collision**. Software modules need to be able to recognize the tags and attributes which they are designed to process, even in the face of "collisions" occurring when markup intended for some other software package uses the same element type or attribute name.
>
> These considerations require that document constructs should have universal names, whose scope extends beyond their containing document. This specification describes a mechanism, XML namespaces, which accomplishes this.
>
> From [Namespaces in XML, Namespaces in XML](https://www.w3.org/TR/1999/REC-xml-names-19990114/)

Modern engineers are sure to be familiar with modularity and namespaces. Likely, namespace for nodes in XML specifies what the node should be recognized as which type of XML for a browser.

# Conclusion

So, next time you insert a node into SVG, be sure to create it using `document.createElementNS`. And although it works with `setAttribute`, it is recommended that you update attributes using `setAttributeNS`.

## Reference

- [Document.createElementNS() from MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElementNS)
- [createElement vs. createElementNS from stackoverflow](https://stackoverflow.com/questions/8173217/createelement-vs-createelementns/8173365#8173365)

