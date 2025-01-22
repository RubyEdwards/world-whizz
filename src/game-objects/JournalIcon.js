export class JournalIcon extends Phaser.GameObjects.Image {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);

    this.setOrigin(0)
      .setInteractive({ useHandCursor: true })
      .setPosition(x, y)
      .setScrollFactor(0);
    this.preFX.setPadding(18);
    this.preFX.addGlow();
    this.on('pointerover', () => {
      this.clearFX();
      this.preFX.setPadding(18);
      this.preFX.addGlow(0xcfe795);
    });
    this.on('pointerout', () => {
      this.clearFX();
      this.preFX.setPadding(18);
      this.preFX.addGlow();
    });
    this.on('pointerdown', () => {
      let startIndex = 0;
      let endIndex = 11;
      let currentPage = 1;
      this.scene.scene.start('Journal', { startIndex, endIndex, currentPage });
    });
  }
}
