// Find all h1 elements that are children of a div element
const divH1Elements = document.querySelectorAll('div > h1');

// Apply a background color to each found h1 element
divH1Elements.forEach((element) => {
    element.style.backgroundColor = 'lightblue'; // Change the background color as needed
});
