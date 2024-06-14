 // setup variables
var productbtn = document.getElementById("product_btn");
var productcontainer = document.getElementById("product_container");
var productinput = document.getElementById('product_input');
var data = [
    {id: 1, name: "product 1", desc: "bla bla bola 1"},
    {id: 2, name: "product 2", desc: "bla bla bola 2"},
    {id: 3, name: "product 3", desc: "bla bla bola 3"},
    {id: 4, name: "product 4", desc: "bla bla bola 4"}
];

// draw ui 
function drawUi(items) {
    productcontainer.innerHTML = ""; // Clear the container before redrawing
    items.forEach(function(ele) {
        productcontainer.innerHTML += `
            <div onclick='deleteitem(${ele.id})'>
                ${ele.name}
            </div>
        `;
    });
}

// load data
window.onload = function() {
    drawUi(data);
}

// add item
productbtn.addEventListener('click', additem);

function additem() {
    if (productinput.value == "") {
        alert("you should enter your product");
       
    }
    var lastId = data.length ? data[data.length - 1].id : 0;

    // add to array
    data.push({id: ++lastId, name: productinput.value, desc: "bla bla bola 5"});
    var addedItem = data[data.length - 1];
    productcontainer.innerHTML += `
        <div onclick='deleteitem(${addedItem.id})'>
            ${addedItem.name}
        </div>
    `;

    productinput.value = "";
}

function deleteitem(id) {
    var index = data.map(function(i) {
        return i.id;
    }).indexOf(id);
    if (index !== -1) {
        data.splice(index, 1);
        drawUi(data);
    }
    console.log(data);
}
console.dir(document)
