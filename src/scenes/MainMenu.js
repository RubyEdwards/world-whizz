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

    this.bkg = this.add.image(-4600, -370, "worldmap").setOrigin(0);

    this.tweens.add({
      targets: this.bkg,
      x: -3150,
      duration: 20000,
      repeat: -1,
      yoyo: -1,
      hold: 500,
      repeatDelay: 0,
      ease: "linear",
    });

    this.add
      .text(20, 10, "Almost Perfect presents...", {
        fontFamily: "Roboto",
        fontSize: 20,
        color: "#ffffff",
        stroke: "#127475",
        strokeThickness: 10,
        align: "center",
      })
      .setDepth(100)
      .setOrigin(0);

    this.wwLogo = this.add
      .image(180, 220, "ww-logo")
      .setOrigin(0.5)
      .setDepth(100)
      .setScale(0.7);

    this.wwLogo.preFX.setPadding(18);
    this.wwLogo.preFX.addGlow();

    this.input.once("pointerdown", () => {
    //  this.scene.start('Game');
    this.scene.start("Login");
    });
  }

  update() {
    this.mascot.y -= 6;

    if (this.mascot.y <= 420) {
      this.mascot.y = 420;
    }

    this.wwLogo.rotation -= 0.003;
  }
}
