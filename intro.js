ProEvolutionQuidditch.introState = function(game) {

}

ProEvolutionQuidditch.introState.prototype = {

    preload: function() {
       // game.load.image('background1', 'assets/images/background/background2.png');
        //game.load.image('referee', 'assets/images/referee.png');
        //game.load.image('cleangame', 'assets/images/text/cleangame.png')

        var spr_img;
        var spr_text;
        var spaceKey;
    },

    

    create: function () {
        game.add.tileSprite(0, 0, game.world.width, game.world.height, 'background1');
        spr_img = game.add.sprite(game.world.centerX, game.world.centerY-100, 'referee');
        spr_img.anchor.set(0.5);

        spr_text = game.add.sprite(game.world.centerX, game.world.centerY+125, 'cleangame');
        spr_text.anchor.set(0.5);
        spr_text.scale.setTo(0.5, 0.5);

        spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);
        
    },

    update: function () {
        if (spaceKey.isDown) {
            game.state.start('levelState');
        } 
    }
}