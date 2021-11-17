const express = require('express');
const app = express();
const cors = require('cors')

const bodyParser = require('body-parser')
app.use(cors())
app.use( bodyParser.json() ); 
app.use(bodyParser.urlencoded({ 
    extended: true
}));

app.use(express.static(__dirname+"/views"));

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/app-index.html');
});

app.post('/transactions',function(request,response){

  response.json([
  {categoria:"Shopping",descricao:"Sapatos Bom Pé",valor:"- R$ 135,00"},
  {categoria:"Supermercado",descricao:"Walmart",valor:"- R$ 89,90"},
  {categoria:"Alimentos e Bebidas",descricao:"Boteco do Ze Alemao",valor:"- R$ 185,90"},
  {categoria:"Pet e Cia",descricao:"Petshop Tosa Legal",valor:"- R$ 65,90"},
  {categoria:"Automovel e cia",descricao:"Lava a Jato Agua Morna",valor:"- R$ 50,00"}])

})

//process.env.PORT
const listener = app.listen(80, function() {
    console.log('Your app is listening on port ' + listener.address().port);
  });