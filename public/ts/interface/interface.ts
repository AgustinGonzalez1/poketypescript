export interface listPokemon {
	count: number;
	next: string | null;
	previous: string | null;
	results: {
		name: string;
		url: string;
	}[];
}

export interface pokemon {
	id: number;
	name: string;
	order: number;
	sprites: {
		front_default: string;
	};
	species: {
		url: string;
	};
	types: {
		type: {
			name: string;
		};
	}[];
	height: number;
	weight: number;
	moves: {
		move: {
			name: string;
		};
	}[];
}

export interface pokemonObject {
	$img: HTMLElement;
	$figure: HTMLElement;
	$divName: HTMLElement;
	$divContent2: HTMLElement;
}
