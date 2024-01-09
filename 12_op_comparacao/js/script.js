var idade = 17;
var possuiCarro = 1;

if(idade >= 18) {
    console.log('O usuário pode tirar a carteira de habilitação.');
}

if(idade <= 17) {
    console.log('O usuário precisa ter pelo menos 18 anos de idade para tirar a carteira de habilitação.');
}

if(possuiCarro) {
    console.log('O usuário já pode andar de carro.');
}

var nome = 'Honda';

if(nome == 'Isaias') {
    console.log('O seu nome é Isaias');
}

if(nome != 'Isaias') {
    console.log(`O seu nome não é Isaias, é ${nome}.`);
}

if(20 > 100) {
    console.log('Passou!');
}

if(100> 20) {
    console.log('Passou 2!');
}