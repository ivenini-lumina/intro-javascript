
function saludar(nombre){
    return `Hola ${nombre}`;
}

// saludar = 30;

console.log(saludar);

// tranformar a flecha
// retornar onjeto implicito
// probar

function getUsuarioActivo(nombre){
    return {
        uid: 'ABC567',
        username:  nombre
    };
}

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);

//

const getUsuarioActivoFlecha = (nombre) => ({
        uid: 'ABC567',
        username:  nombre
    });

const usuarioActivoFlecha = getUsuarioActivoFlecha('Fernando');

console.log(getUsuarioActivo);
console.log(usuarioActivoFlecha);