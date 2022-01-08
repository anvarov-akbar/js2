var elHeding = document.querySelector(".heading");

alert("Asalom alekum")
alert ("Sayoxatingiz ucun sorovnomani toldiring")

var userName=prompt("imsingizni kiriting")

var moution=750*9434+120*10355;

var money=prompt(userName + " qancha pul sarflamoxchisiz")

if (money>=moution){
    elHeding.textContent="oqyol yaxwi borip kelin"
}
else{
    elHeding.textContent="pulingiz yetmadi kengi yilga xabar olin"
}