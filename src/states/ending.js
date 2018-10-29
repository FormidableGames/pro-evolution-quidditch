ProEvolutionQuidditch.endingState = function (game) {

}

ProEvolutionQuidditch.endingState.prototype = {

    init: function (winner) {
        console.log(winner)
        this.winner = winner;
    },

    preload: function () {

    },

    create: function () {

        var imageBackground = game.add.sprite(game.world.centerX, game.world.centerY, 'background1');
        imageBackground.anchor.set(0.5);

        var imageWinner = game.add.sprite(game.world.centerX, game.world.centerY + 70, 'winner');
        imageWinner.anchor.set(0.5);
        imageWinner.scale.setTo(0.8, 0.8);

        var imageReturn = game.add.sprite(game.world.centerX, game.world.centerY + 130, 'return');
        imageReturn.anchor.set(0.5);
        imageReturn.scale.setTo(0.4, 0.4);
        imageReturn.inputEnabled = true;
        imageReturn.events.onInputDown.add(this.listener, this);

        var imageTrophy = game.add.sprite(game.world.centerX, game.world.centerY - 120, 'trophy');
        imageTrophy.anchor.set(0.5);


        if (this.winner == 'harry') {
            var imageEscudo = game.add.sprite(game.world.centerX - 220, game.world.centerY - 120, 'griffindor');
            imageEscudo.anchor.set(0.5);


            var imagePersonaje = game.add.sprite(game.world.centerX + 220, game.world.centerY - 120, 'harry');
            imagePersonaje.anchor.set(0.5);
            imagePersonaje.scale.setTo(-1, 1);


        } else if (this.winner == 'draco') {
            var imageEscudo = game.add.sprite(game.world.centerX - 220, game.world.centerY - 120, 'slytherin');
            imageEscudo.anchor.set(0.5);

            var imagePersonaje = game.add.sprite(game.world.centerX + 220, game.world.centerY - 120, 'draco');
            imagePersonaje.anchor.set(0.5);
            imagePersonaje.scale.setTo(-1, 1);

        }
    },



    update: function () {

    },

    listener: function () {
        game.state.start('menuState');
    }

}