---
layout: default
title: Characters
---

<div class="character-directory">

{% for character in site.characters %}

<a class="character-card" href="{{ character.url }}">

  <div class="character-image">
    <img src="{{ character.avatar | default: 'https://placehold.co/400x500' }}">
  </div>

  <div class="character-overlay">

    <h2>{{ character.name }}</h2>

    <div class="character-tags">

      {% if character.age %}
      <span>{{ character.age }} years old</span>
      {% endif %}

      {% if character.birthday %}
      <span>{{ character.birthday }}</span>
      {% endif %}
      
      {% if character.species %}
      <span>{{ character.species }}</span>
      {% endif %}
      
      {% if character.zodiac %}
      <span>{{ character.zodiac }}</span>
      {% endif %}

   

    </div>

  </div>

</a>

{% endfor %}

</div>

<style>
  .character-directory {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 25px;
    max-width: 1400px;
    margin: 50px auto;
    padding: 20px;
}

.character-card {
    position: relative;
    height: 450px;
    overflow: hidden;
    border-radius: 10px;
    text-decoration: none;
    color: inherit;
    background: #1b1b1b;
}

.character-image {
    width: 100%;
    height: 100%;
}

.character-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: .4s ease;
}

.character-card:hover img {
    transform: scale(1.05);
}

.character-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
        to top,
        rgba(0,0,0,.6),
        rgba(0,0,0,.2)
    );
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 25px;
}

.character-overlay h2 {
    margin: 0 0 15px;
    font-size: 32px;
    font-weight: 700;
}

.character-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.character-tags span {
    background: rgba(255,255,255,.12);
    backdrop-filter: blur(4px);
    padding: 6px 10px;
    border-radius: 5px;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 1px;
}
</style>
