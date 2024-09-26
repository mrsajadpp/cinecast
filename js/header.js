// Handle Mobile Menu (Left to Right Animation)
const handleMenu = () => {
    const menu = document.getElementById('mobileMenu');
    
    if (menu.classList.contains('shown')) {
        menu.classList.remove('shown');
        menu.classList.add('hidden');
    } else {
        menu.classList.remove('hidden');
        menu.classList.add('shown');
    }
};

// Handle Mobile Search (Top to Bottom Animation)
const handleSearchBar = () => {
    const searchBar = document.getElementById('searchBar');
    const searchIcon = document.getElementById('searchIcon');
    
    if (searchBar.classList.contains('shown')) {
        searchBar.classList.remove('shown');
        searchBar.classList.add('hidden');
    } else {
        searchBar.classList.remove('hidden');
        searchBar.classList.add('shown');
    }

    // Change search icon based on visibility state
    if (searchBar.classList.contains('hidden')) {
        searchIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="29px" viewBox="0 -960 960 960" width="29px" fill="#000">
            <path d="M382.23-340.23q-100.36 0-169.74-69.43-69.37-69.42-69.37-169.5 0-100.07 69.32-169.53 69.31-69.46 169.49-69.46t169.65 69.47q69.46 69.47 69.46 169.62 0 41.91-14.08 80.75-14.08 38.85-37.58 67.26l228.35 227.81q8 7.97 8.19 19.53.19 11.56-8.4 20.06-8.6 8.5-19.87 8.5-11.27 0-19.64-8.37L529.88-391.89q-29.73 24.77-68.42 38.22-38.69 13.44-79.23 13.44Zm-.15-55.96q76.8 0 129.9-53.02 53.1-53.03 53.1-130 0-76.98-53.1-129.98-53.1-53-130-53t-129.9 53.02q-53 53.02-53 130 0 76.98 53.01 129.98 53.02 53 129.99 53Z" />
        </svg>`;
    } else {
        searchIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="29px" viewBox="0 -960 960 960" width="29px"
            fill="#000"><path d="M480-440.27 278.38-238.65q-8.3 8.3-19.76 8.25-11.47-.06-19.97-8.56-8.19-8.5-8.03-19.62.15-11.11 8.34-19.3L440.27-480 238.96-682.12q-7.81-7.8-8-19.11-.19-11.31 8-19.81 8.19-8.5 19.46-8.75 11.27-.25 19.96 8.25L480-519.73l201.81-201.81q8.11-8.11 19.57-8.06 11.47.06 20.16 8.56 8 8.5 7.84 19.62-.15 11.11-8.34 19.3L519.73-480l201.31 202.12q7.81 7.8 8 19.11.19 11.31-8 19.81-8.19 8.5-19.46 8.75-11.27.25-19.77-8.44L480-440.27Z"/>
        </svg>`;
    }
};
