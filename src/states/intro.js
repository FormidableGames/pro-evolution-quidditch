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
        
        // 10 snitches in the background (left to right)
        for (var i = 0; i < 10; i++)
        {
            this.spr_snitch = this.add.sprite(-150, -175 + (this.world.randomY), 'snitch');
            this.spr_snitch.scale.set(this.rnd.realInRange(0.3, 0.8));
            this.speed = this.rnd.between(4000, 9000);
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

        // 3 snitches in the front of the screen (right to left)
        this.delay = 0;
        for (var i = 0; i < 3; i++)
        {
            this.spr_snitch = this.add.sprite(850, -175 + (this.world.randomY), 'snitch');
            this.spr_snitch.scale.set(this.rnd.realInRange(0.5, 0.9));
            this.speed = this.rnd.between(4000, 7000);
            this.add.tween(this.spr_snitch).to({ x: -150}, this.speed, Phaser.Easing.Sinusoidal.InOut, true, this.delay, 1000, false);
            this.delay += 200;
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