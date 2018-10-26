var ProEvolutionQuidditch = {}

ProEvolutionQuidditch.bootState = function(game) {

}

ProEvolutionQuidditch.bootState.prototype = {

    preload: function() {
        
    },

    create: function() {
        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.state.start('preloadState');
    },

    update: function() {
        
    }
}