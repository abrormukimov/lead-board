const apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

let gameId;

const createUrl = (choice) => {
  if (choice === 'new-game') {
    return `${apiUrl}games`;
  }
  return `${apiUrl}games/${gameId}/scores`;
};

const getData = async () => {
  const targetUrl = createUrl('get-score');
  const response = await fetch(targetUrl);
  return response.json();
};

const postData = async (choice, data) => {
  const targetUrl = createUrl(choice);
  const response = await fetch(targetUrl, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

const setGameID = async () => {
  gameId = window.localStorage.getItem('gameId');
  gameId = JSON.parse(gameId);
  if (gameId === null) {
    const gameObj = {
      name: 'Unique Leaderboard API',
    };
    const data = await postData('new-game', gameObj);
    const pattern = /Game with ID: ([^ ]+)/;
    [, gameId] = data.result.match(pattern);

    window.localStorage.setItem('gameId', JSON.stringify(gameId));
  }
};

export {
  getData,
  postData,
  setGameID,
};