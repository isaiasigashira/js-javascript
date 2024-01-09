var pp = 200;
var marca = 'Honda';

if(marca == 'Honda' && pp <= 200) {
    console.log('Você pode se inscrever para esta corrida.');
} else {
    console.log('Você não pode se increver nesta corrida por não cumprir todos os requisitos do regulamento.');
}

if(1 == 1 && 3 > 2 && true) {
    console.log('Aprovado!');
}

if((1 == 1 && 3 > 3) && true) {
    console.log('Aprovado!');
} else if(marca == 'Honda' && pp <= 200) {
    console.log('teste');
}