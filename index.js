const mostrar = document.querySelector("#painel");
const operacoes = []
let conjunto_numeros = [];
let resultado = 0;

function guardar(valor){//Mostra o valor 
    mostrar.innerHTML += `${valor}`;
}

function ponto(){
    mostrar.innerHTML += ".";
}

function calculo(){//Terminar a função de cálculo e ajustar as respostas de output para o usuário
    let operacao = "(";
    let it = 1; //Serve como iterador para passar pelos conjunto de números
    if(conjunto_numeros.length == 0) Error("Não a nenhum valor a ser avaliado");
    conjunto_numeros = conjunto_numeros.map(x => parseInt(x));
    for(const simbolo of operacoes){

    }
}

function soma(){
    operacoes.push("+");
    conjunto_numeros.push(mostrar.innerHTML);
    mostrar.innerHTML = "";
    console.log(conjunto_numeros);
    console.log(operacoes);
}

function subtracao(){
    operacoes.push("-");
    conjunto_numeros.push(mostrar.innerHTML);
    mostrar.innerHTML = "";
    console.log(conjunto_numeros);
    console.log(operacoes);
}

function multiplicacao(){
    operacoes.push("*");
    conjunto_numeros.push(mostrar.innerHTML);
    mostrar.innerHTML = "";
    console.log(conjunto_numeros);
    console.log(operacoes);
}

function divisao(){
    operacoes.push("/");
    conjunto_numeros.push(mostrar.innerHTML);
    mostrar.innerHTML = "";
    console.log(conjunto_numeros);
    console.log(operacoes);
}