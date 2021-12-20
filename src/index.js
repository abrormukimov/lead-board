import './style.scss';
import display from './display.js';

import { postData, setGameID } from './api-interface.js';

const newScoreBtn = document.querySelector('#new-score');
const scoreInput = document.querySelector('#score');
const nameInput = document.querySelector('#name');
const refreshBtn = document.querySelector('#refresh');

const clearInput = () => {
  nameInput.value = '';
  scoreInput.value = '';
};

const validate = (name, score) => (name.length > 0 && score > -1);

newScoreBtn.addEventListener('click', () => {
  const newScore = scoreInput.value;
  const newName = nameInput.value.trim();
  if (!validate(newName, newScore)) {
    clearInput();
    return;
  }
  const scoreObj = {
    user: newName,
    score: newScore,
  };
  postData('new-score', scoreObj);
  clearInput();
});

document.addEventListener('DOMContentLoaded', () => {
  setGameID();
  display();
});

refreshBtn.addEventListener('click', display);