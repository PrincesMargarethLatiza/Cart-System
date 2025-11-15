const section = main.firstElementChild;
console.log(section)

// 1. Select all candy cards
const products = document.querySelectorAll('.box');

// 2. Convert NodeList to Array
const productArray = Array.from(products);

//Get CArt
const Cart = main
    .firstElementChild
    .nextElementSibling;

    console.log(Cart)

// 3. Add click event to each product
productArray.forEach((p) => {
    p.addEventListener('click', () => {
        // step4
        const h5 = document.createElement('h5');
        h5.innertext = p.firstElementChild
                        .innerText;
        // step5
        Cart.appendChild(p);
    });
});

