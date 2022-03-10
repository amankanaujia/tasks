function myFunction() {
    
    var trimmed = document.getElementById("data").value.trim();
    if (trimmed.length === 0){
        document.getElementById('p1').innerHTML = "Hello User";
    }else {
        document.getElementById('p1').innerHTML = "Hello " + trimmed;
    }
}