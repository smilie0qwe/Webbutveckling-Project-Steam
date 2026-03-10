// sidebar search

const searchBar = document.getElementById('search_bar');
const searchItems = document.querySelector('.search_items');

const games = [
    { name: 'Alan Wake 2', id: 1903780 },
    { name: 'League of Legends', id: null, img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.MGnOIybXnvMKQSbRVdMuZwHaEK%3Fpid%3DApi&f=1&ipt=fa2b45ed758fc89501edbd889e619ff5a580718790ebcbd0f7cf305e29e41610&ipo=images' },    
    { name: 'Alan Wake Remastered', id: 1458140 },
    { name: 'Among Us', id: 945360 },
    { name: 'Counter-Strike 2', id: 730 },
    { name: 'Anno 1800', id: 916440 },
    { name: "Assassin's Creed Mirage", id: 2261570 },
    { name: "Assassin's Creed Odyssey", id: 812140 },
    { name: "Assassin's Creed Origins", id: 582160 },
    { name: "Assassin's Creed Syndicate", id: 368500 },
    { name: "Assassin's Creed Unity", id: 289650 },
    { name: "Assassin's Creed Valhalla", id: 2208920 },
    { name: 'A Plague Tale: Innocence', id: 752590 },
    { name: 'A Plague Tale: Requiem', id: 1182900 },
    { name: "Baldur's Gate III", id: 1086940 },
    { name: 'Batman: Arkham Knight', id: 208650 },
    { name: 'Battlefield 1', id: 1238840 },
    { name: 'Battlefield 4', id: 1238860 },
    { name: 'Battlefield V', id: 1238810 },
    { name: 'Bioshock Infinite', id: 8870 },
    { name: 'Bioshock Remastered', id: 409710 },
    { name: 'Borderlands 2', id: 49520 },
    { name: 'Borderlands 3', id: 397540 },
    { name: 'Celeste', id: 504230 },
    { name: 'Cities: Skylines', id: 255710 },
    { name: 'Control', id: 870780 },
    { name: 'Crash Bandicoot N. Sane Trilogy', id: 731490 },
    { name: 'Cuphead', id: 268910 },
    { name: 'Cyberpunk 2077', id: 1091500 },
    { name: 'Dark Souls II', id: 335300 },
    { name: 'Dark Souls III', id: 374320 },
    { name: 'Dark Souls Remastered', id: 570940 },
    { name: 'Days Gone', id: 1259420 },
    { name: 'Dead Cells', id: 588650 },
    { name: 'Dead Space', id: 1693980 },
    { name: 'Death Stranding', id: 1190460 },
    { name: 'Demon Souls', id: 2381690 },
    { name: 'Deus Ex: Mankind Divided', id: 337000 },
    { name: 'Disco Elysium', id: 632470 },
    { name: 'Dishonored 2', id: 403640 },
    { name: 'Dishonored Definitive Edition', id: 205100 },
    { name: 'Divinity: Original Sin 2', id: 435150 },
    { name: 'Doom', id: 2280 },
    { name: 'Doom Eternal', id: 782330 },
    { name: 'Dragon Age: Inquisition', id: 1222690 },
    { name: 'Dragon Age: Origins', id: 47810 },
    { name: 'Dragon Ball FighterZ', id: 678950 },
    { name: 'Dying Light', id: 239140 },
    { name: 'Dying Light 2', id: 534380 },
    { name: 'Elden Ring', id: 1245620 },
    { name: 'Fallout 3', id: 22370 },
    { name: 'Fallout 4', id: 377160 },
    { name: 'Fallout: New Vegas', id: 22380 },
    { name: 'Far Cry 3', id: 220240 },
    { name: 'Far Cry 4', id: 298110 },
    { name: 'Far Cry 5', id: 552520 },
    { name: 'Far Cry 6', id: 1448420 },
    { name: 'Final Fantasy VII Remake', id: 1462040 },
    { name: 'Final Fantasy XIV', id: 39210 },
    { name: 'Final Fantasy XV', id: 637650 },
    { name: 'Firewatch', id: 383870 },
    { name: 'For Honor', id: 304390 },
    { name: 'Ghost of Tsushima', id: 2215430 },
    { name: 'God of War', id: 1593500 },
    { name: 'God of War Ragnarök', id: 2322010 },
    { name: 'Grand Theft Auto IV', id: 12210 },
    { name: 'Grand Theft Auto V', id: 271590 },
    { name: 'Hades', id: 1145360 },
    { name: 'Hades II', id: 1145350 },
    { name: 'Half-Life 2', id: 220 },
    { name: 'Half-Life: Alyx', id: 546560 },
    { name: 'Hellblade: Senua\'s Sacrifice', id: 414340 },
    { name: 'Hitman 3', id: 1659040 },
    { name: 'Hollow Knight', id: 367520 },
    { name: 'Hollow Knight: Silksong', id: 1030300 },
    { name: 'Horizon Zero Dawn', id: 1151640 },
    { name: 'Hunt: Showdown', id: 594650 },
    { name: 'It Takes Two', id: 1426210 },
    { name: 'Kenshi', id: 233860 },
    { name: 'Kingdom Come: Deliverance', id: 379430 },
    { name: 'Left 4 Dead 2', id: 550 },
    { name: 'Lies of P', id: 1627720 },
    { name: 'Little Nightmares', id: 424840 },
    { name: 'Little Nightmares II', id: 860510 },
    { name: 'Loop Hero', id: 1282730 },
    { name: 'Lords of the Fallen', id: 1501750 },
    { name: 'Mass Effect Andromeda', id: 1238820 },
    { name: 'Mass Effect Legendary Edition', id: 1328670 },
    { name: 'Metro 2033 Redux', id: 286690 },
    { name: 'Metro Exodus', id: 412020 },
    { name: 'Metro: Last Light Redux', id: 287390 },
    { name: 'Middle-earth: Shadow of Mordor', id: 241930 },
    { name: 'Middle-earth: Shadow of War', id: 356190 },
    { name: 'Minecraft', id: 1672970 },
    { name: 'Monster Hunter Rise', id: 1446780 },
    { name: 'Monster Hunter: World', id: 582010 },
    { name: 'Mortal Kombat 11', id: 976310 },
    { name: 'NieR: Automata', id: 524220 },
    { name: 'NieR Replicant', id: 1113560 },
    { name: 'Nioh 2', id: 1325200 },
    { name: 'Octopath Traveler', id: 921794 },
    { name: 'Ori and the Blind Forest', id: 261570 },
    { name: 'Ori and the Will of the Wisps', id: 1057090 },
    { name: 'Outer Wilds', id: 753640 },
    { name: 'Outriders', id: 680420 },
    { name: 'Overcooked 2', id: 728880 },
    { name: 'Overwatch 2', id: 2357570 },
    { name: 'Palworld', id: 1623730 },
    { name: 'Pathfinder: Wrath of the Righteous', id: 1184370 },
    { name: 'Persona 4 Golden', id: 1113000 },
    { name: 'Persona 5 Royal', id: 1687950 },
    { name: 'Pillars of Eternity', id: 291650 },
    { name: 'Portal 2', id: 620 },
    { name: 'Red Dead Redemption 2', id: 1174180 },
    { name: 'Resident Evil 2', id: 883710 },
    { name: 'Resident Evil 3', id: 952060 },
    { name: 'Resident Evil 4', id: 2050650 },
    { name: 'Resident Evil 7', id: 418370 },
    { name: 'Resident Evil Village', id: 1196590 },
    { name: 'Risk of Rain 2', id: 632360 },
    { name: 'Rising Storm 2: Vietnam', id: 418460 },
    { name: 'RimWorld', id: 294100 },
    { name: 'Rogue Legacy 2', id: 1253920 },
    { name: 'Rust', id: 252490 },
    { name: 'Satisfactory', id: 526870 },
    { name: 'Scarlet Nexus', id: 775500 },
    { name: 'Sekiro: Shadows Die Twice', id: 814380 },
    { name: 'Sifu', id: 2138710 },
    { name: 'Skyrim', id: 489830 },
    { name: 'Slay the Spire', id: 646570 },
    { name: 'Solar Ash', id: 1258630 },
    { name: 'Soma', id: 282140 },
    { name: 'Spider-Man Remastered', id: 1817070 },
    { name: 'Spider-Man: Miles Morales', id: 1973870 },
    { name: 'Spiritfarer', id: 972660 },
    { name: 'Star Wars Jedi: Fallen Order', id: 1172380 },
    { name: 'Star Wars Jedi: Survivor', id: 1774580 },
    { name: 'Starfield', id: 1716740 },
    { name: 'Stardew Valley', id: 413150 },
    { name: 'Subnautica', id: 264710 },
    { name: 'Subnautica: Below Zero', id: 848450 },
    { name: 'Tactics Ogre: Reborn', id: 1451010 },
    { name: 'Terraria', id: 105600 },
    { name: 'The Outer Worlds', id: 578650 },
    { name: 'The Witcher 2', id: 20920 },
    { name: 'The Witcher 3', id: 292030 },
    { name: 'Titanfall 2', id: 1237970 },
    { name: 'Tom Clancy\'s Rainbow Six Siege', id: 359550 },
    { name: 'Tomb Raider', id: 203160 },
    { name: 'Torchlight Infinite', id: 1974790 },
    { name: 'Total War: Three Kingdoms', id: 779340 },
    { name: 'Total War: Warhammer III', id: 1142710 },
    { name: 'Tunic', id: 553420 },
    { name: 'Tyranny', id: 362960 },
    { name: 'Uncharted: Legacy of Thieves', id: 1659420 },
    { name: 'Undertale', id: 391540 },
    { name: 'Valheim', id: 892970 },
    { name: 'Vampire Survivors', id: 1794680 },
    { name: 'Wasteland 3', id: 1108660 },
    { name: 'Watch Dogs 2', id: 447040 },
    { name: 'Watch Dogs: Legion', id: 1118010 },
    { name: 'What Remains of Edith Finch', id: 501300 },
    { name: 'Warhammer 40,000: Space Marine 2', id: 2183900 },
    { name: 'World of Warcraft', id: 2835570 },
    { name: 'Yakuza 0', id: 638970 },
    { name: 'Yakuza: Like a Dragon', id: 1235140 },
    { name: 'Returnal', id: 1649240 },
    { name: 'Ratchet & Clank: Rift Apart', id: 1895880 },
    { name: 'Hogwarts Legacy', id: 990080 },
    { name: 'The Callisto Protocol', id: 1643320 },
    { name: 'Forza Horizon 5', id: 1551360 },
    { name: 'Forza Horizon 4', id: 1293830 },
    { name: 'Halo Infinite', id: 1240440 },
    { name: 'Halo: The Master Chief Collection', id: 976730 },
    { name: 'Age of Empires IV', id: 1466860 },
    { name: 'Age of Empires II: Definitive Edition', id: 813780 },
    { name: 'Crusader Kings III', id: 1158310 },
    { name: 'Europa Universalis IV', id: 236850 },
    { name: 'Hearts of Iron IV', id: 394360 },
    { name: 'Stellaris', id: 281990 },
    { name: 'Victoria 3', id: 529340 },
    { name: 'Civilization VI', id: 289070 },
    { name: 'XCOM 2', id: 268500 },
    { name: 'Plague Inc: Evolved', id: 246620 },
    { name: 'Two Point Hospital', id: 535930 },
    { name: 'Planet Coaster', id: 493340 },
    { name: 'Kerbal Space Program', id: 220200 },
    { name: 'Factorio', id: 427520 },
    { name: 'Dwarf Fortress', id: 975370 },
    { name: 'Oxygen Not Included', id: 457140 },
    { name: 'Frostpunk', id: 323190 },
    { name: 'They Are Billions', id: 644930 },
    { name: 'Into the Breach', id: 590380 },
    { name: 'FTL: Faster Than Light', id: 212680 },
    { name: 'Darkest Dungeon', id: 262060 },
    { name: 'Darkest Dungeon II', id: 1282730 },
    { name: 'Spelunky 2', id: 418530 },
    { name: 'Enter the Gungeon', id: 311690 },
    { name: 'Binding of Isaac: Rebirth', id: 250900 },
    { name: 'Noita', id: 881100 },
    { name: 'Hrot', id: 1210790 },
    { name: 'Dusk', id: 519860 },
    { name: 'Amid Evil', id: 673130 },
    { name: 'Ion Fury', id: 562860 },
    { name: 'Quake', id: 2310 },
    { name: 'Doom 64', id: 1148640 },
    { name: 'Wolfenstein II: The New Colossus', id: 612880 },
    { name: 'Wolfenstein: The New Order', id: 201810 },
    { name: 'Prey', id: 480490 },
    { name: 'Alien: Isolation', id: 214490 },
    { name: 'Amnesia: The Dark Descent', id: 57300 },
    { name: 'Amnesia: Rebirth', id: 999220 },
    { name: 'Outlast', id: 238320 },
    { name: 'Outlast 2', id: 414700 },
    { name: 'Phasmophobia', id: 739630 },
    { name: 'Lethal Company', id: 1966720 },
    { name: 'Content Warning', id: 2881650 },
    { name: 'Buckshot Roulette', id: 2835570 },
    { name: 'Balatro', id: 2379780 },
    { name: 'Dave the Diver', id: 1868140 },
    { name: 'Dredge', id: 1562430 },
    { name: 'Cocoon', id: 1497380 },
    { name: 'Sea of Stars', id: 1244090 },
    { name: 'Blasphemous', id: 774361 },
    { name: 'Blasphemous 2', id: 2114740 },
    { name: 'Shovel Knight', id: 250760 },
    { name: 'Axiom Verge', id: 332200 },
    { name: 'Metroid Dread', id: 1582590 },
    { name: 'Katana Zero', id: 1002300 },
    { name: 'Hotline Miami', id: 219150 },
    { name: 'Hotline Miami 2', id: 274170 },
    { name: 'My Time at Portia', id: 666140 },
    { name: 'Coral Island', id: 1158320 },
    { name: 'Sun Haven', id: 1432860 },
    { name: 'Story of Seasons: Friends of Mineral Town', id: 1294400 },
    { name: 'Graveyard Keeper', id: 599140 },
    { name: 'Potion Craft', id: 1210320 },
    { name: 'Cult of the Lamb', id: 1313140 },
    { name: 'Stranded Deep', id: 313120 },
    { name: 'The Forest', id: 242760 },
    { name: 'Sons of the Forest', id: 1326470 },
    { name: 'Green Hell', id: 815370 },
    { name: 'The Long Dark', id: 305620 },
    { name: 'Icarus', id: 1149460 },
    { name: 'DayZ', id: 221100 },
    { name: 'ARK: Survival Evolved', id: 346110 },
    { name: 'Conan Exiles', id: 440900 },
    { name: 'Astroneer', id: 361420 },
    { name: 'Deep Rock Galactic', id: 548430 },
    { name: 'Warframe', id: 230410 },
    { name: 'Path of Exile', id: 238960 },
    { name: 'Diablo IV', id: 2344520 },
    { name: 'Torchlight II', id: 200710 },
    { name: 'Grim Dawn', id: 219990 },
    { name: 'Victor Vran', id: 297550 },
    { name: 'Wolcen: Lords of Mayhem', id: 424370 },
    { name: 'Last Epoch', id: 899770 },
].sort((a, b) => a.name.localeCompare(b.name));

function displayGames(gamesToDisplay) {
    searchItems.innerHTML = '';
    gamesToDisplay.forEach(game => {
        const imgSrc = game.img
            ? game.img
            : `https://cdn.akamai.steamstatic.com/steam/apps/${game.id}/capsule_231x87.jpg`;
        const gameDiv = document.createElement('div');
        gameDiv.className = 'search-item';
        gameDiv.innerHTML = `
            <div class="game-div">
                <img class="search-item-img"
                    src="${imgSrc}"
                    width="40" height="19"
                    onerror="this.style.display='none'">
                <div class="game-name">${game.name}</div>
            </div>`;

        gameDiv.addEventListener('click', () => {
            if (game.url) {
                window.open(game.url, '_blank');
            } else if (game.id) {
                window.open(`https://store.steampowered.com/app/${game.id}`, '_blank');
            }
        });

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


// sidebar resize

const sidebar = document.querySelector('.sidebar-left');
const resizer = document.querySelector('.sidebar-resizer');

let isResizing = false;

resizer.addEventListener('mousedown', (e) => {
    isResizing = true;
    resizer.classList.add('dragging');
    document.body.style.cursor = 'ew-resize';
    document.body.style.userSelect = 'none';
});

document.addEventListener('mousemove', (e) => {
    if (!isResizing) return;
    const newWidth = e.clientX; // distance from left edge
    if (newWidth >= 150 && newWidth <= 1200) { // min/max limits
        sidebar.style.width = newWidth + 'px';
    }
});

document.addEventListener('mouseup', () => {
    isResizing = false;
    resizer.classList.remove('dragging');
    document.body.style.cursor = '';
    document.body.style.userSelect = '';
});