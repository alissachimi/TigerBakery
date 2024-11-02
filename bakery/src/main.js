import kaboom from "kaboom"

const k =  kaboom({
    width: 1100,
    height: 600,
    font: "sans-serif",
    canvas: document.querySelector("#mycanvas"),
    background: [ 0, 0, 50, ],
})

///////////////////////////////////////////////////////////////////////////// basic player functionality

/* LOAD SPRITES */
loadSprite("player1", "sprites/bean.png");
loadSprite("player2", "sprites/apple.png");
loadSprite("counter", "sprites/counter.png");
loadSprite("mixer", "sprites/mixer.png");
loadSprite("carrot", "sprites/carrot.png");
loadSprite("apple", "sprites/apple.png");
loadSprite("blueberry", "sprites/blueberry.png");
loadSprite("chocolate", "sprites/chocolate.png");
loadSprite("eggs", "sprites/eggs.png");
loadSprite("flour", "sprites/flour.png");
loadSprite("lemon", "sprites/lemon.png");
loadSprite("strawberry", "sprites/strawberry.png");


/* CREATE PLAYERS */
const player1 = k.add([
    sprite("player1"),
    pos(100, 100), // Starting position
    area(),        // Enable collision area
    body(),         // Enables physics
    "player"
]);

const player2 = k.add([
    sprite("player2"),
    pos(200, 200), // Starting position
    area(),        // Enable collision area
    body(),         // Enables physics
    "player",
    scale(.1)
]);

//////////////////////////////////////////////////// player 1 movement

// Move the player using the arrow keys
onKeyDown("left", () => {
    player1.move(-200, 0); // Move left
});

onKeyDown("right", () => {
    player1.move(200, 0); // Move right
});

onKeyDown("up", () => {
    player1.move(0, -200); // Move up
});

onKeyDown("down", () => {
    player1.move(0, 200); // Move down
});

// You can also add keyUp if you want to stop movement when keys are released
onKeyRelease("left", () => {
    player1.move(0, 0);
});
onKeyRelease("right", () => {
    player1.move(0, 0);
});
onKeyRelease("up", () => {
    player1.move(0, 0);
});
onKeyRelease("down", () => {
    player1.move(0, 0);
});

/////////////////////////////////////////////////////////////// player 2 movement

// Move the player using the arrow keys
onKeyDown("a", () => {
    player2.move(-200, 0); // Move left
});

onKeyDown("d", () => {
    player2.move(200, 0); // Move right
});

onKeyDown("w", () => {
    player2.move(0, -200); // Move up
});

onKeyDown("s", () => {
    player2.move(0, 200); // Move down
});

// You can also add keyUp if you want to stop movement when keys are released
onKeyRelease("a", () => {
    player2.move(0, 0);
});
onKeyRelease("d", () => {
    player2.move(0, 0);
});
onKeyRelease("w", () => {
    player2.move(0, 0);
});
onKeyRelease("s", () => {
    player2.move(0, 0);
});

///////////////////////////////////////////////////// add interactable items

// add oven
loadSprite("oven", "sprites/oven.png");
const oven = k.add([
    sprite("oven"),
    pos(100, 56), // Starting position
    area(),        // Enable collision area
    body({isStatic: true}),         // Enables physics
    "player",
    scale(.15)
]);

k.add([
    sprite("counter"),
    pos(40, 0), // Starting position
    area(),        // Enable collision area
    body({isStatic: true}),         // Enables physics
    scale(.2)
]);
k.add([
    sprite("counter"),
    pos(240, 0), // Starting position
    area(),        // Enable collision area
    body({isStatic: true}),         // Enables physics
    scale(.2)
]);
k.add([
    sprite("counter"),
    pos(523, 1), // Starting position
    area(),        // Enable collision area
    body({isStatic: true}),         // Enables physics
    scale(.2)
]);
k.add([
    sprite("mixer"),
    pos(383, 1), // Starting position
    area(),        // Enable collision area
    body({isStatic: true}),         // Enables physics
    scale(.2)
]);

const carrot = k.add([
    sprite("carrot"),
    pos(300, 300), // Starting position
    area(),        // Enable collision area
    body(),         // Enables physics
    scale(.05),
    "carrot"
]);

/* PLAYER INVENTORIES */
const playerInventories = {
    player1: [null, null, null], // Each slot initialized to null (empty)
    player2: [null, null, null]
};

// Function to add an item to a player's inventory
function addToInventory(player, item) {
    const inventory = playerInventories["player"+player];

    // Find the first empty slot (null)
    const index = inventory.indexOf(null);
    if (index !== -1) {
        inventory[index] = item; // Add the item to the first empty slot
        updateInventorySlot(player, index, "sprites/"+item+".png");
    } else {
        console.log(`${player}'s inventory is full!`);
    }
}

function updateInventorySlot(playerNum, index, itemImage) {
    // Construct the ID based on player number and index
    const slotId = `slot-${playerNum}-${index}`;
    const slotDiv = document.getElementById(slotId);

    if (slotDiv) {
        slotDiv.innerHTML = `<img src="${itemImage}" alt="Collected Item" style="width: 100%; height: auto;">`;
    }
}

/* COLLISION EVENTS */

player1.onCollide("carrot", () => {
    addToInventory(1, "carrot");
    carrot.destroy();
});

player2.onCollide("carrot", () => {
    addToInventory(1, "carrot");
    carrot.destroy();
});

