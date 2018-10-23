ProEvolutionQuidditch.levelState = function(game) {}

var upKey;
var downKey;
var leftKey;
var rightKey;

var speed;
var friction;
var score;

var harry;
var snitch;
var background;

var text;

ProEvolutionQuidditch.levelState.prototype = {

    preload: function () {

    },

    create: function () {

        speed = 6;
        friction = 0.5;
        score = 0;

        background = game.add.tileSprite(0, 0, window.innerWidth, window.innerHeight, "stadium0");

        harry = game.add.sprite(0, 0, 'harry');
        harry.scale.setTo(0.5,0.5);
        harry.anchor.x = 0.5;
        harry.anchor.y = 0.5;

        snitch = game.add.sprite(game.world.centerX, game.world.centerY, 'snitch');
        snitch.scale.setTo(0.5,0.5);
        snitch.anchor.x = 0.5;
        snitch.anchor.y = 0.5;
        let maxwidth = game.world._width;
        let maxheight = game.world._height;
        let min = 0;
        snitch.x = (Math.random()*(maxwidth - min)) + min;
        snitch.y = (Math.random()*(maxheight - min)) + min;

        text = game.add.text(15,15, "Score: 0", { font: "30px Consolas", fill: "#ffffff", align: "center", stroke: "black", strokeThickness: "5" });

        upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
        downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
        leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);

        game.physics.enable(harry, Phaser.Physics.ARCADE);
        game.physics.enable(snitch, Phaser.Physics.ARCADE);

        snitch.body.immovable = true;
        harry.body.collideWorldBounds = true;
    },

    update: function () {

        if (upKey.isDown) {
            harry.y -= speed;
        }
        else if (downKey.isDown) {
            harry.y += speed;
        }

        if (leftKey.isDown) {
            harry.x -= speed;
        }
        else if (rightKey.isDown) {
            harry.x += speed;
        }

        game.physics.arcade.collide(harry, snitch, collisionHandler, null, this);

    },

    render: function () {
        game.debug.body(harry);
        game.debug.body(snitch);
    }
}

function collisionHandler (obj1, obj2) {
    
    score++;

    if (score >= 3) {
        text.text = "Win!";
    } else {
        text.text = "Score: " + score;
        let maxwidth = game.world._width;
        let maxheight = game.world._height;
        let min = 0;
        snitch.x = (Math.random()*(maxwidth - min)) + min;
        snitch.y = (Math.random()*(maxheight - min)) + min;
    }
    

}