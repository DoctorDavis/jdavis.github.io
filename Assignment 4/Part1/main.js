/*  Author: Jim Davis
    Date: 09 March 25
    Filename: main.js
    Description: Javascript File for Silly Story Generator */

// variable and CONSTANT definitions    
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

//Function Definitions
function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}
// create storyText and 3 Arrays
const storyText = "It was 94 fahrenheit outside, so :insertX: went for a walk. When they got to :inserty:, 
                    they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but 
                    was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];

const insertY = ["the soup kitchen", "Disneyland","the White House"];

const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"]; 


// randomizer which is a click event
randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory = newStory
                .replaceAll(":insertX:", xItem)
                .replace(":insertY:", yItem)
                .replace(":insertZ:", zItem);

    if(customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replace("Bob", name)
  }

    if(document.getElementById("uk").checked) {
        const weight = Math.round(300);
        const temperature =  Math.round(94);
  }

    story.textContent = ;
    story.style.visibility = 'visible';
}