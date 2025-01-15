import { Scene } from "phaser";

export class Login extends Scene {
  constructor() {
    super("Login");
  }

  create() {
  
    this.add.image(50, 80, "worldmap");

    this.add
      .text(185, 40, "Login", {
        fontFamily: "Arial Black",
        fontSize: 30,
        color: "#ffffff",
        stroke: "#127475",
        strokeThickness: 10,
      })
      .setDepth(100)
      .setOrigin(0.5);

    const graphics = this.add.graphics();
    graphics.fillStyle(0xead4ba, 1);
    graphics.fillRoundedRect(-150, -190, 300, 380);

    const border = this.add.graphics();
    border.lineStyle(4, 0x884630, 1);
    border.strokeRoundedRect(-135, -175, 270, 350); 

    const formHtml = this.add.dom(0, 0).createFromCache("loginform");
   formHtml.setPerspective(800);

   
    const container = this.add.container(200, 200, [graphics, border, formHtml]);

 
   formHtml.addListener("click");
   formHtml.on("click", function (event) {
      if (event.target.name === "loginButton") {
        const inputUsername = this.getChildByName("username");
        const inputPassword = this.getChildByName("password");

        if (inputUsername.value !== "" && inputPassword.value !== "") {
          this.removeListener("click");


          const welcomeText = `Welcome ${inputUsername.value}`;
          console.log(welcomeText); 
        } 
      }
    });

    this.tweens.add({
      targets: container,
      y: 255, 
      duration: 3000,
      ease: "Power3",
    });

  
    this.mascot = this.add
      .sprite(0, 500, "mascot1")
      .setDisplayOrigin(0)
      .setDepth(1)
      .playAfterDelay("blink", Math.random() * 3000);

    this.input.once("pointerdown", () => {
      this.scene.start("Game");
    });
  }

  update() {
    this.mascot.y -= 1;

    if (this.mascot.y <= 420) {
      this.mascot.y = 420;
    }
  }
}


