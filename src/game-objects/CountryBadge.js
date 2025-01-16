export class CountryBadge extends Phaser.GameObjects.Image {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);

    this.setOrigin(0)
      .setInteractive()
      .setPosition(x, y)
      .postFX.addShine(1, 0.2, 5)
    //   .on("pointerdown", () => {
    // this.preFX.addVignette();
    // this.scene.start("Quiz");
    // });

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
