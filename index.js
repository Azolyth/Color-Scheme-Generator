'use strict';

const getColorBtn = document.getElementById('get-color-btn');
const colorPicker = document.getElementById('color-picker');
const schemeSelect = document.getElementById('scheme-select');
const colorScheme = document.getElementById('color-scheme');
const displayHex = document.getElementById('display-hex');

const getColorScheme = async () => {
  const hexValue = colorPicker.value.slice(1);
  const schemeValue = schemeSelect.value;

  const response = await fetch(
    `https://www.thecolorapi.com/scheme?hex=${hexValue}&mode=${schemeValue}&count=6`
  );
  const data = await response.json();
  let colorsHtml = '';
  for (let i = 0; i < data.colors.length; i++) {
    colorsHtml += `
      <div>
        <img class="colors" src="${data.colors[i].image.bare}" />
        <p class="hex" >${data.colors[i].hex.value}</p>
      </div>
    `;
  }
  colorScheme.innerHTML = colorsHtml;
};

getColorScheme();
getColorBtn.addEventListener('click', getColorScheme);
