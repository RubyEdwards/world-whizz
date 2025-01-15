import request from "supertest";
import app from "../server/index.js";

describe("/world-whizz/countries", () => {
  test("200: Return an array of all country documents", () => {
    return request(app)
      .get("/world-whizz/countries")
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

describe("/world-whizz/countries/:countrycode", () => {
  test("200: Return a single country's countryinfo", () => {
    const expected = {
      greeting: "Halló",
      capital: "Reykjavík",
      currency: "Icelandic Króna",
      population: "393,600 (2023)",
      funfact: expect.any(String),
    };
    return request(app)
      .get("/world-whizz/countries/IC")
      .expect(200)
      .then(({ body: { countryinfo } }) => {
        expect(typeof countryinfo).toBe("object");
        expect(countryinfo).toEqual(expected);
      });
  });
});

describe("/world-whizz/countries/:countrycode/quiz", () => {
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
      .get("/world-whizz/countries/AT/quiz")
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
        answers: expect.any(Array),
      };
      return request(app)
        .get("/world-whizz/countries/GR/quiz?question=1")
        .expect(200)
        .then(({ body }) => {
          expect(body).toEqual(expected);
        });
    });
  });
});

describe("/world-whizz/journal", () => {
  test("200: Return an array of all country names in alphabetical order", () => {
    const expected = [
      "Andorra",
      "Austria",
      "Belgium",
      "Denmark",
      "Finland",
      "France",
      "Germany",
      "Greece",
      "Iceland",
      "Ireland",
      "Italy",
      "Liechtenstein",
      "Luxembourg",
      "Malta",
      "Monaco",
      "Netherlands",
      "Norway",
      "Portugal",
      "San Marino",
      "Spain",
      "Sweden",
      "Switzerland",
      "Turkey",
      "United Kingdom",
    ];
    return request(app)
      .get("/world-whizz/journal")
      .expect(200)
      .then(({ body }) => {
        expect(body).toEqual(expected);
      });
  });
});

describe("/world-whizz/journal/:countryname", () => {
  test("200: Return the quizfacts for a specific country", () => {
    const expected = [
      "The UK's famous clock tower is named Elizabeth Tower.",
      "The river that runs through London is the Thames.",
      "The United Kingdom is made up of four countries.",
      "The famous prehistoric monument in England is Stonehenge.",
      "The national dish of the UK often associated with Fridays is Fish and Chips.",
    ];
    return request(app)
      .get("/world-whizz/journal/United%20Kingdom")
      .expect(200)
      .then(({ body: { quizfacts } }) => {
        expect(quizfacts).toEqual(expected);
      });
  });
});
