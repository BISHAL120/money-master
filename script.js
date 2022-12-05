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


document.getElementById('save').addEventListener('click', function () {
    const input = document.getElementById('input').value;
    const save2 = document.getElementById('save2');
    const remaning = document.getElementById('remaning');
    const a = parseInt(income.value);
    const b = parseInt(input);
    const newsave = (a / 100) * b;
    const c = a - newsave;
    remaning.innerText = c;

    save2.innerText = newsave;
})
