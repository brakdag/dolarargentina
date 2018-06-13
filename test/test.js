const assert = require("assert");
const dolar = require("../lib/index")

describe('Módulo', function() {
  describe('Cargando Modulo', function() {
    it('Creando instancia de la clase,', function() {
        assert.equal((new dolar).test(), true);
    });




  });
});