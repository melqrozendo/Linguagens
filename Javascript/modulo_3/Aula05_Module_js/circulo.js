import numeroAleatorio from "./numAleatorio.js";

function area(raio){
    return Math.PI * raio * raio;
}

function circunferencia(raio){
    return 2 * raio * Math.PI;
}

//calcular tbm um numero aleatorio de importando uma função
function aleatorio(){
    return numeroAleatorio();
}


//assim podemos criar um objeto que receba todos as funçoes (para export um unico objeto)
const Circulo = {
    area,
    circunferencia,
    aleatorio
};

export default Circulo;