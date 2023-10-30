// const PLAYERS = [
//     'Spiderman',
//     'Captain America',
//     'Wonderwoman',
//     'Popcorn',
//     'Gemwoman',
//     'Bolt',
//     'Antwoman',
//     'Mask',
//     'Tiger',
//     'Captain',
//     'Catwoman',
//     'Fish',
//     'Hulk',
//     'Ninja',
//     'Black Cat',
//     'Volverine',
//     'Thor',
//     'Slayer',
//     'Vader',
//     'Slingo',
//   ];
  
//   // initialize players with image and strength
//   const initPlayers = (players) => {
//     let detailedPlayers = [];
//     // Create players using for loop
//     // Type your code here
//     players.forEach((player, index) => {
//       detailedPlayers.push({
//         name: player,
//         strength: 2 + index,
//         image: 'images/super-'+(index+1)+'.png',
//         type: index%2==0? 'hero':'villain',
//       });
//     });

//     return detailedPlayers;
//   };
  
//   // getting random strength
//   const getRandomStrength = () => {
//     // Return a random integer (0,100]
//     // Note: You can use Math.random() and Math.ceil()
//     return  Math.floor(Math.random()*100);

//   };
  
//   const view = (playerObj) => {

//     let player = document.createElement('div');
//     player.classList.add('player');

//     let image = document.createElement('img');
//     image.setAttribute('src', playerObj.image);
//     image.setAttribute('alt', '');
    
//     let name = document.createElement('div');
//     name.className = 'name';
//     name.textContent = playerObj.name;

//     let strength = document.createElement('div');
//     strength.className = 'strength';
//     strength.textContent = playerObj.strength;
    
    
//     player.append(image, name, strength);
//     return player;
//   };
  
//   const buildPlayers = (players, type) => {
//     let fragment = '';
  
//     // Loop through players and accumulate HTML template
//     // depending of type of player(hero|villain)
//     // Type your code here

//     fragment = document.createElement('div');

    
//     players.filter((player) => player.type == type)
//     .forEach((player) => fragment.append(view(player)));
   
//     x = fragment.innerHTML
//     return x;
//   };

//   // Display players in HTML
//   const viewPlayers = (players) => {

//     document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
//     document.getElementById('villains').innerHTML = buildPlayers(
//       players,
//       'villain'
//     );
//   };
  
//   window.onload = () => {
//     viewPlayers(initPlayers(PLAYERS));
//   };
const PLAYERS = [
  'Spiderman',
  'Captain America',
  'Wonderwoman',
  'Popcorn',
  'Gemwoman',
  'Bolt',
  'Antwoman',
  'Mask',
  'Tiger',
  'Captain',
  'Catwoman',
  'Fish',
  'Hulk',
  'Ninja',
  'Black Cat',
  'Volverine',
  'Thor',
  'Slayer',
  'Vader',
  'Slingo',
];

// initialize players with image and strength
const initPlayers = (players) => {
  let detailedPlayers = [];
  // Create players using for loop
  // Type your code here
  players.forEach((x, y) => {
    detailedPlayers.push({
      name: x,
      strength: getRandomStrength(),
      image: 'images/super-' + (y + 1) + '.png',
      type: y % 2 == 0 ? 'hero' : 'villain',
      id: y + 1,
    });
  });
  return detailedPlayers;
};

// getting random strength
const getRandomStrength = () => {
  // Return a random integer (0,100]
  // Note: You can use Math.random() and Math.ceil()
  let x= Math.ceil(Math.random() * 100)+1;
  return x
};


const view = (playerObj) => {
  let player = document.createElement('div');
  player.classList.add('player');

  const elements = ['image', 'name', 'strength'];

  for (const elementName of elements) {
    let element = document.createElement(elementName === 'image' ? 'img' : 'div');
    if (elementName === 'image') {
      element.setAttribute('src', playerObj.image);
      element.setAttribute('alt', '');
    }
    if (elementName === 'name') {
      element.className = 'name';
      element.textContent = playerObj.name;
    }
    if (elementName === 'strength') {
      element.textContent = playerObj.strength;
      element.className = 'strength';
    }
    player.appendChild(element);
  }

  return player;
};

const buildPlayers = (players, type) => {
  let fragment = ''; 

  // Loop through players and accumulate HTML template
  // depending of type of player(hero|villain)
  // Type your code here
  fragment = document.createElement('div');
  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    if (player.type === type) {
      const playerView = view(player);
      fragment.appendChild(playerView);
    }
  }
  return fragment.innerHTML;

};
// Display players in HTML
const viewPlayers = (players) => {
  document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
  document.getElementById('villains').innerHTML = buildPlayers(
    players,
    'villain'
  );
};

window.onload = () => {
  viewPlayers(initPlayers(PLAYERS));
};
