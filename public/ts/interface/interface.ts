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
	sprites: {
		front_default: string;
	};
	species: {
		url: string;
	};
}

export interface pokemon2 {
	color: {
		name: string;
	};
}
