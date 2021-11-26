const add = document.querySelector('#add');
const double = document.querySelector("#double");
const show = document.querySelector("#show");
const sort = document.querySelector("#sort");
const calculate = document.querySelector("#calculate")
const names = document.querySelector(".list");

let person = ["Elon Musk", "Jeff Bezos", "Bernard Arnault", "Larry Ellison", "Larry Page", "Mark Zuckerberg", "Sergey Brin", "Warren Buffett", "Mukesh Ambani"];
let list = [];

add.addEventListener('click', addUser);

function addUser(){
    let newUser = person[Math.floor(Math.random() * person.length)];
    let wealth = Math.floor(Math.random() * 1000000);
    list.push({'name': newUser, 'wealth': wealth});
    addElement(newUser, wealth);
}

function addElement(person, value){
    const li = document.createElement("li");
    const name = document.createElement("div");
    name.innerText = person;
    li.appendChild(name);
    const money = document.createElement("div");
    money.innerText = `$${value.toLocaleString('en', {maximumFractionDigits:0})}`;
    li.appendChild(money);
    names.appendChild(li);
}

double.addEventListener('click', doubleMoney);

function doubleMoney() {
    for(let i=0; i < list.length; i++) {
        const getWealth = list[i].wealth;
        const double = getWealth * 2;
        list[i].wealth = double;
        names.children[i].lastChild.innerText = `$${list[i].wealth.toLocaleString('en', {maximumFractionDigits:0})}`;
    }
}

show.addEventListener("click", showMillionaire);

function showMillionaire(){

    for(let i = 0; i < list.length; i++){
        if(list[i].wealth > 1000000){
            names.children[i].style.display = "flex";
        }
        else{
            // names.children[i].style.display = "none";
            names.children[i].remove();
            list.splice(i,1);
        }
    }
}

sort.addEventListener('click', sortRiches)

function sortRiches(){
    list.sort(function (a,b) {
        return b.wealth - a.wealth;
    });
    for(let i=0; i < list.length; i++){
        names.children[i].firstChild.innerText = `$${list[i].name}`;
        names.children[i].lastChild.innerText = `$${list[i].wealth.toLocaleString('en', {maximumFractionDigits:0})}`;
    }
}

const totalWealth = document.querySelector(".totalWealth");
const total = document.querySelector("#total");

calculate.addEventListener('click', calculateWealth);

function calculateWealth() {
    let  sum = 0;
    for(let i= 0; i < list.length; i++){
        sum += list[i].wealth;
    }
    total.innerText = `$${parseFloat(sum).toLocaleString('en', {maximumFractionDigits:0})}`;
    totalWealth.style.display = "flex";
}