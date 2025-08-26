---
layout: default
title: Home
---

# {{ site.title }}
{{ site.description }}

---

## ✍️ Writing (Latest 10)
<ul>
  {% for post in site.posts limit:10 %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      <small>({{ post.date | date: "%b %d, %Y" }})</small>
    </li>
  {% endfor %}
</ul>

<p><a href="/writing.html">➡️ View All Writing</a></p>

---

## 💻 Projects
- [Project One](#) — Short description  
- [Project Two](#) — Another project description  

---

## ⭐ Recommendations
- Fullmetal Alchemist Brotherhood (anime)
    - the perfect story
- Black Box Thinking , Matthew Syed (book)

---

## 📚 Reading / Watchlist
- Book: *The Pragmatic Programmer*  
- Article: [Some Blog Post](#)  
- Video: [Great Talk on Go](#)  
