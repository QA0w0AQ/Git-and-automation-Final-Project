// Enemies our player must avoid
var Enemy = function (x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function () {
    
    this.x += this.speed
    if (this.x > 505) {
        this.x = -100;
    }
    if (this.x + 60 > player.x && 
        this.x < player.x + 50 && 
        player.y < this.y + 30 && 
        player.y + 50 > this.y) {
        player.x = 200, player.y = 300
    }
    
    let content = document.querySelector("h2").innerHTML;//use content = "game level ${add()}"

    if (content === "game level 2"){
        this.speed = 2
    }
    if (content === "game level 3"){
        this.speed = 3
    }
    if (content === "game level 4"){
        this.speed = 4
    }
    if (content === "game level 5"){
        this.speed = 5
    }
    if (content === "game level 6"){
        this.speed = 6
    }
    if (content === "game level 7"){
        this.speed = 7
    }
    if (content === "game level 8"){
        this.speed = 8
        alert("YEAH! YOU WIN~!");
        return location.reload();//you should click ok many times then you can refresh this page!And I dont know how to fix it.
    }
    
    // this.speed += this.speed*dt;
    // function getRandomIntInclusive(min, max) {
    //     min = Math.ceil(min);
    //     max = Math.floor(max);
    //     return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
    //   }
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
const Player = function () {
    this.spritePlayer = 'images/char-horn-girl.png';
    this.x = 200;
    this.y = 300;
}

Player.prototype.update = function () {//The Player can not move off screen!
    if (this.x > 400) {
        this.x = 400;
    }
    if (this.x < 0) {
        this.x = 0;
    }
    if (this.y > 420) {
        this.y = 420;
    }
    if (this.y < 0) {//when player get river, then start levelFunction.
        return levelFunction(); 
    }


}
Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.spritePlayer), this.x, this.y)
}

Player.prototype.handleInput = function (e) {
    if (e == 'left') {
        this.x -= 100;
    }
    if (e == 'up') {
        this.y -= 80;
    }
    if (e == 'right') {
        this.x += 100;
    }
    if (e == 'down') {
        this.y += 80;
    }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

const enemy1 = new Enemy(0, 60,1);
const enemy2 = new Enemy(-50, 140,1.5);
const enemy3 = new Enemy(-200, 220,1);
const enemy4 = new Enemy(-250, 60,1.5);
const enemy5 = new Enemy(-400, 140,1);
const allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5];
const player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

let counter = 1;
function add() {
    return counter +=1;
}
const levelFunction = function(){
    document.querySelector("h2").innerHTML = `game level ${add()}`;
    player.y = 300
}


