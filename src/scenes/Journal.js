import { Scene } from 'phaser';
import { getCountries } from '../api';

export class Journal extends Scene {
  constructor() {
    super('Journal');
  }

  create() {
    //background
    this.add.image(0, 0, 'worldmapbkg').setOrigin(0);

    //mascot
    this.mascot = this.add
      .sprite(210, 700, 'mascot1')
      .setDisplayOrigin(0, 1)
      .setScale(0.4)
      .setDepth(1)
      .playAfterDelay('blink', Math.random() * 3000);

    //card journal
    const screenHeight = this.scale.height;
    const margin = 32;
    const cardHeight = screenHeight - margin * 2;
    const graphics = this.add.graphics();

    graphics.fillStyle(0xead4ba, 1);
    graphics.fillRoundedRect(32, margin, 300, cardHeight, 16);

    graphics.lineStyle(2, 0x8c0e00, 1);
    graphics.strokeRoundedRect(56, margin + 24, 252, cardHeight - 48, 8);

    const userData = this.registry.get('currUserData');
    const newUserData = this.registry.get('newUserData');
    this.username = newUserData.newUsername || userData.username;

    //username
    const rectWidth = 220;
    const centerX = this.scale.width / 2;

    this.add
      .text(
        centerX - rectWidth / 2 + 8,
        90,
        `${this.username || 'Stranger'}'s Travel Journal`,
        {
          fontSize: '22px',
          fontFamily: 'Patrick Hand',
          fill: '#2d2d2d',
          wordWrap: { width: rectWidth },
          align: 'center',
        }
      )
      .setOrigin(0, 0);

    //countries list from database
    this.countriesList(centerX, rectWidth);
  }

  countriesList(centerX, rectWidth) {
    const positionYStart = 130;
    const lineHeight = 22;

    getCountries().then((countries) => {
      countries.forEach((country, index) => {
        const positionY = positionYStart + index * lineHeight;

        //badge
        this.add
          .image(centerX - rectWidth / 2 + 20, positionY, 'badgeempty')
          .setScale(0.5);

        const countryText = this.add.text(
          centerX - rectWidth / 2 + 40,
          positionY - 7,
          country.countryinfo.countryname,
          {
            fontSize: '16px',
            fontFamily: 'Patrick Hand',
            fill: '#2d2d2d',
          }
        );

        //click on country name to go to country facts
        countryText.setInteractive();
        countryText.on('pointerdown', () => {
          this.scene.start('CountryFacts', country);
        });
      });
    });

    //back to map button
    const mapButtonY = this.scale.height - 140;
    const mapButtonWidth = 160;
    const mapButtonHeight = 40;
    const mapButtonRadius = 8;

    const mapButtonGraphics = this.add.graphics();
    mapButtonGraphics.fillStyle(0x127475, 1);
    mapButtonGraphics.fillRoundedRect(
      centerX - mapButtonWidth / 2,
      mapButtonY,
      mapButtonWidth,
      mapButtonHeight,
      mapButtonRadius
    );

    this.add
      .text(centerX, mapButtonY + mapButtonHeight / 2, 'BACK TO MAP', {
        fontSize: '16px',
        fontFamily: 'Roboto',
        fill: '#ffffff',
      })
      .setOrigin(0.5, 0.5);

    mapButtonGraphics.setInteractive(
      new Phaser.Geom.Rectangle(
        centerX - mapButtonWidth / 2,
        mapButtonY,
        mapButtonWidth,
        mapButtonHeight
      ),
      Phaser.Geom.Rectangle.Contains
    );

    mapButtonGraphics.on('pointerdown', () => {
      this.scene.start('Game');
    });
  }

  update() {
    //mascot updated
    this.mascot.y -= 10;

    if (this.mascot.y <= 720) {
      this.mascot.y = 720;
    }
  }
}
