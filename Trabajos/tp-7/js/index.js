import { getPokemonName } from "./suggest.js";

const pokedex = document.getElementById("row_pokemons");
const spinner = document.getElementById("spinner");

// colores para los tipos de cada pokemon
export const colors = {
    electric: "rgba(250, 255, 24, 0.4)",
    normal: "rgba(55, 33, 33, 0.4)",
    fire: "rgba(255, 8, 8, 0.4)",
    water: "rgba(8, 54, 255, 0.4)",
    ice: "rgba(0, 255, 244, 0.4)",
    rock: "rgba(127, 127, 127, 0.4)",
    flying: "rgba(183, 255, 252, 0.4)",
    grass: "rgba(0, 122, 23, 0.4)",
    psychic: "rgba(249, 183, 255, 0.4)",
    ghost: "rgba(234, 0, 255, 0.4)",
    bug: "rgba(8, 255, 54, 0.4)",
    fairy: "rgba(246, 145, 255, 0.4)",
    poison: "rgba(147, 3, 190, 0.4)",
    ground: "rgba(193, 116, 0, 0.4)",
    dragon: "rgba(255, 0, 128, 0.4)",
    steel: "rgba(42, 224, 255, 0.4)",
    fighting: "rgba(174, 174, 174, 0.4)",
    default: "rgba(0, 0, 0, 0.4)",
};

export const main_types = Object.keys(colors);

export const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    spinner.style.display = "none";
    const pokemon = await res.json().catch((err) => notFoundError(err));

    console.log(pokemon);
    createCard(pokemon);
};

const pokemonLimit = 151;

const fetchPokemon = async (pokemonLimit) => {
    for (let i = 1; i <= pokemonLimit; i++) {
        spinner.style.display = "block";
        await getPokemon(i);
        getPokemonName(i);
    }
};

const more_pokemons = document.getElementById("more_pokemons");
more_pokemons.addEventListener("click", () => alert("En desarollo"));

fetchPokemon(pokemonLimit);

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle("show", entry.isIntersecting);
        if (entry.isIntersecting) observer.unobserve(entry.target);
    });
});

export function createCard(pokemon) {
    const pokeCard = document.querySelectorAll(".pokemon");
    const pokeElement = document.createElement("div");
    pokeElement.classList.add("col", "col-sm-6", "col-md-6", "m-4", "pokemon", "show");

    const type = pokemon.types.map((el) => el.type.name);
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const type_color = pokemon.types[0].type.name;
    const image = `${pokemon.sprites["front_default"]}`;
    const bgColor = colors[type_color];

    pokeElement.style.background = bgColor;

    const pokeInnerHTML = `
    <div class="img-container">
        <img loading="lazy" alta="${name}" height="250" width="250" src="${image}"/>
    </div>
    <div class="info-container" id="info">
        <span class="number">#${pokemon.id.toString().padStart(3, "0")}</span>
        <h3 class="name">${name}</h3>
        <span class="type">Type: ${type.slice(0, 1).toString()}</span>
        <span class="type">${type.slice(1, 2).toString()}</span>
    </div>
    <button class="btn btn-primary m-4" type="button" data-bs-toggle="collapse" data-bs-target="#${name}_collapse" aria-expanded="false" aria-controls="#${name}_collapse">
        Estadisticas
    </button>
    <div class="collapse" id="${name}_collapse">
    <div class="card card-body">
       <p class="hp">${pokemon.stats[0].stat.name}: ${
        pokemon.stats[0].base_stat
    }</p>
       <p class="attack">${pokemon.stats[1].stat.name}: ${
        pokemon.stats[1].base_stat
    }</p>
       <p class="defense">${pokemon.stats[2].stat.name}: ${
        pokemon.stats[2].base_stat
    }</p>
       <p class="special-attack">${pokemon.stats[3].stat.name}: ${
        pokemon.stats[3].base_stat
    }</p>
       <p class="special-defense">${pokemon.stats[4].stat.name}: ${
        pokemon.stats[4].base_stat
    }</p>
       <p class="speed">${pokemon.stats[5].stat.name}: ${
        pokemon.stats[5].base_stat
    }</p>
    </div>
    </div>
    `;
    pokeElement.innerHTML = pokeInnerHTML;
    pokedex.appendChild(pokeElement);
    pokeCard.forEach((card) => {
        observer.observe(card);
    });
    observer.observe(document.querySelector(".pokemon"));
}

