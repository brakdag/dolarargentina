const http = require('http');

module.exports = class Dolar{
    constructor(){
      this.url_host = "www.bna.com.ar";
      this.url_path = "/Cotizador/HistoricoPrincipales?id=billetes&filtroEuro=0&filtroDolar=1&fecha=";
    
    }
    test(){
       return true;
    }
    getUrifromDate(day,month,year){
        return `${day<10?"0"+day:day}%2F${month<10?"0"+month:month}%2F${year}`
    }
    getDate(){
        var d = new Date();
        var fecha = this.getUrifromDate(d.getUTCDate(),d.getUTCMonth()+1,d.getUTCFullYear());
        return fecha;
    }

    async getDolarHoy() {
        var url = "http://"+this.url_host +this.url_path + this.getDate()
        console.log(url)
        var datos = "" 
        return new Promise(function(aceptar,rechazar){
        http.get(url,function(res){
            res.on('data',function (chunk){
            datos+=chunk;
            });
            res.on('end',function(){
                var g=datos.toString().match(/\<td\sclass\=\"dest\"\>(.+)\<\/td\>/g).map(a=>a.replace("<td class=\"dest\">","").replace("</td>",""))   
                aceptar(g);
            });
        }) ;});
       
    }

}

