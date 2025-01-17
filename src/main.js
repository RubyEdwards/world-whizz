import { Boot } from "./scenes/Boot";
import { Game } from "./scenes/Game";
import { MainMenu } from "./scenes/MainMenu";
import { Preloader } from "./scenes/Preloader";
import { Quiz } from "./scenes/Quiz";
import { Login } from "./scenes/Login";

import { SignUp } from "./scenes/SignUp";

import { Journal } from "./scenes/Journal";
import { CountryFacts } from "./scenes/CountryFacts";


//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config = {
  type: Phaser.AUTO,
  width: 360,
  height: 800,
  min: {
    width: 320,
    height: 500,
  },
  max: {
    width: 430,
    height: 932,
  },
  parent: "game-container",
  backgroundColor: "#028af8",
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },

  fx: {
    glow: {
      distance: 12,
      quality: 0.1,
    },
  },
  scene: [Boot, Preloader, MainMenu, SignUp, Game, Quiz, Login, Journal, CountryFacts],
  dom: {
    createContainer: true,
  },
};

export default new Phaser.Game(config);
