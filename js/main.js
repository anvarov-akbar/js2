var elHeding = document.querySelector(".heading");

alert("Asalomu alekum")
alert ("Sayoxatingiz uchun sorovnomani toldiring")

var userName=prompt("Ismingizi  kiriting")

var moution=750*9434+120*10355;

var money=prompt(userName + " Qancha pul sarflamoqchisiz")

if (money>=moution){
    elHeding.textContent="Oq yol yaxwi borib keling"
}
else{
    elHeding.textContent="Pulingiz yetmadi kengi yilga xabar oling"
}