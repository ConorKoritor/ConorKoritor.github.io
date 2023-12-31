// shop.js



const addtocart = document.querySelectorAll(".addtocart");
// add a listener for add to cart if such a button id is pressed
for(let i of addtocart){
    i.addEventListener("click", addToCart)
}


function addToCart() {
    var total=localStorage.getItem('checkout');
    total++;
    localStorage.setItem('checkout',total);
    document.querySelector('#checkout').innerHTML=total;
}

