import { listPokemon, pokemon, pokemonObject } from "./interface/interface";

let urlPokemon: string = "https://pokeapi.co/api/v2/pokemon/";
let previous: string;
let next: string;

const $previous: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#previous");
const $next: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#next");
const $pokeBox: HTMLElement = <HTMLElement>document.querySelector("#pokemon-box");
const fragment: Node = document.createDocumentFragment();

export const fetchPokemon = (): void => {
	fetch(urlPokemon)
		.then((response) => {
			if (!response.ok) {
				throw new Error("Error HTTP: " + response.statusText);
			}
			return response.json();
		})
		.then((data: listPokemon) => {
			createPokemon(data);
			console.log(data);
		})
		.catch((error) => {
			console.error(error);
		});
};

const createPokemon = (data: listPokemon): void => {
	$pokeBox.innerHTML = "";
	data.results.forEach((pokemon) => {
		const $figure: HTMLElement = document.createElement("figure"),
			$img: HTMLElement = document.createElement("img"),
			$figcaption: HTMLElement = document.createElement("figcaption"),
			$namePokemon: Node = document.createTextNode(pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)),
			$divName: HTMLElement = document.createElement("div"),
			$divContent2: HTMLElement = document.createElement("div"),
			$divContent1: HTMLElement = document.createElement("div");

		$img.setAttribute("alt", pokemon.name);
		$img.setAttribute("title", pokemon.name);
		$img.classList.add("pokemon-img");

		$divContent2.classList.add("pokemon-div-content2");

		const object: pokemonObject = { $img, $figure, $divName, $divContent2 };

		fetchPokemon2(pokemon.url, object);

		$figcaption.appendChild($namePokemon);
		$figcaption.classList.add("pokemon-name");

		$divName.appendChild($figcaption);
		$divName.classList.add("pokemon-div-name");

		$divContent1.appendChild($divName);
		$divContent1.appendChild($img);
		$divContent1.classList.add("pokemon-div-content1");
		$figure.appendChild($divContent1);
		$figure.appendChild($divContent2);
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
	$pokeBox.innerHTML = "<p>Loading...</p>";
	urlPokemon = previous;
	fetchPokemon();
});

$next.addEventListener("click", () => {
	$pokeBox.innerHTML = "<p>Loading...</p>";
	urlPokemon = next;
	fetchPokemon();
});

