var friends = [
    {
        name: "Aman",
        age: 10,
        isBestFriend: true,
        fav_color: ["Red"],
        color_check: function () {
            for (i = 0; i < this.fav_color.length;) {
                if (this.fav_color[i] == "Yellow") {
                    return "Yellow is my fav_color";
                } else {
                    i++;
                }
            }
            if (i == this.fav_color.length) {
                return "Yellow is not my fav_color";
            }
        }
    },
    {
        name: "Rahul",
        age: 15,
        isBestFriend: false,
        fav_color: ["Red", "Yellow"],
        color_check: function () {
            for (i = 0; i < this.fav_color.length;) {
                if (this.fav_color[i] == "Yellow") {
                    return "Yellow is my fav_color";
                } else {
                    i++;
                }
            }
            if (i == this.fav_color.length) {
                return "Yellow is not my fav_color";
            }
        }
    },
    {
        name: "Sahil",
        age: 20,
        isBestFriend: false,
        fav_color: ["Red", "Blue", "Yellow"],
        color_check: function () {
            for (i = 0; i < this.fav_color.length;) {
                if (this.fav_color[i] == "Yellow") {
                    return "Yellow is my fav_color";
                } else {
                    i++;
                }
            }
            if (i == this.fav_color.length) {
                return "Yellow is not my fav_color";
            }
        }
    },
    {
        name: "Sahil",
        age: 25,
        isBestFriend: true,
        fav_color: ["Yellow", "Pink", "Violet", "Maroon"],
        color_check: function () {
            for (i = 0; i < this.fav_color.length;) {
                if (this.fav_color[i] == "Yellow") {
                    return "Yellow is my fav_color";
                    break;
                } else {
                    i++;
                }
            }
            if (i == this.fav_color.length) {
                return "Yellow is not my fav_color";
            }
        }
    },
    {
        name: "Rohit",
        age: 30,
        isBestFriend: false,
        fav_color: ["Red", "Blue", "Green", "Black", "Purple"],
        color_check: function () {
            for (i = 0; i < this.fav_color.length;) {
                if (this.fav_color[i] == "Yellow") {
                    return "Yellow is my fav_color";
                } else {
                    i++;
                }
            }
            if (i == this.fav_color.length) {
                return "Yellow is not my fav_color";
            }
        }

    }
];
maxnum = [];
friends.forEach(e => {
    maxnum.push(e.fav_color.length);
})
console.log(maxnum);
var maxheader = Math.max(...maxnum);

var ht = "<table width='100%' border='1px'>";
ht += `<tr>`;
ht += `<th> ${'S No.'} </th>`;
ht += `<th> ${'Name'} </th>`;
ht += `<th> ${'Age'} </th>`;
ht += `<th> ${'Is BestFriend'} </th>`;

for (z = 0; z < maxheader; z++) {
    ht += `<th>${'Favourite Color '} ${z + 1}</th>`;
}
ht += `<th> ${'Yellow Favourite'} </th>`;
ht += `</tr>`;
for (k = 0; k < friends.length; k++) {
    ht += `<tr>`;
    ht += `<td>${k + 1}</td>`;
    ht += `<td>${friends[k].name}</td>`;
    ht += `<td>${friends[k].age}</td>`;
    ht += `<td>${friends[k].isBestFriend}</td>`;

    for (a = 0; a < maxheader; a++) {

        var text = friends[k].fav_color[a];
        if (text != null)
            ht += `<td>${friends[k].fav_color[a]}</td>`;
        else
            ht += `<td></td>`;
    }
    ht += `<td>${friends[k].color_check()}</td>`;
    ht += `</tr>`;
}
ht += "</table>";
document.write(ht);
