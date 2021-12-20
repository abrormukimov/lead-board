import './style.css';
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

newScoreBtn.addEventListener('click', () => {
  const newScore = scoreInput.value;
  const newName = nameInput.value;

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