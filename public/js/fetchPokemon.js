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
        console.log(data);
    })
        .catch((error) => {
        console.error(error);
    });
};
const createPokemon = (data) => {
    $pokeBox.innerHTML = "";
    data.results.forEach((pokemon) => {
        const $figure = document.createElement("figure"), $img = document.createElement("img"), $figcaption = document.createElement("figcaption"), $namePokemon = document.createTextNode(pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)), $divName = document.createElement("div"), $divContent = document.createElement("div"), $divContent1 = document.createElement("div");
        $img.setAttribute("alt", pokemon.name);
        $img.setAttribute("title", pokemon.name);
        $img.classList.add("pokemon-img");
        $divContent.classList.add("pokemon-div-content");
        const object = { $img, $figure, $divName, $divContent };
        fetchPokemon2(pokemon.url, object);
        $figcaption.appendChild($namePokemon);
        $figcaption.classList.add("pokemon-name");
        $divName.appendChild($figcaption);
        $divName.classList.add("pokemon-div-name");
        $divContent1.appendChild($divName);
        $divContent1.appendChild($img);
        $divContent1.classList.add("pokemon-div-content1");
        $figure.appendChild($divContent1);
        $figure.appendChild($divContent);
        $figure.classList.add("pokemon-card");
        fragment.appendChild($figure);
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
const fetchPokemon2 = (url, object) => {
    const { $img, $figure, $divName, $divContent } = object;
    fetch(url)
        .then((response) => {
        if (!response.ok) {
            throw new Error("Error HTTP: " + response.statusText);
        }
        return response.json();
    })
        .then((data) => {
        $img.setAttribute("src", data.sprites.front_default);
        const $id = document.createElement("p");
        const $divType = document.createElement("div");
        $divType.classList.add("pokemon-div-type");
        let firstType = false;
        data.types.forEach((type) => {
            const $type = document.createElement("p");
            $type.textContent = type.type.name;
            $type.classList.add("pokemon-type");
            if (type.type.name === "grass") {
                $type.classList.add("grass");
            }
            else if (type.type.name === "fire") {
                $type.classList.add("fire");
            }
            else if (type.type.name === "water") {
                $type.classList.add("water");
            }
            else if (type.type.name === "bug") {
                $type.classList.add("bug");
            }
            else if (type.type.name === "normal") {
                $type.classList.add("normal");
            }
            else if (type.type.name === "poison") {
                $type.classList.add("poison");
            }
            else if (type.type.name === "electric") {
                $type.classList.add("electric");
            }
            else if (type.type.name === "ground") {
                $type.classList.add("ground");
            }
            else if (type.type.name === "fairy") {
                $type.classList.add("fairy");
            }
            else if (type.type.name === "fighting") {
                $type.classList.add("fighting");
            }
            else if (type.type.name === "psychic") {
                $type.classList.add("psychic");
            }
            else if (type.type.name === "rock") {
                $type.classList.add("rock");
            }
            else if (type.type.name === "ghost") {
                $type.classList.add("ghost");
            }
            else if (type.type.name === "ice") {
                $type.classList.add("ice");
            }
            else if (type.type.name === "dragon") {
                $type.classList.add("dragon");
            }
            else if (type.type.name === "dark") {
                $type.classList.add("dark");
            }
            else if (type.type.name === "steel") {
                $type.classList.add("steel");
            }
            else if (type.type.name === "flying") {
                $type.classList.add("flying");
            }
            if (!firstType) {
                if (type.type.name === "grass") {
                    $figure.classList.add("grass");
                    firstType = true;
                }
                else if (type.type.name === "fire") {
                    $figure.classList.add("fire");
                    firstType = true;
                }
                else if (type.type.name === "water") {
                    $figure.classList.add("water");
                    firstType = true;
                }
                else if (type.type.name === "bug") {
                    $figure.classList.add("bug");
                    firstType = true;
                }
                else if (type.type.name === "normal") {
                    $figure.classList.add("normal");
                    firstType = true;
                }
                else if (type.type.name === "poison") {
                    $figure.classList.add("poison");
                    firstType = true;
                }
                else if (type.type.name === "electric") {
                    $figure.classList.add("electric");
                    firstType = true;
                }
                else if (type.type.name === "ground") {
                    $figure.classList.add("ground");
                    firstType = true;
                }
                else if (type.type.name === "fairy") {
                    $figure.classList.add("fairy");
                    firstType = true;
                }
                else if (type.type.name === "fighting") {
                    $figure.classList.add("fighting");
                    firstType = true;
                }
                else if (type.type.name === "psychic") {
                    $figure.classList.add("psychic");
                    firstType = true;
                }
                else if (type.type.name === "rock") {
                    $figure.classList.add("rock");
                    firstType = true;
                }
                else if (type.type.name === "ghost") {
                    $figure.classList.add("ghost");
                    firstType = true;
                }
                else if (type.type.name === "ice") {
                    $figure.classList.add("ice");
                    firstType = true;
                }
                else if (type.type.name === "dragon") {
                    $figure.classList.add("dragon");
                    firstType = true;
                }
                else if (type.type.name === "dark") {
                    $figure.classList.add("dark");
                    firstType = true;
                }
                else if (type.type.name === "steel") {
                    $figure.classList.add("steel");
                    firstType = true;
                }
                else if (type.type.name === "flying") {
                    $figure.classList.add("flying");
                    firstType = true;
                }
            }
            $divType.appendChild($type);
            $divContent.appendChild($divType);
        });
        const idString = data.id.toString();
        if (idString.length === 1) {
            $id.textContent = `#00${data.id}`;
        }
        else if (idString.length === 2) {
            $id.textContent = `#0${data.id}`;
        }
        else {
            $id.textContent = `#${data.id}`;
        }
        $id.classList.add("pokemon-id");
        $divName.appendChild($id);
        /* 			fetchPokemon3(data.species.url, $figure); */
    })
        .catch((error) => {
        console.error(error);
    });
};
/* const fetchPokemon3 = (url: string, $figure: HTMLElement) => {
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Error HTTP: " + response.statusText);
            }
            return response.json();
        })
        .then((data: pokemon2) => {
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
}; */
