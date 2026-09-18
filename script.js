const taskInput = document.getElementById("taskInput");

const addBtn = document.getElementById("addBtn");

const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function(){

    console.log("Button Clicked");

});


addBtn.addEventListener("click", function(){

    const task = taskInput.value;

    console.log(task);

});