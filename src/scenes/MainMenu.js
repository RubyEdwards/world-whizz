import { Scene } from "phaser";

export class MainMenu extends Scene {
  constructor() {
    super("MainMenu");
  }

  create() {

    this.mascot = this.add
      .sprite(0, 600, "mascot1")
      .setOrigin(0)
      .setDepth(1)
      .playAfterDelay("blink", Math.random() * 3000);


    this.add
      .text(180, 210, "World\nWhizz", {
        fontFamily: "Roboto",
        fontSize: 70,
        color: "#ffffff",
        stroke: "#127475",
        strokeThickness: 10,
        align: "center",
      })
      .setDepth(100)
      .setOrigin(0.5);

    this.input.once("pointerdown", () => {
      this.scene.start("Login")
    });
  }

  update() {
    this.mascot.y -= 10;

    if (this.mascot.y <= 420) {
      this.mascot.y = 420;
    }
  }
}
