import { Scene } from 'phaser';
import { getCountries, getUserProfile } from '../api';

export class Journal extends Scene {
  constructor() {
    super('Journal');
  }

  create(data) {
    //resize to client screen
    window.addEventListener('resize', () => {
      game.scale.resize(
        document.documentElement.clientWidth,
        document.documentElement.clientHeight
      );
    });

    //background
    this.add.image(0, 0, 'worldmapbkg').setOrigin(0);

    //mascot
    this.mascot = this.add
      .sprite(210, this.scale.height * 0.83, 'mascot1')
      .setDisplayOrigin(0, 1)
      .setScale(0.4)
      .setDepth(1)
      .playAfterDelay('blink', Math.random() * 3000);

    //page sound effect
    const sfxjournalopen = this.sound.add('sfx-journalopen', { volume: 0.5 });
    sfxjournalopen.play();

    //card journal
    const screenHeight = document.documentElement.clientHeight;
    const margin = 32;
    const marginY = this.scale.height * 0.09;
    const cardHeight = screenHeight - margin * 2;
    const graphics = this.add.graphics();

    graphics.fillStyle(0xead4ba, 1);
    graphics.fillRoundedRect(32, margin, 300, cardHeight, 16);

    graphics.lineStyle(2, 0x8c0e00, 1);
    graphics.strokeRoundedRect(56, margin + 24, 252, cardHeight - 48, 8);

    //user data
    const userData = this.registry.get('currUserData');
    const newUserData = this.registry.get('newUserData');
    this.username = newUserData.newUsername || userData.username;

    //username
    const rectWidth = 220;
    const centerX = this.scale.width / 2;

    this.add
      .text(
        centerX - rectWidth / 2 + 8,
        marginY,
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
    this.countriesList(centerX, rectWidth, data);
  }

  countriesList(centerX, rectWidth, data) {
    const positionYStart = this.scale.height * 0.11;
    const lineHeight = 34;
    let heightIndex = 0;
    getCountries().then((countries) => {
      countries.forEach((country, index) => {
        if (index >= data.startIndex && index <= data.endIndex) {
          heightIndex++;
          const positionY = positionYStart + heightIndex * lineHeight;

          //badge
          getUserProfile(this.username, country.countryinfo.countryname).then(
            (result) => {
              if (result === true) {
                this.add
                  .image(
                    centerX - rectWidth / 2 + 24,
                    positionY + 2,
                    `badge-${country.countryinfo.countryname
                      .replace(/ /g, '')
                      .toLowerCase()}`
                  )
                  .setScale(0.7);
              } else {
                this.add
                  .image(
                    centerX - rectWidth / 2 + 24,
                    positionY + 2,
                    'badgeempty'
                  )
                  .setScale(0.7);
              }
            }
          );

          const countryText = this.add.text(
            centerX - rectWidth / 2 + 60,
            positionY - 9,
            country.countryinfo.countryname,
            {
              fontSize: '20px',
              fontFamily: 'Patrick Hand',
              fill: '#2d2d2d',
            }
          );

          //click on country name to go to country facts
          countryText.setInteractive({ useHandCursor: true });
          countryText.on("pointerdown", () => {
            this.scene.start("CountryFacts", country);
          });
        }
      });
    });
    
    // shared button info
    const buttonWidth = 120;
    const buttonHeight = 40;
    const buttonRadius = 8;

    //page button
    const pageButtonY = this.scale.height * 0.67;
    const pageButtonGraphics = this.add.graphics();
    pageButtonGraphics.fillStyle(0x884630, 1);
    pageButtonGraphics.fillRoundedRect(
      centerX - buttonWidth + 160 / 2,
      pageButtonY,
      buttonWidth - 40,
      buttonHeight - 5,
      buttonRadius,
      this.add
        .text(centerX, pageButtonY + buttonHeight / 2, '⇆', {
          fontSize: '30px',
          fontFamily: 'Roboto',
          fill: '#ffffff',
          align: 'center',
        })
        .setOrigin(0.5, 0.5)
    );
    pageButtonGraphics.setInteractive(
      new Phaser.Geom.Rectangle(
        centerX - buttonWidth / 2,
        pageButtonY,
        buttonWidth,
        buttonHeight
      ),
      Phaser.Geom.Rectangle.Contains
    );

    //click on button
    const changePage = () => {
      if (data.currentPage === 1) {
        data.startIndex += 12;
        data.endIndex += 12;
        heightIndex -= 12;
        data.currentPage += 1;
        this.scene.restart();
      } else {
        data.startIndex -= 12;
        data.endIndex -= 12;
        heightIndex += 12;
        data.currentPage -= 1;
        this.scene.restart();
      }
    };
    pageButtonGraphics.on("pointerdown", () => {
      changePage();
    });
    
    //back to map button
    const mapButtonY = this.scale.height * 0.74;
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
}
