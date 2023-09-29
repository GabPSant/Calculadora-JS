const painel = document.querySelector("#painel");
const botoes = document.querySelectorAll(".simbolo");

let teste = false;
let valor = "";
let resultado = 0;

function calcular_botoes(evento){
    alvo = evento.target.value;

    if(valor === resultado && (!alvo.match(/[+|*|/|=]/g)|| alvo !== "-") && teste){
        teste = false;
        valor = (alvo.match([0-9]))?alvo:0;
        resultado = 0;
    }//Tente resolver o atraso no sistema

    if(alvo !== "="){
        valor += alvo;
    }

    painel.innerHTML = valor;

    switch(alvo){
        case "=":
            resultado = eval(valor);
            valor = resultado;
            console.log(resultado);
            painel.innerHTML = resultado;
            teste = true;
            break;
        case "c":
            valor = "";
            resultado = 0;
            console.log(valor.length);
            painel.innerHTML = 0;
            teste = false;
            break;
        case "del":
            valor = valor.slice(0, -4);
            painel.innerHTML = painel.innerHTML.slice(0, -4);
            break;
    }

    if(painel.innerHTML === "") painel.innerHTML = "0";

    console.log(valor);
}

function calcular_teclado(texto){

    if(valor === resultado && (!texto.match(/[+|*|/|=]/g)|| texto !== "-") && teste){
        teste = false;
        valor = (texto.match([0-9]))?texto:0;
        resultado = 0;
        painel.innerHTML = valor;
    }//Tente resolver o atraso no sistema

    if(texto !== "="){
        valor += texto;
    }

    painel.innerHTML = valor;

    switch(texto){//Ajustar melhor os botoes teclado
        case "=":
            resultado = eval(valor);
            valor = resultado;
            console.log(resultado);
            painel.innerHTML = resultado;
            teste = true;
            break;
        case "c":
            valor = "";
            resultado = 0;
            console.log(valor.length);
            painel.innerHTML = 0;
            break;
        case "C":
            valor = "";
            resultado = 0;
            console.log(valor.length);
            painel.innerHTML = 0;
            break;
        case "del":
            valor = valor.slice(0, -4);
            painel.innerHTML = painel.innerHTML.slice(0, -4);
            break;
    }

    if(painel.innerHTML === "") painel.innerHTML = "0";

    console.log(valor);
}

botoes.forEach(botao => {
    botao.addEventListener("click", evento =>{
        calcular_botoes(evento)
    })
})

document.addEventListener('keydown', evento =>{
    let chave = evento.key;
    if(chave === "Backspace"){
        calcular_teclado("del");
    }
    else if(chave.match(/([0-9|c|C|.|+|*|/|=])/g)){
        calcular_teclado(chave);
    }
    else if(chave === "-"){
        calcular_teclado(chave);
    }
    else if(chave === "Enter"){
        calcular_teclado("=");
    }
})