import axios from 'axios';
import './style.css'; 

const characterContainer = document.createElement('div');
document.body.appendChild(characterContainer);
axios.get('https://rickandmortyapi.com/api/character')
  .then(response => {
    const characters = response.data.results;
    characters.forEach(character => {
      const charElement = document.createElement('div');
      charElement.innerHTML = `<h2>${character.name}</h2><img src="${character.image}" alt="${character.name}" />`;
      characterContainer.appendChild(charElement);
    });
  });
