let urlPokemon = "https://pokeapi.co/api/v2/pokemon/";
let previous;
let next;
const $previous = document.querySelector("#previous");
const $next = document.querySelector("#next");
const $pokeBox = document.querySelector("#pokemon-box");
const fragment = document.createDocumentFragment();
export const fetchPokemon = () => {
    fetch(urlPokemon)
        .then((response) => {
        if (!response.ok) {
            throw new Error("Error HTTP: " + response.statusText);
        }
        return response.json();
    })
        .then((data) => {
        createPokemon(data);
    })
        .catch((error) => {
        console.error(error);
    });
};
const createPokemon = (data) => {
    $pokeBox.innerHTML = "";
    data.results.forEach((pokemon) => {
        const $figure = document.createElement("figure"), $img = document.createElement("img"), $figcaption = document.createElement("figcaption"), $namePokemon = document.createTextNode(pokemon.name);
        $img.setAttribute("alt", pokemon.name);
        $img.setAttribute("title", pokemon.name);
        fetchPokemon2(pokemon.url, $img, $figure);
        $figcaption.appendChild($namePokemon);
        $figure.appendChild($img);
        $figure.appendChild($figcaption);
        fragment.appendChild($figure);
        $figure.classList.add("pokemon-card");
    });
    $pokeBox.appendChild(fragment);
    data.previous === null ? $previous.setAttribute("disabled", "true") : $previous.removeAttribute("disabled");
    data.next !== null && (next = data.next);
    data.next === null ? $next.setAttribute("disabled", "true") : $next.removeAttribute("disabled");
    data.previous !== null && (previous = data.previous);
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
const fetchPokemon2 = (url, $img, $figure) => {
    fetch(url)
        .then((response) => {
        if (!response.ok) {
            throw new Error("Error HTTP: " + response.statusText);
        }
        return response.json();
    })
        .then((data) => {
        $img.setAttribute("src", data.sprites.front_default);
        fetchPokemon3(data.species.url, $figure);
    })
        .catch((error) => {
        console.error(error);
    });
};
const fetchPokemon3 = (url, $figure) => {
    fetch(url)
        .then((response) => {
        if (!response.ok) {
            throw new Error("Error HTTP: " + response.statusText);
        }
        return response.json();
    })
        .then((data) => {
        if (data.color.name === "green") {
            $figure.classList.add("grass");
        }
        if (data.color.name === "red") {
            $figure.classList.add("fire");
        }
        if (data.color.name === "blue") {
            $figure.classList.add("water");
        }
        if (data.color.name === "yellow") {
            $figure.classList.add("electric");
        }
        if (data.color.name === "purple") {
            $figure.classList.add("poison");
        }
        if (data.color.name === "brown") {
            $figure.classList.add("ground");
        }
        if (data.color.name === "gray") {
            $figure.classList.add("rock");
        }
        if (data.color.name === "pink") {
            $figure.classList.add("fairy");
        }
        if (data.color.name === "black") {
            $figure.classList.add("dark");
        }
        if (data.color.name === "white") {
            $figure.classList.add("ice");
        }
        if (data.color.name === "gray") {
            $figure.classList.add("steel");
        }
    });
};
