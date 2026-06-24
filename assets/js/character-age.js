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
