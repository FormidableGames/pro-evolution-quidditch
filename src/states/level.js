ProEvolutionQuidditch.levelState = function(game) {}

ProEvolutionQuidditch.levelState.prototype = {

    create: function () {

        this.maxScore = 3;
        
        //Declaración de variables
        var numStadiums = 4; // Numero total de fondos
        var randomBackground = Math.floor(Math.random()*(numStadiums-1));
        switch (randomBackground) {
            case 0: this.background = game.add.tileSprite(0, 0, window.innerWidth, window.innerHeight, "stadium0");
            break;
            case 1: this.background = game.add.tileSprite(0, 0, window.innerWidth, window.innerHeight, "stadium1");
            break;
            case 2: this.background = game.add.tileSprite(0, 0, window.innerWidth, window.innerHeight, "stadium2");
            break;
            case 3: this.background = game.add.tileSprite(0, 0, window.innerWidth, window.innerHeight, "stadium3");
            break;
        }

        //Salir del juego
        this.return = game.add.sprite(game.world._width-15, 15, 'return');
        this.return.anchor.setTo(1.0, 0.0);
        this.return.inputEnabled = true;
        this.return.scale.setTo(0.25);
        this.return.alpha = 0.6;
        this.return.events.onInputDown.add(function(){game.state.start('menuState')}, this);
        this.return.events.onInputOver.add(function(item){item.alpha = 1;}, this);
        this.return.events.onInputOut.add(function(item){item.alpha = 0.6;}, this);

        //Jugador/es
        this.harry = new Player(1);
        this.players = [this.harry];
        this.text1 = game.add.text(15,15, this.harry.sprite.key+"'s score: 0", { font: "30px Consolas", fill: "#b30000", align: "center", stroke: "black", strokeThickness: "5" });
        this.score_texts = [this.text1];

        if(!game.one_player){
            this.draco = new Player(2);
            this.players.push(this.draco);
            this.text2 = game.add.text(15, 65, this.draco.sprite.key+"'s score: 0", { font: "30px Consolas", fill: "#009900", align: "center", stroke: "black", strokeThickness: "5" });
            this.score_texts.push(this.text2);
    
        }

        //Snitch
        this.snitch = game.add.sprite(0, 0, 'snitch');
        this.snitch.scale.setTo(0.5,0.5);
        this.snitch.anchor.set(0.5);
        let maxwidth = game.world._width;
        let maxheight = game.world._height;
        let min = 0;
        this.snitch.x = (Math.random()*(maxwidth - min)) + min;
        this.snitch.y = (Math.random()*(maxheight - min)) + min;

        this.maxScore_text = game.add.text(game.world.centerX, game.world.bottom-50, "Snitches to get: "+this.maxScore, { font: "30px Consolas", fill: "#ffffff", align: "center", stroke: "black", strokeThickness: "5" });
        this.maxScore_text.anchor.set(0.5);

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
        
        if (player.score >= this.maxScore) {
            text.text = player.sprite.key+" wins!";
            this.snitch.x = -50;
        } else {
            text.text = player.sprite.key+"'s score: "+ player.score;

            //Reposicionar la snitch
            let maxwidth = game.world._width;
            let maxheight = game.world._height;
            let min = 0;
            this.snitch.x = (Math.random()*(maxwidth - min)) + min;
            this.snitch.y = (Math.random()*(maxheight - min)) + min;
        }
    }
}