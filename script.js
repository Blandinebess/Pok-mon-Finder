const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const pokemonCard = document.getElementById("pokemonCard");
const errorDiv = document.getElementById("error");
const spinner = document.getElementById("spinner");

searchBtn.addEventListener("click", async () => {
  const query = searchInput.value.toLowerCase().trim();
  if (!query) return;

  // Reset UI
  pokemonCard.innerHTML = "";
  errorDiv.textContent = "";
  spinner.style.display = "inline-block";

  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${query}`
    );
    const pokemon = response.data;

    const types = pokemon.types.map((t) => t.type.name).join(", ");
pokemonCard.innerHTML = `
<div class="card mx-auto fade-in" style="width: 18rem;">
<img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top" alt="${pokemon.name}">
<div class="card-body">
<h5 class="card-title text-capitalize">${pokemon.name} (ID: ${pokemon.id})</h5>
<p class="card-text">
<strong>Height:</strong> ${pokemon.height} <br>
<strong>Weight:</strong> ${pokemon.weight} <br>
<strong>Types:</strong> ${types}
</p>
</div>
</div>
`;
  } catch (error) {
    errorDiv.textContent = "Pokémon not found. Please try again.";
  } finally {
    spinner.style.display = "none";
  }
});
