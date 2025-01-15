import { Scene } from "phaser";

export class Game extends Scene {
  constructor() {
    super("Game");
  }

  create() {
    this.cameras.main.setBackgroundColor(0x00ff00);

    this.cameras.main.setBounds(3170, 250, 1550, 900);

    this.add.image(0, 0, "worldmap").setOrigin(0);

    // let badgebasic = this.add
    //   .image(3550, 630, "badgebasic")
    //   .setOrigin(0)
    //   .setInteractive();
    let badgeandorra = this.add
      .image(3725, 920, "badge-andorra")
      .setOrigin(0)
      .setInteractive();
    let badgeaustria = this.add
      .image(4020, 795, "badge-austria")
      .setOrigin(0)
      .setInteractive();
    let badgebelgium = this.add
      .image(3790, 720, "badge-belgium")
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
    let badgefrance = this.add
      .image(3760, 810, "badge-france")
      .setOrigin(0)
      .setInteractive();
    let badgegermany = this.add
      .image(3920, 700, "badge-germany")
      .setOrigin(0)
      .setInteractive();
    let badgegreece = this.add
      .image(4180, 1020, "badge-greece")
      .setOrigin(0)
      .setInteractive();
    let badgeiceland = this.add
      .image(3300, 400, "badge-iceland")
      .setOrigin(0)
      .setInteractive();
    let badgeireland = this.add
      .image(3550, 630, "badge-ireland")
      .setOrigin(0)
      .setInteractive();
    let badgeitaly = this.add
      .image(4010, 940, "badge-italy")
      .setOrigin(0)
      .setInteractive();
    let badgeliechtenstein = this.add
      .image(3930, 810, "badge-liechtenstein")
      .setOrigin(0)
      .setInteractive();
    let badgeluxembourg = this.add
      .image(3840, 740, "badge-luxembourg")
      .setOrigin(0)
      .setInteractive();
    let badgemalta = this.add
      .image(4000, 1070, "badge-malta")
      .setOrigin(0)
      .setInteractive();
    let badgemonaco = this.add
      .image(3850, 890, "badge-monaco")
      .setOrigin(0)
      .setInteractive();
    let badgenetherlands = this.add
      .image(3820, 675, "badge-netherlands")
      .setOrigin(0)
      .setInteractive();
    let badgenorway = this.add
      .image(3910, 470, "badge-norway")
      .setOrigin(0)
      .setInteractive();
    let badgeportugal = this.add
      .image(3500, 990, "badge-portugal")
      .setOrigin(0)
      .setInteractive();
    let badgesanmarino = this.add
      .image(3980, 880, "badge-sanmarino")
      .setOrigin(0)
      .setInteractive();
    let badgespain = this.add
      .image(3620, 970, "badge-spain")
      .setOrigin(0)
      .setInteractive();
    let badgesweden = this.add
      .image(4065, 400, "badge-sweden")
      .setOrigin(0)
      .setInteractive();
    let badgeswitzerland = this.add
      .image(3860, 810, "badge-switzerland")
      .setOrigin(0)
      .setInteractive();
    let badgeturkey = this.add
      .image(4450, 1000, "badge-turkey")
      .setOrigin(0)
      .setInteractive();
    let badgeunitedkingdom = this.add
      .image(3650, 640, "badge-unitedkingdom")
      .setOrigin(0)
      .setInteractive();

    const mouse = this.add.image(3600, 630, "mouse").setOrigin(0);

    this.cameras.main.startFollow(mouse, true);

    this.input.on("pointermove", (pointer) => {
      mouse.setPosition(pointer.worldX, pointer.worldY);
    });

    // this.input.once("pointerdown", () => {
    //   this.scene.start("Quiz");
    // });

    // badgebasic.postFX.addShine(1, 0.2, 5);
    badgeandorra.postFX.addShine(1, 0.2, 5);
    badgeaustria.postFX.addShine(1, 0.2, 5);
    badgebelgium.postFX.addShine(1, 0.2, 5);
    badgedenmark.postFX.addShine(1, 0.2, 5);
    badgefinland.postFX.addShine(1, 0.2, 5);
    badgefrance.postFX.addShine(1, 0.2, 5);
    badgegermany.postFX.addShine(1, 0.2, 5);
    badgegreece.postFX.addShine(1, 0.2, 5);
    badgeiceland.postFX.addShine(1, 0.2, 5);
    badgeireland.postFX.addShine(1, 0.2, 5);
    badgeitaly.postFX.addShine(1, 0.2, 5);
    badgeliechtenstein.postFX.addShine(1, 0.2, 5);
    badgeluxembourg.postFX.addShine(1, 0.2, 5);
    badgemalta.postFX.addShine(1, 0.2, 5);
    badgemonaco.postFX.addShine(1, 0.2, 5);
    badgenetherlands.postFX.addShine(1, 0.2, 5);
    badgenorway.postFX.addShine(1, 0.2, 5);
    badgeportugal.postFX.addShine(1, 0.2, 5);
    badgesanmarino.postFX.addShine(1, 0.2, 5);
    badgespain.postFX.addShine(1, 0.2, 5);
    badgesweden.postFX.addShine(1, 0.2, 5);
    badgeswitzerland.postFX.addShine(1, 0.2, 5);
    badgeturkey.postFX.addShine(1, 0.2, 5);
    badgeunitedkingdom.postFX.addShine(1, 0.2, 5);

    const fx = badgeandorra.on("pointerdown", () => {
      this.scene.start("Quiz");
    });
  }
}
