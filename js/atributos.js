//const seletor = document.getElementById('select-atributo');
const controle = document.querySelectorAll('[data-controle]');

const pontos = document.getElementById('pontos__restantes');


function manipulaAtributo(operacao, controle) {
    const atributo = controle.querySelector('[data-contador]');
    if (operacao === "-") {
        atributo.innerText = parseInt(atributo.innerText) + 1;
    } else {
        atributo.innerText = parseInt(atributo.innerText) -  1;
    }
    console.log(operacao);
    descontaPontos(atributo, operacao);
}

function descontaPontos(atributo, operacao){
    let defaultPoolLen = parseInt(pontos.innerText);

    function applyOperation (operacao){
        let opResult = eval(operacao);
        if (opResult === NaN) {
            throw Error(`${atributo.innerText} is not a number!`);
        }

        pontos.innerText = opResult;
    };

    
    
    switch (atributo.innerText) {
        case '0':            
        case '1':
            let op = `${defaultPoolLen} ${operacao} 1`;
        console.log(`operação: ${op}`);
        applyOperation(op);
        break;               
        case '2':
            let op1 = `${defaultPoolLen} ${operacao} 1`;
            console.log(`operação: ${op1}`);
            applyOperation(op1);
            break;            
        case '3':
            let op2 = `${defaultPoolLen} ${operacao} 2`;
            console.log(`operação: ${op2}`);
            applyOperation(op2);
            break;
        case '4':
            let op3 = `${defaultPoolLen} ${operacao} 3`;
            console.log(`operação: ${op3}`);
            applyOperation(op3);
            break;
                
    }
}

controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaAtributo(evento.target.dataset.controle, evento.target.parentNode);
        //console.log(evento.target.dataset.atributo);
    })
});


