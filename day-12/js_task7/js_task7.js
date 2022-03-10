var input = document.querySelectorAll('input');
function validate() {
    var checked = document.querySelectorAll('input[type="checkbox"]:checked');
    var hobbies = document.getElementsByName('hobbies');
    for (var i = 0; i < input.length; i++) {

        var inpdta = input[i].value;
        if (i == 0) {
            var exp = /^[A-Za-z\s]+$/;
            if (!exp.test(inpdta)) {
                alert("name is incorrect or empty");
            }
        }
        else if (i == 1) {
            if (inpdta < 18) {
                alert("Age should not less than 18");
            }
        }
        else if (i == 2) {
            var exp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!exp.test(inpdta)) {
                alert("email is not correct or empty");
            }
        }
        else if (i == 3) {
            if (inpdta.length !== 10) {
                alert("Number should have 10 values");
            }
        }
    }
    for (var j = 0; j < hobbies.length; j++) {
        if (checked.length < 1){
            alert('please select the checkbox');
            break;
        }
        
    }
}
