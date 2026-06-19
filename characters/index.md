---
layout: default
title: Characters
---

<!-- Filter Controls Container -->
<div class="filter-container">
  
  <!-- Writer Filters -->
  <div class="filter-group" data-filter-group="writer">
    <span class="filter-label">Writer:</span>
    <button class="filter-btn active" data-filter="all">All</button>
    <button class="filter-btn" data-filter="Kaci">Kaci</button>
    <!-- Add other writers here -->
  </div>

  <!-- Species Filters -->
  <div class="filter-group" data-filter-group="species">
    <span class="filter-label">Species:</span>
    <button class="filter-btn active" data-filter="all">All</button>
    <button class="filter-btn" data-filter="human">Human</button>
    <button class="filter-btn" data-filter="fae">Fae</button>
    <button class="filter-btn" data-filter="fire witch">Fire Witch</button>
    <button class="filter-btn" data-filter="earth witch">Earth Witch</button>
    <button class="filter-btn" data-filter="water witch">Water Witch</button>
    <button class="filter-btn" data-filter="air witch">Air Witch</button>
    <button class="filter-btn" data-filter="were">Were</button>
  </div>

</div>

<div class="character-directory">

{% for character in site.characters %}

<!-- Added BOTH data-writer and data-species (lowercased for safer matching) -->
<a class="character-card" 
   href="{{ character.url }}" 
   data-writer="{{ character.writer }}" 
   data-species="{{ character.species | downcase }}">

  <div class="character-image">
    <img src="{{ character.avatar | default: 'https://placehold.co/400x500' }}">
  </div>

  <div class="character-overlay">
    <h2>{{ character.name }}</h2>
    <div class="character-tags">
      {% if character.age %}<span>{{ character.age }} years old</span>{% endif %}
      {% if character.birthday %}<span>{{ character.birthday }}</span>{% endif %}
      {% if character.species %}<span>{{ character.species }} {{ page.weretype }}</span>{% endif %}
      {% if character.zodiac %}<span>{{ character.zodiac }}</span>{% endif %}
      {% if character.orientation %}<span>{{ character.orientation }}</span>{% endif %}
      {% if character.writer %}<span>written by {{ character.writer }}</span>{% endif %}
    </div>
  </div>

</a>

{% endfor %}

</div>

<style>
 .filter-container {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: 40px auto 10px;
    max-width: 1400px;
    padding: 0 20px;
}

.filter-group {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
}

.filter-label {
    color: #888;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 1px;
    min-width: 80px; /* Aligns the button rows neatly */
}

.filter-btn {
    background: #1b1b1b;
    color: #fff;
    border: 1px solid var(--t4, #333);
    padding: 8px 16px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: all 0.2s ease;
}

.filter-btn:hover, 
.filter-btn.active {
    background: var(--t4, #333);
    border-color: var(--t4, #555);
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
        rgba(0,0,0,.3),
        rgba(0,0,0,.2)
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
    gap: 8px;
}

.character-tags span {
    background: var(--t4);
    padding: 6px 10px;
    border-radius: 5px;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 1px;
}
</style>

<script>
document.addEventListener("DOMContentLoaded", function() {
  const filterGroups = document.querySelectorAll(".filter-group");
  const cards = document.querySelectorAll(".character-card");

  // Object to keep track of currently active filters
  let activeFilters = {
    writer: "all",
    species: "all"
  };

  filterGroups.forEach(group => {
    const groupName = group.getAttribute("data-filter-group");
    const buttons = group.querySelectorAll(".filter-btn");

    buttons.forEach(button => {
      button.addEventListener("click", () => {
        // Toggle active button style within this specific group
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        // Update our active filter tracker
        activeFilters[groupName] = button.getAttribute("data-filter").toLowerCase();

        // Run the filter check on all cards
        applyFilters();
      });
    });
  });

  function applyFilters() {
    cards.forEach(card => {
      // Fetch card values and normalize to lowercase to match our button data
      const cardWriter = (card.getAttribute("data-writer") || "").toLowerCase();
      const cardSpecies = (card.getAttribute("data-species") || "").toLowerCase();

      // Check if card matches Writer filter
      const matchesWriter = activeFilters.writer === "all" || cardWriter === activeFilters.writer;
      
      // Check if card matches Species filter
      const matchesSpecies = activeFilters.species === "all" || cardSpecies === activeFilters.species;

      // Card must satisfy BOTH conditions to be visible
      if (matchesWriter && matchesSpecies) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }
});
</script>
