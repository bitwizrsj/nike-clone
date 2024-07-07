const shoes = [
    {src: './assets/shoe1.png', description: 'Shoe 1 Description'},
    {src: './assets/shoe2.png', description: 'Shoe 2 Description'},
    {src: './assets/shoe3.png', description: 'Shoe 3 Description'},
    {src: './assets/shoe4.png', description: 'Shoe 4 Description'},
    {src: './assets/shoe5.png', description: 'Shoe 5 Description'},
    {src: './assets/shoe5.png', description: 'Shoe 6 Description'}
];

let currentIndex = 0;
const shoeCircle = document.getElementById('shoe-circle');
const descriptionDiv = document.getElementById('shoe-description');

function updateShoeDisplay(index) {
    const angle = -60 * index;
    shoeCircle.style.transform = `rotate(${angle}deg)`;
    descriptionDiv.textContent = shoes[index].description;
}

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + shoes.length) % shoes.length;
    updateShoeDisplay(currentIndex);
});

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % shoes.length;
    updateShoeDisplay(currentIndex);
});

updateShoeDisplay(currentIndex);