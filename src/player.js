class Player{
    constructor(numberOfPlayer){

        this.speed = 6;
        this.friction = 0.5;
        this.score = 0;
        
        if(numberOfPlayer == 1){
            this.sprite = game.add.sprite(0, 0, 'harry');
            this.sprite.y = game.world.centerY - 100;
            
            this.upKey = game.input.keyboard.addKey(Phaser.Keyboard.W);
            this.downKey = game.input.keyboard.addKey(Phaser.Keyboard.S);
            this.leftKey = game.input.keyboard.addKey(Phaser.Keyboard.A);
            this.rightKey = game.input.keyboard.addKey(Phaser.Keyboard.D);

        }else{
            this.sprite = game.add.sprite(0, 0, 'draco');
            this.sprite.y = game.world.centerY + 100;
            
            this.upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
            this.downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
            this.leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
            this.rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);

        }

        this.sprite.scale.setTo(0.5,0.5);
        this.sprite.x = this.sprite.width;
        this.sprite.anchor.x = 0.5;
        this.sprite.anchor.y = 0.5;

        game.physics.enable(this.sprite, Phaser.Physics.ARCADE); 
        this.sprite.body.collideWorldBounds = true;
    }
    
    update(){
        if (this.upKey.isDown) {
            this.sprite.y -= this.speed;
        }
        else if (this.downKey.isDown) {
            this.sprite.y += this.speed;
        }

        if (this.leftKey.isDown) {
            this.sprite.x -= this.speed;
        }
        else if (this.rightKey.isDown) {
            this.sprite.x += this.speed;
        }
    }
}