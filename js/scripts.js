$(document).ready(function() {

    // Textarea otros
    $(".otros").change(function() {
        $(".texto-otros").show();
    });

    // smooth scroll
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 100
        }, 700, 'swing', function() {
            window.location.hash = target;
        });
    });

    // Burrigalleta de la suerte
    $(".ver-mensaje").click(function() {
        $.ajax({
            url: "../galleta.js",
            dataType: "script"
        });
    });

     

    //Controlar el numero de caracteres del textarea
    var wordLen = 150,
	    len; // Maximum word length
    $('#textarea-1').keydown(function(event) {	
	len = $('#textarea-1').val().split(/[\s]+/);
	if (len.length > wordLen) { 
		if ( event.keyCode == 46 || event.keyCode == 8 ) {// Permite borrar y suprimir
        } else if (event.keyCode < 48 || event.keyCode > 57 ) {// Resto de botones
    	event.preventDefault();
        }
	}
	wordsLeft = (wordLen) - len.length;
	$('#contador').html('Te quedan <span>' + wordsLeft + '</span> palabras de chapa');
	if(wordsLeft <= 0) {
        $('#contador').html('¡Ea! Se acabo la chapa');
		$('#contador').css({
            'background':'#1779B7',
            'color':'white'
		}).prepend('<i class="fa fa-exclamation-triangle"></i>');
	}
});

});
 
  

  

