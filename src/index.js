import './style.css';

import { renderLeaderboard, refreshScores, submitScore } from './modules/scoreList.js';

// Your game ID
const gameId = 'YOUR_GAME_ID';

// Render the leaderboard initially
renderLeaderboard();

// Refresh scores when the "Refresh" button is clicked
const refreshButton = document.querySelector('button[type="reset"]');
refreshButton.addEventListener('click', () => {
  refreshScores(gameId);
});

// Submit a score when the "Submit" button is clicked
const submitButton = document.querySelector('button[type="submit"]');
submitButton.addEventListener('click', async () => {
  const nameInput = document.querySelector('input[name="name"]');
  const scoreInput = document.querySelector('input[name="score"]');
  const name = nameInput.value;
  const score = parseInt(scoreInput.value, 10);

  if (name && !Number.isNaN(score)) {
    await submitScore(gameId, name, score);
    await refreshScores(gameId);
    nameInput.value = '';
    scoreInput.value = '';
  }
});
