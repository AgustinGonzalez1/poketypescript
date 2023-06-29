export const fetchPokemon2 = (url, $img) => {
    fetch(url)
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
};
