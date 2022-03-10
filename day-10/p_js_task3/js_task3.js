let arr = [
    {
        name: "aman",
        age: 10,
        isBestFriend: true,
        fav_Colors: ["red", "green", "yellow", "blue"],
        chk_yellow: function () {

            for (var i = 0; i < this.fav_Colors.length;) {
                if (this.fav_Colors[i] === "yellow") {
                    return "yellow is my favourate color";

                }
                else {
                    i++;
                }
            }
            if (i == this.fav_Colors.length) {
                this.isBestFriend = false;
                return "yellow is not my favourate color";

            }
        }
    },
    {
        name: "rishabh",
        age: 15,
        isBestFriend: true,
        fav_Colors: ["red", "green"],
        chk_yellow: function () {

            for (var i = 0; i < this.fav_Colors.length;) {
                if (this.fav_Colors[i] === "yellow") {
                    return "yellow is my favourate color";

                }
                else {
                    i++;

                }
            }
            if (i == this.fav_Colors.length) {
                this.isBestFriend = false;
                return "yellow is not my favourate color";
            }
        }
    },
    {
        name: "himanshu",
        age: 20,
        isBestFriend: true,
        fav_Colors: ["blue", "green", "black"],
        chk_yellow: function () {

            for (var i = 0; i < this.fav_Colors.length;) {
                if (this.fav_Colors[i] === "yellow") {
                    return "yellow is my favourate color";

                }
                else {
                    i++;
                }
            }
            if (i == this.fav_Colors.length) {
                this.isBestFriend = false;
                return "yellow is not my favourate color";
            }
        }
    },
    {
        name: "arjun",
        age: 25,
        isBestFriend: true,
        fav_Colors: ["blue", "green", "black", "yellow"],
        chk_yellow: function () {

            for (var i = 0; i < this.fav_Colors.length;) {
                if (this.fav_Colors[i] === "yellow") {
                    return "yellow is my favourate color";

                }
                else {
                    i++;
                }
            }
            if (i == this.fav_Colors.length) {
                this.isBestFriend = false;
                return "yellow is not my favourate color";
            }
        }
    },
    {
        name: "surya",
        age: 30,
        isBestFriend: true,
        fav_Colors: ["blue", "green", "black", "brown", "yellow", "purple"],
        chk_yellow: function () {

            for (var i = 0; i < this.fav_Colors.length;) {
                if (this.fav_Colors[i] === "yellow") {
                    return "yellow is my favourate color";

                }
                else {
                    i++;
                }
            }
            if (i == this.fav_Colors.length) {
                this.isBestFriend = false;
                return "yellow is not my favourate color";
            }
        }
    }
];




var table = document.createElement("table");
var tr = document.createElement("tr");
var th = document.createElement("th");
var td = document.createElement("td");



document.getElementById('body').appendChild(table);





var col_num = [];
for (var r = 0; r <= arr.length; r++) {
    var row = table.insertRow(r);

    for (var c in arr[r]) {


        if (c == 'fav_Colors') {

            col_num.push(arr[r][c].length);

            var max_num = Math.max(...col_num);




            for (var col_i = 0; col_i < max_num; col_i++) {
                var text = arr[r][c][col_i];
                if (text != null) {
                    var cell = row.insertCell(c);
                    cell.innerHTML = arr[r][c][col_i];
                }
                else {
                    cell = row.insertCell(c);
                }
            }
        } else if (c == 'chk_yellow') {
            var cell = row.insertCell(c);
            cell.innerHTML = arr[r].chk_yellow();
        }
        else {
            var cell = row.insertCell(c);
            cell.innerHTML = arr[r][c];
        }

    }

}

// second time
var table1 = document.createElement("table");
var tr1 = document.createElement("tr");
var th1 = document.createElement("th");
var td1 = document.createElement("td");
body.appendChild(table);
// var obj_len = Object.keys(arr[j]).length
for (var j = 0; j<= arr.length; j++) {
    var row1 = table1.insertRow(j);
    console.log(arr[j]["name"]);

}

