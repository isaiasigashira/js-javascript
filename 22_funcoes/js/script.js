function primeiraFuncao() {
    console.log('Hello World');
}

primeiraFuncao();

function dizerNome(nome) {
    console.log(`O nome é ${nome}.`);
}

dizerNome('Isaias');
dizerNome('Honda');
dizerNome('Toyota');

var nomeDoBancoDeDados = 'João';

dizerNome(nomeDoBancoDeDados);

function soma(a, b) {
    var soma = a + b;
    return soma;
}

var somaUm = soma(2, 5);

console.log(somaUm)

var somaDois = soma(somaUm, 3);

console.log(somaDois);

console.log(soma(4, 5));