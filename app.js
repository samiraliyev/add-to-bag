

// for keep the DOM elements
let price1 = document.querySelector(".price1");
let count1 = document.querySelector(".count1");
let total1 = document.querySelector(".total1");
let increment1 = document.querySelector(".increment1");
let decrement1 = document.querySelector(".decrement1");
let totalSum = document.querySelector(".totalSum");

let price2 = document.querySelector(".price2");
let count2 = document.querySelector(".count2");
let total2 = document.querySelector(".total2");
let increment2 = document.querySelector(".increment2");
let decrement2 = document.querySelector(".decrement2");



// let price3 = document.getElementsByTagName("input")[0].value;
// console.log(price3);


// console.log(price);
// console.log(count);
// console.log(total);
// console.log(increment);
// console.log(decrement);
// console.log(totalSum);


// for assign values to price, count and total.
let newPrice1 = 100;
price1.innerHTML = newPrice1;
let newCount1 = 1;
count1.innerHTML = newCount1;
total1.innerHTML = newPrice1;

let newPrice2 = 200;
price2.innerHTML = newPrice2;
let newCount2 = 1;
count2.innerHTML = newCount2;
total2.innerHTML = newPrice2;

let newTotalSum = 0;
totalSum.innerHTML = newTotalSum;


let sums = [];

let newSums = sums.push(total1, total2);

     newSums = sums.reduce((acc,item)=>acc + sums);
    console.log(newSums);

increment1.addEventListener("click", ()=> {
    newCount1 ++;
    count1.innerHTML = newCount1;
    total1.innerHTML = newCount1 * newPrice1;
   if(newCount1 >= 1){
    decrement1.removeAttribute("disabled"); 
    decrement1.style.backgroundColor = "chartreuse";
    decrement1.style.pointerEvents = "auto";
   }
   
})
increment2.addEventListener("click", ()=> {

    newCount2 ++;
    count2.innerHTML = newCount2;
    total2.innerHTML = newCount2 * newPrice2;

   if(newCount2 >= 1){
    decrement2.removeAttribute("disabled");
    decrement2.style.backgroundColor = "chartreuse";
    decrement2.style.pointerEvents = "auto";

   }

})





decrement1.addEventListener("click", ()=>{

    
    if(newCount1 <= 1){
       decrement1.setAttribute("disabled","");
       decrement1.style.backgroundColor = "gray";
       decrement1.style.pointerEvents = "none";

    }else{
        newCount1 --;
        count1.innerHTML = newCount1;
        total1.innerHTML = newCount1 * newPrice1;
    }
})

decrement2.addEventListener("click", ()=>{

    
    if(newCount2 <= 1){
       decrement2.setAttribute("disabled","");
       decrement2.style.backgroundColor = "gray";
       decrement2.style.pointerEvents = "none";

    }else{
        newCount2 --;
        count2.innerHTML = newCount2;
        total2.innerHTML = newCount2 * newPrice2;
    }
})


