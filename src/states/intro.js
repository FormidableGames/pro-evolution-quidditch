ProEvolutionQuidditch.introState = function(game) {

    this.background = null;
    this.spr_img;
    this.spr_text;
    this.spaceKey;

    // Tween vars
    this.delay = 0;
    this.spr_snitch;
    this.speed;
}

ProEvolutionQuidditch.introState.prototype = {

    preload: function() {
       
    },

    create: function () {
        
        this.background = this.add.tileSprite(0, 0, 800, 600, 'background1');
        
        // 10 snitches in the background
        for (var i = 0; i < 10; i++)
        {
            this.spr_snitch = this.add.sprite(-150, -175 + (this.world.randomY), 'snitch');
            this.spr_snitch.scale.set(this.rnd.realInRange(0.3, 0.8));
            this.speed = this.rnd.between(600, 1900);
            this.add.tween(this.spr_snitch).to({ x: 900}, this.speed, Phaser.Easing.Sinusoidal.InOut, true, this.delay, 1000, false);
            this.delay += 200;
        }

        // static images
        this.spr_img = this.add.sprite(this.world.centerX, this.world.centerY-100, 'referee');
        this.spr_img.anchor.set(0.5);

        this.spr_text = this.add.sprite(this.world.centerX, this.world.centerY+125, 'cleangame');
        this.spr_text.anchor.set(0.5);
        this.spr_text.scale.setTo(0.5, 0.5);

        this.spaceKey = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        this.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);

        game.time.events.add(Phaser.Timer.SECOND * 2.5, this.ampliacion, this);
    },

    ampliacion: function () {
        this.spr_img.destroy();
        this.spr_text.destroy();

        this.spr_griff;
        this.spr_slyth;
        this.spr_vs;
        this.spr_harry;
        this.spr_draco;

        if (game.one_player) {
            this.spr_griff = this.add.sprite(this.world.centerX, this.world.centerY - 150, 'griffindor');
            this.spr_griff.anchor.set(0.5);
            this.spr_harry = this.add.sprite(-150, this.world.centerY + 45, 'harry');
            this.spr_harry.scale.setTo(0.65);

            this.tween1 = game.add.tween(this.spr_harry).to({ x: this.world.right + 850 }, 2000, Phaser.Easing.Linear.None, true);

            this.tween1.onComplete.add(function () {
                this.state.start('levelState');
            }, this);
        } else {

            this.spr_griff = this.add.sprite(this.world.centerX-175, this.world.centerY - 150, 'griffindor');
            this.spr_griff.anchor.set(0.5);
            this.spr_slyth = this.add.sprite(this.world.centerX+175, this.world.centerY - 150, 'slytherin');
            this.spr_slyth.anchor.set(0.5);
            this.spr_vs = this.add.sprite(this.world.centerX, this.world.centerY - 150, 'vs');
            this.spr_vs.anchor.set(0.5);

            this.spr_harry = this.add.sprite(-150, this.world.centerY + 45, 'harry');
            this.spr_harry.scale.setTo(0.65);
            this.spr_harry.anchor.set(0.5);
            this.spr_draco = this.add.sprite(game.world.right + 150, this.world.centerY + 45, 'draco');
            this.spr_draco.scale.setTo(-0.65, 0.65);
            this.spr_draco.anchor.set(0.5);

            this.tween1 = game.add.tween(this.spr_harry).to({ x: game.world.centerX-175 }, 2000, Phaser.Easing.Linear.None, true);
            this.tween1 = game.add.tween(this.spr_draco).to({ x: game.world.centerX + 175 }, 2000, Phaser.Easing.Linear.None, true);

            this.tween1.onComplete.add(function () {
                game.time.events.add(Phaser.Timer.SECOND * 2, function () { this.state.start('levelState'); }, this);
            }, this);

        }

    },

    update: function () {
        if (this.spaceKey.isDown) {
            this.state.start('levelState');
        } 

        // Hacer que "el fondo se mueva"
        this.background.tilePosition.x -= 0.4;
    }
}