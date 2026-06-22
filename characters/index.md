---
layout: default
title: Characters
---

<!-- Filter Box Container -->
<div class="filter-box">
  
  <div class="filter-box-header">
    <h3>Filter Directory</h3>
    <p>Narrow down the character roster by writer or species</p>
  </div>

  <div class="filter-container">
    
    <!-- Writer Filters -->
    <div class="filter-group" data-filter-group="writer">
      <span class="filter-label">Writer</span>
      <div class="filter-buttons">
        <button class="filter-btn active" data-filter="all">All</button>
        <button class="filter-btn" data-filter="Kaci">Kaci</button>
                <button class="filter-btn" data-filter="Sarah">Sarah</button>

      </div>
    </div>

    <!-- Species Filters -->
    <div class="filter-group" data-filter-group="species">
      <span class="filter-label">Species</span>
      <div class="filter-buttons">
        <button class="filter-btn active" data-filter="all">All</button>
        <button class="filter-btn" data-filter="human">Human</button>
        <button class="filter-btn" data-filter="fae">Fae</button>
        <button class="filter-btn" data-filter="fire witch">Fire Witch</button>
        <button class="filter-btn" data-filter="earth witch">Earth Witch</button>
        <button class="filter-btn" data-filter="water witch">Water Witch</button>
        <button class="filter-btn" data-filter="air witch">Air Witch</button>
        <button class="filter-btn" data-filter="were">Were</button>
                <button class="filter-btn" data-filter="hunter">Hunter</button>
      </div>
    </div>
    
    <!-- Zodiac Filters -->
    <div class="filter-group" data-filter-group="zodiac">
      <span class="filter-label">Zodiac</span>
      <div class="filter-buttons">
        <button class="filter-btn active" data-filter="all">All</button>
        <button class="filter-btn" data-filter="aries">Aries</button>
        <button class="filter-btn" data-filter="taurus">Taurus</button>
        <button class="filter-btn" data-filter="gemini">Gemini</button>
        <button class="filter-btn" data-filter="cancer">Cancer</button>
        <button class="filter-btn" data-filter="leo">Leo</button>
        <button class="filter-btn" data-filter="virgo">Virgo</button>
        <button class="filter-btn" data-filter="libra">Libra</button>
        <button class="filter-btn" data-filter="scorpio">Scorpio</button>
        <button class="filter-btn" data-filter="sagittarius">Sagittarius</button>
        <button class="filter-btn" data-filter="capricorn">Capricorn</button>
        <button class="filter-btn" data-filter="aquarius">Aquarius</button>
        <button class="filter-btn" data-filter="pisces">Pisces</button>
      </div>
    </div>

  </div>
</div>

<div class="character-directory">

{% for character in site.characters %}

<!-- Added BOTH data-writer and data-species (lowercased for safer matching) -->
<a class="character-card" 
   href="{{ character.url }}" 
   data-writer="{{ character.writer }}" 
   data-species="{{ character.species | downcase }}"
   data-zodiac="{{ character.zodiac | downcase }}">
  

  <div class="character-image">
    <img src="{{ character.avatar | default: 'https://placehold.co/400x500' }}">
  </div>

  <div class="character-overlay">
    <h2>{{ character.name }}</h2>
    <div class="character-tags">
      {% if character.age %}<span>{{ character.age }} years old</span>{% endif %}
      {% if character.birthday %}<span>{{ character.birthday }}</span>{% endif %}
      {% if character.species %}<span>{{ character.species }} </span>{% endif %}
      {% if character.zodiac %}<span>{{ character.zodiac }}</span>{% endif %}
      {% if character.orientation %}<span>{{ character.orientation }}</span>{% endif %}
      {% if character.writer %}<span>written by {{ character.writer }}</span>{% endif %}
    </div>
  </div>

</a>

{% endfor %}

</div>

<style>
 /* Filter Box Container Styling */
.filter-box {
    background: var(--bg2);
    border-radius: 15px;
    max-width: 1400px;
    margin: 50px auto 20px;
    padding: 30px;
    box-sizing: border-box;
}

/* Header Text Inside the Box */
.filter-box-header {
    margin-bottom: 25px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    padding-bottom: 15px;
}

.filter-box-header h3 {
    margin: 0 0 5px 0;
    font-family: var(--subtitlefont);
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 3px;
}

.filter-box-header p {
    margin: 0;
    font-family: var(--smallfont);
  font-weight: 500;
  font-size: 10px;
      text-transform: uppercase;
    letter-spacing: 1px;
  opacity: 0.8;
}

/* Filtering Layout Inside the Box */
.filter-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.filter-group {
    display: grid;
    grid-template-columns: 100px 1fr; /* Ensures labels align perfectly */
    align-items: center;
}

.filter-label {
    
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-weight: 600;
}

.filter-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

/* Button Styling */
.filter-btn {
    background: var(--t4);
    color: var(--body);
    border: 1px solid rgba(255, 255, 255, 0.05);
    padding: 8px 10px;
    border-radius: 5px;
    cursor: pointer;
    font: 11px var(--subtitlefont);
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: all 0.2s ease;
}

.filter-btn:hover {
    color: #fff;
    background: var(--t4);
    border-color: var(--t4, #444);
}

.filter-btn.active {
    background: var(--g2);
    color: #fff;
    border-color: var(--t4, #555);
}

/* Responsive fix for smaller screens */
@media (max-width: 768px) {
    .filter-group {
        grid-template-columns: 1fr;
        gap: 10px;
    }
    .filter-box {
        margin: 20px;
        padding: 20px;
    }
}
  
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
        rgba(0,0,0,.2),
        rgba(0,0,0,.1)
    );
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 25px;
}

.character-overlay h2 {
    margin: 0 0 8px;
  font-family: var(--subtitlefont);
    font-size: 20px;
    font-weight: 700;
  background: var(--t4);
    padding: 10px;
    border-radius: 5px;
  text-transform: uppercase;
  
}

.character-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
}

.character-tags span {
    background: var(--t4);
    padding: 6px 10px;
    border-radius: 5px;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 1px;
}
</style>

<script>
document.addEventListener("DOMContentLoaded", function() {
  const filterGroups = document.querySelectorAll(".filter-group");
  const cards = document.querySelectorAll(".character-card");

  // Track state for all three layers
  let activeFilters = {
    writer: "all",
    species: "all",
    zodiac: "all"
  };

  filterGroups.forEach(group => {
    const groupName = group.getAttribute("data-filter-group");
    const buttons = group.querySelectorAll(".filter-btn");

    buttons.forEach(button => {
      button.addEventListener("click", () => {
        // Clear active states in this group and set current button active
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        // Grab selection and store it
        activeFilters[groupName] = button.getAttribute("data-filter").toLowerCase();

        // Trigger filter sweep
        applyFilters();
      });
    });
  });

  function applyFilters() {
    cards.forEach(card => {
      // Pull and sanitize data values from each card
      const cardWriter = (card.getAttribute("data-writer") || "").toLowerCase();
      const cardSpecies = (card.getAttribute("data-species") || "").toLowerCase();
      const cardZodiac = (card.getAttribute("data-zodiac") || "").toLowerCase();

      // Check all three conditions
      const matchesWriter = activeFilters.writer === "all" || cardWriter === activeFilters.writer;
      const matchesSpecies = activeFilters.species === "all" || cardSpecies === activeFilters.species;
      const matchesZodiac = activeFilters.zodiac === "all" || cardZodiac === activeFilters.zodiac;

      // Card must fulfill all matching filters simultaneously to show
      if (matchesWriter && matchesSpecies && matchesZodiac) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }
});
</script>
