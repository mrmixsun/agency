// Окей, раз ты добрался сюда, значит, тебе не всё равно. 
// У нас есть отличная вакансия для фронтендера — https://hh.ru/vacancy/30248653. 
// Приходи на Inside Out, интервью можно будет пройти на месте. 

function passw(){
var txt = document.getElementById("text").value;
if (txt == 'test' || txt == 'promo') {
$('.t-prefix_3').css('display', 'block'); // Делает див видимым(по умолчанию).
document.getElementById("text").style.display="none";
document.getElementById("buttonform").style.display="none";
document.getElementById("error").style.display="none";
document.getElementById("succes").style.display="none";
document.getElementById("rec91171072").style.display="none";	
document.getElementById("rec90671125").style.display="block";
}
else { 
    document.getElementById("error").style.display="block";
	}
}
