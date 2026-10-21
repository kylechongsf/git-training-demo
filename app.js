function greet(name) {
    if (name)
        return `Hello ${name}! This is MAIN branch!`;
    else return `Hello!`;
}

function calculateTotal(price, quantity) {
    return price * quantity;
}

console.log("Total Amount:", calculateTotal(25, 3));

console.log(greet("Narra"));