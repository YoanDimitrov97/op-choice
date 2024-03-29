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
  {
    event:
      "The World Government wants us to raise our citizens taxes!",
    swipeLeftText: "Alright..",
    swipeRightText: "Tell them no",
    swipeLeftAfter: { gains: { army: 10 }, loses: { people: 10 } },
    swipeRightAfter: { gains: {people:10}, loses: {money:10} },
    colorScheme: "lightblue",
    imageUrl: "https://miro.medium.com/v2/resize:fit:1358/0*hllfp1sgZB3j9k6l",
  },
  {
    event:
      "Sire, it seems someone has discovered a Devil Fruit has grown on our territory...",
    swipeLeftText: "Sell it.",
    swipeRightText: "Leave it",
    swipeLeftAfter: { gains: { money: 10 }, loses: { } },
    swipeRightAfter: { gains: {food:10}, loses: {} },
    colorScheme: "red",
    imageUrl: "https://static.wikia.nocookie.net/op-rp/images/c/c3/Merameranomi.jpeg",
  },
  {
    event:
      "A neighboring island threatens war unless tribute is paid.",
    swipeLeftText: "Pay it",
    swipeRightText: "This means WAR",
    swipeLeftAfter: { gains: { }, loses: { money:10 } },
    swipeRightAfter: { gains: {money:10, people:10}, loses: {army:10,food:10} },
    colorScheme: "green",
    imageUrl: "https://static.wikia.nocookie.net/onepiece/images/3/37/Gold_Island_Infobox.png",
  },
  {
    event:
      "A mysterious illness spreads among your people...",
    swipeLeftText: "Find a Doctor",
    swipeRightText: "Let them die..",
    swipeLeftAfter: { gains: {people:10 }, loses: { money:10 } },
    swipeRightAfter: { gains: {food:10}, loses: {people:10} },
    colorScheme: "gray",
    imageUrl: "https://static.wikia.nocookie.net/onepiece/images/f/f3/Five-Day_Disease_Infobox.png",
  },
  {
    event:
      "My liege, it seems they are way too many beggars and criminals in our slums...",
    swipeLeftText: "Burn them!",
    swipeRightText: "Leave em be.",
    swipeLeftAfter: { gains: {food:20 }, loses: { people:20 } },
    swipeRightAfter: { gains: {army:10}, loses: {money:10} },
    colorScheme: "gray",
    imageUrl: "https://lh3.googleusercontent.com/VAfHIBLvEgtgtMSOhYg2dKHfU0hd7Z2KLLcT57PgTsb8KO5tEW4iA9lynstl2O-aOToEKcwZCFXnJKR6YqeekRNbvYU49ucobfCtnKIIv5yQLIz0ky7toJIxt0NThk6ZBRe_wYEKpiRsTNKwssAsIqepiT5hhuXaE5FwaCHSxkI5eBjsJXU0VYb3s-Zd5g",
  },
  {
    event:
      "A group of pirates seeks refuge on your island, offering to share their plunder in exchange for sanctuary.",
    swipeLeftText: "Sure.",
    swipeRightText: "No way!",
    swipeLeftAfter: { gains: {money:10 }, loses: { food:10 } },
    swipeRightAfter: { gains: {money:10}, loses: {army:10} },
    colorScheme: "gray",
    imageUrl: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/10/beast-pirates-soldiers.jpg",
  },
  {
    event:
      "A natural disaster strikes your island, causing widespread devastation.",
    swipeLeftText: "Rebuild the City",
    swipeRightText: "Relocate the people!",
    swipeLeftAfter: { gains: { }, loses: { money:10 } },
    swipeRightAfter: { gains: {}, loses: {food:10} },
    colorScheme: "black",
    imageUrl: "https://wallpapercave.com/wp/wp11680546.jpg",
  },
  {
    event:
      "A powerful sea monster terrorizes the waters surrounding your island.",
    swipeLeftText: "Slay it.",
    swipeRightText: "Make it your friend.",
    swipeLeftAfter: { gains: {food:10 }, loses: { army:10 } },
    swipeRightAfter: { gains: {army:10}, loses: {food:10} },
    colorScheme: "lightblue",
    imageUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fd23e71a-5dc9-4f2a-8962-2c1c593c1570/d9fib0w-084862e7-0f87-4820-8991-380b0c1dd59f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ZkMjNlNzFhLTVkYzktNGYyYS04OTYyLTJjMWM1OTNjMTU3MFwvZDlmaWIwdy0wODQ4NjJlNy0wZjg3LTQ4MjAtODk5MS0zODBiMGMxZGQ1OWYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.dGHIF_6eKcjUaWCPWSn9q5_f_VOvxkqBy9AD-ZWSgVo",
  },
  {
    event:
      "A rebellion brews among your citizens, fueled by dissatisfaction with your rule.",
    swipeLeftText: "Apologize to the people",
    swipeRightText: "Quash the rebellion",
    swipeLeftAfter: { gains: {people:10 }, loses: { army:10 } },
    swipeRightAfter: { gains: {money:10}, loses: {army:10} },
    colorScheme: "red",
    imageUrl: "https://static.wikia.nocookie.net/onepiece/images/5/56/Race_Infobox.png",
  },
  {
    event:
      "A valuable resource is discovered on your island, attracting the attention of neighboring rulers.",
    swipeLeftText: "It's mine",
    swipeRightText: "We can share",
    swipeLeftAfter: { gains: {money:20 }, loses: { army:20 } },
    swipeRightAfter: { gains: {people:20}, loses: {food:20} },
    colorScheme: "black",
    imageUrl: "https://cdnb.artstation.com/p/marketplace/presentation_assets/002/873/791/large/file.jpg?1689852726",
  },
  {
    event:
      "Giant traders have set anchor on our coastline..",
    swipeLeftText: "Sound the alarm",
    swipeRightText: "Trade with them",
    swipeLeftAfter: { gains: {people:10 }, loses: { army:10 } },
    swipeRightAfter: { gains: {food:10}, loses: {money:10} },
    colorScheme: "red",
    imageUrl: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/03/one-piece-new-giant-warriors-pirates.jpg",
  },
];