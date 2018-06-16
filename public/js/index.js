$( document ).ready(function() {
    
  
    $("#actualizar").click(function(){
      $.ajax({url: "data", success: function(result){
        $("#dolar > tbody").html("");
        for(j of result)
         {
          $('#dolar').append(`<tr><td>${j.compra}</td><td>${j.venta}</td><td><a href="${j.link}"  target="_blank">${j.banco}</td></tr>`);
        }
        $('#dolar').DataTable(); 

      }});
  });
  




  });