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
       it('obtener fecha actual',async function() {console.log(await dol.getDolarHoy());
    });
       
    });    
});
