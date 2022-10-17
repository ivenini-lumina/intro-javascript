// Desestructuracion o Asignacion desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

const usecontext = ({nombre, clave, edad, rango = 'Capitan'}) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.333,
            lng: -43.66
        }
    }
};

const avenger = usecontext ( persona ); 
// FIXME No anda cuando el nombre de la funcion es cambiado a "useContext" o cualquie cosa
// que comience con use y le siga luego con algun caracter en mayuscula 

const {nombreClave, anios, latlng:{lat, lng}} = avenger;

console.log(avenger);
console.log(nombreClave, anios);
console.log(lat, lng);