import { Scene } from 'phaser';

export class Preloader extends Scene {
  constructor() {
    super('Preloader');
  }

  init() {
    this.add.rectangle(180, 384, 300, 32).setStrokeStyle(1, 0xffffff);

    const bar = this.add.rectangle(200 - 165, 384, 4, 28, 0xffffff);

    this.load.on('progress', (progress) => {
      bar.width = 4 + 300 * progress;
    });
  }

  preload() {
    //Path
    this.load.setPath('assets');

    //Images
    this.load.image('mascot1', 'wwmascot1a.png');
    this.load.image('mascot2', 'wwmascot1b.png');
    this.load.image('mascot3', 'wwmascot1c.png');

    this.load.image('ww-logo', 'ww-logo.png');

    this.load.image('worldmap', 'worldmap.png');

    this.load.image('worldmapbkg', 'worldmapbkg.png');

    this.load.image('journal-icon', 'journal-icon.png');

    this.load.image('mouse', 'cursor.png');
    this.load.image('badgeempty', 'badge-empty.png');
    this.load.image('badgebasic', 'badge-basic.png');
    this.load.image('badge-andorra', 'badge-andorra.png');
    this.load.image('badge-austria', 'badge-austria.png');
    this.load.image('badge-belgium', 'badge-belgium.png');
    this.load.image('badge-denmark', 'badge-denmark.png');
    this.load.image('badge-finland', 'badge-finland.png');
    this.load.image('badge-france', 'badge-france.png');
    this.load.image('badge-germany', 'badge-germany.png');
    this.load.image('badge-greece', 'badge-greece.png');
    this.load.image('badge-iceland', 'badge-iceland.png');
    this.load.image('badge-ireland', 'badge-ireland.png');
    this.load.image('badge-italy', 'badge-italy.png');
    this.load.image('badge-liechtenstein', 'badge-liechtenstein.png');
    this.load.image('badge-luxembourg', 'badge-luxembourg.png');
    this.load.image('badge-malta', 'badge-malta.png');
    this.load.image('badge-monaco', 'badge-monaco.png');
    this.load.image('badge-netherlands', 'badge-netherlands.png');
    this.load.image('badge-norway', 'badge-norway.png');
    this.load.image('badge-portugal', 'badge-portugal.png');
    this.load.image('badge-sanmarino', 'badge-sanmarino.png');
    this.load.image('badge-spain', 'badge-spain.png');
    this.load.image('badge-sweden', 'badge-sweden.png');
    this.load.image('badge-switzerland', 'badge-switzerland.png');
    this.load.image('badge-turkey', 'badge-turkey.png');
    this.load.image('badge-unitedkingdom', 'badge-unitedkingdom.png');

    //Audio
    this.load.audio('sfx-correct', 'sfx-correct.mp3');
    this.load.audio('sfx-wrong', 'sfx-wrong.mp3');
    this.load.audio('sfx-applause', 'sfx-applause.mp3');
    this.load.audio('sfx-fail', 'sfx-fail.mp3');
    this.load.audio('sfx-journalopen', 'sfx-journalopen.mp3');

    //HTML
    this.load.html('loginform', 'text/loginform.html');
    this.load.html('signUpForm', 'text/signUpForm.html');
  }

  create() {
    this.registry.set('currUserData', {
      username: '',
      password: '',
    });

    this.registry.set('newUserData', {
      newUsername: '',
      newPassword: '',
      newPasswordConf: '',
    });

    this.scene.start('MainMenu');

    this.anims.create({
      key: 'blink',
      frames: [
        { key: 'mascot1', duration: 2000 },
        { key: 'mascot3' },
        { key: 'mascot2' },
        { key: 'mascot1', duration: 50 },
        { key: 'mascot2' },
        { key: 'mascot3' },
        { key: 'mascot2' },
        { key: 'mascot1', duration: 2000 },
      ],
      frameRate: 8,
      repeat: -1,
    });
  }
}
