import { getHeroeById } from "./bases/08-imp-exp";


// const promesa = new Promise( (resolve, reject) => {

//     setTimeout(() => {
//         const heroe = getHeroeById(2);
//         resolve(heroe);
//     }, 2000);

// } );

// promesa.then( (h) => {
//     console.log('Then de la promesa.');
//     console.log(h);
// });

const getHeroeByIdasync = ( id ) => {
    const promesa = new Promise( (resolve, reject) => {

        setTimeout(() => {
            const heroe = getHeroeById(id);
            if (heroe === undefined){
                reject('No se pudo encontrar el heroe');
            }
            resolve(heroe);
        }, 2000);

    } );

    return promesa;
}

// getHeroeByIdasync(10)
//     .then((h) => {
//         console.log('Then de la promesa.');
//         console.log(h);
//     })
//     .catch(e => console.log(e));

getHeroeByIdasync(1)
    .then(console.log)
    .catch(console.warn);