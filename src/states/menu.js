ProEvolutionQuidditch.menuState = function(game) {
    
    //Localizaciones
    this.top_loc1;
    this.center_loc;
    this.left_loc;

    this.py_txt_out_left;
    this.py_txt_out_right;
    this.py_center;

    //Número de jugadores
    this.one_player = true;

    this.snitch;
    this.griff;
    this.harry1;
    this.press;
    this.player1;
    this.player2;

    this.tween1;
    this.tween2;
}
ProEvolutionQuidditch.menuState.prototype = {
    init: function(){
        game.add.sprite(0, 0, 'background0');
        
        this.top_loc = [game.world.centerX, 50];
        this.center_loc = [game.world.centerX, game.world.centerY];
        this.left_loc = [game.world.centerX/2, game.world.centerY];
        this.py_txt_center = [game.world.centerX, game.world.bottom-125];
        this.py_txt_out_left = [0, game.world.bottom-125];
        this.py_txt_out_right = [game.world.right, game.world.bottom-125];
        
    },
    preload: function() {
        
    },

    create: function() {
        
        var title = game.add.sprite(game.world.centerX, 130,'title');
        title.scale.setTo(0.45)
        title.anchor.setTo(0.5);

        var harry2 = game.add.sprite(this.left_loc[0] + game.world.centerX, this.left_loc[1],'harry');
        harry2.scale.setTo(-0.55,0.55);
        harry2.anchor.setTo(0.5)

        var start = game.add.sprite(game.world.centerX, game.world.bottom-50, 'start');
        start.anchor.setTo(0.5)
        start.scale.setTo(0.75);

        ///////////////
        // SPRITES QUE SE VAN A MOVER
            this.snitch = game.add.sprite(this.top_loc[0], this.top_loc[1], 'snitch');
            this.snitch.anchor.setTo(0.5);

            this.griff = game.add.sprite(this.center_loc[0], this.center_loc[1],'griffindor');
            this.griff.scale.setTo(0.65)
            this.griff.anchor.setTo(0.5)

            this.harry1 = game.add.sprite(this.left_loc[0], this.left_loc[1],'harry');
            this.harry1.scale.setTo(0.55)
            this.harry1.anchor.setTo(0.5)

            this.press = game.add.sprite(game.world.centerX, game.world.bottom-175, 'press2');
            this.press.anchor.setTo(0.5)
            this.press.scale.setTo(0.65);

            this.player1 = game.add.sprite(this.py_txt_center[0], this.py_txt_center[1], 'player1');
            this.player1.anchor.setTo(0.5)
            this.player1.scale.setTo(0.65);

            this.player2 = game.add.sprite(this.py_txt_out_left[0], this.py_txt_out_left[1], 'player2');
            this.player2.x-=this.player2.width;
            this.player2.anchor.setTo(0.5)
            this.player2.scale.setTo(0.65);
        //
        /////////////////////////////

        this.S = game.input.keyboard.addKey(Phaser.Keyboard.S);
        this.key1 = game.input.keyboard.addKey(Phaser.Keyboard.ONE);
        this.key2 = game.input.keyboard.addKey(Phaser.Keyboard.TWO);
        this.key1_numpad = game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_1);
        this.key2_numpad = game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_2);
    },

    showPlayer1: function(){
        
        //Change text
        this.press.loadTexture('press2');

        //Change harry-draco
        this.tween2 = game.add.tween(this.harry1).to( { x: this.py_txt_out_left[0]-this.harry1.width}, 250, Phaser.Easing.Linear.None, true);
        this.tween2.onComplete.add(function(){
            this.harry1.loadTexture('harry');
            this.tween2 = game.add.tween(this.harry1).to( { x: this.left_loc[0]}, 250, Phaser.Easing.Linear.None, true);
        }, this);

        //Change other elements
        this.tween1 = game.add.tween(this.griff).to( { alpha: 1}, 500, Phaser.Easing.Linear.None, true);
        this.tween1 = game.add.tween(this.snitch).to( { y: this.top_loc[1]}, 500, Phaser.Easing.Linear.None, true);
        this.tween1 = game.add.tween(this.player1).to( { x: this.py_txt_center[0]}, 500, Phaser.Easing.Linear.None, true);
        this.tween1 = game.add.tween(this.player2).to( { x: this.py_txt_out_right[0] + this.player2.width}, 500, Phaser.Easing.Linear.None, true);
        
        this.tween1.onComplete.add(function(){
            this.player2.x = this.py_txt_out_left[0]-this.player2.width;
            this.one_player = true;
        }, this);

    },

    showPlayer2: function(){
        
        //Change text
        this.press.loadTexture('press1');

        //Change harry-draco
        this.tween2 = game.add.tween(this.harry1).to( { x: this.py_txt_out_left[0]-this.harry1.width}, 250, Phaser.Easing.Linear.None, true);
        this.tween2.onComplete.add(function(){
            this.harry1.loadTexture('draco');
            this.tween2 = game.add.tween(this.harry1).to( { x: this.left_loc[0]}, 250, Phaser.Easing.Linear.None, true);
        }, this);

        //Change other elements
        this.tween1 = game.add.tween(this.griff).to( { alpha: 0}, 500, Phaser.Easing.Linear.None, true);
        this.tween1 = game.add.tween(this.snitch).to( { y: this.center_loc[1]}, 500, Phaser.Easing.Linear.None, true);
        this.tween1 = game.add.tween(this.player1).to( { x: this.py_txt_out_right[0] + this.player1.width}, 500, Phaser.Easing.Linear.None, true);
        this.tween1 = game.add.tween(this.player2).to( { x: this.py_txt_center[0] }, 500, Phaser.Easing.Linear.None, true);
        
        this.tween1.onComplete.add(function(){
            this.player1.x = this.py_txt_out_left[0]-this.player1.width;
            this.one_player = false;
        }, this);

    },

    update: function() {
        if (this.S.isDown)
        {
            game.state.start('introState');
        }
        else if(this.key1.isDown || this.key1_numpad.isDown)
        {
            if(!this.one_player){
                this.showPlayer1();
            }
        }
        else if(this.key2.isDown || this.key2_numpad.isDown)
        {
            if(this.one_player){
                this.showPlayer2();
            }
        }
    }
}