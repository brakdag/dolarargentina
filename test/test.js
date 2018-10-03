/**
 * Author:    Gustavo David Ferreyra brakdag@gmail.com
 * Created:   3.10.2018
 * MIT license.
 * dolarargentina library
 **/

const assert = require("assert");
const dolar =  require("../lib/index");
const dol = new dolar();
var bancos = dol.getBanklist;

describe("Bancos", function () {
    this.timeout(15000);
    bancos.forEach(banco => {
    it(dol.bank[banco].name, function () {
         dol.getDolarHoy(banco).then((res,fail)=>console.log(res)) });        
    });
});
