/**
 * Author:    Gustavo David Ferreyra brakdag@gmail.com
 * Created:   3.10.2018
 * MIT license.
 * dolarargentina library
 **/

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0


module.exports = class Dolar {
    constructor() {
        this.bank = {
            "galicia": {
                name: "Banco Galicia",
                url: "https://www.bancogalicia.com/cotizacion/cotizar?currencyId=02&quoteType=SU&quoteId=999",
                ext1: "buy\"\:\"(.+)\",",
                ext2: "sell\"\:\"(.+)\""
            },
            /*"bna": {
                name: "Banco Nación",
                url: "http://www.bna.com.ar/Personas",
                ext1: "Dolar U\.S\.A\<\/td\>\<td class\=\"dest\"\>(.+)\<\/td\>\<td class\=\"dest\"\>",
                ext2: "U\.S\.A.+est\"\>(.+)\<\/td\>"
            },
            "patagonia": {
                name: "Banco Patagonia",
                url: "https://ebankpersonas.bancopatagonia.com.ar/eBanking/usuarios/cotizacionMonedaExtranjera.htm",
                ext1: "DOLARES.+nbsp\;(.+)\<\/td\>\<td class\=\"tdFi.+EUROS",
                ext2: "DOLARES.+FinalRight.+nbsp;(.+)\<\/td\>.+EUROS"
            },*/
            "montemar": {
                name: "Montemar",
                url: "https://www.montemar.com.ar/cotizacion/",
                ext1: "left\'\>Dolar\<\/td\> \<td\>(.{7})\<\/td\>",
                ext2: "left\'\>Dolar\<\/td\> \<td\>.{7}\<\/td\> \<td\>(.{7})"
            },
            "santanderrio": {
                name: "Santander Río",
                url: "https://banco.santanderrio.com.ar/exec/cotizacion/index.jsp",
                ext1: "lar\<\/td\>\t\<td\>. (.{5})",
                ext2: "lar\<\/td\>\t\<td\>.{19}(.{5}).+Euro"
            },
            "provincia": {
                name: "Provincia",
                url: "https://www.bancoprovincia.com.ar/Principal/Dolar",
                ext1: ".{2}(.{6})",
                ext2: "\",\"(.{6})"
            }
        }

    }

    test() {
        return true;
    }

    get getBanklist() {
        return Object.keys(this.bank)
    }
    getUriNow() {
        var d = new Date();
        return this.getUrifromDate(d.getUTCDate(), d.getUTCMonth() + 1, d.getUTCFullYear());

    }
    getUrifromDate(day, month, year) {
        return `${day < 10 ? "0" + day : day}%2F${month < 10 ? "0" + month : month}%2F${year}`
    }

    
    getDolarHoy(banco) {
        var d = new Date();
        return this.getDolarFecha(d.getUTCDate(), d.getUTCMonth() + 1, d.getUTCFullYear(), banco)
    }

    getDolarFecha(day, month, year, banco) {
        const http = require('request');
        var clase = this;
        var url = this.bank[banco].url
        var datos = ""
        var llamada = ""
        return new Promise(function (aceptar, rechazar) {
            http.get(url, function (error, response, body) {
                try{
                    var s = body.toString().replace(/\s{2}/g, "");
                    var c = parseFloat(s.match(clase.bank[banco].ext1)[1].replace(",","."));
                    var v = parseFloat(s.match(clase.bank[banco].ext2)[1].replace(",","."));
                    aceptar({"banco": clase.bank[banco].name, compra: c, venta: v/*, link: url,*/  });
                }
                catch(err){
                    rechazar(err);
                }
                });
        });
    }

}

