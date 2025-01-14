import request from "supertest";
import app from "../server/index.js";

describe("/countries", () => {
  test("200: Return an array of all country documents", () => {
    return request(app)
      .get("/countries")
      .expect(200)
      .then(({ body }) => {
        expect(Array.isArray(body)).toBe(true);
        expect(body.length).toBe(24);
        body.forEach((country) => {
          expect(country).toMatchObject({
            _id: expect.any(String),
            countryname: expect.any(String),
            flag_img_url: expect.any(String),
            countryinfo: {
              greeting: expect.any(String),
              capital: expect.any(String),
              currency: expect.any(String),
              population: expect.any(String),
              funfact: expect.any(Array),
            },
            quiz: expect.any(Array),
            quizfacts: expect.any(Array),
          });
        });
      });
  });
});

describe("/countries/:countrycode", () => {
  test("200: Return a single country's countryinfo", () => {
    const expected = {
      greeting: "Halló",
      capital: "Reykjavík",
      currency: "Icelandic Króna",
      population: "393,600 (2023)",
      funfact: [
        "Iceland has the oldest parliament in Europe - Althingi, established in 930 AD.",
        "There is only one native land mammal in Iceland: the Arctic fox. There are no polar bears!",
        "There are no mosquitoes in Iceland thanks to its cold climate and lack of suitable breeding habitats",
        "Once an Icelandic horse leaves the country, it is not allowed to return, in order to avoid the introduction of diseases.",
        "A traditional Icelandic bread baking technique involves burying the dough near hot springs to bake slowly using natural heat.",
      ],
    };
    return request(app)
      .get("/countries/IC")
      .expect(200)
      .then(({ body: { countryinfo } }) => {
        expect(typeof countryinfo).toBe("object");
        expect(countryinfo).toEqual(expected);
      });
  });
});

describe("/countries/:countrycode/quiz", () => {
  test("200: Return a specific country's quiz object", () => {
    const expected = [
      {
        question: "Which famous composer was born in Salzburg, Austria?",
        answers: ["Beethoven", "Mozart", "Bach", "Chopin"],
        correctAnswer: "Mozart",
      },
      {
        question:
          "Austria is home to the headquarters of which international organization?",
        answers: [
          "North Atlantic Treaty Organisation (NATO)",
          "Organization of the Petroleum Exporting Countires (OPEC)",
          "United Nations (UN)",
          "World Health Organization (WHO)",
        ],
        correctAnswer:
          "Organization of the Petroleum Exporting Countires (OPEC)",
      },
      {
        question: "Austria shares its longest border with which country?",
        answers: ["Germany", "Switzerland", "Hungary", "Italy"],
        correctAnswer: "Germany",
      },
      {
        question: "What is the name of the famous palace in Vienna?",
        answers: [
          "Schönbrunn Palace",
          "Neuschwanstein Castle",
          "Buckingham Palace",
          "Versailles",
        ],
        correctAnswer: "Schönbrunn Palace",
      },
      {
        question: "Austria is famous for which of the following sports?",
        answers: ["Ice hockey", "Skiing", "Sailing", "Football"],
        correctAnswer: "Skiing",
      },
    ];
    return request(app)
      .get("/countries/AT/quiz")
      .expect(200)
      .then(({ body: { quiz } }) => {
        expect(Array.isArray(quiz)).toBe(true);
        expect(quiz.length).toBe(5);
        expect(quiz).toEqual(expected);
      });
  });
  describe("QUERIES", () => {
    test("200: Return the specified question for a specific country", () => {
      const expected = {
        question:
          "What is the name of the hill in Athens that houses the Parthenon?",
        answers: ["Mount Olympus", "Acropolis", "Delphi", "Meteora"],
        correctAnswer: "Acropolis",
      };
      return request(app)
        .get("/countries/GR/quiz?question=1")
        .expect(200)
        .then(({ body }) => {
          console.log(body);
          expect(body).toEqual(expected);
        });
    });
  });
});
