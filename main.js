let text = document.getElementById("text");
let list = document.getElementById("list");
let list1 = document.getElementById("list1");
let list2 = document.getElementById("list2");

function saveTasks() {
   const tasks = {
      list: list.innerHTML,
      list1: list1.innerHTML,
      list2: list2.innerHTML
   };
   localStorage.setItem('tasks', JSON.stringify(tasks));
}
function loadTasks() {
   const savedTasks = localStorage.getItem('tasks');
   if (savedTasks) {
      const tasks = JSON.parse(savedTasks);
      list.innerHTML = tasks.list;
      list1.innerHTML = tasks.list1;
      list2.innerHTML = tasks.list2;
   }
}
document.addEventListener('DOMContentLoaded', loadTasks);
function add() {

   if (text.value === "") {
      alert("Pleas write a task!");

   } else if (text.value.length < 5) {
      alert("minimum char 5 !");

   } else {

      let li = document.createElement("li");
      li.innerHTML = text.value;
      list.appendChild(li);
      text.value = "";
      saveTasks();
      let div = document.createElement("div");
      let button1 = document.createElement("input");
      button1.type = "button";
      button1.value = "\u2713";
      button1.id = "btn1";
      let button2 = document.createElement("input");
      button2.type = "button";
      button2.value = "\u2717";
      button2.id = "btn2";
      div.appendChild(button1);
      div.appendChild(button2);
      li.appendChild(div);
      button1.onclick = function () {
         li.removeChild(div);
         list1.appendChild(li);
         saveTasks();
      }
      button2.onclick = function () {
         li.removeChild(div);
         list2.appendChild(li);
         saveTasks();
      }
   }
}
