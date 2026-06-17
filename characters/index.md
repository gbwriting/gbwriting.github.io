---
layout: default
title: Characters
---

<div class="character-directory">
  {% for character in site.characters %}
    <p>{{ character.name }}</p>
  {% endfor %}
</div>
