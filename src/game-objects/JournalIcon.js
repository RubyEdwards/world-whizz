export class JournalIcon extends Phaser.GameObjects.Image {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);

    this.setOrigin(0)
      .setInteractive({ useHandCursor: true })
      .setPosition(x, y)
      .setScrollFactor(0);
    this.on("pointerover", () => {
      this.preFX.setPadding(18);
      this.preFX.addGlow();
    });
    this.on("pointerout", () => {
      this.clearFX();
    });
    this.on("pointerdown", () => {
      this.scene.scene.start("Journal");
    });
  }
}
