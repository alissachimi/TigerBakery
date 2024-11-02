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
loadSprite("player1", "sprites/spritesheet1.png", {
	sliceX: 9,
	sliceY: 1,
	anims: {
		runRight: { from: 0, to: 1 },
		runLeft: { from: 2, to: 3 },
		runDown: { from: 6, to: 7},
		runUp: { from: 4, to: 5 },
		idle:8
	}
});
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
loadSprite("oven", "sprites/oven.png");

/* CREATE PLAYERS */
const player1 = k.add([
    sprite("player1",{
		animSpeed: 1,
		frame:8
	}),
    pos(100, 100), // Starting position
    area(),        // Enable collision area
    body(),         // Enables physics
    "player",
	scale(.3)
]);

const player2 = k.add([
    sprite("player2"),
    pos(200, 200), // Starting position
    area(),        // Enable collision area
    body(),         // Enables physics
    "player",
    scale(.05)
]);

let myInterval1;
let myInterval2;
const intervalTime=100;

function animateR1() {
	clearInterval(myInterval1)
	myInterval1 = setInterval(() => {
	player1.play("runRight");
}, intervalTime);
}

function animateL1() {
	clearInterval(myInterval1)
	myInterval1 = setInterval(() => {
		player1.play("runLeft");
	}, intervalTime);
	}

function animateD1() {
		clearInterval(myInterval1)
		myInterval1 = setInterval(() => {
			player1.play("runDown");
		}, intervalTime);
	}

function animateU1() {
		clearInterval(myInterval1)
		myInterval1 = setInterval(() => {
			player1.play("runUp");
		}, intervalTime);
	}

//////////////////////////////////////////////////// player 1 movement

// Move the player using the arrow keys
onKeyDown("left", () => {
    player1.move(-200, 0); // Move left
});
onKeyPress("left", () => {
	animateL1()		
})

onKeyDown("right", () => {
    player1.move(200, 0); // Move right
});
onKeyPress("right", () => {
	animateR1()		
})

onKeyDown("up", () => {
    player1.move(0, -200); // Move up
});
onKeyPress("up", () => {
	animateU1()		
})

onKeyDown("down", () => {
    player1.move(0, 200); // Move down
});
onKeyPress("down", () => {
	animateD1()		
})

// You can also add keyUp if you want to stop movement when keys are released
onKeyRelease("left", () => {
    player1.move(0, 0);
	clearInterval(myInterval1)
});
onKeyRelease("right", () => {
    player1.move(0, 0);
	clearInterval(myInterval1)
});
onKeyRelease("up", () => {
    player1.move(0, 0);
	clearInterval(myInterval1)
});
onKeyRelease("down", () => {
    player1.move(0, 0);
	clearInterval(myInterval1)
});

/////////////////////////////////////////////////////////////// player 2 movement

// Move the player using the arrow keys
onKeyDown("a", () => {
    player2.move(-200, 0); // Move left
});
onKeyPress("a", () => {
	animateL(player2, myInterval2)		
})

onKeyDown("d", () => {
    player2.move(200, 0); // Move right
});
onKeyPress("d", () => {
	animateR(player2, myInterval2)		
})

onKeyDown("w", () => {
    player2.move(0, -200); // Move up
});
onKeyPress("w", () => {
	animateU(player2, myInterval2)		
})

onKeyDown("s", () => {
    player2.move(0, 200); // Move down
});
onKeyPress("s", () => {
	animateD(player2, myInterval2)		
})

// You can also add keyUp if you want to stop movement when keys are released
onKeyRelease("a", () => {
    player2.move(0, 0);
	clearInterval(myInterval2)
});
onKeyRelease("d", () => {
    player2.move(0, 0);
	clearInterval(myInterval2)
});
onKeyRelease("w", () => {
    player2.move(0, 0);
	clearInterval(myInterval2)
});
onKeyRelease("s", () => {
    player2.move(0, 0);
	clearInterval(myInterval2)
});

///////////////////////////////////////////////////// add interactable items

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

const strawberry = k.add([
    sprite("strawberry"),
    pos(300, 300), // Starting position
    area(),        // Enable collision area
    body(),         // Enables physics
    scale(.05),
    "strawberry"
]);

const flour = k.add([
    sprite("flour"),
    pos(300, 300), // Starting position
    area(),        // Enable collision area
    body(),         // Enables physics
    scale(.05),
    "flour"
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
    addToInventory(2, "carrot");
    carrot.destroy();
});

player1.onCollide("strawberry", () => {
    addToInventory(1, "strawberry");
    strawberry.destroy();
});

player2.onCollide("strawberry", () => {
    addToInventory(2, "strawberry");
    strawberry.destroy();
});

player1.onCollide("flour", () => {
    addToInventory(1, "flour");
    flour.destroy();
});

player2.onCollide("flour", () => {
    addToInventory(2, "flour");
    flour.destroy();
});
