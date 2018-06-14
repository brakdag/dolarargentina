const assert = require("assert");
const dolar = require("../lib/index");
const async = require("async");
var dol = new dolar;
var list = dol.getBanklist();
it('Bancos Cargados:', function() {
    this.timeout(15000);
    console.log( list);
});

describe("Bancos", function(){
    it(dol.bank["galicia"].name,async function() {console.log(await dol.getDolarHoy("galicia"))});
    it(dol.bank["montemar"].name,async function() {console.log(await dol.getDolarHoy("montemar"))});
    it(dol.bank["provincia"].name,async function() {console.log(await dol.getDolarHoy("provincia"))});
    
});

/*describe('Pruebas Unitarias DolarArgentina', function() {
    this.timeout(15000);
    describe('Modulo Cargado', function() {
    it('Creando instancia de la clase,', function() {
        assert.equal(dol.test(), true);
    });
    it('Bancos Cargados:', function() {
         console.log(dol.getBanklist().length);
    });

  });
});

describe('Pruebas de funciones', function() {
/*    describe('Función de fecha', function() {
       it('Convertir fecha a cadena ceros',function() {console.log(dol.getUrifromDate(1,1,2003));});
       it('Convertir fecha a cadena sin ceros',function() {console.log(dol.getUrifromDate(11,11,2003));});
    });*/
  
//});
