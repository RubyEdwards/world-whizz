import { Scene } from "phaser";
import { signIn } from "../api";

export class Login extends Scene {
  constructor() {
    super("Login");
  }

  create() {
    this.add.image(0, 0, "worldmapbkg").setOrigin(0);

    this.add
      .text(180, 40, "Login", {
        fontFamily: "Arial Black",
        fontSize: 30,
        color: "#ffffff",
        stroke: "#127475",
        strokeThickness: 10,
      })
      .setDepth(100)
      .setOrigin(0.5);

    const graphics = this.add.graphics();
    graphics.fillStyle(0xcfe795, 1);
    graphics.fillRoundedRect(-150, -190, 300, 380);

    const border = this.add.graphics();
    border.lineStyle(2, 0xa57261, 1);
    border.strokeRoundedRect(-135, -175, 270, 350);

    const formHtml = this.add.dom(0, 0).createFromCache("loginform");
    formHtml.setPerspective(800);

    const container = this.add.container(180, 200, [
      graphics,
      border,
      formHtml,
    ]);

    formHtml.addListener("submit");
    formHtml.on("submit", (e) => {
      e.preventDefault();

      const inputUsername = formHtml.getChildByName("username");
      const inputPassword = formHtml.getChildByName("password");

      const userData = this.registry.get("currUserData");
      userData.username = inputUsername.value;
      userData.password = inputPassword.value;

      this.registry.set("currUserData", userData);
      const username = userData.username;
      const password = userData.password;

      const userInfo = {
        username,
        password,
      };
      signIn(userInfo)
        .then(() => {
          this.scene.start("Game");
        })
        .catch((err) => {
          alert(err.response.data.message || err.response.data.error);
        });
      this.scale._resetZoom;
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

    this.mascot = this.add
      .sprite(0, 500, "mascot1")
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
