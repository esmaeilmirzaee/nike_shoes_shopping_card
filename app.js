const sizes = document.querySelectorAll('.size');
const colours = document.querySelectorAll('.colour');
const shoes = document.querySelectorAll('.shoe');
const gradients = document.querySelectorAll('.gradient');
const shoeBg = document.querySelector('.box-image');

let prevColour = 'red';


function changeSize() {
    sizes.forEach(size => size.classList.remove('active'));
    this.classList.add('active');
}

sizes.forEach((size) => {
    size.addEventListener('click', changeSize);
})

function changeColour() {
    let primary = this.getAttribute('primary');
    let colour = this.getAttribute('color');
    let shoe = document.querySelector(`.shoe[color="${colour}"]`);
    let gradient = document.querySelector(`.gradient[color="${colour}"]`);
    let prevGradient = document.querySelector(`.gradient[color="${prevColour}"]`)

    colours.forEach(colour => colour.classList.remove('active'));
    this.classList.add('active');

    document.documentElement.style.setProperty('--primary', primary);
    shoes.forEach(shoe => shoe.classList.remove('show'));
    shoe.classList.add('show')

    gradients.forEach(g => g.classList.remove('first', 'second'));
    gradient.classList.add('first');
    prevGradient.classList.add('second')

    prevColour = colour;
    animationEnd = false;
}
colours.forEach((colour) => {
    colour.addEventListener('click', changeColour);
})

let x = window.matchMedia("(max-width: 1000px)");

function changeHeight() {
    if (x.matches) {
        let shoeHeight = shoes[0].offsetHeight();
        shoeBg.style.height = `${
            shoeHeight * 0.9
        }px`;
    } else {
        shoeBg.style.height = "475px";
    }
}
changeHeight();
window.addEventListener('resize', changeHeight);
