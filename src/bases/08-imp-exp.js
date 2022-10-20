import { heroes } from "../data/heroes";
//import { heroes, owners } from "../data/heroes";

export const getHeroeById = (id) => {
    return heroes.find( (h) => h.id === id );
}

//console.log(getHeroeById(1));
//console.log(getHeroeById(2));
//console.log(getHeroeById(3));

export const getHeroesByOwner = (owner) => {
    return heroes.filter( (h) => h.owner === owner );
}

// const dc = 'DC';

//console.log(`DC > ${ getHeroesByOwner(dc)} `);

//console.log(getHeroesByOwner('DC'));

//console.log(`Marvel > ${ getHeroesByOwner('Marvel')} `);

//console.log(getHeroesByOwner('Marvel'));

//console.log(owners);

