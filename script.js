
window.onload = ()=>{
    let lista = document.getElementById("tarjeta");
    const numbers = ['1', '2','3','4','5','6','7','8','9','10','j','Q','K']; 
    const pintas = ['hearth', 'spade','trebol','diamon'];

    let numero = numbers[Math.floor(Math.random()*numbers.length)];
    let simbolo = pintas[Math.floor(Math.random()*pintas.length)];

    lista.classList.add(numero, simbolo);
};