// script.js
let currentCell = 0;
const mazeCells = document.querySelectorAll('.cell');
const questionElement = document.getElementById('question');
const startCell = document.getElementById('start');
const finishCell = document.getElementById('finish');

// Keyboard movement directions: left, right, up, down
const directions = {
  left: -1,
  right: 1,
  up: -3,
  down: 3,
};

// Set initial position at 'start'
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowUp' && currentCell - 3 >= 0) {
    move('up');
  } else if (event.key === 'ArrowDown' && currentCell + 3 < mazeCells.length) {
    move('down');
  } else if (event.key === 'ArrowLeft' && currentCell % 3 !== 0) {
    move('left');
  } else if (event.key === 'ArrowRight' && (currentCell + 1) % 3 !== 0) {
    move('right');
  }
});

// Move function
function move(direction) {
  const newCell = currentCell + directions[direction];
  if (newCell >= 0 && newCell < mazeCells.length) {
    currentCell = newCell;
    updateMazePosition();
    checkForCreativeChallenges();
  }
}

// Update maze position
function updateMazePosition() {
  mazeCells.forEach(cell => cell.classList.remove('active'));
  mazeCells[currentCell].classList.add('active');
}

// Check if the user is at the 'finish' cell
function checkForCreativeChallenges() {
  if (currentCell === 4) {  // Finish cell (index 4)
    questionElement.textContent = "Congratulations! Now, solve this riddle: What comes once in a minute, twice in a moment, but never in a thousand years?";
  } else if (currentCell === 1) {  // Random challenge cell
    questionElement.textContent = "Unlock the path by thinking of an object that gets wetter the more it dries!";
  } else if (currentCell === 3) {  // Another random challenge
    questionElement.textContent = "The more you take, the more you leave behind. What are they?";
  } else {
    questionElement.textContent = "Solve the puzzle to unlock the path!";
  }
}

// Initialize
updateMazePosition(); 