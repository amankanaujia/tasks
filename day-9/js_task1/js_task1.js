let fname = "Gaurav";
let lname = "Mandhyan";
let u_name = fname + " " + lname;
document.getElementById('u_name').innerHTML = u_name;
let uname_len = u_name.length;
document.getElementById('uname_len').innerHTML = "$"+uname_len;
let subtotal = uname_len*5;
document.getElementById('subtotal').innerHTML = "$"+subtotal;
const shipping = 7;
let g_total = shipping+subtotal;
document.getElementById('g_total').innerHTML = "$"+g_total;


document.getElementById('f_name').innerHTML = fname;