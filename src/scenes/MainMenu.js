import { Scene } from "phaser";

export class MainMenu extends Scene {
  constructor() {
    super("MainMenu");
  }

  create() {
    // this.add.image(512, 384, 'background');

    this.mascot = this.add
      .sprite(0, 600, "mascot1")
      .setDisplayOrigin(0)
      .setDepth(1)
      .playAfterDelay("blink", Math.random() * 3000);

    // this.add.image(512, 300, 'logo');

    this.add
      .text(300, 100, "World Whizz", {
        fontFamily: "Arial Black",
        fontSize: 70,
        color: "#ffffff",
        stroke: "#127475",
        strokeThickness: 10,
        align: "center",
      })
      .setDepth(100)
      .setOrigin(0.5);

    this.input.once("pointerdown", () => {
      // this.scene.start("Game");
      this.scene.start("Login")
    });
  }

  update() {
    this.mascot.y -= 10;

    if (this.mascot.y <= 200) {
      this.mascot.y = 200;
    }
  }
}
