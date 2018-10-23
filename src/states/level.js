ProEvolutionQuidditch.levelState = function(game) {}

ProEvolutionQuidditch.levelState.prototype = {

    create: function () {

        //Declaración de variables
        this.background = game.add.tileSprite(0, 0, window.innerWidth, window.innerHeight, "stadium0");

        this.harry = new Player(1);
        this.draco = new Player(2);
        this.players = [this.harry, this.draco];

        this.snitch = game.add.sprite(game.world.centerX, game.world.centerY, 'snitch');
        this.snitch.scale.setTo(0.5,0.5);
        this.snitch.anchor.x = 0.5;
        this.snitch.anchor.y = 0.5;
        let maxwidth = game.world._width;
        let maxheight = game.world._height;
        let min = 0;
        this.snitch.x = (Math.random()*(maxwidth - min)) + min;
        this.snitch.y = (Math.random()*(maxheight - min)) + min;

        this.text1 = game.add.text(15,15, "Score: 0", { font: "30px Consolas", fill: "#ffffff", align: "center", stroke: "black", strokeThickness: "5" });
        this.text2 = game.add.text(400,15, "Score: 0", { font: "30px Consolas", fill: "#ffffff", align: "center", stroke: "black", strokeThickness: "5" });

        game.physics.enable(this.snitch, Phaser.Physics.ARCADE);

        this.snitch.body.immovable = true;
    },

    update: function () {
        for(let i = 0; i < this.players.length; i++){
            //Actualización de posiciones
            this.players[i].update();
            //Detección de colisiones
            game.physics.arcade.collide(this.players[i].sprite, this.snitch, function(){this.collisionHandler(this.players[i])}, null, this);
        }

    },

    render: function () {
        //Pintado
        game.debug.body(this.harry.sprite);
        game.debug.body(this.snitch);
    },

    collisionHandler: function(player) {
        player.score++;
        if (player.score >= 3) {
            // Esto hay que cambiarlo
            this.text1.text = "Win!";
        } else {
            //Repensar textos
            this.text1.text = "Score: " + this.players[0].score;
            this.text2.text = "Score: " + this.players[1].score;
            let maxwidth = game.world._width;
            let maxheight = game.world._height;
            let min = 0;
            this.snitch.x = (Math.random()*(maxwidth - min)) + min;
            this.snitch.y = (Math.random()*(maxheight - min)) + min;
        }
    }
}