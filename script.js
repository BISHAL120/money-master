const income = document.getElementById("income");
const food = document.getElementById("food");
const rent = document.getElementById("rent");
const clothes = document.getElementById("clothes");
const totalexpence = document.getElementById("expence");



document.getElementById('btn').addEventListener('click', function () {

    const expence = parseInt(food.value) + parseInt(rent.value) + parseInt(clothes.value);
    totalexpence.innerText = expence;
    const totalbalance = document.getElementById("balance");
    const balance = parseInt(income.value) - expence;
    totalbalance.innerText = balance;


})
