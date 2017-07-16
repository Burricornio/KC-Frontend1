
          $(document).ready(function(){
              $(".otros").change(function(){
                  $(".texto-otros").show();
              });

              $('.ver-mensaje').click(function(){
     
                var url="galleta.html";

$.ajax({
type : "GET",
url : url,
success : function(data) {
console.log("data",data);
},
error : function(objXMLHttpRequest) {
console.log("error",objXMLHttpRequest);
}
});
                  

              })


          })

