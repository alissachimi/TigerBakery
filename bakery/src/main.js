import kaboom from "kaboom"

const k =  kaboom({
    width: 1100,
    height: 600,
    font: "sans-serif",
    canvas: document.querySelector("#mycanvas"),
    background: [ 0, 0, 50, ],
})

///////////////////////////////////////////////////////////////////////////// basic player functionality

// load player 1
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

// Create player 1 sprite
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

// Create a player sprite
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

// add counter
loadSprite("counter", "sprites/counter.png");
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

// add mixer
loadSprite("mixer", "sprites/mixer.png");
k.add([
    sprite("mixer"),
    pos(383, 1), // Starting position
    area(),        // Enable collision area
    body({isStatic: true}),         // Enables physics
    scale(.2)
]);