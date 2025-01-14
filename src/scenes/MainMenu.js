import { Scene } from "phaser";

import WebFontFile from "./WebFontFile";

export class MainMenu extends Scene {
  constructor() {
    super("MainMenu");
  }

  preload() {

    this.load.addFile(new WebFontFile(this.load, "Press Start 2P"));

  }

  create() {
    // this.add.image(512, 384, 'background');

    this.mascot = this.add
      .sprite(0, 500, "mascot1")
      .setDisplayOrigin(0)
      .setDepth(1)
      .playAfterDelay("blink", Math.random() * 3000);

    // this.add.image(512, 300, 'logo');

const title = this.add.text(400, 300, 'Hello World!', {
			fontFamily: '"Press Start 2P"',
			fontSize: '50px'
		})

		title.setOrigin(0.5, 0.5)
	}

    // this.add
    //   .text(180, 210, "World\nWhizz", {
    //     fontFamily: "Roboto",
    //     fontSize: 70,
    //     color: "#ffffff",
    //     stroke: "#127475",
    //     strokeThickness: 10,
    //     align: "center",
    //   })
    //   .setDepth(100)
    //   .setOrigin(0.5);

    this.input.once("pointerdown", () => {
      this.scene.start("Game");
    });
  }

  update() {
    this.mascot.y -= 10;

    if (this.mascot.y <= 420) {
      this.mascot.y = 420;
    }
  }
}
