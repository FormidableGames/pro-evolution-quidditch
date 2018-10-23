var ProEvolutionQuidditch = {}

ProEvolutionQuidditch.bootState = function(game) {

}

ProEvolutionQuidditch.bootState.prototype = {

    preload: function() {
        game.load.image('loading1', 'assets/images/text/loading1.png');
        game.load.image('background0', 'assets/images/background/background.png');
    },

    create: function() {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.state.start('preloadState');
    },

    update: function() {
        
    }
}