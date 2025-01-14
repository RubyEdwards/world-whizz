import { Scene } from "phaser";

export class Game extends Scene {
  constructor() {
    super("Game");
  }

  create() {
    this.cameras.main.setBackgroundColor(0x00ff00);

    this.cameras.main.setBounds(3450, 250, 1100, 900);

    this.add.image(0, 0, "worldmap").setOrigin(0);

    let badgebasic = this.add
      .image(3550, 630, "badgebasic")
      .setOrigin(0)
      .setInteractive();
    let badgeandorra = this.add
      .image(3725, 920, "badge-andorra")
      .setOrigin(0)
      .setInteractive();
    let badgeaustria = this.add
      .image(4020, 795, "badge-austria")
      .setOrigin(0)
      .setInteractive();
    let badgebelgium = this.add
      .image(3800, 720, "badge-belgium")
      .setOrigin(0)
      .setInteractive();
    let badgedenmark = this.add
      .image(3910, 600, "badge-denmark")
      .setOrigin(0)
      .setInteractive();
    let badgefinland = this.add
      .image(4300, 400, "badge-finland")
      .setOrigin(0)
      .setInteractive();

    const mouse = this.add.image(3600, 630, "mouse").setOrigin(0);

    this.cameras.main.startFollow(mouse, true);

    this.input.on("pointermove", (pointer) => {
      mouse.setPosition(pointer.worldX, pointer.worldY);
    });

    this.input.once("pointerdown", () => {
      this.scene.start("Quiz");
    });

    badgebasic.postFX.addShine(1, 0.2, 5);
    badgeandorra.postFX.addShine(1, 0.2, 5);
    badgeaustria.postFX.addShine(1, 0.2, 5);
    badgebelgium.postFX.addShine(1, 0.2, 5);
    badgedenmark.postFX.addShine(1, 0.2, 5);
    badgefinland.postFX.addShine(1, 0.2, 5);

    badgebasic.on("pointerdown", () => {
      this.setTint(Math.random() * 16000000);
    });
  }
}
