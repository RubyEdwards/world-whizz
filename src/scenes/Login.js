import { Scene } from "phaser";

export class Login extends Scene {
  constructor() {
    super("Login");
  }
 
  create() {
    this.add.image(100, 100, 'worldmap');
    this.add
      .text(185, 50, "Login", {
        fontFamily: "Arial Black",
        fontSize: 30,
        color: "#ffffff",
        stroke: "#127475",
        strokeThickness: 10,
        align: "center",
      })
      .setDepth(100)
      .setOrigin(0.5); 


     
    this.graphics = this.add.graphics()
    this.graphics.fillStyle(0xEAD4BA, 1)
    this.graphics.fillRoundedRect(30,80,300,380,20)

    const border = this.add.graphics()
    border.lineStyle(4, 0x884630, 1)
    border.strokeRoundedRect(45,95,270,350)

    const element = this.add.dom(200,200).createFromCache('loginform');
    // element.setDepth(200)
    
    element.setPerspective(800);

    element.addListener('click');

    
element.on('click', function (event)
{

    if (event.target.name === 'loginButton')
    {
        const inputUsername = this.getChildByName('username');
        const inputPassword = this.getChildByName('password');

        if (inputUsername.value !== '' && inputPassword.value !== '')
        {
            this.removeListener('click');

            this.scene.tweens.add({ targets: element.rotate3d, x: 1, w: 90, duration: 3000, ease: 'Power3' });

            this.scene.tweens.add({
                targets: element, scaleX: 2, scaleY: 2, y: 700, duration: 3000, ease: 'Power3',
                onComplete: function ()
                {
                    element.setVisible(false);
                }
            });

            text.setText(`Welcome ${inputUsername.value}`);
        }
        else
        {
            this.scene.tweens.add({ targets: text, alpha: 0.1, duration: 300, ease: 'Power3', yoyo: true });
        }
    }

});

this.tweens.add({
    targets: element,
    y: 255,
    duration: 3000,
    ease: 'Power3'
});


this.mascot = this.add
.sprite(0, 500, "mascot1")
.setDisplayOrigin(0)
.setDepth(1)
.playAfterDelay("blink", Math.random() * 3000);
    

    this.input.once("pointerdown", () => {
      this.scene.start("Game")
    });
  }

  update() {
    this.mascot.y -= 1;

    if (this.mascot.y <= 420) {
      this.mascot.y = 420;
    }
  }
  
}












