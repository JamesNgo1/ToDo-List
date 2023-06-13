const input = document.getElementById("input-textBox");
const ul = document.querySelector(".list-container");


function addTask(){
    //case input is empty and send alert message to user
    if(input.value === "") alert("Please enter a task");

    else{
        //Create li varaible to create new element and append to ul list
        let li = document.createElement("li");
        li.innerHTML = input.value;
        ul.appendChild(li);
        //append the x (span) on the li parent
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    //after user click add we reset the input to clear
    input.value = "";
    saveData();
}//end of function

//add evnent listener within  the unorder list of tasks 
ul.addEventListener("click", function(e){
    //if the click target is the li then add the check css to it and save 
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }

    //The other case that span or the x button is selected then remove the entire parent or element.
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }

}, false);

//save the data
function saveData(){
    localStorage.setItem("data", ul.innerHTML);
}

function showTask(){
    ul.innerHTML = localStorage.getItem("data");
}

showTask();


