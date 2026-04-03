const games = [
  {
    name: "Slow Roads",
    img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3431300/header.jpg?t=1761765236",
    desc: "Slowroads.io is a peaceful endless driving game where you explore beautiful, ever changing landscapes at your own pace.",
    longDesc: "Slowroads.io is a tranquil, open ended driving simulation designed for relaxation rather than competition. In this browser based game, players can drive endlessly through procedurally generated landscapes ranging from winding mountain roads to serene valleys and deserts without worrying about races, timers, or objectives. The game focuses on providing a meditative and immersive experience, letting you simply enjoy the journey, the physics of smooth driving, and the dynamic scenery that continuously evolves as you move forward. With realistic lighting, weather effects, and customizable vehicles, Slowroads.io offers a soothing escape from fast-paced games, turning driving into a peaceful, aesthetic adventure.",
    developer: "Anslo (indie developer from Scotland)",
    year: "2022 (browser version)",
    genre: "Driving / Simulation (endless scenic driving)",
    link: "https://slowroads.io/"
  },
  {
    name: "Townscaper",
    img: "https://upload.wikimedia.org/wikipedia/en/d/d9/Townscaper_cover.jpg",
    desc: "Build whimsical seaside towns block by block. No goals, just beautiful creation.",
    longDesc: "Townscaper is an experimental and meditative sandbox toy-game where you are given a blank sea grid and a palette of colours, then simply place or remove blocks to form quaint island towns, winding streets, soaring cathedrals, bridges, towers or canals. The underlying procedural algorithm transforms your blocks into buildings, arches, stairways, lush backyards and more, reacting automatically to the shapes you create. There are no objectives or resource systems just intentional, playful creation, minimal interface and serene ambience, making it more an interactive art-piece or creative toy than a traditional video game.",
    developer: "Oskar Stålberg",
    year: 2021,
    genre: "Sandbox / City-building",
    link: "https://oskarstalberg.com/Townscaper/"
  },
  {
    name: "Messenger",
    img: "https://messenger.abeto.co/assets/images/social.jpg",
    desc: "A serene browser game where you deliver mail around a tiny colourful planet.",
    longDesc: "You play as a young messenger on a whimsically small planet, accepting delivery tasks from its quirky inhabitants handing over letters, packages and messages while exploring a richly detailed, low poly world in your browser. The planet is small enough that you can traverse it easily, yet it’s filled with charming mini-stories, scenic spots and ambient visuals. Along the way you may bump into other real players as you roam, communicate via emojis rather than chat, customise your outfit, and simply enjoy a calm, aesthetic adventure without pressure. The experience emphasises exploration, (very) light tasks and atmosphere rather than traditional gameplay loops.",
    developer: "Abeto",
    year: 2025,
    genre: "Adventure / Exploratory sandbox (browser)",
    link: "https://messenger.abeto.co/"
  },
  {
    name: "Little Alchemy 2",
    img: "https://imgs.crazygames.com/little-alchemy-2/20230130142219/little-alchemy-2-cover?metadata=none&quality=100&width=1200&height=630&fit=crop",
    desc: "A relaxing crafting game where you combine basic elements to discover hundreds of new items and build your own world.",
    longDesc: "Little Alchemy 2 is an open-ended sandbox game developed by Recloak Games in which you start with the four classical elements (earth, air, fire, water) and drag-and-drop or tap to combine them and create new items. As you discover more and more items, you unlock deeper combinations: for example earth + air might create dust, dust + fire might make ash, and so on. Over time you can craft complex objects like animals, tools, mythical creatures, and even abstract concepts. The game emphasises exploration, experimentation, and logic (as well as a bit of playfulness and surprise) rather than competition or time pressure. The user interface is minimalist and intuitive, and the game gradually builds an “element encyclopedia” where you can view what you have discovered and what combinations are possible. With no strict goals or levels, Little Alchemy 2 invites relaxed creativity and curiosity as you “build the world from scratch.”",
    developer : "Recloak Games",
    year: 2017,
    genre: "Casual / Puzzle / Sandbox crafting game",
    link: "https://littlealchemy2.com/"
  },
  {
    name: "Flappy Bird",
    img: "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/flappybird_cover.jpg",
    desc: "A notoriously difficult, one-button arcade sensation that challenges your patience and reflexes with every tap.",
    longDesc: "Flappy Bird is a side-scrolling arcade game where players control 'Faby', a small pixelated bird, by tapping the screen (or pressing the spacebar) to make it flap upward. The objective is to navigate through endless sets of green pipes with narrow gaps; if the bird touches a pipe or the ground, the game ends instantly.",
    developer : "Dong Nguyen (.Gears Studios)",
    year: 2013,
    genre: "Arcade / Casual / Side-scroller",
    link: "https://flappybird.io/"
  },
  {
    name: "2048",
    img: "https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=314,height=314,fit=cover,f=auto/cb8c967c-4a78-4ffa-8506-cbac69746f4f/2048.png",
    desc: "A popular, single-player sliding block puzzle game where the goal is to combine numbered tiles to reach the '2048' tile.",
    longDesc: "2048 is played on a 4x4 grid, using the arrow keys or swipe gestures to move all tiles in one of four directions. When two tiles with the same number collide, they merge into a new tile with the sum of their values (e.g., 2 and 2 merge to 4). After every move, a new tile (either a 2 or a 4) appears in a random empty spot. The game is won when a tile with the value 2048 is created, and the game is lost when the board fills up and no more moves are possible.",
    developer : "Gabriele Cirulli, an Italian web developer.",
    year: 2014,
    genre: "Puzzle / Sliding Block Puzzle / Math Game",
    link: "https://play2048.co/"
  },
  {
    name: "Skribbl.io",
    img: "https://external-preview.redd.it/VKEv0-GWAoTV7Z9SmkakDC2CY32JKYMQDXGWC2PAAso.jpg?width=640&crop=smart&auto=webp&s=f7a962af3fa26d2f0e93aab807480e4b3000c559",
    desc: "A funny & addictive multiplayer drawing and guessing game that brings the classic 'Pictionary' experience to your web browser.",
    longDesc: "Skribbl.io is a high-energy social gaming platform where players compete to draw and guess words in real-time, creating a chaotic and entertaining battle of artistic skill—or lack thereof. In each round, one player is chosen to illustrate a word from three options while the others race to type the correct answer into the chat to earn points; the faster you guess, the higher you score. With its simple, colorful interface and the ability to join public rooms or host private parties with friends, it serves as the ultimate digital icebreaker, blending creative expression with fast-paced competitive fun that keeps players laughing at every distorted doodle and frantic guess.",
    developer: "Tobs (Tobias)",
    year: 2017,
    genre: "Multiplayer / Casual / Drawing & Guessing Game",
    link: "https://skribbl.io/"
  },
  {
    name: "Betrayal.io",
    img: "https://www.gamekarma.com/images/games/935.png",
    desc: "A thrilling multiplayer game of social deduction and mystery where players must root out the traitors hiding in plain sight.",
    longDesc: "Betrayal.io is an intense, high-stakes social deduction game that challenges players to work together to complete tasks across various maps while identifying the deadly betrayers among them. Inspired by the classic 'mafia' genre, the game features a variety of unique roles, specialized abilities, and interactive environments that heighten the sense of tension and strategy. Whether you are playing as a crewmate trying to survive or a betrayer orchestrating a silent takeover, the sleek 2D graphics and fast-paced voting rounds provide an addictive, competitive experience that keeps every lobby on the edge of their seats.",
    developer: "End Game Interactive",
    year: 2020,
    genre: "Social Deduction / Multiplayer / Strategy",
    link: "https://betrayal.io/"
  },
  {
    name: "Krunker",
    img: "https://imgs.crazygames.com/games/krunker-io/cover-1591336739727.png?metadata=none&quality=100&width=1200&height=630&fit=crop",
    desc: "fast-paced browser-based multiplayer first-person shooter with blocky visuals and modding-friendly maps.",
    longDesc: "Krunker.io is a free-to-play, browser accessible (and also available on other platforms) multiplayer FPS where players jump into quick matches across numerous maps and game modes (Free-For-All, Team Deathmatch, Capture the Flag, many custom modes). The game emphasises skillful movement (such as slide-hopping), fast-paced gunplay, and features a large library of community-created maps and modding tools. Players also unlock, trade, and customise skins and items, host private servers, and join a global community. It combines accessibility (runs directly in browser) with competitive dynamics and extensive user generated content.",
    developer: "Yendis Entertainment (acquired by FRVR Limited in 2022)",
    year: 2019,
    genre: "Multiplayer first-person shooter",
    link: "https://krunker.io/"
  },
  {
    name: "Lost Gamer",
    img: "https://media.dotesports.com/wp-content/uploads/2024/05/image-64.jpg",
    desc: "A browser-based “Guessr” game where you’re dropped into a video-game world and must guess your location from your surroundings.",
    longDesc: "LostGamer.io offers interactive map-based challenges across many well known video games. In its core “Guessr” mode you’re placed into a random ground view screenshot from a game world (for example Grand Theft Auto V) and must use visual cues and your game world knowledge to guess where you are. The more accurate your guess, the higher your score. You can play alone (single-player) or with friends (multiplayer) and access both official maps and community created ones. The platform serves as a hub for gaming tools and experiences around discovering and exploring game-world geography rather than traditional mechanics like combat or story.",
    developer: "Lostgamer",
    year: "Not Available",
    genre: "Casual browser-game / trivia / exploration game",
    link: "https://lostgamer.io/"
  },
  {
    name: "Orb Farm",
    img: "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/19986543/Screen_Shot_2020_05_19_at_10.23.58_AM.png?quality=90&strip=all&crop=5.0255536626917,0,89.948892674617,100",
    desc: "A tranquil sandbox puzzle game where you build and sustain a sealed aquatic ecosystem.",
    longDesc: "Orb.Farm is an HTML5 browser game in which you create a closed aquatic world inside a transparent “orb”. You start with base materials like sand, stone, wood, water and algae, then add living organisms such as bacteria, daphnia, grass and fish. The aim is to experiment, balance and maintain the ecosystem: everything you add interacts algae produces oxygen, bacteria break down waste, fish consume some organisms, etc. There are no strict goals or time-limits the experience is about exploration, observation and gentle tinkering with the ecology of your micro world.",
    developer: "Max Bittker",
    year: 2021,
    genre: "Puzzle / Sandbox / Simulation",
    link: "https://orb.farm/"
  },
  {
    name: "Hexxagon",
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1973250/capsule_616x353.jpg?t=1704580541",
    desc: "A strategic board game where you conquer a hexagonal grid by doubling or jumping your pieces to out-number your opponent.",
    longDesc: "Hexxagon is an abstract strategy game played on a hexagonal board in which each player takes turns moving pieces. On your turn, you can either clone one of your pieces into an adjacent empty cell (doubling), or jump a piece two spaces away leaving the original square empty. Every time you move to a new cell, any opponent pieces adjacent to that new cell are converted to your colour. The goal is to have the majority of pieces on the board when no further moves are possible (or when the board fills up). The game emphasises planning, spatial awareness (particularly of the hex-grid adjacency), timing of jumps versus clones, and attempting to trap or overwhelm the opponent by converting large clusters. It has no luck or randomness, just pure positional strategy.",
    developer: "Neave Interactive",
    year: 1993,
    genre: "Casual browser-game / trivia / exploration game",
    link: "https://hexxagon.com/"
  },
];

