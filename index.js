'use strict';

console.log('index.js is running...');

const getColorBtn = document.getElementById('get-color-btn');
const colorPicker = document.getElementById('color-picker');
const schemeSelect = document.getElementById('scheme-select');
const colorScheme = document.getElementById('color-scheme');

const getColorScheme = async () => {
  const hexValue = colorPicker.value.slice(1);
  const schemeValue = schemeSelect.value;

  console.log(hexValue);
  const response = await fetch(
    `https://www.thecolorapi.com/scheme?hex=${hexValue}&mode=${schemeValue}&count=6`
  );
  const data = await response.json();
  console.log(schemeSelect.value);
  console.log(data);

  colorScheme.innerHTML = `
  
    <img class="color-scheme-img" src=${data.image.bare} />
  `;
};

getColorBtn.addEventListener('click', getColorScheme);
