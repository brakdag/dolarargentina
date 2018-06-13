const assert = require("assert");
const dolar = require("../lib/index")

describe('Módulo', function() {
  describe('Cargando Modulo', function() {
    it('Creando instancia de la clase,', function() {
        assert.equal((new dolar).test(), true);
    });
  });
});

describe('Pruebas de funciones', function() {
    var dol = new dolar;
    describe('Función de fecha', function() {
       it('Convertir fecha a cadena ceros',function() {console.log(dol.getUrifromDate(1,1,2003));});
       it('Convertir fecha a cadena sin ceros',function() {console.log(dol.getUrifromDate(11,11,2003));});
    });
   describe('Probando Bancos', function(){
    this.timeout(15000);
    it('Banco Galicia',async function() {console.log(await dol.getDolarHoy("galicia"))});
    it('Banco Nación',async function() {console.log(await dol.getDolarHoy("bna"))});
    it('Banco Patagonia',async function() {console.log(await dol.getDolarHoy("patagonia"))});
    it('Montemar',async function() {console.log(await dol.getDolarHoy("montemar"))});
    
   });
});
