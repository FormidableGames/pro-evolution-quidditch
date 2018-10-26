ProEvolutionQuidditch.preloadState = function(game) {
    this.load1;
    this.load2;
    this.text;
}

ProEvolutionQuidditch.preloadState.prototype = {

    preload: function() {
        this.load.image('background0', 'assets/images/background/background.png');
        this.load.image('loading1', 'assets/images/text/loading1.png');
        this.load.image('loading2', 'assets/images/text/loading2.png');
    },

    create: function() {
        this.add.sprite(0, 0, 'background0');

        this.load1 = game.add.sprite(game.world.centerX, game.world.centerY, 'loading1');
        this.load1.anchor.setTo(0.5);

        this.load2 = game.add.sprite(game.world.centerX, game.world.centerY, 'loading2');
        this.load2.anchor.setTo(0.5);
        this.load2.alpha = 0;

        this.text = game.add.text(game.world.centerX - 25, game.world.centerY + 50, '0%', { fill: '#aeaeae', font: 'bold 20pt Comic Sans MS' });

        this.load.onFileComplete.add(this.fileComplete, this);
        this.load.onLoadComplete.add(this.loadComplete, this);

        this.loadAssets();
    },

    loadAssets: function(){
        game.load.image('harry', 'assets/images/harry.png');
        game.load.image('draco', 'assets/images/draco.png');
        game.load.image('referee', 'assets/images/referee.png');
        game.load.image('snitch', 'assets/images/snitch.png');
        game.load.image('griffindor', 'assets/images/griffindor.png');
        game.load.image('slytherin', 'assets/images/slytherin.png');
        game.load.image('trophy', 'assets/images/trophy.png');
        game.load.image('background1', 'assets/images/background/background2.png');
        game.load.image('stadium0', 'assets/images/background/stadium1.png');
        game.load.image('stadium1', 'assets/images/background/stadium2.png');
        game.load.image('stadium2', 'assets/images/background/stadium3.png');  
        game.load.image('stadium3', 'assets/images/background/stadium4.png');
        game.load.image('player1', 'assets/images/text/player1.png');
        game.load.image('player2', 'assets/images/text/player2.png');
        game.load.image('press1', 'assets/images/text/press1.png');
        game.load.image('press2', 'assets/images/text/press2.png');
        game.load.image('start', 'assets/images/text/start.png');
        game.load.image('return', 'assets/images/text/return.png');
        game.load.image('title', 'assets/images/text/title.png');
        game.load.image('vs', 'assets/images/text/vs.png');
        game.load.image('winner', 'assets/images/text/winner.png');
        game.load.image('cleangame', 'assets/images/text/cleangame.png');
        
        game.load.audio('creepy', 'assets/music/bensound-creepy.mp3');
        game.load.audio('epic', 'assets/music/bensound-epic.mp3');
        game.load.audio('happyrock', 'assets/music/bensound-happyrock.mp3');
        game.load.audio('1', 'assets/audio/1.ogg');
        game.load.audio('2', 'assets/audio/2.ogg');
        game.load.audio('powerUp9', 'assets/audio/powerUp9.ogg');
        game.load.audio('youwin', 'assets/audio/you_win.ogg');

        game.load.start();
    },

    update: function() {

    },
        
    fileComplete: function(progress, cacheKey, success, totalLoaded, totalFiles) {
        this.text.setText(progress + "%");
        this.load2.alpha = progress/100;
    },
    
    loadComplete: function() {
        this.state.start('menuState');
    }
}