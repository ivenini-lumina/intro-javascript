const ironman = {
    nombre: 'Tony',    
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'NY',
        zip: 90210,
        lat: 3344,
        long: 5566,
    }
};

const spiderman = { ...ironman};
spiderman.nombre = 'Peter';
spiderman.apellido = 'Parker';

console.table(ironman);

console.log(ironman);

console.table(spiderman);

const personaReferenciaObjeto = {persona: ironman, persona2: spiderman};

console.log(personaReferenciaObjeto);

personaReferenciaObjeto.persona.nombre = 'cambio1';

console.log(ironman);
console.log(personaReferenciaObjeto);


