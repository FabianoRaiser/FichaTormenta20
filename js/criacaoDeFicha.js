const personagem = document.querySelectorAll('#input-personagem');
const atributos = document.querySelectorAll('[data-contador]');

const nomePersonagem = personagem[0];

let For;
let Des;
let Con;
let Int;
let Sab;
let Car;

console.log(atributos);

//------------ ATRIBUTOS ---------------------------

function atualizaAtributos() {
     For = parseInt(atributos[0].innerText)
     Des = parseInt(atributos[1].innerText)
     Con = parseInt(atributos[2].innerText)
     Int = parseInt(atributos[3].innerText)
     Sab = parseInt(atributos[4].innerText)
     Car = parseInt(atributos[5].innerText)
}

console.log(For);


