// Array of names and scores
let leaderboard = [];

// Function to render the leaderboard
export const renderLeaderboard = () => {
  const leaderboardContainer = document.getElementById('list');

  // Clear the container
  leaderboardContainer.innerHTML = '';

  // Create HTML elements for each entry using template literals and arrow function
  leaderboard.forEach((entry, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${index + 1}. ${entry.user}: ${entry.score}`;

    leaderboardContainer.appendChild(listItem);
  });
};

// Function to refresh scores from the API
export const refreshScores = async (gameId) => {
  const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`);
  const data = await response.json();
  leaderboard = data.result;

  // Sort the leaderboard by score in descending order
  leaderboard.sort((a, b) => b.score - a.score);

  renderLeaderboard();
};

// Function to submit a score to the API
export const submitScore = async (gameId, name, score) => {
  await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user: name, score }),
  });
};
