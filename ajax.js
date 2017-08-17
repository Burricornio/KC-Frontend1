var url="galleta.js";


    // Burrigalleta de la suerte
    $(".ver-mensaje").click(function() {
        console.log('Vamos');
        $.ajax({
            type : "GET",  
            url : url
    });
        console.log('lilili');
    });