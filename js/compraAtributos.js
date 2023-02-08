
//------------ Compra de Pontos-----------------------------------
const controle = document.querySelectorAll('[data-controle]');
const pontos = document.getElementById('pontos__restantes');


function manipulaAtributo(operacao, controle) {
    const atributo = controle.querySelector('[data-contador]');
    if (operacao === "-") {
        atributo.innerText = parseInt(atributo.innerText) - 1;
    } else {
        atributo.innerText = parseInt(atributo.innerText) + 1;
    }
    console.log(operacao);
    descontaPontos(atributo, operacao);
}

function descontaPontos(atributo, operacao){
    let defaultPoolLen = parseInt(pontos.innerText);

    // Verficação
    function applyOperation (operacao){
        let opResult = eval(operacao);
        if (opResult === NaN) {
            throw Error(`${atributo.innerText} is not a number!`);
        }

        pontos.innerText = opResult;
    };
    
    // Operações
    switch (atributo.innerText) {
        case '0':            
        case '1':
            let op;
            if (operacao == "+") {
                op = `${defaultPoolLen} - 1`;
            } else {
                op = `${defaultPoolLen} + 1`;
            }
        console.log(`operação: ${op}`);
        applyOperation(op);
        break;               
        case '2':
            let op1;
            if (operacao == "+") {
                op1 = `${defaultPoolLen} - 1`;
            } else {
                op1 = `${defaultPoolLen} + 2`;
            }
            console.log(`operação: ${op1}`);
            applyOperation(op1);
            break;            
        case '3':
            let op2;
            if (operacao == "+") {
                op2 = `${defaultPoolLen} - 2`;
            } else {
                op2 = `${defaultPoolLen} + 3`;
            }
            console.log(`operação: ${op2}`);
            applyOperation(op2);
            break;
        case '4':
            let op3;
            if (operacao == "+") {
                op3 = `${defaultPoolLen} - 3`;
            } else {
                op3 = `${defaultPoolLen} + 4`;
            }
            console.log(`operação: ${op3}`);
            applyOperation(op3);
            break;
        case '-1':
            let op4;
            if (operacao == "+") {
                op4 = `${defaultPoolLen}`;
            } else {
                op4 = `${defaultPoolLen} + 1`;
            }
            console.log(`operação: ${op4}`);
            applyOperation(op4);
            break;
                
    }
}

// controle dos numeros
controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaAtributo(evento.target.dataset.controle, evento.target.parentNode);
        atualizaAtributos();
        //console.log(evento.target.dataset.atributo);
    })
});
