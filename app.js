const w = require('./lib/m')
const express = require('express')
  , app = express()
  , server = require('http').createServer(app)
var dolar = require("./lib/index");
var dol = new dolar;
var respuestas = []


if(process.env["jexia"]==true){
  host="0.0.0.0"}
  else{
  host="127.0.0.1"
  }
/*****************************************************
 *                      APP                          *
 ****************************************************/


app.use(express.static(__dirname + '/public'));

server.listen(80,host, () => {
  console.log('Aplicación Dolar Argentian corriendo en - http://localhost:80');
});
/*****************************************************
 *                    ROUTES                         *
 ****************************************************/
app.get('/', function (req, res, next) {
  res.sendFile(__dirname + '/public/views/index.html');
});

app.get('/data', function (req, res, next) {
  bancos = dol.getBanklist;
  bancos.forEach(banco =>
    dol.getDolarHoy(banco).then((resp) => {
      respuestas.push(resp)
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(respuestas, null, 3));
    }));

});

(async function () {


})();
