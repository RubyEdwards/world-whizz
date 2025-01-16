export class CountryBadge extends Phaser.GameObjects.Image {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);

    this.setOrigin(0)
      .setInteractive()
      .setPosition(x, y)
      .postFX.addShine(1, 0.2, 5);
    this.on("pointerover", () => {
      this.preFX.setPadding(12);
      this.preFX.addGlow();
    });
    this.on("pointerout", () => {
      this.clearFX();
    });
    this.on("pointerdown", () => {
      this.scene.scene.start("Quiz");
    });

    //   .on("pointerover", () => this.enterButtonHoverState())
    //   .on("pointerout", () => this.enterButtonRestState())
    //   .on("pointerdown", () => this.enterButtonActiveState())
    //   .on("pointerup", () => {
    //     this.enterButtonHoverState();
    //   });
  }

  //   enterButtonHoverState() {
  //     this.setStyle({ fill: "#ff0" });
  //   }

  //   enterButtonRestState() {
  //     this.setStyle({ fill: "#0f0" });
  //   }

  //   enterButtonActiveState() {
  //     this.setStyle({ fill: "#0ff" });
  //   }
}
