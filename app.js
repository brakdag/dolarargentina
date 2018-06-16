const express = require('express')
, app = express()
, server = require('http').createServer(app)
var dolar = require("./lib/index");
var dol = new dolar;
var respuestas = []
/*****************************************************
 *                      APP                          *
 ****************************************************/


app.use(express.static(__dirname + '/public'));
server.listen(8080, ()=> {
  console.log('Aplicación Dolar Argentian corriendo en - http://localhost:8080');
});  
/*****************************************************
 *                    ROUTES                         *
 ****************************************************/
app.get('/', function(req, res,next) {  
  res.sendFile(__dirname + '/public/views/index.html');
});

app.get('/data', function(req, res,next) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(respuestas, null, 3));
});

(async function (){
  respuestas.push(await dol.getDolarHoy("santanderrio"));
  respuestas.push(await dol.getDolarHoy("montemar"));
  respuestas.push(await dol.getDolarHoy("provincia"));
})();
