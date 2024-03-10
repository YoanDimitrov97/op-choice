export const events = [
  {
    event:
      "Mama is hosting a Tea Party, we expect you to provide your country's chocolate provisions, unless you want something bad to happen...",
    swipeLeftText: "Sure...",
    swipeRightText: "No way!",
    swipeLeftAfter: { gains: {}, loses: { food: 10 } },
    swipeRightAfter: { gains: {}, loses: { army: 10 } },
    colorScheme: "pink",
    imageUrl: "https://images.everyeye.it/img-notizie/uno-personaggi-recenti-amati-one-piece-ritorno-scena-v3-363012-1280x960.jpg",
  },
  {
    event:
      "The Revolutionary Army is asking for any kind of donation you can muster, we need everything we can get for our cause!",
    swipeLeftText: "I hate Dragon..",
    swipeRightText: "Viva Revolucion",
    swipeLeftAfter: { gains: { army: 10 }, loses: { people: 10 } },
    swipeRightAfter: { gains: { people: 10 }, loses: { money: 10 } },
    colorScheme: "lightblue",
    imageUrl: "https://static.wikia.nocookie.net/keyblade-universe/images/b/bf/Revolutionary_Army_Post_Anime_Infobox.png",
  },
  {
    event:
      "My King, it seems like Pirates have reached our port ready to pillage, what should we do?",
    swipeLeftText: "Send the Army",
    swipeRightText: "Bribe them",
    swipeLeftAfter: { gains: { people: 10 }, loses: { army: 10 } },
    swipeRightAfter: { gains: { people: 10 }, loses: { money: 10 } },
    colorScheme: "green",
    imageUrl: "https://qph.cf2.quoracdn.net/main-qimg-452719c8d42cfc59052209d24f44afca-pjlq",
  },
  {
    event:
      "News has arrived that the Pirate Buggy and his circus wanna open shop in town, should we let them?",
    swipeLeftText: "Hell NO!",
    swipeRightText: "I LOVE CIRCUS",
    swipeLeftAfter: { gains: {}, loses: { people: 10 } },
    swipeRightAfter: { gains: { people: 10 }, loses: { food: 10 } },
    colorScheme: "green",
    imageUrl: "https://preview.redd.it/one-piece-theory-about-buggy-v0-4q8ultipiwaa1.png?width=838&format=png&auto=webp&s=93a507278d77317c36473868fcc77cbad0c05457",
  },
  {
    event:
      "Our agents claim they've found rumours of the famous Captain Kuro hiding in our city, what should we do?",
    swipeLeftText: "Apprehend him!",
    swipeRightText: "He died years ago",
    swipeLeftAfter: { gains: { money: 10 }, loses: { army: 10 } },
    swipeRightAfter: { gains: {}, loses: {} },
    colorScheme: "black",
    imageUrl: "https://static.wikia.nocookie.net/onepiece/images/e/e5/Kuro_Anime_Cameo.png",
  },
];