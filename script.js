var cart = 0;

function addCart(){

    cart++;

    document.getElementById("cart").innerHTML = cart;

    alert("Đã thêm sản phẩm vào giỏ hàng");

}

function searchProduct(){

    var keyword =
    document.getElementById("search")
    .value
    .toLowerCase();

    var cards =
    document.querySelectorAll(".card");

    for(var i=0;i<cards.length;i++){

        var title =
        cards[i]
        .querySelector("h3")
        .innerText
        .toLowerCase();

        if(title.includes(keyword)){

            cards[i].style.display="block";

        }

        else{

            cards[i].style.display="none";

        }

    }

}

var total = 0;

function buy(price){

total = total + price;

document.getElementById("money")
.innerHTML = total;

alert("Mua thành công!");

}

function addSoftware(){

var name =
document.getElementById("name").value;

if(name==""){

alert("Nhập tên phần mềm");

return;

}

var table =
document.getElementById("table");

table.innerHTML +=

"<tr><td>"+name+"</td></tr>";

document.getElementById("name").value="";

}