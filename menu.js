ProEvolutionQuidditch.menuState = function(game) {

}

ProEvolutionQuidditch.menuState.prototype = {

    preload: function() {

    },

    create: function() {

        game.add.sprite(0, 0, 'background0');

        var snitch = game.add.sprite(game.world.centerX, 50, 'snitch');
        snitch.anchor.setTo(0.5);

        var title = game.add.sprite(game.world.centerX, 130,'title');
        title.scale.setTo(0.45)
        title.anchor.setTo(0.5);

        var griff = game.add.sprite(game.world.centerX, game.world.centerY,'griffindor');
        griff.scale.setTo(0.65)
        griff.anchor.setTo(0.5)


        var harry1 = game.add.sprite(game.world.centerX/2, game.world.centerY,'harry');
        harry1.scale.setTo(0.55)
        harry1.anchor.setTo(0.5)

        var harry2 = game.add.sprite(game.world.centerX/2 + game.world.centerX, game.world.centerY,'harry');
        harry2.scale.setTo(-0.55,0.55);
        harry2.anchor.setTo(0.5)

        var start = game.add.sprite(game.world.centerX, game.world.centerY+ game.world.centerY/2, 'start');
        start.anchor.setTo(0.5)
        start.scale.setTo(0.75);

        this.S = game.input.keyboard.addKey(Phaser.Keyboard.S);
        ////

    },

    update: function() {
        if (this.S.isDown)
        {
            game.state.start('introState');
        }
    }
}