// Get references to DOM elements
const searchInput = document.getElementById('searchInput');
const cards = document.querySelectorAll('.card');
const noResultsMessage = document.getElementById('noResultsMessage');
const toggleBtn = document.getElementById('toggleMode');

/**
 * Filters cards based on the search input value.
 * Shows cards that contain the input text; hides others.
 * Displays "no results" message if no cards match.
 */
function filterCards() {
  const inputValue = searchInput.value.toLowerCase();
  let anyMatch = false;

  // Iterate over each card element
  cards.forEach(function (card) {
    const cardText = card.textContent.toLowerCase();

    // Check if card text includes the search input
    const isMatch = cardText.indexOf(inputValue) !== -1;

    // Show or hide the card based on match
    if (isMatch === true) {
      card.style.display = 'block';
      anyMatch = true; // At least one card matches
    } else {
      card.style.display = 'none';
    }
  });

  // Show or hide the "no results" message
  if (anyMatch === true) {
    noResultsMessage.style.display = 'none';
  } else {
    noResultsMessage.style.display = 'block';
  }
}

/**
 * Toggles the dark mode class on the document body.
 */
function toggleDarkMode() {
  const bodyElement = document.body;

  if (bodyElement.classList.contains('dark-mode') === true) {
    bodyElement.classList.remove('dark-mode');
  } else {
    bodyElement.classList.add('dark-mode');
  }
}


