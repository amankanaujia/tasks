let products = [
    {
        "name": "Shirt",
        "price": 100,
        "image": "https://m.media-amazon.com/images/I/61qcRA7OoPL._UX569_.jpg"
    },
    {
        "name": "T-shirt",
        "price": 200,
        "image": "https://cdn11.bigcommerce.com/s-pkla4xn3/images/stencil/1280x1280/products/13903/137969/Dudalina-Shirt-Men-2018-Long-Sleeve-Male-Shirt-100-Cotton-Casual-High-Quality-Business-Man-Shirts__33009.1544098276.jpg?c=2?imbypass=on"
    },
    {
        "name": "Shirt",
        "price": 300,
        "image": "https://cdn11.bigcommerce.com/s-pkla4xn3/images/stencil/1280x1280/products/2111/9917/COODRONY-Men-Shirt-Mens-Business-Casual-Shirts-2017-New-Arrival-Men-Famous-Brand-Clothing-Plaid-Long__49766.1574660749.jpg?c=2"
    },
    {
        "name": "Shirt",
        "price": 400,
        "image": "https://i.pinimg.com/originals/8a/9a/d2/8a9ad2dc325c529ce54d4151d974e1d6.jpg"
    },
    {
        "name": "Shirt",
        "price": 500,
        "image": "https://i.pinimg.com/474x/6f/76/fe/6f76fec4d07f48c9a655080998147501.jpg"
    },
    {
        "name": "Shirt",
        "price": 600,
        "image": "https://www.shopperwear.com/media/catalog/product/cache/1/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/n/e/new-spring-double-pocket-mens-fashion-shirt-brand-men-long-sleeved-solid-shirts-slim-fit-casual-men-shirt-social-extra-image-2.jpg"
    },
]
for (var i in products) {
    var item = "<div class='items' >";
    item += `<h1>${products[i]["name"]}</h1>`;
    item += `<div class="item_img"><img src= "${products[i]["image"]}"></img></div>`;
    item += `<h1>${products[i]["price"]}</h1>`;
    item += `<button onclick="cart(${i})" >Add to Cart</button>`;
    item += "</div>";
    document.getElementsByClassName('flex_container')[0].innerHTML += item;
}
var row_num = 0;
var t1 = 0;
var duplicate = [];
function cart(i) {
    if (t1 == 0) {
        var cart_table = "<table id='portable' >";
        cart_table += "<tr> <th>Name</th> <th>Image</th> <th>Price</th> <th></th> <th>Quantity</th> </tr>";
        cart_table += `<tr> <td>${products[i]["name"]}</td> <td><img class="cart_img" src= "${products[i]["image"]}"></img></td> <td>${products[i]["price"]}</td> <td><button onclick="minus(this)">-</button></td> <td>1</td> <td><button onclick="add(this)">+</button></td> <td><button onclick="remove(this)">Remove</button></td> </tr>`;
        cart_table += "</table>";
        document.getElementsByClassName('cart_wall')[0].innerHTML += cart_table;
        t1 = 1;
        duplicate.push(i);
    }
    else if (duplicate.includes(i)) {
        var table = document.getElementById("portable");
        row_num = duplicate.indexOf(i);
        var quantity_data = table.rows[row_num + 1].cells[4].innerHTML;
        var parse_qty_data = parseInt(quantity_data);
        var qty = parse_qty_data += 1;
        table.rows[row_num + 1].cells[4].innerHTML = qty;
    }
    else {
        var table = document.getElementById("portable");
        var rows_len = table.rows.length;
        var row = table.insertRow(rows_len);
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);
        var cell4 = row.insertCell(4);
        var cell5 = row.insertCell(5);
        var cell6 = row.insertCell(6);
        cell0.innerHTML = `${products[i]["name"]}`;
        cell1.innerHTML = `<img class="cart_img" src= "${products[i]["image"]}"></img>`;
        cell2.innerHTML = `${products[i]["price"]}`;
        cell3.innerHTML = `<button onclick="minus(this)">-</button>`;
        cell4.innerHTML = "1";
        cell5.innerHTML = `<button onclick="add(this)">+</button>`;
        cell6.innerHTML = `<button onclick="remove(this)">Remove</button>`;
        duplicate.push(i);
    }
    var purchase = document.getElementById('purchase');
    purchase.style.display = "block";
    document.getElementById('total').innerHTML = "Total : " + item_total();
    console.log(duplicate);
}
function item_total() {
    var table = document.getElementById("portable");
    var total = 0;
    for (var r = 1; r < table.rows.length; r++) {
        var price = table.rows[r].cells[2].innerHTML;
        var price_data = parseInt(price);
        var qty = table.rows[r].cells[4].innerHTML;
        var qty_data = parseInt(qty);
        total += price_data * qty_data;
    }
    return total;
}
function add(row) {
    var dr = row.parentNode.parentNode.rowIndex;
    var table = document.getElementById("portable");
    var quantity_data = table.rows[dr].cells[4].innerHTML;
    var parse_qty_data = parseInt(quantity_data);
    var qty = parse_qty_data += 1;
    table.rows[dr].cells[4].innerHTML = qty;
    document.getElementById('total').innerHTML = "Total : " + item_total();
}
function minus(row) {
    var dr = row.parentNode.parentNode.rowIndex;
    var table = document.getElementById("portable");
    var quantity_data = table.rows[dr].cells[4].innerHTML;
    var parse_qty_data = parseInt(quantity_data);
    if (parse_qty_data > 1) {
        var qty = parse_qty_data -= 1;
        table.rows[dr].cells[4].innerHTML = qty;
        document.getElementById('total').innerHTML = "Total : " + item_total();
    }
}
function remove(row) {
    var table = document.getElementById("portable");
    var dr = row.parentNode.parentNode.rowIndex;
    document.getElementById('portable').deleteRow(dr);
    document.getElementById('total').innerHTML = "Total : " + item_total();
    var index = duplicate.indexOf(dr - 1);
    duplicate.splice(index, 1);
    console.log(duplicate);
    if (table.rows.length == 1) {
        clear();
    }
}
function purchase() {
    clear();
    alert("Thank You");
}
function clear() {
    document.getElementById('purchase').style.display = "none";
    document.getElementsByClassName('cart_wall')[0].innerHTML = "";
    duplicate = [];
    row_num = 0;
    t1 = 0;
}
