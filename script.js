const saveButton = document.getElementById("savebtn");
let inputEl = document.getElementById("input-el");
let list = document.getElementById("list");

let myleads = [];

saveButton.addEventListener("click", function () {
    myleads.push(inputEl.value)
    
    inputEl.innerHTML = "" ;    
    renderleads();
}
);

function renderleads() {
myleads.map((x) => {
    let listitem = document.createElement("li");
    listitem.innerHTML += x;
    list.appendChild(listitem);
})
}

list.addEventListener("click", function (e){
    e.target.style.textDecoration = "line-through";
})


