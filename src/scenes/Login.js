import { Scene } from "phaser";

export class Login extends Scene {
  constructor() {
    super("Login");
  }

  create() {
    this.add.image(100, 100, 'worldmap');
    this.add
      .text(50, 50, "Login", {
        fontFamily: "Arial Black",
        fontSize: 30,
        color: "#ffffff",
        stroke: "#127475",
        strokeThickness: 10,
        align: "center",
      })
      .setDepth(100)
      .setOrigin(0.5); 


     
    this.graphics = this.add.graphics()
    this.graphics.fillStyle(0xEAD4BA, 1)
    this.graphics.fillRoundedRect(30,80,300,380,20)

    const border = this.add.graphics()
    border.lineStyle(4, 0x884630, 1)
    border.strokeRoundedRect(45,95,270,350)



    


    
    

    this.input.once("pointerdown", () => {
      this.scene.start("Game")
    });
  }

  update() {
  
  }
  
}
