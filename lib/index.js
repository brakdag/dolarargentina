process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

const http = require('http');
const https = require('https');

module.exports = class Dolar {
    constructor() {
        this.bank = {
            "galicia": {
                name: "Banco Galicia",
                url: "https://www.bancogalicia.com/cotizacion/cotizar?currencyId=02&quoteType=SU&quoteId=999",
                ext1: "buy\"\:\"(.+)\",",
                ext2: "sell\"\:\"(.+)\""
            },
            "bna": {
                name: "Banco Nación",
                url: "http://www.bna.com.ar/Empresas",
                ext1: "Dolar U\.S\.A\<\/td\>\<td class\=\"dest\"\>(.+)\<\/td\>\<td class\=\"dest\"\>",
                ext2: "U\.S\.A.+est\"\>(.+)\<\/td\>"
            },
            "patagonia": {
                name: "Banco Patagónia",
                url: "https://ebankpersonas.bancopatagonia.com.ar/eBanking/usuarios/cotizacionMonedaExtranjera.htm",
                ext1: "DOLARES.+nbsp\;(.+)\<\/td\>\<td class\=\"tdFi.+EUROS",
                ext2: "DOLARES.+FinalRight.+nbsp;(.+)\<\/td\>.+EUROS"
            },
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

    getBanklist() {
        return Object.keys(this.bank)
    }
    getUriNow() {
        var d = new Date();
        return this.getUrifromDate(d.getUTCDate(), d.getUTCMonth() + 1, d.getUTCFullYear());

    }
    getUrifromDate(day, month, year) {
        return `${day < 10 ? "0" + day : day}%2F${month < 10 ? "0" + month : month}%2F${year}`
    }

    
    async getDolarHoy(banco) {
        var d = new Date();
        return await this.getDolarFecha(d.getUTCDate(), d.getUTCMonth() + 1, d.getUTCFullYear(), banco)
    }

    async getDolarFecha(day, month, year, banco) {
        var clase = this;
        var url = this.bank[banco].url
        var datos = ""
        var llamada = ""
        return new Promise(function (aceptar, rechazar) {
            if (url.substr(0, 5) == 'https') llamada = https
            else llamada = http;
            llamada.get(url, function (res) {
                res.on('data', function (chunk) {
                    datos += chunk;
                });
                res.on('end', function () {
                    var s = datos.toString().replace(/\s{2}/g, "")
                    //console.log(s)
                    try {
                        var c = s.match(clase.bank[banco].ext1)[1]
                        var v = s.match(clase.bank[banco].ext2)[1]
                        aceptar({ compra: c, venta: v, link: url, "banco": clase.bank[banco].name });
                    } catch (e) {
                        console.log(url)
                        rechazar("error");
                    }
                });

            });
        });

    }

}

