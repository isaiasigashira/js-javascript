var obj = {
    nome:'Isaias',
    idade: 21,
    estaTrabalhando: true,
    profissão:'operador de telemarketing',
}

console.log(obj);
console.log(typeof obj);

console.log(obj.nome);
console.log(obj.idade);
console.log(obj.profissão);

console.log(`O meu nome é ${obj.nome}, tenho ${obj.idade} anos de idade e trabalho como ${obj.profissão}.`);

obj.nome = 'Honda';
console.log(obj)
