ProEvolutionQuidditch.levelState = function(game) {}

ProEvolutionQuidditch.levelState.prototype = {

    create: function () {

        console.log("nivel: "+game.level+", 1 jugador: "+game.one_player);
        //Declaración de variables
        this.background = game.add.tileSprite(0, 0, window.innerWidth, window.innerHeight, "stadium0");

        this.harry = new Player(1);
        this.players = [this.harry];
        this.text1 = game.add.text(15,15, "Harry: 0", { font: "30px Consolas", fill: "#ffffff", align: "center", stroke: "black", strokeThickness: "5" });
        this.score_texts = [this.text1];

        if(!game.one_player){
            this.draco = new Player(2);
            this.players.push(this.draco);
            this.text2 = game.add.text(game.world.centerX+15 ,15, "Dracoscore: 0", { font: "30px Consolas", fill: "#ffffff", align: "center", stroke: "black", strokeThickness: "5" });
            this.score_texts.push(this.text2);
    
        }

        this.snitch = game.add.sprite(game.world.centerX, game.world.centerY, 'snitch');
        this.snitch.scale.setTo(0.5,0.5);
        this.snitch.anchor.x = 0.5;
        this.snitch.anchor.y = 0.5;
        let maxwidth = game.world._width;
        let maxheight = game.world._height;
        let min = 0;
        this.snitch.x = (Math.random()*(maxwidth - min)) + min;
        this.snitch.y = (Math.random()*(maxheight - min)) + min;

        
        game.physics.enable(this.snitch, Phaser.Physics.ARCADE);

        this.snitch.body.immovable = true;
    },

    update: function () {
        for(let i = 0; i < this.players.length; i++){
            //Actualización de posiciones
            this.players[i].update();
            //Detección de colisiones
            game.physics.arcade.collide(this.players[i].sprite, this.snitch, function(){this.collisionHandler(this.players[i], this.score_texts[i])}, null, this);
        }

    },

    render: function () {
        //Pintado
        //game.debug.body(this.harry.sprite);
        //game.debug.body(this.snitch);
    },

    collisionHandler: function(player, text) {
        player.score++;
        
        if (player.score >= 3) {
            text.text = "Win!";
            this.snitch.x = -50;
        } else {
            if(player.sprite.key=='harry') text.text = "Harry: " + player.score;
            else text.text = "Dracoscore: " + player.score;

            //Reposicionar la snitch
            let maxwidth = game.world._width;
            let maxheight = game.world._height;
            let min = 0;
            this.snitch.x = (Math.random()*(maxwidth - min)) + min;
            this.snitch.y = (Math.random()*(maxheight - min)) + min;
        }
    }
}