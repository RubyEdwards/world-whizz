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

            this.mascot = this.add
            .sprite(0, 700, "mascot1")
            .setDisplayOrigin(0, 1)
            .setScale(0.5)
            .setDepth(1)
            .playAfterDelay("blink", Math.random() * 3000);

            //quiz card
            const graphics = this.add.graphics();
            graphics.fillStyle(0xCFE795, 1);
            graphics.fillRoundedRect(32, 32, 300, 600, 16);
            graphics.lineStyle(2, 0xA57261, 1);
            graphics.strokeRoundedRect(56, 56, 252, 552, 8);

            //triangles 
            this.add.triangle(125, 110, 0, -15, 0, 15, 25, 0, 0x10C74D); 
            this.add.triangle(148, 110, 0, -15, 0, 15, 25, 0, 0xffffff); 
            this.add.triangle(171, 110, 0, -15, 0, 15, 25, 0, 0xffffff);
            this.add.triangle(194, 110, 0, -15, 0, 15, 25, 0, 0xffffff);
            this.add.triangle(214, 110, 0, -15, 0, 15, 25, 0, 0xffffff);

            //start
            const star = this.add.star(245, 95, 5, 20, 10, 0xffffff, 1);
            star.setRotation(-Math.PI / 1.7);
             
            //quiz example placeholder
            this.quiz = {
                  question: "1. What mountain range is Andorra located in?",
                  answers: ["A. Alps", "B. Pyrenees", "C. Carpathians", "D. Apennines"],
                  correctAnswer: "Pyrenees"
                }
    
            this.showQuestion();
        }
        
        showQuestion() {
            const question = this.quiz.question;
            const rectWidth = 200; 
            const rectHeight = 50; 
            const centerX = this.scale.width / 2;
            const cornerRadius = 16;
    
            const questionText = this.add.text(
                centerX - rectWidth / 2,
                130,                     
                this.quiz.question,     
                {
                fontSize: "18px",
                fontFamily: "Roboto",
                fill: "#2d2d2d",
                wordWrap: { width: rectWidth },
                align: "left"
                }
            ).setOrigin(0, 0); 
    
            this.quiz.answers.forEach((option, index) => {
                const y = 250 + index * 70;
                const graphics = this.add.graphics();
                graphics.fillStyle(0x127475, 1);
                graphics.fillRoundedRect(
                    centerX - rectWidth / 2, 
                    y,                       
                    rectWidth, rectHeight,   
                    cornerRadius                
                )
    
                this.add.text(
                    centerX,               
                    y + rectHeight / 2,   
                    option,               
                    { fontSize: "20px", 
                      fontFamily: "Roboto",
                      fill: "#ffffff" ,
                     }
                ).setOrigin(0.5, 0.5); 
            });
    
            //next button
            const nextButtonY = 240 + this.quiz.answers.length * 70 + 20;
            const nextButtonWidth = 120;
            const nextButtonHeight = 40;
            const nextButtonRadius = 8;
    
            const nextButtonGraphics = this.add.graphics();
            nextButtonGraphics.fillStyle(0x884630, 1);
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
                "NEXT >",                      
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
    

            //click on button
            nextButtonGraphics.on("pointerdown", () => {
                console.log("Next button clicked");
            });
            
        }
        

        update() {

            //mascot
            this.mascot.y -= 10;
        
            if (this.mascot.y <= 650) {
              this.mascot.y = 650;
            }
          }
    
    
}
