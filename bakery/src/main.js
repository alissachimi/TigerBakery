import kaboom from "kaboom"

const k =  kaboom({
    width: 1100,
    height: 600,
    font: "sans-serif",
    canvas: document.querySelector("#mycanvas"),
    background: [184, 183, 137]
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
loadSprite("player2", "sprites/spritesheet2.png", {
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
loadSprite("jimr", "sprites/spritesheet_jimr.png", {
    sliceX: 3,
    sliceY: 1,
    anims: {
        idle: 0
    }
});
loadSprite("ouda", "sprites/spritesheet_ouda.png", {
    sliceX: 3,
    sliceY: 1,
    anims: {
        idle: 1
    }
});
loadSprite("ekin", "sprites/spritesheet_ekin.png", {
    sliceX: 3,
    sliceY: 1,
    anims: {
        idle: 0
    }
});
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
loadSprite("frostingCounter", "sprites/frostingCounter.png");
loadSprite("floor", "sprites/pink-floor.png");
loadSprite("displayCase", "sprites/displayCase.png");
loadSprite("register", "sprites/register.png");
loadSprite("mixerBlue", "sprites/mixerBlue.png");
loadSprite("ingredientShelf", "sprites/shelf-long.png");

/* ADD FLOOR */
// note: MUST add floor before people otherwise it will cover them!!!
const floor = k.add([
    sprite("floor"),
    pos(0, 17), // 
    scale(1),
    // body({ isStatic: true }),
    "floor"
]);

const ingredientShelf = k.add([
    sprite("ingredientShelf"),
    pos(0,60),
    scale(.2),
    "ingredientShelf"
]);
const ingredientShelf2 = k.add([
    sprite("ingredientShelf"),
    pos(0,240),
    scale(.2),
    "ingredientShelf2"
]);

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
    sprite("player2",{
		animSpeed: 1,
		frame:8
	}),
    pos(200, 200), // Starting position
    area(),        // Enable collision area
    body(),         // Enables physics
    "player",
    scale(.3)
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

	function animateR2() {
		clearInterval(myInterval2)
		myInterval2 = setInterval(() => {
		player2.play("runRight");
	}, intervalTime);
	}
	
	function animateL2() {
		clearInterval(myInterval2)
		myInterval2 = setInterval(() => {
			player2.play("runLeft");
		}, intervalTime);
		}
	
	function animateD2() {
			clearInterval(myInterval2)
			myInterval2 = setInterval(() => {
				player2.play("runDown");
			}, intervalTime);
		}
	
	function animateU2() {
			clearInterval(myInterval2)
			myInterval2 = setInterval(() => {
				player2.play("runUp");
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
	animateL2()		
})

onKeyDown("d", () => {
    player2.move(200, 0); // Move right
});
onKeyPress("d", () => {
	animateR2()		
})

onKeyDown("w", () => {
    player2.move(0, -200); // Move up
});
onKeyPress("w", () => {
	animateU2()		
})

onKeyDown("s", () => {
    player2.move(0, 200); // Move down
});
onKeyPress("s", () => {
	animateD2()		
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

const oven1 = k.add([
    sprite("oven"),
    pos(418, 38), // Starting position
    area(),        // Enable collision area
    scale(.15),
	body({ isStatic: true}),
	"oven1"
]);
const oven2 = k.add([
    sprite("oven"),
    pos(510, 38), // Starting position
    area(),        // Enable collision area
    scale(.15),
	body({ isStatic: true}),
	"oven2"
]);

const counter1 = k.add([
    sprite("counter"),
    pos(280, 2), // Starting position
    area(),        // Enable collision area
    scale(.2),
	body({ isStatic: true}),
]);
const counter2 = k.add([
    sprite("counter"),
    pos(612, 2), // Starting position
    area(),        // Enable collision area
    scale(.2),
	body({ isStatic: true}),
]);
const counter3 = k.add([
    sprite("counter"),
    pos(800, 600), // Starting position
    area(),        // Enable collision area
    scale(.2),
	body({ isStatic: true}),
]);

k.add([
    sprite("displayCase"),
    pos(165, 330), // Starting position
    area(),        // Enable collision area
    scale(.3),
	body({ isStatic: true}),
]);
k.add([
    sprite("displayCase"),
    pos(360, 330), // Starting position
    area(),        // Enable collision area
    scale(.3),
	body({ isStatic: true}),
]);
k.add([
    sprite("displayCase"),
    pos(555, 330), // Starting position
    area(),        // Enable collision area
    scale(.3),
	body({ isStatic: true}),
]);
k.add([
    sprite("displayCase"),
    pos(750, 330), // Starting position
    area(),        // Enable collision area
    scale(.3),
	body({ isStatic: true}),
]);

k.add([
    sprite("register"),
    pos(950, 330), // Starting position
    area(),        // Enable collision area
    scale(.3),
	body({ isStatic: true}),
    "register"
]);

const frostingCounter = k.add([
    sprite("frostingCounter"),
    pos(140, 1), // Starting position
    area(),        // Enable collision area
    scale(.2),
	body({ isStatic: true}),
	"frostingCounter"
]);
const mixerPink = k.add([
    sprite("mixer"),
    pos(752, 3), // Starting position
    area(),        // Enable collision area
    scale(.2),
	body({ isStatic: true}),
	"mixerPink"
]);
const mixerBlue = k.add([
    sprite("mixerBlue"),
    pos(892, 4), // Starting position
    area(),        // Enable collision area
    scale(.2),
	body({ isStatic: true}),
	"mixerBlue"
]);

const flour = k.add([
    sprite("flour"),
    pos(15, 60), // Starting position
    area(),        // Enable collision area
    body(),         // Enables physics
    scale(.05),
    "flour"
]);
const eggs = k.add([
    sprite("eggs"),
    pos(15, 120), // Starting position
    area(),        // Enable collision area
    body(),         // Enables physics
    scale(.05),
    "eggs"
]);
const strawberry = k.add([
    sprite("strawberry"),
    pos(15, 180), // Starting position
    area(),        // Enable collision area
    body(),         // Enables physics
    scale(.05),
    "strawberry"
]);
const lemon = k.add([
    sprite("lemon"),
    pos(15, 240), // Starting position
    area(),        // Enable collision area
    body(),         // Enables physics
    scale(.05),
    "lemon"
]);
const blueberry = k.add([
    sprite("blueberry"),
    pos(15, 300),
    area(),
    scale(.05),
    "blueberry"
]);
const carrot = k.add([
    sprite("carrot"),
    pos(15, 360),
    area(),
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
    }
}

// Function to remove an item from a player's inventory
function removeFromInventory(player, index){
    const inventory = playerInventories["player"+player];
    inventory[index] = 'blank'; // Add the item to the first empty slot
    updateInventorySlot(player, index, "sprites/blank.png");
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

player1.onCollide("eggs", () => {
    addToInventory(1, "eggs");
    eggs.destroy();
});

player2.onCollide("eggs", () => {
    addToInventory(2, "eggs");
    eggs.destroy();
});

/* RECIPES */

const recipes = {
	carrot : ["flour", "eggs", "carrot"],
	strawberry : ["flour", "eggs", "strawberry"],
	chocolate : ["flour", "eggs", "chocolate"],
	lemon : ["flour", "eggs", "lemon"],
	blueberry : ["flour", "eggs", "blueberry"],
}

/* MIXER INTERACTIONS */

loadSprite("mixerPinkGlow", "sprites/mixerPinkGlow.png");
loadSprite("mixerBlueGlow", "sprites/mixerBlueGlow.png");
loadSprite("mixerGreenGlow", "sprites/mixerGreenGlow.png");
loadSprite("mixerBlackGlow", "sprites/mixerBlackGlow.png");
loadSprite("mixerTimer", "sprites/mixerTimer.png");

var pink_mixerGlow;
let pink_recipeTried = true;
let pink_inMixerCollide = false;
let pink_mixerInUse = false;
var pink_mixerTimer;
var pink_recipeInMixer;

var blue_mixerGlow;
let blue_recipeTried = true;
let blue_inMixerCollide = false;
let blue_mixerInUse = false;
var blue_mixerTimer;
var blue_recipeInMixer;

player1.onCollide("mixerPink", () => {
	pink_recipeTried = false;
	pink_inMixerCollide = true;
	if (pink_mixerGlow) {
		pink_mixerGlow.destroy();
	}
	if (!pink_mixerInUse) {
		pink_mixerGlow = k.add([
			sprite("mixerPinkGlow"),
			pos(752, 3),
			area(),
			scale(.2),
			body({ isStatic: true }),
			"mixerPinkGlow"
		]);
	} else {
		if (pink_mixerTimer == null) {
			takeBatterOut(player1);
		}
	}
});

player1.onCollideUpdate("mixerPink", () => {
	onKeyPress(",", () => {
		if (pink_inMixerCollide && !pink_mixerInUse) {
			let recipeToMake = checkInventoryForRecipe(playerInventories.player1);
			if (pink_mixerGlow && !pink_recipeTried) {
				pink_mixerGlow.destroy();
			}
	
			if (recipeToMake != null) {
				playerInventories.player1 = [null, null, null];
				addToInventory(1, "blank");
				addToInventory(1, "blank");
				addToInventory(1, "blank");
				playerInventories.player1 = [null, null, null];
				pink_recipeInMixer = recipeToMake;
				useMixer();

			} else if (!pink_recipeTried) {
				pink_mixerGlow = k.add([
					sprite("mixerBlackGlow"),
					pos(752, 3),
					area(),
					scale(.2),
					body({ isStatic: true }),
					"mixerBlackGlow"
				]);
			}
			pink_recipeTried = true;
		}
	});
});

player2.onCollide("mixerPink", () => {
	pink_recipeTried = false;
	pink_inMixerCollide = true;
	if (pink_mixerGlow) {
		pink_mixerGlow.destroy();
	}
	if (!pink_mixerInUse) {
		pink_mixerGlow = k.add([
			sprite("mixerBlueGlow"),
			pos(752, 3),
			area(),
			scale(.2),
			body({ isStatic: true }),
			"mixerBlueGlow"
		]);
	} else {
		if (pink_mixerTimer == null) {
			takeBatterOut(player2);
		}
	}
});

player2.onCollideUpdate("mixerPink", () => {
	onKeyPress(",", () => {
		if (pink_inMixerCollide && !pink_mixerInUse) {
			let recipeToMake = checkInventoryForRecipe(playerInventories.player2);
			if (pink_mixerGlow && !pink_recipeTried) {
				pink_mixerGlow.destroy();
			}
	
			if (recipeToMake != null) {
				playerInventories.player2 = [null, null, null];
				addToInventory(2, "blank");
				addToInventory(2, "blank");
				addToInventory(2, "blank");
				playerInventories.player2 = [null, null, null];
				pink_recipeInMixer = recipeToMake;
				useMixer();

			} else if (!pink_recipeTried) {
				pink_mixerGlow = k.add([
					sprite("mixerBlackGlow"),
					pos(752, 3),
					area(),
					scale(.2),
					body({ isStatic: true }),
					"mixerBlackGlow"
				]);
			}
			pink_recipeTried = true;
		}
	});
});

k.onCollideEnd("player", "mixerPink", () => {
	pink_mixerGlow.destroy();
	pink_recipeTried = false;
	pink_inMixerCollide = false;
});

function useMixer() {
	pink_mixerInUse = true;
	pink_mixerTimer = k.add([
		sprite("mixerTimer"),
		pos(752, 3),
		area(),
		scale(.2),
		body({ isStatic: true }),
		"mixerTimer"
	]);

	fadeOut(pink_mixerTimer, 10);

	k.wait(10, () => {
	    if (pink_mixerGlow) {
	        pink_mixerGlow.destroy();
	    }
	    pink_mixerGlow = k.add([
	        sprite("mixerGreenGlow"),
	        pos(752, 3),
	        area(),
	        scale(.2),
	        body({ isStatic: true }),
	        "mixerGreenGlow"
	    ]);
		pink_mixerTimer = null;
	});
}

function fadeOut(obj, duration) {
    let alphaValue = 1;
    const fadeStep = 1 / (duration / k.dt());

    obj.onUpdate(() => {
        if (alphaValue > 0) {
            alphaValue -= fadeStep;
            obj.opacity = alphaValue;
        } else {
            destroy(obj);
        }
    });
}

function takeBatterOut(player) {
	if ((player == player1 && (playerInventories.player1[0] == null || playerInventories.player1[1] == null || playerInventories.player1[2] == null))
		|| (player == player2 && (playerInventories.player2[0] == null || playerInventories.player2[1] == null || playerInventories.player2[2] == null))) {
		
		pink_mixerGlow.destroy();
		pink_mixerInUse = false;

		if (player == player1) {
			addToInventory(1, pink_recipeInMixer + "Batter");
		} else {
			addToInventory(2, pink_recipeInMixer + "Batter");
		}
	}
}

// Function to check if a player's inventory matches any recipe
function checkInventoryForRecipe(playerInventory) {
    for (const [recipeName, recipeIngredients] of Object.entries(recipes)) {
        if (arraysEqual(playerInventory, recipeIngredients)) {
            return recipeName;
        }
    }
    return null;
}

// Helper function to compare two arrays (ignoring order)
function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    let sortedArr1 = arr1.slice().sort();
    let sortedArr2 = arr2.slice().sort();
    for (let i = 0; i < sortedArr1.length; i++) {
        if (sortedArr1[i] !== sortedArr2[i]) return false;
    }
    return true;
}

player1.onCollide("mixerBlue", () => {
	blue_recipeTried = false;
	blue_inMixerCollide = true;
	if (blue_mixerGlow) {
		blue_mixerGlow.destroy();
	}
	if (!blue_mixerInUse) {
		blue_mixerGlow = k.add([
			sprite("mixerPinkGlow"),
			pos(892, 4),
			area(),
			scale(.2),
			body({ isStatic: true }),
			"mixerPinkGlow"
		]);
	} else {
		if (blue_mixerTimer == null) {
			blue_takeBatterOut(player1);
		}
	}
});

player1.onCollideUpdate("mixerBlue", () => {
	onKeyPress(",", () => {
		if (blue_inMixerCollide && !blue_mixerInUse) {
			let recipeToMake = checkInventoryForRecipe(playerInventories.player1);
			if (blue_mixerGlow && !blue_recipeTried) {
				blue_mixerGlow.destroy();
			}
	
			if (recipeToMake != null) {
				playerInventories.player1 = [null, null, null];
				addToInventory(1, "blank");
				addToInventory(1, "blank");
				addToInventory(1, "blank");
				playerInventories.player1 = [null, null, null];
				blue_recipeInMixer = recipeToMake;
				blue_useMixer();

			} else if (!blue_recipeTried) {
				blue_mixerGlow = k.add([
					sprite("mixerBlackGlow"),
					pos(892, 4),
					area(),
					scale(.2),
					body({ isStatic: true }),
					"mixerBlackGlow"
				]);
			}
			blue_recipeTried = true;
		}
	});
});

player2.onCollide("mixerBlue", () => {
	blue_recipeTried = false;
	blue_inMixerCollide = true;
	if (blue_mixerGlow) {
		blue_mixerGlow.destroy();
	}
	if (!blue_mixerInUse) {
		blue_mixerGlow = k.add([
			sprite("mixerBlueGlow"),
			pos(892, 4),
			area(),
			scale(.2),
			body({ isStatic: true }),
			"mixerBlueGlow"
		]);
	} else {
		if (blue_mixerTimer == null) {
			blue_takeBatterOut(player2);
		}
	}
});

player2.onCollideUpdate("mixerBlue", () => {
	onKeyPress("shift", () => {
		if (blue_inMixerCollide && !blue_mixerInUse) {
			let recipeToMake = checkInventoryForRecipe(playerInventories.player2);
			if (blue_mixerGlow && !blue_recipeTried) {
				blue_mixerGlow.destroy();
			}
	
			if (recipeToMake != null) {
				playerInventories.player2 = [null, null, null];
				addToInventory(2, "blank");
				addToInventory(2, "blank");
				addToInventory(2, "blank");
				playerInventories.player2 = [null, null, null];
				blue_recipeInMixer = recipeToMake;
				blue_useMixer();

			} else if (!blue_recipeTried) {
				blue_mixerGlow = k.add([
					sprite("mixerBlackGlow"),
					pos(892, 4),
					area(),
					scale(.2),
					body({ isStatic: true }),
					"mixerBlackGlow"
				]);
			}
			blue_recipeTried = true;
		}
	});
});

k.onCollideEnd("player", "mixerBlue", () => {
	blue_mixerGlow.destroy();
	blue_recipeTried = false;
	blue_inMixerCollide = false;
});

function blue_useMixer() {
	blue_mixerInUse = true;
	blue_mixerTimer = k.add([
		sprite("mixerTimer"),
		pos(892, 4),
		area(),
		scale(.2),
		body({ isStatic: true }),
		"mixerTimer"
	]);

	fadeOut(blue_mixerTimer, 10);

	k.wait(10, () => {
	    if (blue_mixerGlow) {
	        blue_mixerGlow.destroy();
	    }
	    blue_mixerGlow = k.add([
	        sprite("mixerGreenGlow"),
	        pos(892, 4),
	        area(),
	        scale(.2),
	        body({ isStatic: true }),
	        "mixerGreenGlow"
	    ]);
		blue_mixerTimer = null;
	});
}

function blue_takeBatterOut(player) {
	if ((player == player1 && (playerInventories.player1[0] == null || playerInventories.player1[1] == null || playerInventories.player1[2] == null))
		|| (player == player2 && (playerInventories.player2[0] == null || playerInventories.player2[1] == null || playerInventories.player2[2] == null))) {
		
		blue_mixerGlow.destroy();
		blue_mixerInUse = false;

		if (player == player1) {
			addToInventory(1, blue_recipeInMixer + "Batter");
		} else {
			addToInventory(2, blue_recipeInMixer + "Batter");
		}
	}
}

/* OVEN INTERACTIONS */

loadSprite("ovenPinkGlow", "sprites/ovenPinkGlow.png");
loadSprite("ovenBlueGlow", "sprites/ovenBlueGlow.png");
loadSprite("ovenGreenGlow", "sprites/ovenGreenGlow.png");
loadSprite("ovenBlackGlow", "sprites/ovenBlackGlow.png");
loadSprite("ovenTimer", "sprites/ovenTimer.png");

var ovenGlow1;
let batterTried1 = true;
let batterTypeInOven1;
let inOvenCollide1 = false;
let ovenInUse1 = false;
var ovenTimer1 = null;

player1.onCollide("oven1", () => {
	batterTried1 = false;
	inOvenCollide1 = true;
	if (ovenGlow1) {
		ovenGlow1.destroy();
	}
	if (!ovenInUse1) {
		ovenGlow1 = k.add([
			sprite("ovenPinkGlow"),
			pos(418, 38),
			area(),
			scale(.15),
			body({ isStatic: true }),
			"ovenPinkGlow"
		]);
	} else if (ovenTimer1 == null) {
		takeCupcakesOut(player1);
	}
});

player1.onCollideUpdate("oven1", () => {
	onKeyPress(",", () => {
		if (inOvenCollide1) {
			let batterToCook = checkInventoryForBatter(playerInventories.player1);
			if (ovenGlow1 && !batterTried1) {
				ovenGlow1.destroy();
			}

			if (batterToCook != -1) {
				useOven1();
				updateInventorySlot(1, batterToCook, "sprites/blank.png");
				batterTypeInOven1 = playerInventories.player1[batterToCook];
				playerInventories.player1[batterToCook] = null;

			} else if (!batterTried1) {
				ovenGlow1 = k.add([
					sprite("ovenBlackGlow"),
					pos(418, 38),
					area(),
					scale(.15),
					body({ isStatic: true }),
					"ovenBlackGlow"
				]);
			}
			batterTried1 = true;
		}
	});
});

player2.onCollide("oven1", () => {
	batterTried1 = false;
	inOvenCollide1 = true;
	if (ovenGlow1) {
		ovenGlow1.destroy();
	}
	if (!ovenInUse1) {
		ovenGlow1 = k.add([
			sprite("ovenBlueGlow"),
			pos(418, 38),
			area(),
			scale(.15),
			body({ isStatic: true }),
			"ovenBlueGlow"
		]);
	} else if (ovenTimer1 == null) {
		takeCupcakesOut(player2);
	}
});

player2.onCollideUpdate("oven1", () => {
	onKeyPress("shift", () => {
		if (inOvenCollide1) {
			let batterToCook = checkInventoryForBatter(playerInventories.player2);
			if (ovenGlow1 && !batterTried1) {
				ovenGlow1.destroy();
			}

			if (batterToCook != -1) {
				useOven1();
				updateInventorySlot(2, batterToCook, "sprites/blank.png");
				batterTypeInOven1 = playerInventories.player2[batterToCook];
				playerInventories.player2[batterToCook] = null;

			} else if (!batterTried1) {
				ovenGlow1 = k.add([
					sprite("ovenBlackGlow"),
					pos(418, 38),
					area(),
					scale(.15),
					body({ isStatic: true }),
					"ovenBlackGlow"
				]);
			}
			batterTried1 = true;
		}
	});
});

k.onCollideEnd("player", "oven1", () => {
	ovenGlow1.destroy();
	batterTried1 = false;
	inOvenCollide1 = false;
});

function useOven1() {
	ovenInUse1 = true;
	ovenTimer1 = k.add([
		sprite("ovenTimer"),
		pos(418, 38),
		area(),
		scale(.15),
		body({ isStatic: true }),
		"ovenTimer"
	]);

	fadeOut(ovenTimer1, 10);

	k.wait(10, () => {
	    if (ovenGlow1) {
	        ovenGlow1.destroy();
	    }
	    ovenGlow1 = k.add([
	        sprite("ovenGreenGlow"),
	        pos(418, 38),
	        area(),
	        scale(.15),
	        body({ isStatic: true }),
	        "ovenGreenGlow"
	    ]);
		ovenTimer1 = null;
	});
}

// Function to check if a player's inventory has any batter 
function checkInventoryForBatter(playerInventory) {
    for (let i = 0; i < playerInventory.length; i++) {
        if (playerInventory[i] != null && playerInventory[i].includes("Batter")) {
            playerInventory[i] = playerInventory[i].substring(0, playerInventory[i].length - "Batter".length);
            return i;
        }
    }
    return -1; // return -1 if no element contains "Batter"
}

function takeCupcakesOut(player) {
	// only if they have an open spot for the mix to go
	if ((player == player1 && (playerInventories.player1[0] == null || playerInventories.player1[1] == null || playerInventories.player1[2] == null))
		|| (player == player2 && (playerInventories.player2[0] == null || playerInventories.player2[1] == null || playerInventories.player2[2] == null))) {

		ovenGlow1.destroy();
		ovenInUse1 = false;

		if (player == player1) {
			addToInventory(1, batterTypeInOven1 + "CupcakeTin");
		} else {
			addToInventory(2, batterTypeInOven1 + "CupcakeTin");
		}
	}
}
var ovenGlow2;
let batterTried2 = true;
let batterTypeInOven2;
let inOvenCollide2 = false;
let ovenInUse2 = false;
var ovenTimer2 = null;

player1.onCollide("oven2", () => {
	batterTried2 = false;
	inOvenCollide2 = true;
	if (ovenGlow2) {
		ovenGlow2.destroy();
	}
	if (!ovenInUse2) {
		ovenGlow2 = k.add([
			sprite("ovenPinkGlow"),
			pos(510, 38),
			area(),
			scale(.15),
			body({ isStatic: true }),
			"ovenPinkGlow"
		]);
	} else if (ovenTimer2 == null) {
		takeCupcakesOut2(player1);
	}
});

player1.onCollideUpdate("oven2", () => {
	onKeyPress(",", () => {
		if (inOvenCollide2) {
			let batterToCook = checkInventoryForBatter(playerInventories.player2);
			if (ovenGlow2 && !batterTried2) {
				ovenGlow2.destroy();
			}

			if (batterToCook != -1) {
				useOven2();
				updateInventorySlot(1, batterToCook, "sprites/blank.png");
				batterTypeInOven2 = playerInventories.player1[batterToCook];
				playerInventories.player1[batterToCook] = null;

			} else if (!batterTried2) {
				ovenGlow2 = k.add([
					sprite("ovenBlackGlow"),
					pos(510, 38),
					area(),
					scale(.15),
					body({ isStatic: true }),
					"ovenBlackGlow"
				]);
			}
			batterTried2 = true;
		}
	});
});

player2.onCollide("oven2", () => {
	batterTried2 = false;
	inOvenCollide2 = true;
	if (ovenGlow2) {
		ovenGlow2.destroy();
	}
	if (!ovenInUse2) {
		ovenGlow2 = k.add([
			sprite("ovenBlueGlow"),
			pos(510, 38),
			area(),
			scale(.15),
			body({ isStatic: true }),
			"ovenBlueGlow"
		]);
	} else if (ovenTimer2 == null) {
		takeCupcakesOut2(player2);
	}
});

player2.onCollideUpdate("oven2", () => {
	onKeyPress("shift", () => {
		if (inOvenCollide2) {
			let batterToCook = checkInventoryForBatter(playerInventories.player2);
			if (ovenGlow2 && !batterTried2) {
				ovenGlow2.destroy();
			}

			if (batterToCook != -1) {
				useOven2();
				updateInventorySlot(2, batterToCook, "sprites/blank.png");
				batterTypeInOven2 = playerInventories.player2[batterToCook];
				playerInventories.player2[batterToCook] = null;

			} else if (!batterTried2) {
				ovenGlow2 = k.add([
					sprite("ovenBlackGlow"),
					pos(510, 38),
					area(),
					scale(.15),
					body({ isStatic: true }),
					"ovenBlackGlow"
				]);
			}
			batterTried2 = true;
		}
	});
});

k.onCollideEnd("player", "oven2", () => {
	ovenGlow2.destroy();
	batterTried2 = false;
	inOvenCollide2 = false;
});

function useOven2() {
	ovenInUse2 = true;
	ovenTimer2 = k.add([
		sprite("ovenTimer"),
		pos(510, 38),
		area(),
		scale(.15),
		body({ isStatic: true }),
		"ovenTimer"
	]);

	fadeOut(ovenTimer2, 10);

	k.wait(10, () => {
	    if (ovenGlow2) {
	        ovenGlow2.destroy();
	    }
	    ovenGlow2 = k.add([
	        sprite("ovenGreenGlow"),
	        pos(510, 38),
	        area(),
	        scale(.15),
	        body({ isStatic: true }),
	        "ovenGreenGlow"
	    ]);
		ovenTimer2 = null;
	});
}

function takeCupcakesOut2(player) {
    console.log("Trying to take cupcakes out for player:", player);
    console.log("Current batter type in oven:", batterTypeInOven2);
    console.log("Current ovenInUse2 state:", ovenInUse2);

	// only if they have an open spot for the mix to go
	if ((player == player1 && (playerInventories.player1[0] == null || playerInventories.player1[1] == null || playerInventories.player1[2] == null))
		|| (player == player2 && (playerInventories.player2[0] == null || playerInventories.player2[1] == null || playerInventories.player2[2] == null))) {

		ovenGlow2.destroy();
		ovenInUse2 = false;

		if (player == player1) {
			addToInventory(1, batterTypeInOven2 + "CupcakeTin");
		} else {
			addToInventory(2, batterTypeInOven2 + "CupcakeTin");
		}
	}
}


/* FROSTING INTERACTIONS */

loadSprite("frostingCounterPinkGlow", "sprites/frostingCounterPinkGlow.png");
loadSprite("frostingCounterBlueGlow", "sprites/frostingCounterBlueGlow.png");
loadSprite("frostingCounterGreenGlow", "sprites/frostingCounterGreenGlow.png");
loadSprite("frostingCounterBlackGlow", "sprites/frostingCounterBlackGlow.png");
loadSprite("frostingTimer", "sprites/mixerTimer.png");
var frostingCounterGlow;
var typeToFrost;
var typeBeingFrosted;
let inFrostingCollide = false;
let frostingInUse = false;
var frostingTimer = null;
let frostingTried = true;

player1.onCollide("frostingCounter", () => {
	frostingTried = false;
	inFrostingCollide = true;
	if(frostingCounterGlow){
		frostingCounterGlow.destroy();
	}
	if(!frostingInUse){
		frostingCounterGlow = k.add([
			sprite("frostingCounterPinkGlow"),
			pos(140, 1),
			area(),
			scale(.2),
			body({ isStatic: true}),
			"frostingCounterPinkGlow"
		]);
	} else if(frostingTimer == null){
		takeFrostedCupcakesOut(player1);
	}
	
})

player1.onCollideUpdate("frostingCounter", () => {
	onKeyPress(",", () => {
		if(inFrostingCollide){
			typeToFrost = checkInventoryForTin(playerInventories.player1);
			if(frostingCounterGlow && !frostingTried){
				frostingCounterGlow.destroy();
			}

			if(typeToFrost!=-1){
				useFrosting();
				updateInventorySlot(1, typeToFrost, "sprites/blank.png")
				typeBeingFrosted = playerInventories.player1[typeToFrost];
				playerInventories.player1[typeToFrost] = null;

			} else if (!frostingTried) {
				frostingCounterGlow = k.add([
					sprite("frostingCounterBlackGlow"),
					pos(140, 1),
					area(),
					scale(.2),
					body({ isStatic: true}),
					"frostingCounterBlackGlow"
				]);
			}
			frostingTried = true;
		}
	})
})

player2.onCollide("frostingCounter", () => {
	frostingTried = false;
	inFrostingCollide = true;
	if(frostingCounterGlow){
		frostingCounterGlow.destroy();
	}
	if(!frostingInUse){
		frostingCounterGlow = k.add([
			sprite("frostingCounterBlueGlow"),
			pos(140, 1),
			area(),
			scale(.2),
			body({ isStatic: true}),
			"frostingCounterBlueGlow"
		]);
	} else if(frostingTimer == null){
		takeFrostedCupcakesOut(player2);
	}
	
})

player2.onCollideUpdate("frostingCounter", () => {
	onKeyPress("shift", () => {
		if(inFrostingCollide){
			typeToFrost = checkInventoryForTin(playerInventories.player2);
			if(frostingCounterGlow && !frostingTried){
				frostingCounterGlow.destroy();
			}

			if(typeToFrost!=-1){
				useFrosting();
				updateInventorySlot(1, typeToFrost, "sprites/blank.png")
				typeBeingFrosted = playerInventories.player2[typeToFrost];
				playerInventories.player2[typeToFrost] = null;

			} else if (!frostingTried) {
				frostingCounterGlow = k.add([
					sprite("frostingCounterBlackGlow"),
					pos(140, 1),
					area(),
					scale(.2),
					body({ isStatic: true}),
					"frostingCounterBlackGlow"
				]);
			}
			frostingTried = true;
		}
	})
})

k.onCollideEnd("player", "frostingCounter", () => {
	frostingCounterGlow.destroy();
	frostingTried = false;
	inFrostingCollide = false;
});

function useFrosting(){
	frostingInUse = true;
	frostingTimer = k.add([
		sprite("frostingTimer"),
		pos(140, 1),
		area(),
		scale(.2),
		body({ isStatic: true}),
		"frostingTimer"
	]);

	fadeOut(frostingTimer, 10);

	k.wait(10, () => {
	    if (frostingCounterGlow) {
	        frostingCounterGlow.destroy();
	    }
	    frostingCounterGlow = k.add([
	        sprite("frostingCounterGreenGlow"),
	        pos(140, 1),
	        area(),
	        scale(.2),
	        body({ isStatic: true}),
	        "frostingCounterGreenGlow"
	    ]);
		frostingTimer = null;
	});
}

// Function to check if a player's inventory has any batter 
function checkInventoryForTin(playerInventory) {
    for (let i = 0; i < playerInventory.length; i++) {
        if (playerInventory[i]!=null && playerInventory[i].includes("CupcakeTin")) {
            playerInventory[i] = playerInventory[i].substring(0, playerInventory[i].length - "CupcakeTin".length);
            return i;
        }
    }
    return -1; // return -1 if no element contains "Batter"
}

function takeFrostedCupcakesOut(player){
	// only if they have an open spot for the mix to go
	if((player == player1 && (playerInventories.player1[0] == null || playerInventories.player1[1] == null || playerInventories.player1[2] == null))
		|| (player == player2 && (playerInventories.player2[0] == null || playerInventories.player2[1] == null || playerInventories.player2[2] == null))){
		
		frostingCounterGlow.destroy();
		frostingInUse = false;

		if(player == player1){
			addToInventory(1, "cupcake-" + typeBeingFrosted)
		} else {
			addToInventory(2, "cupcake-" + typeBeingFrosted)
		}
	}
}

/* REGISTER INTERACTIONS */

loadSprite("registerPinkGlow", "sprites/registerPinkGlow.png");
loadSprite("registerBlueGlow", "sprites/registerBlueGlow.png");
loadSprite("registerGreenGlow", "sprites/registerGreenGlow.png");
loadSprite("registerBlackGlow", "sprites/registerBlackGlow.png");
var registerGlow;
var canOrder;

player1.onCollide("register", () => {
    canOrder = true;
	if(registerGlow){
		registerGlow.destroy();
	}
	registerGlow = k.add([
		sprite("registerPinkGlow"),
        pos(970, 335),
        area(),
		scale(.25),
		body({ isStatic: true}),
		"registerPinkGlow"
	]);
})

player1.onCollideUpdate("register", () => {
	onKeyPress(",", () => {
        if (canOrder == true){
            initiateOrder();
            canOrder = false;
        }
	})
})

player2.onCollide("register", () => {
    canOrder = true;
	if(registerGlow){
		registerGlow.destroy();
	}
	registerGlow = k.add([
		sprite("registerBlueGlow"),
        pos(970, 335),
        area(),
		scale(.25),
		body({ isStatic: true}),
		"registerBlueGlow"
	]);
})

player2.onCollideUpdate("register", () => {
	onKeyPress("shift", () => {
        if (canOrder == true){
            initiateOrder();
            canOrder = false;
        }
	})
})

k.onCollideEnd("player", "register", () => {
	registerGlow.destroy();
	registerCollide = false;
});


/* ORDER SYSTEM */

const menu = ["cupcake-strawberry", "cupcake-chocolate", "cupcake-lemon", "cupcake-blueberry", "cupcake-carrot"];

const activeOrders = [null, null, null];

let balance = 100; // Coins

function initiateOrder(){

    if (line.length > 0 && ordered_line.length<3){
        
        const firstCustomer = line[0]; // First customer in line
    
        // Extract the ticket number and menu item from the first customer
        const ticketNumber = firstCustomer.ticketNumber;
        const menuItem = firstCustomer.menuItem;
    
        const index = activeOrders.findIndex(order => order === null);
        
        const order = {
            ticketNumber: ticketNumber,
            menuItem: menuItem,
            index: index
        };
    
        if (index !== -1) {
            // Place the order in the first available slot
            activeOrders[index] = order;
			if(registerGlow){
				registerGlow.destroy();
			}
            updateOrderSlot(index, menuItem);
			registerGlow = k.add([
				sprite("registerGreenGlow"),
				pos(970, 335),
				area(),
				scale(.25),
				body({ isStatic: true}),
				"registerGreenGlow"
			]);
        }

        line.shift(); // Remove this customer from the line
		customer_line[0].pos.x = orderedLinePosArray[ordered_line.length][0]
		customer_line[0].pos.y = orderedLinePosArray[ordered_line.length][1]

		ordered_line.push(customer_line[0]);
		customer_line.shift();

        moveCustomerUp();
    } else {
		if(registerGlow){
			registerGlow.destroy();
		}
		registerGlow = k.add([
			sprite("registerBlackGlow"),
			pos(970, 335),
			area(),
			scale(.25),
			body({ isStatic: true}),
			"registerBlackGlow"
		]);
	}
	
}

function updateOrderSlot(index, menuItem) {
    // Construct the ID based on player number and index
    const slotId = `order-${index}`;
    const slotDiv = document.getElementById(slotId);

    if (slotDiv) {
        slotDiv.innerHTML = `<img src="sprites/${menuItem}.png" alt="Collected Item" style="width: 100%; height: auto;">`;
    }
}


function completeOrder(ticketNumber) {
    const orderIndex = activeOrders.findIndex(order => order.ticketNumber === ticketNumber);
    if (orderIndex !== -1){
        activeOrders.splice(orderIndex, 1);
    }
    tipBakery();
	ordered_line.splice(orderIndex, 1);

    moveOrderedCustomersUp();
}

function checkInventoryForCupcake(playerInventory, menuItem) {
    for (let i = 0; i < playerInventory.length; i++) {
        if (playerInventory[i]!=null && playerInventory[i].includes(menuItem)) { // use includes instead of contains
            return i;
        }
    }
    return -1; // return -1 if no element contains "Batter"
}

function tipBakery(){
    balance += 100;
    const balanceDiv = document.getElementById("balance");
    balanceDiv.innerHTML = balance;
}

player1.onCollide("customer", (customer) => {
    const ticketNumber = customer.ticketNumber;
    const menuItem = customer.menuItem;
    const inventoryIndex = checkInventoryForCupcake(playerInventories.player1, menuItem);
    if (inventoryIndex != -1){
        completeOrder(ticketNumber);
        customer.destroy();
        removeFromInventory(1, inventoryIndex);
    }
});

player2.onCollide("customer", (customer) => {
    const ticketNumber = customer.ticketNumber;
    const menuItem = customer.menuItem;
    const inventoryIndex = checkInventoryForCupcake(playerInventories.player2, menuItem);
    if (inventoryIndex != -1){
        completeOrder(ticketNumber);
        customer.destroy();
        removeFromInventory(2, inventoryIndex);
    }
});

/* CUSTOMERS */

const line = [];
const customer_line = [];
const ordered_line = [];
const customerSprites = ["jimr", "ekin", "ouda"];
const posLineArray = [[970, 430], [870, 430], [770, 430]]
const orderedLinePosArray = [[70, 520], [170, 520], [270, 520], [370, 520]]

function createCustomer(ticketNumber, menuItem) {
    const randomSprite = customerSprites[Math.floor(Math.random() * customerSprites.length)];
    const customer = k.add([
        sprite(randomSprite, {
            animSpeed: 1,
            frame:0
        }),
        pos(posLineArray[line.length][0], posLineArray[line.length][1]),
        area(),
        body({ isStatic: true }),
        "customer", 
        scale(.1),
        {
            ticketNumber: ticketNumber,
            menuItem: menuItem
        }
    ]);
	customer_line.push(customer);
}

function moveCustomerUp() {
    for (let i = 0; i < customer_line.length; i++) {
        // Move each customer to the position of the one ahead of them
        customer_line[i].pos.x = posLineArray[i][0];
        customer_line[i].pos.y = posLineArray[i][1];
    }
}

function moveOrderedCustomersUp() {
	// Move each ordered customer up one position and update the visual representation
	for (let i = 0; i < ordered_line.length; i++) {
		if (i < orderedLinePosArray.length - 1) {
			ordered_line[i].pos.x = orderedLinePosArray[i][0];
			ordered_line[i].pos.y = orderedLinePosArray[i][1];
			updateOrderSlot(i, ordered_line[i].menuItem);
		}
	}

	for(let j=ordered_line.length; j<3; j++){
		activeOrders[j] = null;
	}
	
	// Set the last slot to blank
	if (ordered_line.length < orderedLinePosArray.length) {
		updateOrderSlot(ordered_line.length, "blank");
	}
}

function generateCustomers() {
    // Create a counter for ticket numbers
    let ticketNumber = 0;

    // Set an interval to generate customers every 30 seconds
    setInterval(() => {
        if (line.length < 3) {

            ticketNumber += 1;
            const menuItem = menu[Math.floor(Math.random() * menu.length)];
            createCustomer(ticketNumber, menuItem);
            const customer = {
                ticketNumber: ticketNumber,
                menuItem: menuItem
            };
            line.push(customer);
        }
    }, 3000); // 20 seconds in milliseconds
}


// Start the customer generation process
generateCustomers();
// function to empty a user's inventory (all items)
function clearAllInventory(playerNum, playerInventories){
    // set all inventory slots to NULL (clear values)
    playerInventories.playerNum = [null, null, null]

    // remove all images in inventory display
    for (let i=0; i < playerInventories.playerNum.length; i++){
        addToInventory(playerNum, "blank")
    }
}

// get the current inventory slot
// function getIndexSlot(playerNum, playerInventories){
//     // TBD
// }

// clear the index of the specified slot
// use my own variation of addToInventory, remove from specified slot instead of the first empty one
// function clearInventorySlot(slotIndex, playerNum, playerInventories){
//     // will return to this if we have time
// }

/* SHOP CLOSET */
const shelf_items = [
    "flour",
    "eggs",
    "strawberry",
    "lemon",
    "blueberry",
    "carrot",
    "chocolate",
    "trashcan"
];

// function to navigate shelf items
function navigate_shelf(playerNum){
    // determine if p1 or p2
    if (playerNum == 1){
        // next item key = "ctrl"
        // action key = ","
    }
    if (playerNum == 2){
        // next item key = "capslock"
        // action key = "shift"
    }
}