import { Scene } from "phaser";

export class Preloader extends Scene {
  constructor() {
    super("Preloader");
  }

  init() {
    //  We loaded this image in our Boot Scene, so we can display it here
    this.add.image(512, 384, "background");

    //  A simple progress bar. This is the outline of the bar.
    this.add.rectangle(512, 384, 468, 32).setStrokeStyle(1, 0xffffff);

    //  This is the progress bar itself. It will increase in size from the left based on the % of progress.
    const bar = this.add.rectangle(512 - 230, 384, 4, 28, 0xffffff);

    //  Use the 'progress' event emitted by the LoaderPlugin to update the loading bar
    this.load.on("progress", (progress) => {
      //  Update the progress bar (our bar is 464px wide, so 100% = 464px)
      bar.width = 4 + 460 * progress;
    });
  }

  preload() {
    
    this.load.setPath("assets");

    this.load.image("mascot1", "wwmascot1a.png");
    this.load.image("mascot2", "wwmascot1b.png");
    this.load.image("mascot3", "wwmascot1c.png");

    this.load.image("worldmap", "worldmap.png");

    this.load.image("worldmapbkg", "worldmapbkg.png");

    this.load.image("mouse", "cursor.png");

    this.load.image("badgebasic", "badge-basic.png");
    this.load.image("badge-andorra", "badge-andorra.png");
    this.load.image("badge-austria", "badge-austria.png");
    this.load.image("badge-belgium", "badge-belgium.png");
    this.load.image("badge-denmark", "badge-denmark.png");
    this.load.image("badge-finland", "badge-finland.png");
    this.load.image("badge-france", "badge-france.png");
    this.load.image("badge-germany", "badge-germany.png");
    this.load.image("badge-greece", "badge-greece.png");
    this.load.image("badge-iceland", "badge-iceland.png");
    this.load.image("badge-ireland", "badge-ireland.png");
    this.load.image("badge-italy", "badge-italy.png");
    this.load.image("badge-liechtenstein", "badge-liechtenstein.png");
    this.load.image("badge-luxembourg", "badge-luxembourg.png");
    this.load.image("badge-malta", "badge-malta.png");
    this.load.image("badge-monaco", "badge-monaco.png");
    this.load.image("badge-netherlands", "badge-netherlands.png");
    this.load.image("badge-norway", "badge-norway.png");
    this.load.image("badge-portugal", "badge-portugal.png");
    this.load.image("badge-sanmarino", "badge-sanmarino.png");
    this.load.image("badge-spain", "badge-spain.png");
    this.load.image("badge-sweden", "badge-sweden.png");
    this.load.image("badge-switzerland", "badge-switzerland.png");
    this.load.image("badge-turkey", "badge-turkey.png");
    this.load.image("badge-unitedkingdom", "badge-unitedkingdom.png");

    this.load.html("loginform", "text/loginform.html");
  }

  create() {
    //  When all the assets have loaded, it's often worth creating global objects here that the rest of the game can use.
    //  For example, you can define global animations here, so we can use them in other scenes.

    //  Move to the MainMenu. You could also swap this for a Scene Transition, such as a camera fade.
    this.scene.start("MainMenu");
    // this.scene.start("Login");

    this.anims.create({
      key: "blink",
      frames: [
        { key: "mascot1", duration: 2000 },
        { key: "mascot3" },
        { key: "mascot2" },
        { key: "mascot1", duration: 50 },
        { key: "mascot2" },
        { key: "mascot3" },
        { key: "mascot2" },
        { key: "mascot1", duration: 2000 },
      ],
      frameRate: 8,
      repeat: -1,
    });
  }
}
