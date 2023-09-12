const saveButton = document.getElementById("savebtn");

let myleads = [];
let inputEl = document.getElementById("input-el");
let list = document.getElementById("list");

saveButton.addEventListener("click",function () {
    myleads.push(inputEl.value)
    
    inputEl.innerHTML = "";    
    renderleads();
});

function renderleads() {
myleads.map((x) => {
    let listitem = document.createElement("li");
    listitem.innerHTML = x;
    
    list.appendChild(listitem);
})
}


