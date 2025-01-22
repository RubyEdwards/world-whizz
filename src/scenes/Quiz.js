import { Scene } from "phaser";
import {
  changeUserCountryStatus,
  changeUserQuestionStatus,
  getQuiz,
} from "../api";
import { checkAnswer } from "../../utils/util";

export class Quiz extends Scene {
  constructor() {
    super("Quiz");
  }
  init() {}
  graphics;

  create(data) {
    const sfxcorrect = this.sound.add("sfx-correct");
    const sfxwrong = this.sound.add("sfx-wrong");
    const sfxapplause = this.sound.add("sfx-applause");
    const sfxfail = this.sound.add("sfx-fail");

    this.add.image(0, 0, "worldmapbkg").setOrigin(0);

    this.mascot = this.add
      .sprite(0, 700, "mascot1")
      .setDisplayOrigin(0, 1)
      .setScale(0.5)
      .setDepth(1)
      .playAfterDelay("blink", Math.random() * 3000);

    //quiz card
    const cardX = 32;
    const cardY = 32;
    const cardWidth = 300;
    const cardHeight = 600;

    const graphics = this.add.graphics();
    graphics.fillStyle(0xcfe795, 1);
    graphics.fillRoundedRect(cardX, cardY, cardWidth, cardHeight, 16);
    graphics.lineStyle(2, 0xa57261, 1);
    graphics.strokeRoundedRect(
      cardX + 24,
      cardY + 24,
      cardWidth - 48,
      cardHeight - 48,
      8
    );

    //change to Game screen when clicked outside quiz card
    this.input.on("pointerdown", (pointer) => {
      if (
        pointer.x < cardX ||
        pointer.x > cardX + cardWidth ||
        pointer.y < cardY ||
        pointer.y > cardY + cardHeight
      ) {
        this.scene.start("Game");
      }
    });

    //triangles
    let quizPage1Bar = this.add.triangle(
      125,
      110,
      0,
      -15,
      0,
      15,
      25,
      0,
      0xffffff
    );
    let quizPage2Bar = this.add.triangle(
      148,
      110,
      0,
      -15,
      0,
      15,
      25,
      0,
      0xffffff
    );
    let quizPage3Bar = this.add.triangle(
      171,
      110,
      0,
      -15,
      0,
      15,
      25,
      0,
      0xffffff
    );
    let quizPage4Bar = this.add.triangle(
      194,
      110,
      0,
      -15,
      0,
      15,
      25,
      0,
      0xffffff
    );
    let quizPage5Bar = this.add.triangle(
      214,
      110,
      0,
      -15,
      0,
      15,
      25,
      0,
      0xffffff
    );

    if (data.question1Correct === 2) {
      quizPage1Bar.setFillStyle(0x10c74d);
      let info = {
        countryname: data.countryName,
        username: data.username,
        question: "question1correct",
      };
      changeUserQuestionStatus(info);
    } else if (data.question1Correct === 1) {
      quizPage1Bar.setFillStyle(0xf8b5b5);
    }
    if (data.question2Correct === 2) {
      quizPage2Bar.setFillStyle(0x10c74d);
    } else if (data.question2Correct === 1) {
      quizPage2Bar.setFillStyle(0xf8b5b5);
    }
    if (data.question3Correct === 2) {
      quizPage3Bar.setFillStyle(0x10c74d);
    } else if (data.question3Correct === 1) {
      quizPage3Bar.setFillStyle(0xf8b5b5);
    }
    if (data.question4Correct === 2) {
      quizPage4Bar.setFillStyle(0x10c74d);
    } else if (data.question4Correct === 1) {
      quizPage4Bar.setFillStyle(0xf8b5b5);
    }
    if (data.question5Correct === 2) {
      quizPage5Bar.setFillStyle(0x10c74d);
    } else if (data.question5Correct === 1) {
      quizPage5Bar.setFillStyle(0xf8b5b5);
    }

    //star
    const star = this.add.star(245, 95, 5, 20, 10, 0xffffff, 1);
    star.setRotation(-Math.PI / 1.7);

    const quizResults = () => {
      star.setFillStyle(0xfff700);

      let resultsMessage = "";

      if (data.totalCorrect >= 5) {
        sfxapplause.play();
        console.log("Well done! You nailed it!");
        resultsMessage = "You got 5/5 correct!\nWell done! You nailed it!";
        let info = { countryname: data.countryName, username: data.username };
        changeUserCountryStatus(info);
      }
      if (data.totalCorrect === 4) {
        console.log("Close but no cigar!");
        resultsMessage = "You got 4/5 correct!\nClose but no cigar!";
      }
      if (data.totalCorrect === 3) {
        console.log("Middling!");
        resultsMessage = "You got 3/5 correct!\nMiddling!";
      }
      if (data.totalCorrect === 2) {
        console.log("Room for improvement!");
        resultsMessage = "You got 2/5 correct!\nRoom for improvement!";
      }
      if (data.totalCorrect === 1) {
        console.log("Let's do better next time!");
        resultsMessage = "You got 1/5 correct!\nLet's do better next time!";
      }
      if (data.totalCorrect === 0) {
        sfxfail.play();
        console.log("Oopsie!");
        resultsMessage = "You got 0/5 correct!\nOopsie!";
      }

      const resultsText = this.add
        .text(75, 130, resultsMessage, {
          fontSize: "24px",
          fontFamily: "Roboto",
          fill: "#2d2d2d",
          wordWrap: { width: 220 },
          align: "center",
        })
        .setOrigin(0);

      //button to try again
      const tryAgainGraphics = this.add.graphics();
      tryAgainGraphics.fillStyle(0x127475, 1);
      const tryAgainButton = tryAgainGraphics.fillRoundedRect(
        0,
        0,
        210,
        50,
        16
      );

      const tryAgainText = this.add
        .text(0, 13, "TRY AGAIN", {
          fontSize: "20px",
          fontFamily: "Roboto",
          fill: "#ffffff",
          align: "center",
          fixedWidth: 210,
          fixedHeight: 50,
        })
        .setOrigin(0)
        .setInteractive({ useHandCursor: true });

      let tryAgainContainer = this.add.container(
        this.scale.width / 2 - 100,
        300,
        [tryAgainButton, tryAgainText]
      );

      tryAgainText.on("pointerdown", () => {
        data.totalCorrect = 0;
        data.quizQuestionNum = 0;
        data.question1Correct = 0;
        data.question2Correct = 0;
        data.question3Correct = 0;
        data.question4Correct = 0;
        data.question5Correct = 0;
        this.scene.restart();
      });

      //button to go to map
      const toMapGraphics = this.add.graphics();
      toMapGraphics.fillStyle(0xa57261, 1);
      const toMapButton = toMapGraphics.fillRoundedRect(0, 0, 210, 50, 16);

      const toMapText = this.add
        .text(0, 13, "TO MAP", {
          fontSize: "20px",
          fontFamily: "Roboto",
          fill: "#ffffff",
          align: "center",
          fixedWidth: 210,
          fixedHeight: 50,
        })
        .setOrigin(0)
        .setInteractive({ useHandCursor: true });

      let toMapContainer = this.add.container(this.scale.width / 2 - 100, 380, [
        toMapButton,
        toMapText,
      ]);

      toMapText.on("pointerdown", () => {
        this.scene.start("Game");
      });

      //button to go to journal
      const toJournalGraphics = this.add.graphics();
      toJournalGraphics.fillStyle(0xa57261, 1);
      const toJournalButton = toJournalGraphics.fillRoundedRect(
        0,
        0,
        210,
        50,
        16
      );

      const toJournalText = this.add
        .text(0, 13, "TO JOURNAL", {
          fontSize: "20px",
          fontFamily: "Roboto",
          fill: "#ffffff",
          align: "center",
          fixedWidth: 210,
          fixedHeight: 50,
        })
        .setOrigin(0)
        .setInteractive({ useHandCursor: true });

      let toJournalContainer = this.add.container(
        this.scale.width / 2 - 100,
        460,
        [toJournalButton, toJournalText]
      );

      toJournalText.on("pointerdown", () => {
        this.scene.start("Journal");
      });
    };

    data.quizQuestionNum += 1;

    if (data.quizQuestionNum >= 6) {
      quizResults();
    }

    //calling quiz from api
    this.quiz = {
      question: "",
      answers: [],
      correctAnswer: "",
    };
    let countryId = data.countryId;
    let quizQuestionNum = data.quizQuestionNum;

    let quizButtonsToggle = true;

    const makeQuiz = () => {
      getQuiz(countryId, quizQuestionNum).then((quiz) => {
        this.quiz = {
          question: quiz.question,
          answers: quiz.answers,
          correctAnswer: quiz.correctAnswer,
        };
        const question = this.quiz.question;
        const rectWidth = 220;
        const rectHeight = 50;
        const centerX = this.scale.width / 2;
        const cornerRadius = 16;

        const questionText = this.add
          .text(
            centerX - rectWidth / 2,
            130,
            `${quizQuestionNum}. ${this.quiz.question}`,
            {
              fontSize: "18px",
              fontFamily: "Roboto",
              fill: "#2d2d2d",
              wordWrap: { width: rectWidth },
              align: "left",
            }
          )
          .setOrigin(0, 0);

        this.quiz.answers.forEach((option, index) => {
          const y = 250 + index * 70;
          const graphics = this.add.graphics();
          let quizButtonColour = graphics.fillStyle(0x127475, 1);
          let quizButtons = graphics.fillRoundedRect(
            0,
            0,
            rectWidth,
            rectHeight,
            cornerRadius
          );

          const answersText = this.add
            .text(0, 13, option, {
              fontSize: "20px",
              fontFamily: "Roboto",
              fill: "#ffffff",
              align: "center",
              fixedWidth: 220,
              fixedHeight: 50,
            })
            .setOrigin(0)
            .setInteractive({ useHandCursor: true });

          let questionContainer = this.add.container(
            centerX - rectWidth / 2,
            y,
            [quizButtons, answersText]
          );

          questionContainer.name = option;

          answersText.once("pointerdown", () => {
            if (quizButtonsToggle) {
              if (checkAnswer(quiz, questionContainer.name)) {
                sfxcorrect.play();
                console.log(quizButtonColour, "quizButtonColour");
                console.log(quizButtonColour.id, "quizButtonColour");
                data.totalCorrect += 1;
                console.log(data.totalCorrect);

                quizButtonColour = graphics.fillStyle(0x10c74d, 1);
                quizButtons = graphics.fillRoundedRect(
                  0,
                  0,
                  rectWidth,
                  rectHeight,
                  cornerRadius
                );

                if (quizQuestionNum === 1) {
                  quizPage1Bar.setFillStyle(0x10c74d);
                  data.question1Correct = 2;
                }
                if (quizQuestionNum === 2) {
                  quizPage2Bar.setFillStyle(0x10c74d);
                  data.question2Correct = 2;
                }
                if (quizQuestionNum === 3) {
                  quizPage3Bar.setFillStyle(0x10c74d);
                  data.question3Correct = 2;
                }
                if (quizQuestionNum === 4) {
                  quizPage4Bar.setFillStyle(0x10c74d);
                  data.question4Correct = 2;
                }
                if (quizQuestionNum === 5) {
                  quizPage5Bar.setFillStyle(0x10c74d);
                  data.question5Correct = 2;
                }
              } else {
                sfxwrong.play();
                quizButtonColour = graphics.fillStyle(0xf8b5b5, 1);
                quizButtons = graphics.fillRoundedRect(
                  0,
                  0,
                  rectWidth,
                  rectHeight,
                  cornerRadius
                );
                if (quizQuestionNum === 1) {
                  quizPage1Bar.setFillStyle(0xf8b5b5);
                  data.question1Correct = 1;
                }
                if (quizQuestionNum === 2) {
                  quizPage2Bar.setFillStyle(0xf8b5b5);
                  data.question2Correct = 1;
                }
                if (quizQuestionNum === 3) {
                  quizPage3Bar.setFillStyle(0xf8b5b5);
                  data.question3Correct = 1;
                }
                if (quizQuestionNum === 4) {
                  quizPage4Bar.setFillStyle(0xf8b5b5);
                  data.question4Correct = 1;
                }
                if (quizQuestionNum === 5) {
                  quizPage5Bar.setFillStyle(0xf8b5b5);
                  data.question5Correct = 1;
                }
              }
              quizButtonsToggle = false;
            }
          });
        });

        //next button
        const nextButtonY = 240 + this.quiz.answers.length * 70 + 20;
        const nextButtonWidth = 120;
        const nextButtonHeight = 40;
        const nextButtonRadius = 8;

        const nextButtonGraphics = this.add.graphics();
        nextButtonGraphics.fillStyle(0x884630, 1);
        nextButtonGraphics.fillRoundedRect(
          centerX - nextButtonWidth / 2,
          nextButtonY,
          nextButtonWidth,
          nextButtonHeight,
          nextButtonRadius
        );

        this.add
          .text(centerX, nextButtonY + nextButtonHeight / 2, "NEXT >", {
            fontSize: "16px",
            fontFamily: "Roboto",
            fill: "#ffffff",
          })
          .setOrigin(0.5, 0.5);

        nextButtonGraphics.setInteractive(
          new Phaser.Geom.Rectangle(
            centerX - nextButtonWidth / 2,
            nextButtonY,
            nextButtonWidth,
            nextButtonHeight
          ),
          Phaser.Geom.Rectangle.Contains
        );

        //click on button
        const gotoNextQuestion = () => {
          this.scene.restart();
        };
        nextButtonGraphics.on("pointerdown", () => {
          gotoNextQuestion();
        });
      });
    };

    if (data.quizQuestionNum < 6) {
      makeQuiz();
    }
  }
}
