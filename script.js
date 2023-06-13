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
}//end of function


