function displayPokemon(data) {
  const resultContainer = document.getElementById("resultContainer");
  resultContainer.innerHTML = `
        <div class="card animated">
            <img src="${
              data.sprites.other["official-artwork"].front_default
            }" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${data.name} (ID: ${data.id})</h5>
                <p class="card-text">Height: ${data.height} | Weight: ${
    data.weight
  }</p>
                <p class="card-text">Type(s): ${data.types
                  .map((type) => type.type.name)
                  .join(", ")}</p>
            </div>
        </div>
    `;

  // Add animation class dynamically
  document.querySelector(".card").classList.add("fade-in");
}
