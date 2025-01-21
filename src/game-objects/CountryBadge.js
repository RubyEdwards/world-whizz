export class CountryBadge extends Phaser.GameObjects.Image {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);

    this.setOrigin(0)
      .setInteractive({ useHandCursor: true })
      .setPosition(x, y)
      .postFX.addShine(1, 0.2, 5);
    this.on("pointerover", () => {
      this.preFX.setPadding(12);
      this.preFX.addGlow();
    });
    this.on("pointerout", () => {
      this.clearFX();
      this.postFX.addShine(1, 0.2, 5);
    });
    let id = ""
    this.on("pointerdown", () => {
      // let countryId = this.texture.key;
      // if (countryId === "badge-andorra") {
      //   id="AD"
      // }
    });
  }
}
