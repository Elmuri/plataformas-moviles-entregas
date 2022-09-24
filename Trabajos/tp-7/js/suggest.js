const pokeNames = [];

export const getPokemonName = (id) => {
    // se hace fetch de la api nuevamente para obtener los nombres de los pokemon, y hacerles push a un array vacio.
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((res) => res.json())
        .then((data) => {
            pokeNames.push(data.name.toString());
            // console.log(pokeNames);
        })
        .catch((err) => console.log(err));
    return pokeNames;
};