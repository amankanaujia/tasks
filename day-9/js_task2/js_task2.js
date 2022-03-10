const brochure = {
    hotel: "Taj",
    roomrate: 240,
    dis_cent: 15,
    discount: function () {
        let dis_amt = brochure.roomrate * brochure.dis_cent / 100
        let aft_dis_amt = brochure.roomrate - dis_amt
        return aft_dis_amt
    }
}

document.getElementById("rr").innerHTML = "Room Rate = Rs." + brochure.roomrate
document.getElementById("dr").innerHTML = "Discounted Rate = Rs." + brochure.discount()

let after7 = new Date();
after7.setDate(after7.getDate()+7)

let only_date = after7.getDate();
console.log(only_date);

let only_day = after7.toLocaleString('en-us', {weekday: 'long'});
console.log(only_day);

let only_month = after7.toLocaleString('en-us', {month : 'long'});
console.log(only_month);

let only_year = after7.getFullYear();
console.log(only_year);

document.getElementById("offer").innerHTML = "Offer expires next " + only_day + "<br>( "+only_date+only_month+only_year+" )";

