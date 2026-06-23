var inventory = [
    "Dell Inspiron 15",
    "Dell XPS 13",
    "Dell Latitude 7420",
    "Dell Alienware M16",
    "Dell Vostro 3510"
];

function displayInventory() {

    var list = document.getElementById("inventoryList");

    list.innerHTML = "";

    for(var i=0;i<inventory.length;i++){

        var li=document.createElement("li");

        li.textContent=inventory[i];

        list.appendChild(li);
    }
}

function addProduct(){

    var product=document.getElementById("addProduct").value;

    if(product!=""){

        inventory.push(product);

        displayInventory();

        alert("Product Added Successfully");

        document.getElementById("addProduct").value="";
    }
}

function removeProduct(){

    var product=document.getElementById("removeProduct").value;

    var index=inventory.indexOf(product);

    if(index!=-1){

        inventory.splice(index,1);

        displayInventory();

        alert("Product Removed Successfully");
    }
    else{

        alert("Product Not Found");
    }

    document.getElementById("removeProduct").value="";
}

function checkAvailability(){

    var product=document.getElementById("checkProduct").value;

    if(inventory.includes(product)){

        document.getElementById("result").innerHTML=
        product+" is IN STOCK";
    }
    else{

        document.getElementById("result").innerHTML=
        product+" is OUT OF STOCK";
    }

    document.getElementById("checkProduct").value="";
}

displayInventory();