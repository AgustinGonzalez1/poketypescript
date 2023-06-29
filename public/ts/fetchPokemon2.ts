import { pokemon } from "./interface/interface";

export const fetchPokemon2 = (url: string, $img: HTMLElement): void => {
	fetch(url)
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
};
