const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
imageArray = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Declaring the alternative text for each image file */
const imageAlts = [
    {altText: "Photo 1 - Face Close-Up"},
    {altText: "Photo 2 - Flowing Rock"},
    {altText: "Photo 3 - Purple and White Flowers"},
    {altText: "Photo 4 - Egyption Art Wall"},
    {altText: "Photo 5 - Butterfly on a Leaf"}];

/* Looping through images */
for (let i = 0; i < imageArray.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/' + imageArray[i]);
    newImage.setAttribute('alt', imageAlts[i].altText);
    thumbBar.appendChild(newImage);
}

/* Set the src and alt attributes on the large image after the thumbnail is clicked */
thumbBar.addEventListener("click", (event) => {
    displayedImage.setAttribute('src', event.target.getAttribute('src'));
    displayedImage.setAttribute('alt', event.target.getAttribute('alt'));
});

/* Wiring up the Darken/Lighten button */
