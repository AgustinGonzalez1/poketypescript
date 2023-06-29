let urlPokemon = "https://pokeapi.co/api/v2/pokemon/";
let previous;
let next;
const $previous = document.querySelector("#previous");
const $next = document.querySelector("#next");
const $pokeBox = document.querySelector("#pokemon-box");
export const fetchPokemon = () => {
    const fragment = document.createDocumentFragment();
    fetch(urlPokemon)
        .then((response) => {
        if (!response.ok) {
            throw new Error("Error HTTP: " + response.statusText);
        }
        return response.json();
    })
        .then((data) => {
        $pokeBox.innerHTML = "";
        console.log(data);
        data.results.forEach((pokemon) => {
            const $figure = document.createElement("figure"), $img = document.createElement("img"), $figcaption = document.createElement("figcaption"), $namePokemon = document.createTextNode(pokemon.name);
            $img.setAttribute("alt", pokemon.name);
            $img.setAttribute("title", pokemon.name);
            fetch(pokemon.url)
                .then((response) => {
                if (!response.ok) {
                    throw new Error("Error HTTP: " + response.statusText);
                }
                return response.json();
            })
                .then((data) => {
                $img.setAttribute("src", data.sprites.front_default);
            })
                .catch((error) => {
                console.error(error);
            });
            $figcaption.appendChild($namePokemon);
            $figure.appendChild($img);
            $figure.appendChild($figcaption);
            fragment.appendChild($figure);
        });
        $pokeBox.appendChild(fragment);
        data.previous === null ? $previous.setAttribute("disabled", "true") : $previous.removeAttribute("disabled");
        data.next !== null && (next = data.next);
        data.next === null ? $next.setAttribute("disabled", "true") : $next.removeAttribute("disabled");
        data.previous !== null && (previous = data.previous);
    })
        .catch((error) => {
        console.error(error);
    });
};
$previous.addEventListener("click", () => {
    $pokeBox.textContent = "";
    urlPokemon = previous;
    fetchPokemon();
});
$next.addEventListener("click", () => {
    $pokeBox.textContent = "";
    urlPokemon = next;
    fetchPokemon();
});
