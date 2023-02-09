const personagem = document.querySelectorAll('#input-personagem');
const atributosManual = document.querySelectorAll('[data-atributo]');
const atributosCompra = document.querySelectorAll('[data-contador]');

const selectAtributo = document.getElementById('selectAtributo');

const nomePersonagem = personagem[0];

let For = 0;
let Des = 0;
let Con = 0;
let Int = 0;
let Sab = 0;
let Car = 0;

console.log(atributos);

//------------ ATRIBUTOS ---------------------------

function atualizaAtributos() {
     if (selectAtributo.value == "manual") {
          For = parseInt(atributosManual[0].innerText);
          Des = parseInt(atributosManual[1].innerText);
          Con = parseInt(atributosManual[2].innerText);
          Int = parseInt(atributosManual[3].innerText);
          Sab = parseInt(atributosManual[4].innerText);
          Car = parseInt(atributosManual[5].innerText);
     } else if (selectAtributo.value == "compra") {
          For = parseInt(atributosCompra[0].innerText);
          Des = parseInt(atributosCompra[1].innerText);
          Con = parseInt(atributosCompra[2].innerText);
          Int = parseInt(atributosCompra[3].innerText);
          Sab = parseInt(atributosCompra[4].innerText);
          Car = parseInt(atributosCompra[5].innerText);
     } else {
          console.log("Os atributos não foram selecionados")
     }
}




