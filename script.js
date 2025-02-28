var canvas = document.getElementById('platformerGame');
var context = canvas.getContext('2d');

var player = {
    x: 50,
    y: canvas.height - 60,
    width: 30,
    height: 30,
    gravity: 0.5,
    velocityY: 0,
    jumpPower: 10,
    isJumping: false
};

var platforms = [
    { x: 0, y: canvas.height - 20, width: canvas.width, height: 20 },
    { x: 200, y: canvas.height - 100, width: 100, height: 20 },
    { x: 400, y: canvas.height - 150, width: 100, height: 20 },
    { x: 600, y: canvas.height - 200, width: 150, height: 20 },
    { x: 800, y: canvas.height - 300, width: 150, height: 20 }
];

var spells = [];
var enemies = [];



function drawPlayer() {
    context.fillStyle = 'blue';
    context.fillRect(player.x, player.y, player.width, player.height);
}

function drawEnemies() {
    context.fillStyle = 'red';
    enemies.forEach(function(enemy) {
        context.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
    });
}

function drawPlatforms() {
    context.fillStyle = 'green';
    platforms.forEach(function(platform) {
        context.fillRect(platform.x, platform.y, platform.width, platform.height);
    });
}

function drawSpells() {
    context.fillStyle = 'red';
    spells.forEach(function(spell) {
        context.fillRect(spell.x, spell.y, spell.width, spell.height);
    });
}

function spawnEnemies() {
    enemies.push({ x: 800, y: canvas.height - 60, width: 30, height: 30, speed: 1 });
    enemies.push({ x: 600, y: canvas.height - 60, width: 30, height: 30, speed: 1 });
    enemies.push({ x: 400, y: canvas.height - 60, width: 30, height: 30, speed: 1 });
}

function updateEnemies() {
    enemies.forEach(function(enemy) {
        if (enemy.x > player.x) {
            enemy.x -= enemy.speed; // Move left towards player
        } else {
            enemy.x += enemy.speed; // Move right towards player
        }
    });
}



function update() {
    player.velocityY += player.gravity;
    player.y += player.velocityY;

    // Check for collision with platforms
    platforms.forEach(function(platform) {
        if (player.x < platform.x + platform.width &&
            player.x + player.width > platform.x &&
            player.y + player.height > platform.y &&
            player.y + player.height < platform.y + platform.height) {
            player.y = platform.y - player.height;
            player.velocityY = 0;
            player.isJumping = false;
        }
    });

    // Reset player position if it falls off the canvas
    if (player.y + player.height > canvas.height) {
        player.y = canvas.height - player.height;
        player.velocityY = 0;
    }

    // Update spells
    spells.forEach(function(spell) {
        spell.x += spell.speed;
    });
}

function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawPlatforms();
    drawPlayer();
    drawSpells();
    update();
    updateEnemies();
    spawnEnemies(); // Call to spawn enemies
    requestAnimationFrame(gameLoop);
}


document.addEventListener('keydown', function(event) {
    if (event.code === 'Space' && !player.isJumping) {
        player.velocityY = -player.jumpPower;
        player.isJumping = true;
    }
    if (event.code === 'ArrowRight') {
        player.x += 7; // Move right
    }
    if (event.code === 'ArrowLeft') {
        player.x -= 7; // Move left
    }
    if (event.code === 'KeyD') {
        player.x += 7; // Move right with D key
    }
    if (event.code === 'KeyA') {
        player.x -= 7; // Move left with A key
    }
if (event.code === 'KeyH') {
    // Cast a Kamehameha wave to the right
    spells.push({ x: player.x + player.width, y: player.y + player.height / 2, width: 20, height: 5, speed: 10 });

    }
if (event.code === 'KeyG') {
    // Cast a Kamehameha wave to the left
    spells.push({ x: player.x, y: player.y + player.height / 2, width: 20, height: 5, speed: -10 });

    }
});

gameLoop();
