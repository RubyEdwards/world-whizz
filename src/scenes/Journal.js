import { Scene } from "phaser";

export class Journal extends Scene {
  constructor() {
    super("Journal");
  }

        graphics;


        create() {

            this.add.image(0, 0, "worldmapbkg").setOrigin(0);

            this.mascot = this.add
            .sprite(210, 700, "mascot1")
            .setDisplayOrigin(0, 1)
            .setScale(0.4)
            .setDepth(1)
            .playAfterDelay("blink", Math.random() * 3000);

            //journal card
            const screenHeight = this.scale.height; 
            const margin = 32; 
            const cardHeight = screenHeight - margin * 2;
            const graphics = this.add.graphics();

    
            graphics.fillStyle(0xEAD4BA, 1);
            graphics.fillRoundedRect(32, margin, 300, cardHeight, 16);

            graphics.lineStyle(2, 0x8C0E00, 1);
            graphics.strokeRoundedRect(56, margin + 24, 252, cardHeight - 48, 8);

            //journal example placeholder
            const username = "BOB"
             
    
            this.showUser();
        }
        
        showUser() {
            const rectWidth = 220; 
            const rectHeight = 50; 
            const centerX = this.scale.width / 2;
            const cornerRadius = 16;
    
            const journalText = this.add.text(
                centerX - rectWidth / 2,
                90,                     
                "${username}'s Travel Journal",     
                {
                fontSize: "20px",
                fontFamily: "Patrick Hand",
                fill: "#2d2d2d",
                wordWrap: { width: rectWidth },
                align: "center"
                }
            ).setOrigin(0, 0); 
    
            const countries = this.add.text(
              centerX - rectWidth / 2,
              180,
              "Andorra, Austria, Belgium, Denmark, Finland, France, Germany, Greece, Iceland, Ireland, Italy, Liechtenstein, Luxembourg, Malta, Monaco, Netherlands, Norway, Portugal, San Marino, Spain, Sweden, Switzerland, Turkey, United Kingdom",
              {
                fontSize: "20px",
                fontFamily: "Patrick Hand",
                fill: "#2d2d2d",
                wordWrap: { width: rectWidth },
                align: "center"
                }
            ).setOrigin(0, 0); 
            

    
            //next button
            const nextButtonY = 640 + 20;
            const nextButtonWidth = 160;
            const nextButtonHeight = 40;
            const nextButtonRadius = 8;
    
            const nextButtonGraphics = this.add.graphics();
            nextButtonGraphics.fillStyle(0x127475, 1);
            nextButtonGraphics.fillRoundedRect(
              centerX - nextButtonWidth / 2,
              nextButtonY,
              nextButtonWidth,
              nextButtonHeight,
              nextButtonRadius
        );
    
            this.add.text(
                centerX,                     
                nextButtonY + nextButtonHeight / 2, 
                "BACK TO MAP",                      
                { fontSize: "16px",
                  fontFamily: "Roboto",
                  fill: "#ffffff" 
                }
            ).setOrigin(0.5, 0.5); 
    
            nextButtonGraphics.setInteractive(new Phaser.Geom.Rectangle(
                centerX - nextButtonWidth / 2,
                nextButtonY,
                nextButtonWidth,
                nextButtonHeight
            ), Phaser.Geom.Rectangle.Contains);
    

            // //click on button
            // nextButtonGraphics.on("pointerdown", () => {
            //     console.log("Next button clicked");
            // });
            
        }
        

        update() {

            //mascot
            this.mascot.y -= 10;
        
            if (this.mascot.y <= 720) {
              this.mascot.y = 720;
            }

            this.input.once("pointerdown", () => {
              this.scene.start("Quiz");
           });
          }
    
    
}
