var marca = 'Toyota';
var pp = 200;

if(marca == 'Honda' || pp <= 200) {
    console.log('Você pode se inscrever para esta corrida.');
} else {
    console.log('Você não pode se increver para esta corrida.');
}

if(marca == 'Honda' && 30 > 20 || 10 == 10) {
    console.log('testando1');
}

if((marca == 'Honda' || 30 > 20) && 10 == 10) {
    console.log('testando2');
} else {
    console('Não entrou.');
}