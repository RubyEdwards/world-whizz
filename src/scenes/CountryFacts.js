import { Scene } from "phaser";
import { getUserProfile } from "../api";

export class CountryFacts extends Scene {
  constructor() {
    super("CountryFacts");
  }

  create(data) {
    const selectedCountry = {
      name: `${data.countryinfo.countryname}`,
      badge: `badge-${data.countryinfo.countryname
        .replace(/ /g, "")
        .toLowerCase()}`,
      facts: data.quizfacts,
    };

    //background
    this.add.image(0, 0, "worldmapbkg").setOrigin(0);

    //mascot
    this.mascot = this.add
      .sprite(210, 700, "mascot1")
      .setDisplayOrigin(0, 1)
      .setScale(0.4)
      .setDepth(1)
      .playAfterDelay("blink", Math.random() * 3000);

    //page sound effect
    const sfxjournalopen = this.sound.add("sfx-journalopen");
    sfxjournalopen.play();

    //card journal
    const screenHeight = this.scale.height;
    const margin = 32;
    this.cardWidth = 300;
    const cardHeight = screenHeight - margin * 2;
    const graphics = this.add.graphics();

    graphics.fillStyle(0xead4ba, 1);
    graphics.fillRoundedRect(32, margin, this.cardWidth, cardHeight, 16);

    graphics.lineStyle(2, 0x8c0e00, 1);
    graphics.strokeRoundedRect(
      56,
      margin + 24,
      this.cardWidth - 48,
      cardHeight - 48,
      8
    );

    //username

    const userData = this.registry.get("currUserData");
    const newUserData = this.registry.get("newUserData");

    this.username = newUserData.newUsername || userData.username;

    const rectWidth = 220;
    const centerX = this.scale.width / 2;

    this.add

      .text(
        centerX - rectWidth / 2 + 8,
        90,
        `${this.username || "Stranger"}'s Travel Journal`,
        {
          fontSize: "22px",
          fontFamily: "Patrick Hand",
          fill: "#2d2d2d",
          wordWrap: { width: rectWidth },
          align: "center",
        }
      )

      .setOrigin(0, 0);

    //country detauls
    this.showCountryDetails(selectedCountry, data);
  }

  showCountryDetails(country, data) {
    const rectWidth = 220;
    const centerX = this.scale.width / 2;
    const marginLeft = (this.cardWidth - rectWidth) / 2;

    //country badge & name
    const positionY = 154;
    this.add
      .image(
        centerX - this.cardWidth / 2 + marginLeft + 30,
        positionY + 12,
        country.badge
      )
      .setScale(0.8);

    this.add.text(
      centerX - rectWidth / 2 + marginLeft + 40,
      positionY,
      country.name,
      {
        fontSize: "22px",
        fontFamily: "Patrick Hand",
        fill: "#2d2d2d",
      }
    );

    //country facts
    const factsStartY = positionY + 50;
    const factLineHeight = 90;

    country.facts.forEach((fact, index) => {
      getUserProfile(this.username, country.name).then((result) => {
        if (result === true) {
          this.add.text(
            centerX - rectWidth / 2 + marginLeft - 30,
            factsStartY + index * factLineHeight,
            `${index + 1}. ${fact}`,
            {
              fontSize: "18px",
              fontFamily: "Patrick Hand",
              fill: "#2d2d2d",
              wordWrap: { width: this.cardWidth - 2 * marginLeft },
              align: "left",
            }
          );
        } else {
          this.add.text(
            centerX - rectWidth / 2 + marginLeft - 30,
            factsStartY + index * factLineHeight,
            `${index + 1}. ???`,
            {
              fontSize: "18px",
              fontFamily: "Patrick Hand",
              fill: "#2d2d2d",
              wordWrap: { width: this.cardWidth - 2 * marginLeft },
              align: "left",
            }
          );
        }
      });
      // if results.travelJournal.THECURRENTCOUNTRY.isComplete === true
    });

    //button back to journal
    const backButtonY = this.scale.height - 140;
    const backButtonWidth = 160;
    const backButtonHeight = 40;
    const backButtonRadius = 8;

    const backButtonGraphics = this.add.graphics();
    backButtonGraphics.fillStyle(0x127475, 1);
    backButtonGraphics.fillRoundedRect(
      centerX - backButtonWidth / 2,
      backButtonY,
      backButtonWidth,
      backButtonHeight,
      backButtonRadius
    );

    this.add
      .text(centerX, backButtonY + backButtonHeight / 2, "BACK TO JOURNAL", {
        fontSize: "16px",
        fontFamily: "Roboto",
        fill: "#ffffff",
      })
      .setOrigin(0.5, 0.5);

    backButtonGraphics.setInteractive(
      new Phaser.Geom.Rectangle(
        centerX - backButtonWidth / 2,
        backButtonY,
        backButtonWidth,
        backButtonHeight
      ),
      Phaser.Geom.Rectangle.Contains
    );

    backButtonGraphics.on("pointerdown", () => {
      this.scene.start("Journal");
    });
  }
}
