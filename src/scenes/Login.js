import { Scene } from "phaser";

export class Login extends Scene {
  constructor() {
    super("Login");
  }

  create() {
    this.add.image(0, 0, "worldmapbkg").setOrigin(0);

    const graphics = this.add.graphics();
    graphics.fillStyle(0xCFE795, 1);
    graphics.fillRoundedRect(-150, -190, 300, 380);

    const border = this.add.graphics();
    border.lineStyle(2, 0xA57261, 1);
    border.strokeRoundedRect(-135, -175, 270, 350);

    const formHtml = this.add.dom(0, 0).createFromCache("loginform");
    formHtml.setPerspective(800);

    const container = this.add.container(180, 200, [graphics, border, formHtml]);

    formHtml.addListener("submit");
    formHtml.on("submit", (e) => {
      e.preventDefault();

      const inputUsername = formHtml.getChildByName("username");
      const inputPassword = formHtml.getChildByName("password");


      const userData = this.registry.get("currUserData");
      userData.username = inputUsername.value;
      userData.password = inputPassword.value;

      this.registry.set("currUserData", userData);
        // const username = userData.username
        // const password = userData.password
        // console.log(username)   
        // console.log(password)
      this.scene.start("Game");
      
    });

    const signUpButton = formHtml.getChildByName("signUpButton");
    signUpButton.addEventListener("click", () => {
      this.scene.start("SignUp");
    });

  

    this.tweens.add({
      targets: container,
      y: 255,
      duration: 1000,
      ease: "Power3",
    });

    this.mascot = this.add.sprite(0, 500, "mascot1")
      .setDisplayOrigin(0)
      .setDepth(1)
      .playAfterDelay("blink", Math.random() * 3000);
  }

  update() {
    this.mascot.y -= 2;

    if (this.mascot.y <= 420) {
      this.mascot.y = 420;
    }
  }
}


