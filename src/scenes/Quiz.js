import { Scene } from "phaser";
import { getQuiz } from "../api";
import { checkAnswer } from "../../utils/util";

export class Quiz extends Scene {
  constructor() {
    super("Quiz");
  }
  init() {}
  graphics;

  create(data) {
    const quizResults = () => {
      console.log("yippie");
    };

    if (data.quizQuestionNum < 5) {
      data.quizQuestionNum += 1;
    } else if (data.quizQuestionNum >= 5) {
      quizResults();
    }

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

    //start
    const star = this.add.star(245, 95, 5, 20, 10, 0xffffff, 1);
    star.setRotation(-Math.PI / 1.7);

    //calling quiz from api
    this.quiz = {
      question: "",
      answers: [],
      correctAnswer: "",
    };
    let countryId = data.countryId;
    let quizQuestionNum = data.quizQuestionNum;

    const makeQuiz = () => {
      getQuiz(countryId, quizQuestionNum).then((quiz) => {
        this.quiz = {
          question: quiz.question,
          answers: quiz.answers,
          correctAnswer: quiz.correctAnswer,
        };
        const question = this.quiz.question;
        const rectWidth = 200;
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
          graphics.fillStyle(0x127475, 1);
          const quizButtons = graphics.fillRoundedRect(
            // centerX - rectWidth / 2,
            // y,
            0,
            0,
            rectWidth + 10,
            rectHeight,
            cornerRadius
          );

          const answersText = this.add
            .text(0, 13, option, {
              fontSize: "20px",
              fontFamily: "Roboto",
              fill: "#ffffff",
              align: "center",
              fixedWidth: 210,
              fixedHeight: 50,
            })
            .setOrigin(0)
            .setInteractive();

          let questionContainer = this.add.container(
            centerX - rectWidth / 2,
            y,
            [quizButtons, answersText]
          );

          questionContainer.name = option;

          answersText.on("pointerdown", () => {
            if (checkAnswer(quiz, questionContainer.name)) {
              console.log("we did ittttt");
              data.totalCorrect += 1;
              console.log(data.totalCorrect);
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

    makeQuiz();
  }
}
