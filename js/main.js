// sidebar

const searchBar = document.getElementById('search_bar');
const searchItems = document.querySelector('.search_items');

const games = [
    { name: 'Alan Wake 2', id: 29 },
    { name: 'Assassin\'s Creed Mirage', id: 42 },
    { name: 'Assassin\'s Creed Odyssey', id: 40 },
    { name: 'Assassin\'s Creed Valhalla', id: 41 },
    { name: 'Baldur\'s Gate III', id: 5 },
    { name: 'Bloodborne', id: 20 },
    { name: 'Celeste', id: 12 },
    { name: 'Control', id: 28 },
    { name: 'Cyberpunk 2077', id: 2 },
    { name: 'Dark Souls III', id: 4 },
    { name: 'Death Stranding', id: 27 },
    { name: 'Disco Elysium', id: 48 },
    { name: 'Divinity: Original Sin 2', id: 47 },
    { name: 'Doom', id: 35 },
    { name: 'Doom Eternal', id: 36 },
    { name: 'Dragon Age: Inquisition', id: 44 },
    { name: 'Elden Ring', id: 3 },
    { name: 'Fallout 4', id: 9 },
    { name: 'Far Cry 5', id: 38 },
    { name: 'Far Cry 6', id: 39 },
    { name: 'God of War', id: 21 },
    { name: 'God of War Ragnarök', id: 22 },
    { name: 'Grand Theft Auto V', id: 7 },
    { name: 'Hades', id: 10 },
    { name: 'Hollow Knight', id: 11 },
    { name: 'Horizon Forbidden West', id: 26 },
    { name: 'Horizon Zero Dawn', id: 25 },
    { name: 'Mass Effect Andromeda', id: 46 },
    { name: 'Mass Effect Legendary Edition', id: 45 },
    { name: 'Metro Exodus', id: 37 },
    { name: 'Minecraft', id: 15 },
    { name: 'Monster Hunter: World', id: 18 },
    { name: 'No Man\'s Sky', id: 17 },
    { name: 'Outer Wilds', id: 49 },
    { name: 'Red Dead Redemption 2', id: 6 },
    { name: 'Resident Evil 2', id: 32 },
    { name: 'Resident Evil 4', id: 30 },
    { name: 'Resident Evil Village', id: 31 },
    { name: 'Sekiro: Shadows Die Twice', id: 19 },
    { name: 'Skyrim', id: 8 },
    { name: 'Spider-Man Remastered', id: 23 },
    { name: 'Spider-Man: Miles Morales', id: 24 },
    { name: 'Starfield', id: 43 },
    { name: 'Stardew Valley', id: 13 },
    { name: 'Subnautica', id: 16 },
    { name: 'Terraria', id: 14 },
    { name: 'The Last of Us Part I', id: 33 },
    { name: 'The Last of Us Part II', id: 34 },
    { name: 'The Outer Worlds', id: 50 },
    { name: 'The Witcher 3', id: 1 }
];

function displayGames(gamesToDisplay) {
    searchItems.innerHTML = '';
    gamesToDisplay.forEach(game => {
        const gameDiv = document.createElement('div');
        gameDiv.className = 'search-item';
        gameDiv.innerHTML = `<div class="game-div"><img src="ÖÖÖÖÖÖÖÖÖÖÖÖ"><div class="game-name">${game.name}</div></div>`;
        searchItems.appendChild(gameDiv);
    });
}

displayGames(games);

searchBar.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();

    const filtered = games.filter(game => 
        game.name.toLowerCase().includes(query)
    );

    displayGames(filtered);
});


// main

const mainItems = document.querySelector('.main_items');
const shelves = [
    { name: 'Favorites', id: 1 },
    { name: 'To Play', id: 2 },
    { name: 'Completed', id: 3 },
];
function displayShelves(shelvesToDisplay) {
    mainItems.innerHTML = '';
    shelvesToDisplay.forEach(shelf => {
        const shelfDiv = document.createElement('div');
        shelfDiv.className = 'shelf';
        shelfDiv.innerHTML = 
        `<div class="top-shelf">
            <span class="shelf-name">${shelf.name}</span>
            <div class="shelf-line-detection">
                <div class="shelf-line"></div>
            </div>
        </div>`;
        mainItems.appendChild(shelfDiv);
    });
}
displayShelves(shelves);