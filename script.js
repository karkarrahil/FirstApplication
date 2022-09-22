


let question = document.getElementById("question");
let form = document.getElementById("form");
let btn = document.getElementById("btn");
// console.log(typeof question);
let random = Math.ceil(Math.random() * 10);
let random1 = Math.ceil(Math.random() * 10);

// console.log(random);
let string = `What is ${random} multiply by ${random1}?`;
// console.log(string);
question.innerHTML = string;
let multiply = random * random1;
let input = document.getElementById("input");
function deleteItems() {
    localStorage.clear();
  }


let reload = () => {
    window.location.reload();
}
let i = JSON.parse(localStorage.getItem("score"));
let score = document.getElementById("score");
if(i==10){
    document.write("<h1>You Are Won the Game</h1>"); 
     deleteItems();
}

if (!i) {
    i = 0;
    
}

score.innerHTML = `Score: ${i}`;
form.addEventListener("submit", () => {

    let error = document.getElementById("error");
    let userAns = +input.value
    if (userAns === multiply) {
        console.log("correct");
        // error.innerText = "true!";
        i++;

        if(i>10){
            return false;
            deleteItems();
        }
        // window.setTimeout(reload, 1000);


        updateLocalStorage();

    }
    else {
        console.log("wrong");
        // window.clearTimeout(reload);
        i--;

        // error.innerText = "wrong";

        updateLocalStorage();

    }
})


function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(i));
}
