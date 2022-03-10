var products = {
    "Electronics": {
        "Television": [
            {
                "id": "PR001",
                "name": "MAX-001",
                "brand": "Samsung"
            },
            {
                "id": "PR002",
                "name": "BIG-301",
                "brand": "Bravia"
            },
            {
                "id": "PR003",
                "name": "APL-02",
                "brand": "Apple"
            }
        ],
        "Mobile": [
            {
                "id": "PR004",
                "name": "GT-1980",
                "brand": "Samsung"
            },
            {
                "id": "PR005",
                "name": "IG-5467",
                "brand": "Motorola"
            },
            {
                "id": "PR006",
                "name": "IP-8930",
                "brand": "Apple"
            }
        ]
    },
    "Jewelry": {
        "Earrings": [
            {
                "id": "PR007",
                "name": "ER-001",
                "brand": "Chopard"
            },
            {
                "id": "PR008",
                "name": "ER-002",
                "brand": "Mikimoto"
            },
            {
                "id": "PR009",
                "name": "ER-003",
                "brand": "Bvlgari"
            }
        ],
        "Necklaces": [
            {
                "id": "PR010",
                "name": "NK-001",
                "brand": "Piaget"
            },
            {
                "id": "PR011",
                "name": "NK-002",
                "brand": "Graff"
            },
            {
                "id": "PR012",
                "name": "NK-003",
                "brand": "Tiffany"
            }
        ]
    }
}

// table1 //<h1>All Items</h1>


var table1 = "<table>";
table1 += "<tr>";
table1 += `<th> ${"Category"} </th>`;
table1 += `<th> ${"Subcategory"} </th>`;
table1 += `<th> ${"ID"} </th>`;
table1 += `<th> ${"Name"} </th>`;
table1 += `<th> ${"Brand"} </th></tr>`;


for (var c in products) {

    for (var sc in products[c]) {

        for (var i in products[c][sc]) {

            table1 += "<tr>";
            table1 += `<td>${c}</td>`;
            table1 += `<td>${sc}</td>`;
            table1 += `<td>${products[c][sc][i]["id"]}</td>`;
            table1 += `<td>${products[c][sc][i]["name"]}</td>`;
            table1 += `<td>${products[c][sc][i]["brand"]}</td>`;
            table1 += "</tr>";
        }

    }

}
var c_table1 = "</table>";
document.write(table1);

// table 2

//document.write("<h1>All Items with Subcategory = Mobile</h1>");

var table2 = "<table>";
table2 += "<tr>";
table2 += `<th> ${"Category"} </th>`;
table2 += `<th> ${"Subcategory"} </th>`;
table2 += `<th> ${"ID"} </th>`;
table2 += `<th> ${"Name"} </th>`;
table2 += `<th> ${"Brand"} </th></tr>`;


for (var c in products) {

    for (var sc in products[c]) {

        if (sc == "Mobile") {
            for (var i in products[c][sc]) {

                table2 += "<tr>";
                table2 += `<td>${c}</td>`;
                table2 += `<td>${sc}</td>`;
                table2 += `<td>${products[c][sc][i]["id"]}</td>`;
                table2 += `<td>${products[c][sc][i]["name"]}</td>`;
                table2 += `<td>${products[c][sc][i]["brand"]}</td>`;
                table2 += "</tr>";
            }
        }


    }

}
var c_table2 = "</table>";
document.write(table2);

// table3
var table3 = "<table>";

for (var c in products) {

    for (var sc in products[c]) {

        for (var i in products[c][sc]) {

            if (products[c][sc][i]["brand"] == "Samsung") {
                table3 += "<tr>";
                table3 += `<th>Category</th>`;
                table3 += `<td>${c}</td>`;
                table3 += "</tr>";
                table3 += `<th>Subcategory</th>`;
                table3 += `<td>${sc}</td>`;
                table3 += "</tr>";
                table3 += `<th>ID</th>`;
                table3 += `<td>${products[c][sc][i]["id"]}</td>`;
                table3 += "</tr>";
                table3 += `<th>Name</th>`;
                table3 += `<td>${products[c][sc][i]["name"]}</td>`;
                table3 += "</tr>";
                table3 += `<th>Brand</th>`;
                table3 += `<td>${products[c][sc][i]["brand"]}</td>`
                table3 += "</tr>";
            }
        }
    }
}
var c_table3 = "</table>";
document.write(table3);

// table4

var table4 = "<table>";
table4 += "<tr>";
table4 += `<th> ${"Category"} </th>`;
table4 += `<th> ${"Subcategory"} </th>`;
table4 += `<th> ${"ID"} </th>`;
table4 += `<th> ${"Name"} </th>`;
table4 += `<th> ${"Brand"} </th></tr>`;


for (var c in products) {

    for (var sc in products[c]) {

        for (var i in products[c][sc]) {

            if (products[c][sc][i]["id"] !== "PR003") {
                table4 += "<tr>";
                table4 += `<td>${c}</td>`;
                table4 += `<td>${sc}</td>`;
                table4 += `<td>${products[c][sc][i]["id"]}</td>`;
                table4 += `<td>${products[c][sc][i]["name"]}</td>`;
                table4 += `<td>${products[c][sc][i]["brand"]}</td>`;
                table4 += "</tr>";
            }

        }

    }

}
var c_table4 = "</table>";
document.write(table4);

// table5

var table5 = "<table>";
table5 += "<tr>";
table5 += `<th> ${"Category"} </th>`;
table5 += `<th> ${"Subcategory"} </th>`;
table5 += `<th> ${"ID"} </th>`;
table5 += `<th> ${"Name"} </th>`;
table5 += `<th> ${"Brand"} </th></tr>`;


for (var c in products) {

    for (var sc in products[c]) {

        for (var i in products[c][sc]) {

            if (products[c][sc][i]["id"] == "PR002") {
                products[c][sc][i]["name"] = "BIG-555";
            }
                table5 += "<tr>";
                table5 += `<td>${c}</td>`;
                table5 += `<td>${sc}</td>`;
                table5 += `<td>${products[c][sc][i]["id"]}</td>`;
                table5 += `<td>${products[c][sc][i]["name"]}</td>`;
                table5 += `<td>${products[c][sc][i]["brand"]}</td>`;
                table5 += "</tr>";
            

        }

    }

}
var c_table5 = "</table>";
document.write(table5);