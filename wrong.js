// MDPage 2
//1. Justify Header.
const headerElement = document.querySelector("header");
headerElement.style.display = 'flex';
headerElement.style.justifyContent = 'flex-start';

//2. Change logo-text to black.
headerElement.firstElementChild.style.color = "black";

//3. Change border to lightgray.
headerElement.style.borderBottom = "1px solid lightgray";

//4. Change recipe name.
const recipeName = document.getElementById("recipe-name");
recipeName.innerHTML = "Frozen Cheesecake"

//5. Change clock text to icon instead.
const timeContainer = document.querySelector('.time-container');
const avTimerSpan = timeContainer.querySelector('span');
avTimerSpan.classList.add('material-icons');

//6. Change the estimated time.
const timeSpan = timeContainer.querySelector('.time');
timeSpan.textContent = '60+ min';

//7. Change the image source.
const imageContainer = document.querySelector(".image-container");
const image = imageContainer.querySelector("img");
image.setAttribute("src", "assets/frozen-cheesecake-slice.jpg");

//8. Change the background of the ingredients list.
const ingredientsElement = document.querySelector(".ingredients-container");
ingredientsElement.style.backgroundColor = "#f9f9f9";

//9. Remove and add to the bottom ingredients list.
//9.1. Remove
const bottomIngredientsElement = document.querySelector(".ingredients-list-bottom");
const bottomChildren = bottomIngredientsElement.children;
bottomIngredientsElement.removeChild(bottomChildren[0]);

//9.2 Add list items.
const firstListElement = document.createElement("li");
firstListElement.innerHTML = "15st digistivekex";
bottomIngredientsElement.appendChild(firstListElement);

const secondListElement = document.createElement("li");
secondListElement.innerHTML = "Lite smör";
bottomIngredientsElement.appendChild(secondListElement);

//10. Change the third ingredient of the paste ingredients.
const pasteIngredientsElement = document.querySelector(".ingredients-list-paste");
const pasteChildren = pasteIngredientsElement.children;
pasteChildren[2].innerHTML = "3tsk vaniljsocker";

//11. Add to the paste list.
const lastPasteIngredientElement = document.createElement("li");
lastPasteIngredientElement.innerHTML = "400g naturell philadelphiaost";
pasteIngredientsElement.appendChild(lastPasteIngredientElement);

//12. Remove shadow styling to instructions.
const instructionsElement = document.querySelector(".instructions.shadow");
instructionsElement.style.boxShadow = "none";

//13. Change two list elements in the instructions.
const instructionListElement = document.querySelector(".instructions-list");
const instructionChildren = instructionListElement.children;
instructionChildren[1].innerHTML = "Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en liten bunke";
instructionChildren[8].innerHTML = "Ställ in i frysen över natten.";

//Bonus. Change the spelling of ingredients header.
const ingredients = document.querySelector(".ingredients");
ingredients.innerHTML = "Ingredienser";