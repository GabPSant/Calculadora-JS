const painel = document.querySelector("#painel");
const botoes = document.querySelectorAll(".simbolo");

let valor = "";
let resultado = 0;

function calcular(evento){
    if(evento.target.value !== "="){
        valor += evento.target.value;
    }

    painel.innerHTML = valor;

    switch(evento.target.value){
        case "=":
            resultado = eval(valor);
            valor = resultado;
            painel.innerHTML = resultado;
            break;
        case "c":
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
        calcular(evento)
    })
})