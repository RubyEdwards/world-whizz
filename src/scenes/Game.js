import { Scene } from "phaser";
import { CountryBadge } from "../game-objects/CountryBadge";
import { JournalIcon } from "../game-objects/JournalIcon";

export class Game extends Scene {
  constructor() {
    super("Game");
  }

  create() {
    //Camera and motion

    this.input.mousePointer.motionFactor = 0.5;
    this.input.pointer1.motionFactor = 0.5;

    let cam = this.cameras.main;

    cam.setBounds(3170, 250, 1550, 910);

    this.input.on("pointermove", (pointer) => {
      if (!pointer.isDown) return;

      const { x, y } = pointer.velocity;

      cam.scrollX -= x / cam.zoom;
      cam.scrollY -= y / cam.zoom;
    });

    //Images

    this.add.image(0, 0, "worldmap").setOrigin(0).setDepth(0);

    let journalicon = this.children.add(
      new JournalIcon(this, 250, 10, "journal-icon").setDepth(2)
    );

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

    badgeandorra.on("pointerdown", () => {
      andorrainfo.setVisible(true);
    });

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

    //Username example placeholder
    const username = "Bob";
    this.username = username;

    //Speech Bubbles

    const greeting = this.createSpeechBubble(
      70,
      340,
      220,
      100,
      `Welcome, ${this.username}!\nWhere should we explore today?`
    ).setScrollFactor(0);

    const andorrainfo = this.createSpeechBubble(
      20,
      130,
      320,
      400,
      // `${countryinfo.greeting}, ${this.username}!\nCountry: ${countryname}\nCapital: ${countryinfo.capital}\nCurrency: ${countryinfo.currency}\nPopulation: ${countryinfo.population}\nFun fact: ${countryinfo.funfact}`
      `Hola, ${this.username}!\n\nCountry: Andorra\nCapital: Andorra la Vella\nCurrency: Euro\nPopulation: 80,088 (2023)\n\nFun fact: At the summer solstice fire festivals people flip fireballs into the air - this event is listed as a United Nations Educational, Scientific and Cultural Organization (UNESCO) Intangible Cultural Heritage.\n\n`
    ).setScrollFactor(0);
    andorrainfo.setVisible(false);

    //Functionality

    const tween = this.tweens.add({
      targets: mascot,
      y: 740,
      ease: "Power1",
      duration: 3000,
      paused: true,
      yoyo: false,
      repeat: 0,
      flipX: false,
    });

    // const showmascot = this.tweens.add({
    //   targets: mascot,
    //   y: 540,
    //   ease: "Power1",
    //   duration: 3000,
    //   paused: true,
    //   yoyo: false,
    //   repeat: 0,
    //   flipX: false,
    // });

    this.input.on("pointerdown", () => {
      if (!tween.isPlaying()) {
        tween.resume();
        greeting.setVisible(false);
      } else {
        // tween.pause();
      }
    });
  }

  createSpeechBubble(x, y, width, height, quote) {
    const bubbleWidth = width;
    const bubbleHeight = height;
    const bubblePadding = 10;
    const arrowHeight = bubbleHeight / 5;

    const bubble = this.add.graphics({ x: x, y: y });

    //  Bubble shadow
    bubble.fillStyle(0x222222, 0.5);
    bubble.fillRoundedRect(6, 6, bubbleWidth, bubbleHeight, 16);

    //  Bubble color
    bubble.fillStyle(0xffffff, 1);

    //  Bubble outline line style
    bubble.lineStyle(4, 0x565656, 1);

    //  Bubble shape and outline
    bubble.strokeRoundedRect(0, 0, bubbleWidth, bubbleHeight, 16);
    bubble.fillRoundedRect(0, 0, bubbleWidth, bubbleHeight, 16);

    //  Calculate arrow coordinates
    const point1X = Math.floor(bubbleWidth / 4);
    const point1Y = bubbleHeight;
    const point2X = Math.floor((bubbleWidth / 4) * 1.4);
    const point2Y = bubbleHeight;
    const point3X = Math.floor(bubbleWidth / 4);
    const point3Y = Math.floor(bubbleHeight + arrowHeight);

    //  Bubble arrow shadow
    bubble.lineStyle(4, 0x222222, 0.5);
    bubble.lineBetween(point2X - 1, point2Y + 6, point3X + 2, point3Y);

    //  Bubble arrow fill
    bubble.fillTriangle(point1X, point1Y, point2X, point2Y, point3X, point3Y);
    bubble.lineStyle(2, 0x565656, 1);
    bubble.lineBetween(point2X, point2Y, point3X, point3Y);
    bubble.lineBetween(point1X, point1Y, point3X, point3Y);

    const content = this.add.text(0, 0, quote, {
      fontFamily: "Roboto",
      fontSize: 20,
      color: "#000000",
      align: "left",
      wordWrap: { width: bubbleWidth - bubblePadding * 2 },
    });

    const b = content.getBounds();

    content.setPosition(
      bubble.x + bubbleWidth / 2 - b.width / 2,
      bubble.y + bubbleHeight / 2 - b.height / 2
    );

    const container = this.add.container();

    container.add([bubble, content]);

    return container;
  }
}
