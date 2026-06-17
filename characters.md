---
layout: default
title: Characters
---

<div class="character-directory">

{% for character in site.characters %}

  <div class="character-card">
    <a href="{{ character.url }}">
      <img src="{{ character.avatar | default: 'https://placehold.co/200x250' }}" alt="{{ character.name }}">
      <h3>{{ character.name }}</h3>
    </a>
  </div>

{% endfor %}

</div>
