// Funções em JS

function fn(){
    return 'Code here';
}

const arrowFn = () => 'Code here'; // Usando arrow function. Por haver somente uma linha,
                                   // o return fica implícito.

console.log(fn());

console.log(arrowFn());

// Funções também são objetos

fn.prop = 'Posso criar propriedades';

console.log(fn.prop);
console.log(fn())

// Receber Parâmetros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);

console.log('\n----\n')

// Receber e retornar funções
const controlFnExec = fnParam => allowed => {
    if (allowed) {
        console.log(fnParam());
    }
}

const handleFnExecution = controlFnExec(fn);

handleFnExecution(true); // Executará o console.log(fn)
handleFnExecution();     // Não execurtará

// controlFnExec como funçõa

function controlFnExec(fnParam){
    return function (allowed) {
        if (allowed) {
            console.log(fnParam());
        }
    }
}