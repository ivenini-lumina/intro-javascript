const personajes = ['Goku', 'Vegeta', 'Trunks'];

console.log(personajes);

const [,v] = personajes

console.log(`Vegetal: ${v} `);

// Tarea
// desestructurar array 
// 1. primer valor llamarlo nombre
// 2. segundo valor llamarlo setNombre
// 3. invocar a setNombre

function Foo () {


    const useState = ( valor ) => {
        return [ valor, () => { console.log('Hola Mundo') } ];
    }

    const arr = useState ('Goku');

    console.log(arr);


    const [ nombre, setNombre ] = arr;

    console.log(nombre);

    setNombre();

}


Foo();
