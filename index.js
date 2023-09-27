const mostrar = document.querySelector("#painel");
const operacoes = []; //conjunto que contem as operações
let conjunto_numeros = []; //conjunto que contem os números
let conjunto_total = [];
const mensagem = "Erro";//Mensagem de Error
let operacao = "(";
let resultado = 0;

function guardar(valor){//Mostra o valor
    if(mostrar.innerHTML == mensagem) mostrar.innerHTML = '';
    if(mostrar.innerHTML == resultado) reiniciar();
    mostrar.innerHTML += `${valor}`;
}

function reiniciar(){
    mostrar.innerHTML = '';
    resultado = 0;
    operacoes.length = 0;
    conjunto_numeros.length = 0;
}

function ponto(){
    mostrar.innerHTML += '.';
}

function calculo(conjunto_total){
    for(i = 0; i<conjunto_total.length; i++){
        if(i === 0){
            resultado = conjunto_total[i];
            operacao += conjunto_total[i];
        }
        else{
            if(i%2 === 0){
                switch(conjunto_total[i--]){
                    case "+":
                        resultado += conjunto_total[i];
                        break;
                    case "-":
                        resultado -= conjunto_total[i];
                        break;
                    case "*":
                        resultado *= conjunto_total[i];
                        break;
                    case "/":
                        resultado /= conjunto_total[i];
                        break;
                }
                operacao += `${conjunto_total[i]}) `;
            }
            else{
                operacao += ` ${conjunto_total[i]} `;
                continue;
            }
        }
    }
    conjunto_total = [];
    operacao += `= ${resultado}`;
    console.log(operacao);
    mostrar.innerHTML = resultado;
}

function processamento(){//Terminar a função de cálculo e ajustar as respostas de output para o usuário
    if(mostrar.innerHTML !== '')
        conjunto_total.push(Number.isInteger(mostrar.innerHTML)?Number.parseInt(mostrar.innerHTML):Number.parseFloat(mostrar.innerHTML));

    if(conjunto_numeros.length < 0){
        mostrar.innerHTML = mensagem;
        Error("Não tem nenhum valor a ser avaliado");
    }

    if(operacoes.length < 0) return;

    /*conjunto_total = conjunto_total.map(x =>{
        if(Number.isInteger(x)) Number.parseInt(x);
        else if(!Number.isNaN(x) && !Number.isInteger(x)) Number.parseFloat(x);
        else x = x;
    });*/
    console.log(conjunto_total);

    calculo(conjunto_total);
}

function soma(){
    operacoes.push("+");
    conjunto_numeros.push(mostrar.innerHTML);
    conjunto_total.push(Number.isInteger(mostrar.innerHTML)?Number.parseInt(mostrar.innerHTML):Number.parseFloat(mostrar.innerHTML));
    conjunto_total.push("+");
    mostrar.innerHTML = "";
    console.log(conjunto_numeros);
    console.log(operacoes);
}

function subtracao(){
    operacoes.push("-");
    conjunto_numeros.push(mostrar.innerHTML);
    conjunto_total.push(Number.isInteger(mostrar.innerHTML)?Number.parseInt(mostrar.innerHTML):Number.parseFloat(mostrar.innerHTML));
    conjunto_total.push("-");
    mostrar.innerHTML = "";
    console.log(conjunto_numeros);
    console.log(operacoes);
}

function multiplicacao(){
    operacoes.push("*");
    conjunto_numeros.push(mostrar.innerHTML);
    conjunto_total.push(Number.isInteger(mostrar.innerHTML)?Number.parseInt(mostrar.innerHTML):Number.parseFloat(mostrar.innerHTML));
    conjunto_total.push("*");
    mostrar.innerHTML = "";
    console.log(conjunto_numeros);
    console.log(operacoes);
}

function divisao(){
    operacoes.push("/");
    conjunto_numeros.push(mostrar.innerHTML);
    conjunto_total.push(Number.isInteger(mostrar.innerHTML)?Number.parseInt(mostrar.innerHTML):Number.parseFloat(mostrar.innerHTML));
    conjunto_total.push("/");
    mostrar.innerHTML = "";
    console.log(conjunto_numeros);
    console.log(operacoes);
}