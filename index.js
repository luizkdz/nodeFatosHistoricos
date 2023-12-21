const express = require('express');
const app = express()
const servico = require('./servico/servico.js');

console.log("Digite o ano para saber o fato de pesquisa");

app.get("/", (req,res) => {
    let ano = req.query.ano;
    console.log("Ano recebido", ano)
    if(servico.validaAno(ano)){
    let fraseBuscada = servico.servicoBuscaFatoPorAno(ano)
    
        res.json({fraseBuscada:fraseBuscada})
      } 
    else{   
     res.status(400).json({erro:"Ano inválido"});} 
        

})

app.listen(8080, () => {
    console.log("Servidor iniciado")
})


