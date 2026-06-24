---
layout: default
title: Character Directory - Table View
---

<div class="table-container">
  <div class="table-header-box">
    <h3>Character Roster Table</h3>
    <p>Click on any column header to sort the directory</p>
  </div>

  <table class="sortable-character-table" id="characterTable">
    <thead>
      <tr>
        <th onclick="sortTable(0)">Name <span class="sort-icon">↕</span></th>
        <th onclick="sortTable(1)">Age <span class="sort-icon">↕</span></th>
        <th onclick="sortTable(2)">Birthday <span class="sort-icon">↕</span></th>
        <th onclick="sortTable(3)">Species <span class="sort-icon">↕</span></th>
        <th onclick="sortTable(4)">Height <span class="sort-icon">↕</span></th>
        <th onclick="sortTable(5)">Zodiac <span class="sort-icon">↕</span></th>
        <th onclick="sortTable(6)">MBTI <span class="sort-icon">↕</span></th>
        <th onclick="sortTable(7)">Enneagram <span class="sort-icon">↕</span></th>
        <th onclick="sortTable(8)">Writer <span class="sort-icon">↕</span></th>
      </tr>
    </thead>
    <tbody>
      {% for character in site.characters %}
      <tr>
        <td>
          <a href="{{ character.url }}" class="table-char-link">
            <img src="{{ character.avatar | default: 'https://placehold.co/40x40' }}" class="table-avatar" alt="">
            <strong>{{ character.name }}</strong>
          </a>
        </td>
        <td class="character-age" data-birthdate="{{ character.birth_date }}" data-sort="0">—</td>
        <td>{{ character.birthday | default: "—" }}</td>
        <td>{{ character.species | default: "—" }}</td>
        <td>{{ character.height | default: "—" }}</td>
        <td>{{ character.zodiac | default: "—" }}</td>
        <td>{{ character.mbti | default: "—" }}</td>
        <td>{{ character.enneagram | default: "—" }}</td>
        <td>{{ character.writer | default: "—" }}</td>
      </tr>
      {% endfor %}
    </tbody>
  </table>
</div>

<style>
/* Table Page Container Styling */
.table-container {
    max-width: 1400px;
    margin: 50px auto;
    padding: 30px;
    background: var(--bg2);
    border-radius: 15px;
    box-sizing: border-box;
    overflow-x: auto; /* Ensures responsiveness on small screens */
}

.table-header-box {
    margin-bottom: 25px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    padding-bottom: 15px;
}

.table-header-box h3 {
    margin: 0 0 5px 0;
    font-family: var(--subtitlefont);
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 3px;
}

.table-header-box p {
    margin: 0;
    font-family: var(--smallfont);
    font-weight: 500;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 1px;
    opacity: 0.8;
}

/* Table Architecture */
.sortable-character-table {
    width: 100%;
    border-collapse: collapse;
    font-family: var(--smallfont), sans-serif;
    font-size: 13px;
    text-align: left;
}

.sortable-character-table th {
    background: var(--t4);
    padding: 15px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-family: var(--subtitlefont);
    font-size: 11px;
    cursor: pointer;
    user-select: none;
    transition: background 0.2s ease;
    border-bottom: 2px solid rgba(255, 255, 255, 0.1);
}

.sortable-character-table th:hover {
    background: var(--g2);
    color: #fff;
}

.sort-icon {
    font-size: 10px;
    margin-left: 5px;
    opacity: 0.6;
}

.sortable-character-table td {
    padding: 12px 15px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    vertical-align: middle;
}

.sortable-character-table tbody tr:hover {
    background: rgba(255, 255, 255, 0.02);
}

/* Avatar and Link styling within table */
.table-char-link {
    display: flex;
    align-items: center;
    gap: 12px;
    color: inherit;
    text-decoration: none;
    transition: color 0.2s;
}

.table-char-link:hover strong {
    color: var(--g2);
}

.table-avatar {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
    border: 1px solid rgba(255, 255, 255, 0.1);
}
</style>

<script>
function sortTable(columnIndex) {
  const table = document.getElementById("characterTable");
  const tbody = table.tBodies[0];
  const rows = Array.from(tbody.querySelectorAll("tr"));
  
  // Track sorting direction
  const isAscending = !table.querySelectorAll("th")[columnIndex].classList.contains("th-sort-asc");
  
  // Reset sorting classes on all headers
  table.querySelectorAll("th").forEach(th => th.classList.remove("th-sort-asc", "th-sort-desc"));
  
  // Sort logic
  rows.sort((rowA, rowB) => {
    const cellA = rowA.cells[columnIndex];
    const cellB = rowB.cells[columnIndex];
    
    // Check if we should sort by custom numeric data attribute (like age)
    const valA = cellA.hasAttribute("data-sort") ? parseFloat(cellA.getAttribute("data-sort")) : cellA.textContent.trim().toLowerCase();
    const valB = cellB.hasAttribute("data-sort") ? parseFloat(cellB.getAttribute("data-sort")) : cellB.textContent.trim().toLowerCase();
    
    if (typeof valA === "number" && typeof valB === "number") {
      return isAscending ? valA - valB : valB - valA;
    }
    
    return isAscending 
      ? valA.localeCompare(valB, undefined, { numeric: true, sensitivity: 'base' })
      : valB.localeCompare(valA, undefined, { numeric: true, sensitivity: 'base' });
  });
  
  // Re-append sorted rows to the table body
  rows.forEach(row => tbody.appendChild(row));
  
  // Apply visual state class to header
  table.querySelectorAll("th")[columnIndex].classList.add(isAscending ? "th-sort-asc" : "th-sort-desc");
}
</script>

<script>
  document.addEventListener("DOMContentLoaded", function () {
  const ageCells = document.querySelectorAll(".character-age");

  ageCells.forEach(cell => {
    const birthDateString = cell.getAttribute("data-birthdate");
    
    // Skip if no birth_date is provided for the character
    if (!birthDateString || birthDateString === "") return;

    const birthDate = new Date(birthDateString);
    const today = new Date();

    // Calculate age
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    
    // Adjust age if the birthday hasn't happened yet this year
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    // Guard against invalid dates or unborn characters resulting in negative numbers
    if (!isNaN(age) && age >= 0) {
      cell.textContent = age;
      cell.setAttribute("data-sort", age); // Updates the sort attribute dynamically!
    }
  });
});
</script>