const fetchPokemon2 = (url: string, object: pokemonObject): void => {
	const { $img, $figure, $divName, $divContent2 } = object;
	const $divHeightWidth: HTMLElement = document.createElement("div");
	const $divHeight: HTMLElement = document.createElement("div"),
		$divWeight: HTMLElement = document.createElement("div"),
		$titleHeight: HTMLElement = document.createElement("p"),
		$titleWeight: HTMLElement = document.createElement("p");

	$divHeightWidth.appendChild($divWeight);
	$divContent2;

	$divHeightWidth.appendChild($divHeight);
	$divHeightWidth.classList.add("pokemon-div-height-width");

	$divContent2.appendChild($divHeightWidth);
	fetch(url)
		.then((response) => {
			if (!response.ok) {
				throw new Error("Error HTTP: " + response.statusText);
			}
			return response.json();
		})
		.then((data: pokemon) => {
			$img.setAttribute("src", data.sprites.front_default);
			const $id = document.createElement("p");

			const $divType = document.createElement("div"),
				$titleType = document.createElement("p"),
				$divIconHeight = document.createElement("div"),
				$divIconWeight = document.createElement("div");

			$divIconWeight.innerHTML = `<i class="fa-solid fa-weight-scale icon"></i>  <p class="p-h">${data.weight}</p>`;
			$divIconWeight.classList.add("icon-weight");
			$divWeight.classList.add("pokemon-div-weight");
			$divWeight.appendChild($divIconWeight);
			$titleWeight.textContent = "Weight";
			$divWeight.appendChild($titleWeight);

			$divIconHeight.innerHTML = `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 4H21V6H11V4ZM6 7V11H4V7H1L5 3L9 7H6ZM6 17H9L5 21L1 17H4V13H6V17ZM11 18H21V20H11V18ZM9 11H21V13H9V11Z"></path></svg> <p class="p-h">${data.height}</p>`;
			$divIconHeight.classList.add("icon-height");
			$divHeight.classList.add("pokemon-div-height");
			$divHeight.appendChild($divIconHeight);
			$titleHeight.textContent = "Height";
			$divHeight.appendChild($titleHeight);

			$titleType.textContent = "Type";
			$titleType.classList.add("pokemon-title-type");

			$divType.appendChild($titleType);
			$divType.classList.add("pokemon-div-type");

			let firstType: boolean = false;

			const $typeContent = document.createElement("div");
			$typeContent.classList.add("pokemon-type-content");
			data.types.forEach((type) => {
				const $type = document.createElement("p"),
					typePokemon: string = type.type.name;

				$type.textContent = type.type.name;
				$type.classList.add("pokemon-type");

				pokemonType(typePokemon, $type);

				if (!firstType) {
					if (typePokemon === "grass") {
						$figure.classList.add("grass");
						firstType = true;
					} else if (typePokemon === "fire") {
						$figure.classList.add("fire");
						firstType = true;
					} else if (typePokemon === "water") {
						$figure.classList.add("water");
						firstType = true;
					} else if (typePokemon === "bug") {
						$figure.classList.add("bug");
						firstType = true;
					} else if (typePokemon === "normal") {
						$figure.classList.add("normal");
						firstType = true;
					} else if (typePokemon === "poison") {
						$figure.classList.add("poison");
						firstType = true;
					} else if (typePokemon === "electric") {
						$figure.classList.add("electric");
						firstType = true;
					} else if (typePokemon === "ground") {
						$figure.classList.add("ground");
						firstType = true;
					} else if (typePokemon === "fairy") {
						$figure.classList.add("fairy");
						firstType = true;
					} else if (typePokemon === "fighting") {
						$figure.classList.add("fighting");
						firstType = true;
					} else if (typePokemon === "psychic") {
						$figure.classList.add("psychic");
						firstType = true;
					} else if (typePokemon === "rock") {
						$figure.classList.add("rock");
						firstType = true;
					} else if (typePokemon === "ghost") {
						$figure.classList.add("ghost");
						firstType = true;
					} else if (typePokemon === "ice") {
						$figure.classList.add("ice");
						firstType = true;
					} else if (typePokemon === "dragon") {
						$figure.classList.add("dragon");
						firstType = true;
					} else if (typePokemon === "dark") {
						$figure.classList.add("dark");
						firstType = true;
					} else if (typePokemon === "steel") {
						$figure.classList.add("steel");
						firstType = true;
					} else if (typePokemon === "flying") {
						$figure.classList.add("flying");
						firstType = true;
					}
				}

				$typeContent.appendChild($type);
				$divType.appendChild($typeContent);
				$divContent2.appendChild($divType);
			});

			const idString = data.id.toString();

			if (idString.length === 1) {
				$id.textContent = `#00${data.id}`;
			} else if (idString.length === 2) {
				$id.textContent = `#0${data.id}`;
			} else {
				$id.textContent = `#${data.id}`;
			}
			$id.classList.add("pokemon-id");
			$divName.appendChild($id);
		})
		.catch((error) => {
			console.error(error);
		});
};

const pokemonType = (typePokemon: string, $type: HTMLElement): void => {
	if (typePokemon === "grass") {
		$type.classList.add("grass");
	} else if (typePokemon === "fire") {
		$type.classList.add("fire");
	} else if (typePokemon === "water") {
		$type.classList.add("water");
	} else if (typePokemon === "bug") {
		$type.classList.add("bug");
	} else if (typePokemon === "normal") {
		$type.classList.add("normal");
	} else if (typePokemon === "poison") {
		$type.classList.add("poison");
	} else if (typePokemon === "electric") {
		$type.classList.add("electric");
	} else if (typePokemon === "ground") {
		$type.classList.add("ground");
	} else if (typePokemon === "fairy") {
		$type.classList.add("fairy");
	} else if (typePokemon === "fighting") {
		$type.classList.add("fighting");
	} else if (typePokemon === "psychic") {
		$type.classList.add("psychic");
	} else if (typePokemon === "rock") {
		$type.classList.add("rock");
	} else if (typePokemon === "ghost") {
		$type.classList.add("ghost");
	} else if (typePokemon === "ice") {
		$type.classList.add("ice");
	} else if (typePokemon === "dragon") {
		$type.classList.add("dragon");
	} else if (typePokemon === "dark") {
		$type.classList.add("dark");
	} else if (typePokemon === "steel") {
		$type.classList.add("steel");
	} else if (typePokemon === "flying") {
		$type.classList.add("flying");
	}
};
