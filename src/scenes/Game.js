import { Scene } from "phaser";

export class Game extends Scene {
  constructor() {
    super("Game");
  }

  create() {
    this.cameras.main.setBackgroundColor(0x00ff00);

    this.cameras.main.setBounds(0, 0, 7880, 3990);

    this.add.image(0, 0, "worldmap").setOrigin(0);

    const mouse = this.add.image(0, 0, "mouse").setOrigin(0);

    this.cameras.main.startFollow(mouse, true);

    this.input.on("pointermove", (pointer) => {
      mouse.setPosition(pointer.worldX, pointer.worldY);
    });

    // this.input.once("pointerdown", () => {
    //   this.scene.start("GameOver");
    // });
  }
}