// ==================================== FUN SITES SECTION ============================================================
const funSites = [
  {
    name: "Pointer Pointer",
    img: "https://i.ytimg.com/vi/3ao7DdYiwx0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB14Fmd-bcm3QiNW_Jg0PcYSUYlWw",
    desc: "A playful web experience that shows you a photo of someone pointing exactly at your mouse pointer.",
    longDesc: "Pointer Pointer is an interactive browser based “toy” created by the Amsterdam design studio Moniker (founded by Jonathan Puckey, Luna Maurer & Roel Wouters). On the site you place your mouse cursor somewhere on the screen and after a brief delay a photograph of a person pointing appears — and the person appears to be pointing exactly at your pointer location. If you move the cursor to a new spot, a new photo appears accordingly. The fun lies purely in the novelty of “someone is pointing at your pointer” there are no goals, levels, or scores. It’s essentially a whimsical interactive art piece / curiosity rather than a conventional game. The creators deliberately included a short delay so that you have to pause your pointer and take a moment before the photo appears, making you aware of the gesture and the interaction.",
    developer: "Moniker (Amsterdam-based experimental interactive design studio)",
    year: 2012,
    genre: "Interactive experimental web experience / toy",
    link: "https://pointerpointer.com/"
  },
  {
    name: "Paper Planes",
    img: "https://i.vimeocdn.com/video/620864940-c07b5f6abae68ae928bb32bcffc08b769d8278eff2b83d60d3720f2b9262f5af-d?f=webp",
    desc: "A digital art experience that lets users fold, stamp, and throw virtual paper planes around the world to be caught by others.",
    longDesc: "Paper Planes is an interactive social experiment, originally developed as a Google Chrome Experiment, designed to connect people globally. Users create a 3D-rendered paper plane on their device, attach their current location and a short message (or 'stamp'), and then 'throw' it into the digital sky. The plane then floats through cyberspace until it is 'caught' by another user somewhere else in the world. The catcher adds their own stamp and re-throws the plane, allowing users to trace the incredible flight path of their plane across continents as it collects various stamps and messages.",
    developer : "Active Theory (in collaboration with Google)",
    year: 2016,
    genre: "Interactive Art / Social Experiment / Global Connection",
    link: "https://paperplanes.world/"
  },
  {
    name: "Patatap",
    img: "https://i.dawn.com/large/2019/09/5d7bd5d40c335.jpg",
    desc: "A vibrant, minimalist audiovisual instrument that transforms your keyboard into a reactive canvas of sound and motion.",
    longDesc: "Patatap is an award-winning interactive masterpiece that turns every keystroke into a high-energy sensory explosion, blending professional-grade sound samples with sleek geometric animations. By tapping any key from A to Z, users trigger unique melodic tones and pulsing visual shapes, allowing anyone to compose a rhythmic symphony in real-time without needing any musical expertise. It serves as both a digital art installation and a stress-relief playground, offering an addictive, high-definition escape where music and motion collide to create a limitless, immersive creative experience.",
    developer: "Jono Brandel (in collaboration with Lullatone)",
    year: 2014,
    genre: "Interactive Music / Digital Art / Audiovisual Web Application",
    link: "https://patatap.com/"
  },
  {
    name: "Universe on Your Hands",
    img: "https://img.freepik.com/premium-photo/cosmic-hand-holding-universe-palm-glowing-galaxy_38013-99501.jpg",
    desc: "An interactive web experiment that uses computer vision to let the user manipulate a 3D model of Saturn using hand gestures.",
    longDesc: "This is a physics-based 3D visualization of the planet Saturn. The web app is designed to be controlled using hand tracking and recognition technology (requiring a camera and a compatible browser). Users can interact with the model by performing gestures such as rotating the planet by moving their hand, scattering the rings with an open hand, or assembling them with a pinch gesture to experience a playful, hands-on exploration of the astronomical body.",
    developer : "Deepayan Thakur (see more of his works <a href='https://github.com/Deepayan-Thakur' target='_blank' style='color: #0066cc; text-decoration: none; font-weight: normal;'>here</a>.)",
    year: 2025,
    genre: "Interactive 3D Visualization / Web Experiment / Educational Technology",
    link: "https://deepayan-thakur.github.io/universe-on-your-hands/"
  },
  {
    name: "Git City",
    img: "https://external-preview.redd.it/i-turned-github-into-a-3d-city-where-every-developer-is-a-v0-Ym5ydWVoZ256aGxnMYll83l6gjofdZomEPsNDCjb7BzBlemLFGXGgLWPkJrE.png?format=pjpg&auto=webp&s=de03bfe08e2c119779a7e21700363ff99dedf769",
    desc: "An interactive 3D metropolis where every GitHub developer is transformed into a unique pixel art building based on their real-world contributions.",
    longDesc: "Git City is a visually captivating social experiment and visualization tool that maps the entire GitHub ecosystem into a sprawling, navigable 3D skyline. In this digital world, every developer's profile manifests as a building where the height is determined by their total commits, the width reflects their number of repositories, and lit windows represent recent coding activity. Users can enter a 'free flight' mode to soar between skyscrapers, discover developers from across the globe, and unlock achievements based on their coding milestones. By turning cold data into a vibrant, shared community, the platform gamifies the open-source experience and provides a unique, artistic perspective on the impact of developers worldwide.",
    developer : "Samuel Rizzon",
    year: "2024 (Initial launch/Beta)",
    genre: "Interactive Visualization / Social / Web Art",
    link: "https://www.thegitcity.com/"
  },
];





