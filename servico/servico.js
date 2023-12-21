const dados = require("../dados/dados.js")

function servicoBuscaFatoPorAno(ano){
    let fatoSelecionado = dados.find(fato => {
        return fato.Ano == ano});    

        return fatoSelecionado.Fato;
    }

function validaAno(ano){
    let valido = (ano >= 1920 && ano <= 2020 && !isNaN(ano)) ? true : false;
    return valido;
}
module.exports = {
    validaAno,
    servicoBuscaFatoPorAno
}