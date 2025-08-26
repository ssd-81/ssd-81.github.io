---
layout: default
title: Home
---

# Welcome to My Blog

This blog is powered by GitHub Pages and Markdown using Jekyll.

## Recent Posts

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a> - {{ post.date | date: "%B %d, %Y" }}
    </li>
  {% endfor %}
</ul>
