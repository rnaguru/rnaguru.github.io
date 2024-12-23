// Add support for tapping on cells on mobile devices
mazeCells.forEach((cell, index) => {
  cell.addEventListener('touchstart', () => {
    moveToCell(index);
  });
});

function moveToCell(index) {
  currentCell = index;
  updateMazePosition();
  checkForCreativeChallenges();
}