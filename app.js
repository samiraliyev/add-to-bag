
// for keep the DOM elements
let price = document.querySelectorAll(".price");
let count = document.querySelectorAll(".count");
let total = document.querySelectorAll(".total");
let increment = document.querySelectorAll(".increment");
let decrement = document.querySelectorAll(".decrement");
let totalSum = document.querySelector(".totalSum");


let newCount = 1;

for (let i = 0; i < increment.length; i ++){
    total[i].innerHTML = price[i].textContent;
    
    increment[i].addEventListener("click", (event)=>{
        newCount ++;
        let eventElement = event.target;
        let newPrice = eventElement.parentNode.parentNode.children[0].textContent;
        let newTotal = newPrice * newCount;
        let defaultTotal = eventElement.parentNode.parentNode.children[2].textContent;
        defaultTotal.innerHTML = newPrice.toString();
        total[i].innerHTML = newTotal;
        count[i].innerHTML = newCount;
        updateTotal();
    });
}

for (let i = 0; i < increment.length; i ++){
    decrement[i].addEventListener("click", (event)=>{
        newCount --;
        let eventElement = event.target;
        let newPrice = eventElement.parentNode.parentNode.children[0].textContent;
        let newTotal = newPrice * newCount;
        let defaultTotal = eventElement.parentNode.parentNode.children[2];
        defaultTotal.innerHTML = newPrice.toString();
        total[i].innerHTML = newTotal;
        count[i].innerHTML = newCount;
        updateTotal();
    });
}





function updateTotal() {
    let totalPrice = 0;
    for (let i = 0; i < total.length; i++) {
        let itemTotal = parseInt(total[i].textContent);
        totalPrice += itemTotal;
    }
    totalSum.innerHTML = totalPrice;
}

