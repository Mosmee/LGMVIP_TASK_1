const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todolist")

//show todays date
const options = {weekday : "long", month:"short", day:"numeric"};
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-us",options);

inputBox.onkeyup = ()=>{
    let userData = inputBox.value;
    if(userData.trim() !=0){
        addBtn.classList.add("active");
    }else{
        addBtn.classList.remove("active");
    }   
}
showTasks();
//if user click on the add button
addBtn.onclick = ()=>{
    let userData = inputBox.value;
    let getLocalStorage = localStorage.getItem("New Todo");
    if(getLocalStorage == null){
        listArr = [];

    }else{
        listArr = JSON.parse(getLocalStorage);
    }
listArr.push(userData);
localStorage.setItem("New Todo", JSON.stringify(listArr));
showTasks();
}
// function to add task inside ul
function showTasks(){
    let getLocalStorage = localStorage.getItem("New Todo");
    if(getLocalStorage == null){
        listArray = [];

    }else{
        listArr = JSON.parse(getLocalStorage);
    }
    const pendingNumb = document.querySelector(".pendingNumb");
    pendingNumb.textContent = listArr.length;
    let newLiTag ='';
    listArr.forEach((element,index) =>{
        newLiTag +=`<li> ${element} <span onclick = "deletTask(${index})";><i class="fa fa-trash"></i></span> </li>`;
    });
    todoList.innerHTML = newLiTag;
    inputBox.value="";
}
// delete task function
function deletTask(index){
    let getLocalStorage = localStorage.getItem("New Todo");
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index, 1);//delete the particular indexed

    // after remove the li again update the local storage
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTasks();

}

