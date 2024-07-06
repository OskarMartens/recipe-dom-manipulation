//1. Name of the recipe.
const recipeNameElement = document.getElementById("recipe-name");
console.log(recipeNameElement.innerText);

//2. HTML tag to display recipe name.
console.log(recipeNameElement.tagName);

//3. Font size of the paragraph tag for the class "description".
const descriptionElement = document.querySelector(".description");
var fontSize = window.getComputedStyle(descriptionElement).fontSize;
console.log(fontSize);

//4. Value of the alt atrribute on the image.
const imageContainer = document.querySelector(".image-container");
const image = imageContainer.querySelector("img");
console.log(image.getAttribute("alt"));

//5. Dimensions and url of the image. Create an object that looks like this:
// {
//     url: string
//     height: number,
//     width: number,
// }
const imageInfo = {
    url: image.getAttribute("src"),
    height: image.clientHeight,
    width: image.clientWidth
};

//6. Number of ingredients in paste.
const pasteIngredientsElement = document.querySelector(".ingredients-list-paste");
const pasteChildren = pasteIngredientsElement.children;
console.log(pasteChildren.length);

//7. Forth element of the paste list.
console.log(pasteChildren[3].textContent);

//8. An array of objects from instructions. Each element should look like this:
// {
//     order: number;
//     text: instruction;
// }
var instructionsList = document.querySelectorAll('.instructions-list li');
var instructionsArray = [];

for (var i = 0; i < instructionsList.length; i++) {
    const instruction = {
        order: i + 1,
        text: instructionsList[i].innerText
    };
    instructionsArray.push(instruction);
}

console.log(instructionsArray);
