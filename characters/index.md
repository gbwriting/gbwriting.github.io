---
layout: default
title: Characters
---

<div class="character-directory">

  {% for character in site.characters %}

    <a class="character-card" href="{{ character.url }}">

      <img src="{{ character.avatar | default: 'https://placehold.co/300x400' }}" alt="{{ character.name }}">

      <div class="character-card-info">
        <h3>{{ character.name }}</h3>
        
      </div>

    </a>

  {% endfor %}

</div>

<style>.character-directory {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
}

.character-card {
  display: block;
  text-decoration: none;
  color: inherit;
}

.character-card img {
  width: 50%;
  height: auto;
  display: block;
  border-radius: 10px;
}</style>
