// Sample array of anime objects
const animeList = [
    { name: "Death Note", link: "http://cine-studio.vercel.app/anime/death-note/index.html", image: "http://cine-studio.vercel.app/src/img/thumbnail/death-note.webp" },
];

// Function to search for anime by name
function searchAnime(query) {
    // Convert query to lowercase for case-insensitive search
    const lowerCaseQuery = query.toLowerCase();

    // Filter animeList based on the query
    const results = animeList.filter(anime =>
        anime.name.toLowerCase().includes(lowerCaseQuery)
    );

    // Return the search results
    return results;
}

// Function to handle search
function handleSearch(event) {
    event.preventDefault(); // Prevent form submission
    let container = document.getElementById('animeGrid');
    const query = document.getElementById('search').value;
    const results = searchAnime(query);
    // Clear previous results
    container.innerHTML = '';

    // Check if there are any results
    if (results.length > 0) {
        // Loop through results and generate HTML
        results.forEach(anime => {
            container.innerHTML += `
            <div class="grid-item">
                <a href="${anime.link}">
                    <img src="${anime.image}" alt="${anime.name} Anime">
                </a>
                <h3><a href="${anime.link}">${anime.name}</a></h3>
            </div>
            `;
        });
    } else {
        // If no results found, display a message
        container.innerHTML = '<p>No results found</p>';
    }

    console.log(results); // Log results for debugging
}