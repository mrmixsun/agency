function passw(){
var txt = document.getElementById("text").value;
if (txt == 'test' || txt == 'promo') {
$('.t-prefix_1').css('display', 'block'); // Делает див видимым(по умолчанию).
document.getElementById("text").style.display="none";
document.getElementById("buttonform").style.display="none";
document.getElementById("error").style.display="none";
document.getElementById("succes").style.display="none";
document.getElementById("rec90671125").style.display="block";
document.getElementById("rec91182509").style.display="none";
}
else { 
    document.getElementById("error").style.display="block";
	}
}
