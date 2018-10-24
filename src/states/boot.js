var ProEvolutionQuidditch = {}

ProEvolutionQuidditch.bootState = function(game) {

}

ProEvolutionQuidditch.bootState.prototype = {

    preload: function() {
        this.load.image('loading1', 'assets/images/text/loading1.png');
        this.load.image('background0', 'assets/images/background/background.png');
    },

    create: function() {
        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.state.start('preloadState');
    },

    update: function() {
        
    }
}