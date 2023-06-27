// Array of names and scores
const leaderboard = [
  { name: 'John', score: 100 },
  { name: 'Alice', score: 85 },
  { name: 'Bob', score: 95 },
  { name: 'Jane', score: 90 },
];

// Function to render the leaderboard
export const renderLeaderboard = () => {
  const leaderboardContainer = document.getElementById('list');

  // Clear the container
  leaderboardContainer.innerHTML = '';

  // Create HTML elements for each entry using template literals and arrow function
  leaderboard.forEach((entry, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${index + 1}. ${entry.name}: ${entry.score}`;

    leaderboardContainer.appendChild(listItem);
  });
};
