import { Scene } from "phaser";
import { CountryBadge } from "../game-objects/CountryBadge";

export class Game extends Scene {
  constructor() {
    super("Game");
  }

  create() {
    //Camera and motion

    this.input.mousePointer.motionFactor = 0.5;
    this.input.pointer1.motionFactor = 0.5;

    let cam = this.cameras.main;

    cam.setBounds(3170, 250, 1550, 900);

    this.input.on("pointermove", (pointer) => {
      if (!pointer.isDown) return;

      const { x, y } = pointer.velocity;

      cam.scrollX -= x / cam.zoom;
      cam.scrollY -= y / cam.zoom;
    });

    //Images

    this.add.image(0, 0, "worldmap").setOrigin(0).setDepth(0);

    let journalicon = this.add
      .image(255, 5, "journal-icon")
      .setOrigin(0)
      .setScrollFactor(0)
      .setDepth(2).setInteractive;

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
      new CountryBadge(this, 3780, 720, "badge-belgium")
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

    // this.add
    //   .triangle(200, 480, 20, -10, 0, 25, 45, 0, 0x884630)
    //   .setScrollFactor(0);

    // const countrygraphics = this.add.graphics();
    // countrygraphics.fillStyle(0x884630, 1);
    // countrygraphics.fillRoundedRect(-150, -170, 300, 350).setScrollFactor(0);

    // const countryborder = this.add.graphics();
    // countryborder.lineStyle(2, 0xa57261, 1);
    // countryborder.strokeRoundedRect(-135, -155, 270, 320).setScrollFactor(0);

    // const countryinfo = this.add.dom(0, 0).createFromCache("countryinfo");
    // countryinfo.setPerspective(800).setScrollFactor(0);

    // const countrycontainer = this.add
    //   .container(180, 290, [countrygraphics, countryborder, countryinfo])
    //   .setScrollFactor(0);

    //Functionality

    this.input.on("pointerdown", () => {
      mascot.setVisible(false);
    });

    // journalicon.on("pointerdown", () => {
    //   this.scene.start("Journal")
    // });
  }
}
