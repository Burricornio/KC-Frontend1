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
   
});
 
  

  

