var ul1 = document.getElementsByTagName("ul")[0];
var ali = ul1.querySelectorAll('li');

for (var i = 0; i < ali.length; i++) {
    ali[i].setAttribute("class", "food");
}

function add_item() {
    ul1.innerHTML += "<li class='food' >Air Freshner</li>";
    document.getElementsByTagName("button")[0].disabled = true;
}

function delete_item() {
    ul1.lastElementChild.remove();
}