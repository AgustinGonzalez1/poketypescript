import { listPokemon, pokemon } from "./interface/interface";

let urlPokemon: string = "https://pokeapi.co/api/v2/pokemon/";
let previous: string;
let next: string;

const $previous: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#previous");
const $next: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#next");

const $pokeBox: HTMLElement = <HTMLElement>document.querySelector("#pokemon-box");

export const fetchPokemon = (): void => {
	const fragment: Node = document.createDocumentFragment();

	fetch(urlPokemon)
		.then((response) => {
			if (!response.ok) {
				throw new Error("Error HTTP: " + response.statusText);
			}
			return response.json();
		})
		.then((data: listPokemon) => {
			$pokeBox.innerHTML = "";
			console.log(data);
			data.results.forEach((pokemon) => {
				const $figure: HTMLElement = document.createElement("figure"),
					$img: HTMLElement = document.createElement("img"),
					$figcaption: HTMLElement = document.createElement("figcaption"),
					$namePokemon: Node = document.createTextNode(pokemon.name);

				$img.setAttribute("alt", pokemon.name);
				$img.setAttribute("title", pokemon.name);

				fetch(pokemon.url)
					.then((response) => {
						if (!response.ok) {
							throw new Error("Error HTTP: " + response.statusText);
						}
						return response.json();
					})
					.then((data: pokemon) => {
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
