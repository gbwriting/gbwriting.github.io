---
layout: default
title: Characters
permalink: /characters/
---

<h1>Characters</h1>

<div class="character-directory">

{% for character in site.characters %}

  <a href="{{ character.url }}">
    <img src="{{ character.avatar }}">
    <div>{{ character.name }}</div>
  </a>

{% endfor %}

</div>
