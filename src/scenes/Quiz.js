import { Scene } from 'phaser';

export class Quiz extends Scene
{
    constructor ()
    {
        super('Quiz');
    }

        graphics;


        create() {

            this.add.image(0, 0, "worldmapbkg").setOrigin(0);

            const graphics = this.add.graphics();
    
            graphics.fillStyle(0xCFE795, 1);

            graphics.fillRoundedRect(32, 32, 300, 600, 16);
    
            graphics.lineStyle(2, 0xA57261, 1);

            graphics.strokeRoundedRect(56, 56, 252, 552, 8);

            graphics.strokeRoundedRect(62, 260, 240, 60, 18);

           
        
            

            this.mascot = this.add
            .sprite(0, 700, "mascot1")
            .setDisplayOrigin(0, 1)
            .setScale(0.5)
            .setDepth(1)
            .playAfterDelay("blink", Math.random() * 3000);
        }
        

        update() {
            this.mascot.y -= 10;
        
            if (this.mascot.y <= 650) {
              this.mascot.y = 650;
            }
          }
    
    
}
