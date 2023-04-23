let text = document.getElementById("text");
let list = document.getElementById("list");
let list1 = document.getElementById("list1");
let list2 = document.getElementById("list2");


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
      let div = document.createElement("div");
      let button1 = document.createElement("input");
         button1.type = "button";
         button1.value = "Completed";
         button1.id = "btn1";
      let button2 = document.createElement("input");
         button2.type = "button";
         button2.value = "UnCompleted";
         button2.id = "btn2";
      div.appendChild(button1);
      div.appendChild(button2);
      li.appendChild(div);
      button1.onclick = function () {
         li.removeChild(div);
         list1.appendChild(li);
      }
      button2.onclick = function () {
         div.removeChild(button2);
         list2.appendChild(li);
      }
   }
}
