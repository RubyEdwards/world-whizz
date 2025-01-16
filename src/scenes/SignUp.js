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
    graphics.fillRoundedRect(-150, -190, 300, 500);

    const border = this.add.graphics();
    border.lineStyle(2, 0xA57261, 1);
    border.strokeRoundedRect(-135, -175, 270, 470); 

    const formHtml = this.add.dom(0, 50).createFromCache("signUpForm");
   formHtml.setPerspective(800);

   
    const container = this.add.container(180, 180, [graphics, border, formHtml]);
 
   formHtml.addListener("submit");
   formHtml.on("submit",  (e)=> {
      e.preventDefault()
      
      const inputNewUsername = formHtml.getChildByName("newUsername");
      const inputNewPassword = formHtml.getChildByName("newPassword");
      const inputNewPasswordConf= formHtml.getChildByName("newPasswordConf");


      if (inputNewUsername.value !== "" &&
          inputNewPassword.value !== "" &&
          inputNewPasswordConf.val !== "" 
        ) {
      
          formHtml.removeListener("submit");
      
        
          const userData = this.registry.get("newUserData")
          userData.newUsername= inputNewUsername.value
          userData.newPassword=inputNewPassword.value
          userData.newPasswordConf= inputNewPasswordConf.value

          this.registry.set("newUserData", userData);
          
          // const newUsername = userData.newUsername
          // const newPassword = userData.newPassword
          // const newPasswordConf = userData.newPasswordConf

          // console.log(newUsername)   
          // console.log(newPassword)   
          // console.log(newPasswordConf)
          
      
        this.scene.start("Game");
    
      } 
    });


    const newLoginButton = formHtml.getChildByName("newLoginButton");
    newLoginButton.addEventListener("click", () => {
      this.scene.start("Login");
    });

    this.tweens.add({
      targets: container,
      y: 255, 
      duration: 1000,
      ease: "Power3",
    });

  
    this.mascot = this.add
      .sprite(0, 650, "mascot1")
      .setDisplayOrigin(0)
      .setDepth(1)
      .playAfterDelay("blink", Math.random() * 3000);

  }

  update() {
    this.mascot.y -= 2;

    if (this.mascot.y <= 550) {
      this.mascot.y = 550;
    }
  }
}
