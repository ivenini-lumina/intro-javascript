const nombre = 'Fernando';
const apellido = 'Herrera';

const nyaConcat = 'concat ' + nombre + ' ' + apellido;

const nyaTemplate = `template ${nombre} ${apellido}`;

console.log(nyaConcat);
console.log(nyaTemplate);

function getSaludo(nombre){
    return `Hola ${nombre}`;
}

console.log(`function: ${ getSaludo(nombre) }`);
