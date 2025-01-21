import { Scene } from "phaser";
import { CountryBadge } from "../game-objects/CountryBadge";
import { JournalIcon } from "../game-objects/JournalIcon";
import { getCountry } from "../api";

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
      new JournalIcon(this, 270, 10, "journal-icon").setDepth(2)
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
      mascot.setPosition(0, 620);
      makeCountryInfo("AD");
    });

    let badgeaustria = this.children.add(
      new CountryBadge(this, 4020, 795, "badge-austria")
    );
    badgeaustria.on("pointerdown", () => {
      mascot.setPosition(0, 620);
      makeCountryInfo("AT");
    });

    let badgebelgium = this.children.add(
      new CountryBadge(this, 3780, 720, "badge-belgium")
    );
    badgebelgium.on("pointerdown", () => {
      mascot.setPosition(0, 620);
      makeCountryInfo("BE");
    });

    let badgedenmark = this.children.add(
      new CountryBadge(this, 3910, 600, "badge-denmark")
    );
    badgedenmark.on("pointerdown", () => {
      mascot.setPosition(0, 620);
      makeCountryInfo("DK");
    });

    let badgefinland = this.children.add(
      new CountryBadge(this, 4300, 400, "badge-finland")
    );
    badgefinland.on("pointerdown", () => {
      mascot.setPosition(0, 620);
      makeCountryInfo("FI");
    });

    let badgefrance = this.children.add(
      new CountryBadge(this, 3760, 810, "badge-france")
    );
    badgefrance.on("pointerdown", () => {
      mascot.setPosition(0, 620);
      makeCountryInfo("FR");
    });

    let badgegermany = this.children.add(
      new CountryBadge(this, 3920, 700, "badge-germany")
    );
    badgegermany.on("pointerdown", () => {
      mascot.setPosition(0, 620);
      makeCountryInfo("DE");
    });

    let badgegreece = this.children.add(
      new CountryBadge(this, 4180, 1020, "badge-greece")
    );
    badgegreece.on("pointerdown", () => {
      mascot.setPosition(0, 620);
      makeCountryInfo("GR");
    });

    let badgeiceland = this.children.add(
      new CountryBadge(this, 3300, 400, "badge-iceland")
    );
    badgeiceland.on("pointerdown", () => {
      mascot.setPosition(0, 620);
      makeCountryInfo("IC");
    });

    let badgeireland = this.children.add(
      new CountryBadge(this, 3550, 630, "badge-ireland")
    );
    badgeireland.on("pointerdown", () => {
      mascot.setPosition(0, 620);
      makeCountryInfo("IR");
    });

    let badgeitaly = this.children.add(
      new CountryBadge(this, 4010, 940, "badge-italy")
    );
    badgeitaly.on("pointerdown", () => {
      mascot.setPosition(0, 620);
      makeCountryInfo("IT");
    });

    let badgeliechtenstein = this.children.add(
      new CountryBadge(this, 3930, 810, "badge-liechtenstein")
    );
    badgeliechtenstein.on("pointerdown", () => {
      mascot.setPosition(0, 620);
      makeCountryInfo("LI");
    });

    let badgeluxembourg = this.children.add(
      new CountryBadge(this, 3840, 740, "badge-luxembourg")
    );
    badgeluxembourg.on("pointerdown", () => {
      mascot.setPosition(0, 620);
      makeCountryInfo("LU");
    });

    let badgemalta = this.children.add(
      new CountryBadge(this, 4000, 1070, "badge-malta")
    );
    badgemalta.on("pointerdown", () => {
      mascot.setPosition(0, 620);
      makeCountryInfo("MA");
    });

    let badgemonaco = this.children.add(
      new CountryBadge(this, 3850, 890, "badge-monaco")
    );
    badgemonaco.on("pointerdown", () => {
      mascot.setPosition(0, 620);
      makeCountryInfo("MO");
    });

    let badgenetherlands = this.children.add(
      new CountryBadge(this, 3820, 675, "badge-netherlands")
    );
    badgenetherlands.on("pointerdown", () => {
      mascot.setPosition(0, 620);
      makeCountryInfo("NE");
    });

    let badgenorway = this.children.add(
      new CountryBadge(this, 3910, 470, "badge-norway")
    );
    badgenorway.on("pointerdown", () => {
      mascot.setPosition(0, 620);
      makeCountryInfo("NO");
    });

    let badgeportugal = this.children.add(
      new CountryBadge(this, 3500, 990, "badge-portugal")
    );
    badgeportugal.on("pointerdown", () => {
      mascot.setPosition(0, 620);
      makeCountryInfo("PT");
    });

    let badgesanmarino = this.children.add(
      new CountryBadge(this, 3980, 880, "badge-sanmarino")
    );
    badgesanmarino.on("pointerdown", () => {
      mascot.setPosition(0, 620);
      makeCountryInfo("SM");
    });

    let badgespain = this.children.add(
      new CountryBadge(this, 3620, 970, "badge-spain")
    );
    badgespain.on("pointerdown", () => {
      mascot.setPosition(0, 620);
      makeCountryInfo("ES");
    });

    let badgesweden = this.children.add(
      new CountryBadge(this, 4065, 400, "badge-sweden")
    );
    badgesweden.on("pointerdown", () => {
      mascot.setPosition(0, 620);
      makeCountryInfo("SE");
    });

    let badgeswitzerland = this.children.add(
      new CountryBadge(this, 3860, 810, "badge-switzerland")
    );
    badgeswitzerland.on("pointerdown", () => {
      mascot.setPosition(0, 620);
      makeCountryInfo("CH");
    });

    let badgeturkey = this.children.add(
      new CountryBadge(this, 4450, 1000, "badge-turkey")
    );
    badgeturkey.on("pointerdown", () => {
      mascot.setPosition(0, 620);
      makeCountryInfo("TR");
    });

    let badgeunitedkingdom = this.children.add(
      new CountryBadge(this, 3650, 640, "badge-unitedkingdom")
    );
    badgeunitedkingdom.on("pointerdown", () => {
      mascot.setPosition(0, 620);
      makeCountryInfo("GB");
    });

    //Username example placeholder
    const userData = this.registry.get("currUserData");
    const newUserData = this.registry.get("newUserData");

    this.username = newUserData.newUsername || userData.username;

    //Speech Bubbles

    const greeting = this.createSpeechBubble(
      70,
      340,
      220,
      100,
      `Welcome, ${this.username || "stranger"}!\nWhere should we explore today?`
    ).setScrollFactor(0);

    //Get data
    let countryCard = {};
    let countryId = "";
    let countryName = "";

  

    const makeCountryInfo = (id) => {
      getCountry(id)
        .then(({ countryinfo }) => {
          countryId = countryinfo.countrycode;
          countryName = countryinfo.countryname;
          return countryinfo;
        })
        .then((countryinfo) => {
          countryCard = this.createSpeechBubble(
            20,
            130,
            320,
            400,
            `${countryinfo.greeting}, ${
              this.username || "stranger"
            }!\nWelcome to ${countryinfo.countryname}.\n\nCapital: ${
              countryinfo.capital
            }\nCurrency: ${countryinfo.currency}\nPopulation: ${
              countryinfo.population
            }\n\nFun fact: ${countryinfo.funfact}`
          ).setScrollFactor(0);
          return countryCard;
        });
      popupBackButton.setVisible(true);
      popupQuizButton.setVisible(true);
      badgeandorra.setVisible(false);
      badgeaustria.setVisible(false);
      badgebelgium.setVisible(false);
      badgedenmark.setVisible(false);
      badgefinland.setVisible(false);
      badgefrance.setVisible(false);
      badgegermany.setVisible(false);
      badgegreece.setVisible(false);
      badgeiceland.setVisible(false);
      badgeireland.setVisible(false);
      badgeitaly.setVisible(false);
      badgeliechtenstein.setVisible(false);
      badgeluxembourg.setVisible(false);
      badgemalta.setVisible(false);
      badgemonaco.setVisible(false);
      badgenetherlands.setVisible(false);
      badgenorway.setVisible(false);
      badgeportugal.setVisible(false);
      badgesanmarino.setVisible(false);
      badgespain.setVisible(false);
      badgesweden.setVisible(false);
      badgeswitzerland.setVisible(false);
      badgeturkey.setVisible(false);
      badgeunitedkingdom.setVisible(false);

      return countryCard;
    };

    //Back Button

    const backButton = this.add.graphics();
    backButton.fillStyle(0xa57261, 1);
    backButton.fillRoundedRect(140, 550, 100, 55, 20);

    const backText = this.add.text(158, 565, "BACK", {
      fontSize: "24px",
      fontFamily: "Roboto",
      fill: "#ffffff",
    });

    const popupBackButton = this.add.container();
    popupBackButton.setScrollFactor(0);
    popupBackButton.setInteractive(
      new Phaser.Geom.Rectangle(140, 550, 100, 55),
      Phaser.Geom.Rectangle.Contains
    );

    popupBackButton.add([backButton, backText]);

    popupBackButton.setVisible(false);

    popupBackButton.on("pointerdown", () => {
      mascot.setPosition(0, 740);
      countryCard.setVisible(false);
      popupBackButton.setVisible(false);
      popupQuizButton.setVisible(false);
      badgeandorra.setVisible(true);
      badgeaustria.setVisible(true);
      badgebelgium.setVisible(true);
      badgedenmark.setVisible(true);
      badgefinland.setVisible(true);
      badgefrance.setVisible(true);
      badgegermany.setVisible(true);
      badgegreece.setVisible(true);
      badgeiceland.setVisible(true);
      badgeireland.setVisible(true);
      badgeitaly.setVisible(true);
      badgeliechtenstein.setVisible(true);
      badgeluxembourg.setVisible(true);
      badgemalta.setVisible(true);
      badgemonaco.setVisible(true);
      badgenetherlands.setVisible(true);
      badgenorway.setVisible(true);
      badgeportugal.setVisible(true);
      badgesanmarino.setVisible(true);
      badgespain.setVisible(true);
      badgesweden.setVisible(true);
      badgeswitzerland.setVisible(true);
      badgeturkey.setVisible(true);
      badgeunitedkingdom.setVisible(true);
    });

    // Quiz Button

    const quizButton = this.add.graphics();
    backButton.fillStyle(0x127475, 1);
    backButton.fillRoundedRect(250, 550, 100, 55, 20);

    const quizText = this.add.text(272, 565, "QUIZ", {
      fontSize: "24px",
      fontFamily: "Roboto",
      fill: "#ffffff",
    });

    const popupQuizButton = this.add.container();
    popupQuizButton.setScrollFactor(0);
    popupQuizButton.setInteractive(
      new Phaser.Geom.Rectangle(250, 550, 100, 55),
      Phaser.Geom.Rectangle.Contains
    );

    popupQuizButton.add([quizButton, quizText]);

    popupQuizButton.setVisible(false);

    popupQuizButton.on("pointerdown", () => {
      let quizQuestionNum = 0;
      let question1Correct = 0;
      let question2Correct = 0;
      let question3Correct = 0;
      let question4Correct = 0;
      let question5Correct = 0;
      let totalCorrect = 0;
      this.scene.start("Quiz", {
        countryName,
        countryId,
        quizQuestionNum,
        question1Correct,
        question2Correct,
        question3Correct,
        question4Correct,
        question5Correct,
        totalCorrect,
      });
    });

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
      fontSize: 22,
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
