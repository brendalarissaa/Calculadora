function adicionar(valor){

let tela = document.getElementById("tela")
let operadores = ["+", "-", "*", "/", "%"]
let ultimo = tela.value.slice(-1)

// impedir de começar com operador
if(tela.value === "" && operadores.includes(valor)){
    return
}

// substituir operador
if(operadores.includes(valor) && operadores.includes(ultimo)){
    tela.value = tela.value.slice(0,-1) + valor
    return
}

tela.value += valor

}

function limpar(){
document.getElementById("tela").value = "";
}

function calcular(){

    let expressao = document.getElementById("tela").value

    //porcentagem
    expressao = expressao.replace(/(\d+)%/g, "($1/100)")

    let resultado = math.evaluate(expressao)

    document.getElementById("tela").value = resultado
}

function apagar(){

let tela = document.getElementById("tela")

tela.value = tela.value.slice(0,-1)

}
//o site escuta o teclado
document.addEventListener("keydown", function(event){
//qual tecla foi pressionada
let tecla = event.key
//isnan é: isso nao eh numero
//se a tecla for número ou operador, adiciona na tela
if(!isNaN(tecla) || ["+","-","*","/","."].includes(tecla)){
    adicionar(tecla)
}

if(tecla === "Enter"){
    calcular()
}
//apaga o último número
if(tecla === "Backspace"){
    apagar()
}
//limpa a calculadora
if(tecla === "Escape"){
    limpar()
}

})

function parenteses() {

    let tela = document.getElementById("tela");
    let valor = tela.value;

    let abre = (valor.match(/\(/g) || []).length;
    let fecha = (valor.match(/\)/g) || []).length;

    if (abre > fecha) {
        tela.value += ")";
    } else {
        tela.value += "(";
    }

}
