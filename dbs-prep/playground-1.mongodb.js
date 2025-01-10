use('fun-facts');

db.getCollection('countries').insertMany([
  {
    countryname: 'Andorra',
    countrycode: 'AN',
    flag_img_url:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Andorra.svg/1024px-Flag_of_Andorra.svg.png',
    countryinfo: {
      greeting: 'Hola',
      capital: 'Andorra la Vella',
      currency: 'Euro',
      population: '80,088 (2023)',
      funfact: [
        'In 2023 Andorra ranked third highest for life expectancy in Europe, at 84.04 years.',
        'More than 90% of Andorra is made up of mountains, forests, rivers, lakes and meadows.',
        'Andorra has more museums per km² than anywhere else in the world.',
        'At the summer solstice fire festivals people flip fireballs into the air - this event is listed as a United Nations Educational, Scientific and Cultural Organization (UNESCO) Intangible Cultural Heritage.',
        'Andorra has never had an army or Ministry of Defence.',
      ],
    },
    quiz: [
      {
        question: 'What mountain range is Andorra located in?',
        answers: ['Alps', 'Pyrenees', 'Carpathians', 'Apennines'],
        correctAnswer: 'Pyrenees',
      },
      {
        question: 'What is the official language of Andorra?',
        answers: ['Spanish', 'French', 'Catalan', 'Portuguese'],
        correctAnswer: 'Catalan',
      },
      {
        question: 'Which two countries border Andorra?',
        answers: [
          'France and Spain',
          'Italy and Spain',
          'France and Portugal',
          'Spain and Portugal',
        ],
        correctAnswer: 'France and Spain',
      },
      {
        question: 'What type of government does Andorra have?',
        answers: [
          'Parliamentary Republic',
          'Constitutional Monarchy',
          'Parliamentary Co-Principality',
          'Federal Republic',
        ],
        correctAnswer: 'Parliamentary Co-Principality',
      },
      {
        question: 'Andorra is not a member of which organization?',
        answers: [
          'European Union',
          'United Nations',
          'Council of Europe',
          'Schengen Area',
        ],
        correctAnswer: 'European Union',
      },
    ],
  },
  {
    countryname: 'Austria',
    countrycode: 'AU',
    flag_img_url:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/1024px-Flag_of_Austria.svg.png',
    countryinfo: {
      greeting: 'German',
      capital: 'Vienna',
      currency: 'Euro',
      population: '9.132 million (2023)',
      funfact: [
        'Approximately one quarter of the population of Austria lives in Vienna.',
        "Vienna is home to the world's oldest zoo, Tiergarten Schönbrunn, founded in 1752.",
        'More than 62% of Austria is covered by the Austrian Alps, with around 700 peaks higher than 3,000 metres.',
        'Back in 1905 an Austro-Hungarian citizen, Baroness Bertha von Suttner, was the first woman to win the Nobel Peace Prize.',
        'Austria was the first country to issue postcards. Back in 1869 when they were first sold they cost half the price of a regular letter.',
      ],
    },
    quiz: [
      {
        question: 'Which famous composer was born in Salzburg, Austria?',
        answers: ['Beethoven', 'Mozart', 'Bach', 'Chopin'],
        correctAnswer: 'Mozart',
      },
      {
        question:
          'Austria is home to the headquarters of which international organization?',
        answers: [
          'North Atlantic Treaty Organisation (NATO)',
          'Organization of the Petroleum Exporting Countires (OPEC)',
          'United Nations (UN)',
          'World Health Organization (WHO)',
        ],
        correctAnswer:
          'Organization of the Petroleum Exporting Countires (OPEC)',
      },
      {
        question: 'Austria shares its longest border with which country?',
        answers: ['Germany', 'Switzerland', 'Hungary', 'Italy'],
        correctAnswer: 'Germany',
      },
      {
        question: 'What is the name of the famous palace in Vienna?',
        answers: [
          'Schönbrunn Palace',
          'Neuschwanstein Castle',
          'Buckingham Palace',
          'Versailles',
        ],
        correctAnswer: 'Schönbrunn Palace',
      },
      {
        question: 'Austria is famous for which of the following sports?',
        answers: ['Ice hockey', 'Skiing', 'Sailing', 'Football'],
        correctAnswer: 'Skiing',
      },
    ],
  },
  {
    countryname: 'Belgium',
    countrycode: 'BG',
    flag_img_url:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/1024px-Flag_of_Belgium.svg.png',
    countryinfo: {
      greeting: 'Dag',
      capital: 'Brussels',
      currency: 'Euro',
      population: '11.82 million (2023)',
      funfact: [
        'Despite the name, some historians claim that French fries were actually invented in Belgium in the 1600s.',
        'BMI (Body Mass Index) was invented by Adolphe Quetelet, a Belgian, in 1832.',
        'Belgium went for 652 days without a government between December 2018 and October 2020.',
        'Belgium has more castles per km² than any other country.',
        'Belgium has over 650 varieties of beer, as well as 408 breweries.',
      ],
    },
    quiz: [
      {
        question: 'Belgium is known for which sweet treat?',
        answers: ['Gelato', 'Waffles', 'Tiramisu', 'Churros'],
        correctAnswer: 'Waffles',
      },
      {
        question: 'What are the three official languages of Belgium?',
        answers: [
          'French, Dutch, German',
          'French, Spanish, Dutch',
          'German, Italian, Dutch',
          'French, Dutch, English',
        ],
        correctAnswer: 'French, Dutch, German',
      },
      {
        question:
          'Which city in Belgium is home to the European Union headquarters?',
        answers: ['Antwerp', 'Bruges', 'Brussels', 'Ghent'],
        correctAnswer: 'Brussels',
      },
      {
        question: 'What type of beer is Belgium particularly famous for?',
        answers: ['Lager', 'Ale', 'Trappist Beer', 'Stout'],
        correctAnswer: 'Trappist Beer',
      },
      {
        question: 'Belgium is known for producing which luxury product?',
        answers: ['Perfumes', 'Diamonds', 'Watches', 'Chocolates'],
        correctAnswer: 'Chocolates',
      },
    ],
  },
  {
    countryname: 'Denmark',
    countrycode: 'DN',
    flag_img_url:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/1024px-Flag_of_Denmark.svg.png',
    countryinfo: {
      greeting: 'Hej',
      capital: 'Copenhagen',
      currency: 'Danish Krone',
      population: '5.947 million (2023)',
      funfact: [
        'There is no word meaning "please" in the Danish language.',
        'Denmark has the oldest flag in the world (first acknowledged in 1219).',
        'Danish pastry is called "Viennese bread" in Denmark because it was first introduced to the country by Austrian bakers in the 1840s.',
        "Denmark doesn't have any mountains.",
        'Denmark was the first country to legalise same-sex unions in 1989.',
      ],
    },
    quiz: [
      {
        question: 'Which Danish author wrote "The Little Mermaid"?',
        answers: [
          'Hans Christian Andersen',
          'Charles Perrault',
          'J.R.R. Tolkien',
          'Brothers Grimm',
        ],
        correctAnswer: 'Hans Christian Andersen',
      },
      {
        question:
          'Denmark is known for pioneering which environmental initiative?',
        answers: [
          'Plastic Recycling',
          'Wind Energy',
          'Solar Panels',
          'Electric Vehicles',
        ],
        correctAnswer: 'Wind Energy',
      },
      {
        question:
          'What is the name of the famous amusement park in Copenhagen?',
        answers: [
          'Disneyland',
          'Tivoli Gardens',
          'Europa Park',
          'Magic Kingdom',
        ],
        correctAnswer: 'Tivoli Gardens',
      },
      {
        question: 'Denmark is part of which group of countries?',
        answers: ['Baltic States', 'Nordic Countries', 'Balkans', 'Benelux'],
        correctAnswer: 'Nordic Countries',
      },
      {
        question:
          'What iconic Danish building block toy brand is globally famous?',
        answers: ['Playmobil', 'LEGO', 'Meccano', 'K’Nex'],
        correctAnswer: 'LEGO',
      },
    ],
  },
  {
    countryname: 'Finland',
    countrycode: 'FN',
    flag_img_url:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/800px-Flag_of_Finland.svg.png',
    countryinfo: {
      greeting: 'Hyvää päivää',
      capital: 'Helsinki',
      currency: 'Euro',
      population: '5.584 million (2023)',
      funfact: [
        'Finns consume approximately 12kg of coffee a year on average.',
        "Finland celebrates 'National Sleepy Head Day' on 27th July by playing pranks on late sleepers.",
        'Finnish children usually have 2 birthday parties - one with their friends and one with their families.',
        '74% of Finland is covered by forest.',
        'Finland has more heavy metal bands per capita than any other country in the world.',
      ],
    },
    quiz: [
      {
        question: 'What is Finland’s official language along with Finnish?',
        answers: ['Swedish', 'Norwegian', 'Danish', 'Russian'],
        correctAnswer: 'Swedish',
      },
      {
        question: 'Finland is famous for which natural phenomenon?',
        answers: [
          'Northern Lights (Aurora Borealis)',
          'Volcanos',
          'Hurricanes',
          'Geysers',
        ],
        correctAnswer: 'Northern Lights (Aurora Borealis)',
      },
      {
        question: 'Which of these is a traditional Finnish sauna feature?',
        answers: [
          'Hot Spring Baths',
          'Steam and Birch Twigs',
          'Mud Baths',
          'Ice Sculptures',
        ],
        correctAnswer: 'Steam and Birch Twigs',
      },
      {
        question: 'What is Finland’s nickname due to its geography?',
        answers: [
          'Land of Fire and Ice',
          'Land of a Thousand Lakes',
          'Land of the Midnight Sun',
          'Land of Mountains',
        ],
        correctAnswer: 'Land of a Thousand Lakes',
      },
      {
        question:
          'Finland is consistently ranked among the top countries in the world for which quality of life factor?',
        answers: ['Education', 'Happiness', 'Healthcare', 'Economy'],
        correctAnswer: 'Happiness',
      },
    ],
  },
  {
    countryname: 'France',
    countrycode: 'FR',
    flag_img_url:
      'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1024px-Flag_of_France.svg.png',
    countryinfo: {
      greeting: 'Bonjour',
      capital: 'Paris',
      currency: 'Euro',
      population: '68.17 Million (2023)',
      funfact: [
        'In France since 2016 it has been forbidden to throw away food that is still edible.',
        'France was the first European country to make fitting seatbelts in cars compulsory.',
        'The Tour de France has been held every July since 1903.',
        "Louis XIX was said to have been king for only 22 minutes (while signing his father's abdication document).",
        'France had the first manned hot air balloon flight in 1783.',
      ],
    },
    quiz: [
      {
        question:
          'What is the name of the famous museum in Paris that houses the Mona Lisa?',
        answers: [
          'Musée d’Orsay',
          'The Louvre',
          'Centre Pompidou',
          'Musée Rodin',
        ],
        correctAnswer: 'The Louvre',
      },
      {
        question:
          'Which French region is famous for producing a white sparkling wine?',
        answers: ['Bordeaux', 'Burgundy', 'Champagne', 'Provence'],
        correctAnswer: 'Champagne',
      },
      {
        question:
          'What is the name of the French national holiday celebrated on July 14th?',
        answers: [
          'Bastille Day',
          'Liberation Day',
          'Revolution Day',
          'Independence Day',
        ],
        correctAnswer: 'Bastille Day',
      },
      {
        question:
          'Which French city is known as the culinary capital of France?',
        answers: ['Marseille', 'Lyon', 'Nice', 'Toulouse'],
        correctAnswer: 'Lyon',
      },
      {
        question:
          'What iconic French monument was gifted to the United States?',
        answers: [
          'Arc de Triomphe',
          'Eiffel Tower',
          'Statue of Liberty',
          'Notre Dame',
        ],
        correctAnswer: 'Statue of Liberty',
      },
    ],
  },
  {
    countryname: 'Germany',
    countrycode: 'GM',
    flag_img_url:
      'https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1024px-Flag_of_Germany.svg.png',
    countryinfo: {
      greeting: 'Hallo',
      capital: 'Berlin',
      currency: 'Euro',
      population: '84.48 million (2023)',
      funfact: [
        'Beer is considered to be a food in Bavaria.',
        'German shares 60% of its vocabulary with English.',
        'Germany has more football fan clubs than any other country.',
        "Berlin has Europe's biggest train station.",
        'Fanta was created in Germany during World War II because they were unable to import Coca-Cola syrup.',
      ],
    },
    quiz: [
      {
        question: 'Which German city is known as the birthplace of Beethoven?',
        answers: ['Munich', 'Bonn', 'Berlin', 'Hamburg'],
        correctAnswer: 'Bonn',
      },
      {
        question:
          'What is the traditional German dish made of fermented cabbage?',
        answers: ['Bratwurst', 'Schnitzel', 'Sauerkraut', 'Pretzel'],
        correctAnswer: 'Sauerkraut',
      },
      {
        question:
          'What German highway is famous for having stretches without a speed limit?',
        answers: ['Autobahn', 'Route 66', 'Interstate 5', 'Bundesstraße'],
        correctAnswer: 'Autobahn',
      },
      {
        question:
          'Germany is the largest producer of what type of energy in Europe?',
        answers: ['Solar', 'Wind', 'Nuclear', 'Hydropower'],
        correctAnswer: 'Wind',
      },
      {
        question: 'Which major German festival is celebrated in Munich?',
        answers: ['Oktoberfest', 'Karneval', 'Wurstfest', 'Volksfest'],
        correctAnswer: 'Oktoberfest',
      },
    ],
  },
  {
    countryname: 'Greece',
    countrycode: 'GR',
    flag_img_url:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/1024px-Flag_of_Greece.svg.png',
    countryinfo: {
      greeting: 'Γειά σου',
      capital: 'Athens',
      currency: 'Euro',
      population: '10.36 million (2023)',
      funfact: [
        'The Ancient Greeks invented theatre, but only males could be actors.',
        'Greece is one of the sunniest countries in the world, with about 3,000 hours of sunshine a year.',
        '80% of Greece is made up of mountains.',
        'The Greek island Santorini has red, black and white beaches.',
        "Greece's national animal is a dolphin, representing the country's maritime heritage.",
      ],
    },
    quiz: [
      {
        question:
          'What is the name of the hill in Athens that houses the Parthenon?',
        answers: ['Mount Olympus', 'Acropolis', 'Delphi', 'Meteora'],
        correctAnswer: 'Acropolis',
      },
      {
        question:
          'Which Greek island is famous for its white-washed buildings and blue domes?',
        answers: ['Crete', 'Santorini', 'Rhodes', 'Mykonos'],
        correctAnswer: 'Santorini',
      },
      {
        question:
          'Greece is considered the birthplace of which system of governance?',
        answers: ['Monarchy', 'Democracy', 'Communism', 'Republic'],
        correctAnswer: 'Democracy',
      },
      {
        question: 'Which sea borders Greece to the east?',
        answers: [
          'Aegean Sea',
          'Mediterranean Sea',
          'Ionian Sea',
          'Adriatic Sea',
        ],
        correctAnswer: 'Aegean Sea',
      },
      {
        question:
          'What is the traditional Greek dish made of meat roasted on a vertical spit?',
        answers: ['Souvlaki', 'Moussaka', 'Gyro', 'Baklava'],
        correctAnswer: 'Gyro',
      },
    ],
  },
]);
