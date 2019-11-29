/**
 * Author:    Gustavo David Ferreyra brakdag@gmail.com
 * Created:   3.10.2018
 * MIT license.
 * Web page for dolarargentina library
 **/

$( document ).ready(function() {
    $("#actualizar").click(function(){
      $.ajax({url: "/data", success: function(result){
        for(j of result){ 
          $('#dolar').append(`<tr><td>${j.compra}</td><td>${j.venta}</td><td><a href="${j.link}"  target="_blank">${j.banco}</td></tr>`);
        }
        $('#dolar').DataTable(); 
      }});
    });
});

