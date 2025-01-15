import { Scene } from "phaser";

export class SignUp extends Scene {
  constructor() {
    super("SignUp");
  }

  create() {
  
    this.add.image(0, 0, "worldmapbkg").setOrigin(0);

    this.add
      .text(180, 40, "Sign Up", {
        fontFamily: "Arial Black",
        fontSize: 30,
        color: "#ffffff",
        stroke: "#127475",
        strokeThickness: 10,
      })
      .setDepth(100)
      .setOrigin(0.5);

    const graphics = this.add.graphics();
    graphics.fillStyle(0xCFE795, 1);
    graphics.fillRoundedRect(-150, -190, 300, 380);

    const border = this.add.graphics();
    border.lineStyle(2, 0xA57261, 1);
    border.strokeRoundedRect(-135, -175, 270, 350); 

    const formHtml = this.add.dom(0, 0).createFromCache("loginform");
   formHtml.setPerspective(800);

   
    const container = this.add.container(180, 200, [graphics, border, formHtml]);
 
   formHtml.addListener("click");
   formHtml.on("click",  (e)=> {
      e.preventDefault()
      if (e.target.name === "loginButton") {
        const inputUsername = formHtml.getChildByName("username");
        const inputPassword = formHtml.getChildByName("password");

        if (inputUsername.value !== "" && inputPassword.value !== "") {
          formHtml.removeListener("click");
          this.registry.set("username",inputUsername.value)  
          this.registry.set("password",inputPassword.value)   
          // const username = this.registry.get("username")
          // const password = this.registry.get("password")
          // console.log(username)   
          // console.log(password)
        
          this.scene.start("Game");
      
        } 
        else{
          //handle no input for username and password
        }
      }
      else if(e.target.name === "signUpButton"){
        this.scene.start("SignUp");
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

    if (this.mascot.y <= 620) {
      this.mascot.y = 620;
    }
  }
}



