import { getData } from './api-interface.js';

const display = async () => {
  const listElement = document.querySelector('#list');

  const data = await getData();

  const leaderboard = data.result;
  listElement.textContent = '';

  Object.keys(leaderboard).forEach((key) => {
    const listItem = document.createElement('li');
    const { user, score } = leaderboard[key];
    listItem.textContent = `${user}: ${score}`;
    listElement.appendChild(listItem);
  });
};

export default display;