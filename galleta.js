
var mensaje = [
    "¡¡¡Deberias ver menos la tele!!!",
    "¡¡¡Deberias masturbarte menos!!!",
    "No por mucho programar amanece más temprano",
    "Dale a tu cuerpo alegría Macarena"
    ];
var num = Math.round(Math.random() * 3);


$('.ver-mensaje').text(mensaje[num].toUpperCase());

