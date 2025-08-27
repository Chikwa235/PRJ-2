// Get references to DOM elements
const searchInput = document.getElementById('searchInput');
const cards = document.querySelectorAll('.card');
const noResultsMessage = document.getElementById('noResultsMessage');
const toggleBtn = document.getElementById('toggleMode');

/**
 * Filter cards based on search input.
 * Show "no results" message in red if nothing matches.
 */
function filterCards() {
  const query = searchInput.value.toLowerCase();
  let anyMatch = false;

  cards.forEach(card => {
    const text = card.textContent.toLowerCase();
    if (text.includes(query)) {
      card.style.display = 'block';
      anyMatch = true;
    } else {
      card.style.display = 'none';
    }
  });

  if (anyMatch) {
    noResultsMessage.style.display = 'none';
  } else {
    noResultsMessage.style.display = 'block';
    noResultsMessage.style.color = 'red'; // Make text red
  }
}

searchInput.addEventListener('input', filterCards);

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

// Attach event listener for input on the search field
searchInput.addEventListener('input', filterCards);

// Attach event listener for click on the toggle button
toggleBtn.addEventListener('click', toggleDarkMode);




