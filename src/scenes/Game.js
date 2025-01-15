import { Scene } from "phaser";
import { CountryBadge } from "../game-objects/CountryBadge";

export class Game extends Scene {
  constructor() {
    super("Game");
  }

  create() {
    //Camera

    this.cameras.main.setBackgroundColor(0x00ff00);

    this.cameras.main.setBounds(3170, 250, 1550, 900);

    //Images

    this.add.image(0, 0, "worldmap").setOrigin(0).setDepth(0);

    const mouse = this.add.image(3800, 800, "mouse").setOrigin(0);

    this.add
      .image(255, 5, "journal-icon")
      .setOrigin(0)
      .setScrollFactor(0)
      .setDepth(2);

    const mascot = this.add
      .sprite(0, 500, "mascot1")
      .setScale(0.9)
      .setOrigin(0)
      .setScrollFactor(0)
      .setDepth(2)
      .playAfterDelay("blink", Math.random() * 3000);

    let badgeandorra = this.children.add(
      new CountryBadge(this, 3725, 920, "badge-andorra")
    );
    let badgeaustria = this.children.add(
      new CountryBadge(this, 4020, 795, "badge-austria")
    );
    let badgebelgium = this.children.add(
      new CountryBadge(this, 3790, 720, "badge-belgium")
    );
    let badgedenmark = this.children.add(
      new CountryBadge(this, 3910, 600, "badge-denmark")
    );
    let badgefinland = this.children.add(
      new CountryBadge(this, 4300, 400, "badge-finland")
    );
    let badgefrance = this.children.add(
      new CountryBadge(this, 3760, 810, "badge-france")
    );
    let badgegermany = this.children.add(
      new CountryBadge(this, 3920, 700, "badge-germany")
    );
    let badgegreece = this.children.add(
      new CountryBadge(this, 4180, 1020, "badge-greece")
    );
    let badgeiceland = this.children.add(
      new CountryBadge(this, 3300, 400, "badge-iceland")
    );
    let badgeireland = this.children.add(
      new CountryBadge(this, 3550, 630, "badge-ireland")
    );
    let badgeitaly = this.children.add(
      new CountryBadge(this, 4010, 940, "badge-italy")
    );
    let badgeliechtenstein = this.children.add(
      new CountryBadge(this, 3930, 810, "badge-liechtenstein")
    );
    let badgeluxembourg = this.children.add(
      new CountryBadge(this, 3840, 740, "badge-luxembourg")
    );
    let badgemalta = this.children.add(
      new CountryBadge(this, 4000, 1070, "badge-malta")
    );
    let badgemonaco = this.children.add(
      new CountryBadge(this, 3850, 890, "badge-monaco")
    );
    let badgenetherlands = this.children.add(
      new CountryBadge(this, 3820, 675, "badge-netherlands")
    );
    let badgenorway = this.children.add(
      new CountryBadge(this, 3910, 470, "badge-norway")
    );
    let badgeportugal = this.children.add(
      new CountryBadge(this, 3500, 990, "badge-portugal")
    );
    let badgesanmarino = this.children.add(
      new CountryBadge(this, 3980, 880, "badge-sanmarino")
    );
    let badgespain = this.children.add(
      new CountryBadge(this, 3620, 970, "badge-spain")
    );
    let badgesweden = this.children.add(
      new CountryBadge(this, 4065, 400, "badge-sweden")
    );
    let badgeswitzerland = this.children.add(
      new CountryBadge(this, 3860, 810, "badge-switzerland")
    );
    let badgeturkey = this.children.add(
      new CountryBadge(this, 4450, 1000, "badge-turkey")
    );
    let badgeunitedkingdom = this.children.add(
      new CountryBadge(this, 3650, 640, "badge-unitedkingdom")
    );

    //Speech Bubbles

    //Movement

    this.cameras.main.startFollow(mouse, true);

    this.input.on("pointermove", (pointer) => {
      mouse.setPosition(pointer.worldX, pointer.worldY);
    });

    //Functionality

       this.input.once("pointerdown", () => {
       this.scene.start("Quiz");
    });

    // badgeandorra.on("pointerdown", () => {
    //   badgeandorra.preFX.addVignette();
    //   // this.scene.start("Quiz");
    // });

    this.input.on("pointerdown", () => {
      mascot.setVisible(false);
    });

  }
}
