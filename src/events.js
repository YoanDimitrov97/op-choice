export const events = [
  {
    id: 1,
    event:
      "Mama is hosting a Tea Party, we expect you to provide your country's chocolate provisions, unless you want something bad to happen...",
    swipeLeftText: "Sure...",
    swipeRightText: "No way!",
    swipeLeftAfter: { gains: {}, loses: { food: 10 } },
    swipeRightAfter: { gains: {}, loses: { army: 10 } },
    colorScheme: "pink",
    imageUrl:
      "https://images.everyeye.it/img-notizie/uno-personaggi-recenti-amati-one-piece-ritorno-scena-v3-363012-1280x960.jpg",
  },
  {
    id: 2,
    event:
      "The Revolutionary Army is asking for any kind of donation you can muster, we need everything we can get for our cause!",
    swipeLeftText: "I hate Dragon..",
    swipeRightText: "Viva Revolucion",
    swipeLeftAfter: { gains: { army: 10 }, loses: { people: 10 } },
    swipeRightAfter: { gains: { people: 10 }, loses: { money: 10 } },
    colorScheme: "lightblue",
    imageUrl:
      "https://static.wikia.nocookie.net/keyblade-universe/images/b/bf/Revolutionary_Army_Post_Anime_Infobox.png",
  },
  {
    id: 3,
    event:
      "My King, it seems like Pirates have reached our port ready to pillage, what should we do?",
    swipeLeftText: "Send the Army",
    swipeRightText: "Bribe them",
    swipeLeftAfter: { gains: { people: 10 }, loses: { army: 10 } },
    swipeRightAfter: { gains: { people: 10 }, loses: { money: 10 } },
    colorScheme: "green",
    imageUrl:
      "https://qph.cf2.quoracdn.net/main-qimg-452719c8d42cfc59052209d24f44afca-pjlq",
  },
  {
    id: 4,
    event:
      "News has arrived that the Pirate Buggy and his circus wanna open shop in town, should we let them?",
    swipeLeftText: "Hell NO!",
    swipeRightText: "I LOVE CIRCUS",
    swipeLeftAfter: { gains: {}, loses: { people: 10 } },
    swipeRightAfter: { gains: { people: 10 }, loses: { food: 10 } },
    colorScheme: "green",
    imageUrl:
      "https://preview.redd.it/one-piece-theory-about-buggy-v0-4q8ultipiwaa1.png?width=838&format=png&auto=webp&s=93a507278d77317c36473868fcc77cbad0c05457",
  },
  {
    id: 5,
    event:
      "Our agents claim they've found rumours of the famous Captain Kuro hiding in our city, what should we do?",
    swipeLeftText: "Apprehend him!",
    swipeRightText: "He died years ago",
    swipeLeftAfter: { gains: { money: 10 }, loses: { army: 10 } },
    swipeRightAfter: { gains: {}, loses: {} },
    colorScheme: "black",
    imageUrl:
      "https://static.wikia.nocookie.net/onepiece/images/e/e5/Kuro_Anime_Cameo.png",
  },
  {
    id: 6,
    event: "The World Government wants us to raise our citizens taxes!",
    swipeLeftText: "Alright..",
    swipeRightText: "Tell them no",
    swipeLeftAfter: { gains: { army: 10 }, loses: { people: 10 } },
    swipeRightAfter: { gains: { people: 10 }, loses: { money: 10 } },
    colorScheme: "lightblue",
    imageUrl: "https://miro.medium.com/v2/resize:fit:1358/0*hllfp1sgZB3j9k6l",
  },
  {
    id: 7,
    event:
      "Sire, it seems someone has discovered that a Devil Fruit has grown on our territory...",
    swipeLeftText: "Sell it.",
    swipeRightText: "Leave it",
    swipeLeftAfter: { gains: { money: 10 }, loses: {} },
    swipeRightAfter: { gains: { food: 10 }, loses: {} },
    colorScheme: "red",
    imageUrl:
      "https://static.wikia.nocookie.net/op-rp/images/c/c3/Merameranomi.jpeg",
  },
  {
    id: 8,
    event: "A neighboring island threatens war unless tribute is paid.",
    swipeLeftText: "Pay it",
    swipeRightText: "This means WAR",
    swipeLeftAfter: { gains: {}, loses: { money: 10 } },
    swipeRightAfter: {
      gains: { money: 10, people: 10 },
      loses: { army: 10, food: 10 },
    },
    colorScheme: "green",
    imageUrl:
      "https://static.wikia.nocookie.net/onepiece/images/3/37/Gold_Island_Infobox.png",
  },
  {
    id: 9,
    event: "A mysterious illness spreads among your people...",
    swipeLeftText: "Find a Doctor",
    swipeRightText: "Let them die..",
    swipeLeftAfter: { gains: { people: 10 }, loses: { money: 10 } },
    swipeRightAfter: { gains: { food: 10 }, loses: { people: 10 } },
    colorScheme: "gray",
    imageUrl:
      "https://static.wikia.nocookie.net/onepiece/images/f/f3/Five-Day_Disease_Infobox.png",
  },
  {
    id: 10,
    event:
      "My liege, it seems they are way too many beggars and criminals in our slums...",
    swipeLeftText: "Burn them!",
    swipeRightText: "Leave em be.",
    swipeLeftAfter: { gains: { food: 20 }, loses: { people: 20 } },
    swipeRightAfter: { gains: { army: 10 }, loses: { money: 10 } },
    colorScheme: "gray",
    imageUrl:
      "https://lh3.googleusercontent.com/VAfHIBLvEgtgtMSOhYg2dKHfU0hd7Z2KLLcT57PgTsb8KO5tEW4iA9lynstl2O-aOToEKcwZCFXnJKR6YqeekRNbvYU49ucobfCtnKIIv5yQLIz0ky7toJIxt0NThk6ZBRe_wYEKpiRsTNKwssAsIqepiT5hhuXaE5FwaCHSxkI5eBjsJXU0VYb3s-Zd5g",
  },
  {
    id: 11,
    event:
      "A group of pirates seeks refuge on your island, offering to share their plunder in exchange for sanctuary.",
    swipeLeftText: "Sure.",
    swipeRightText: "No way!",
    swipeLeftAfter: { gains: { money: 10 }, loses: { food: 10 } },
    swipeRightAfter: { gains: { money: 10 }, loses: { army: 10 } },
    colorScheme: "gray",
    imageUrl:
      "https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/10/beast-pirates-soldiers.jpg",
  },
  {
    id: 12,
    event:
      "A natural disaster strikes your island, causing widespread devastation.",
    swipeLeftText: "Rebuild the City",
    swipeRightText: "Relocate the people!",
    swipeLeftAfter: { gains: {}, loses: { money: 10 } },
    swipeRightAfter: { gains: {}, loses: { food: 10 } },
    colorScheme: "black",
    imageUrl: "https://wallpapercave.com/wp/wp11680546.jpg",
  },
  {
    id: 13,
    event:
      "A powerful sea monster terrorizes the waters surrounding your island.",
    swipeLeftText: "Slay it.",
    swipeRightText: "Make it your friend.",
    swipeLeftAfter: { gains: { food: 10 }, loses: { army: 10 } },
    swipeRightAfter: { gains: { army: 10 }, loses: { food: 10 } },
    colorScheme: "lightblue",
    imageUrl:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fd23e71a-5dc9-4f2a-8962-2c1c593c1570/d9fib0w-084862e7-0f87-4820-8991-380b0c1dd59f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ZkMjNlNzFhLTVkYzktNGYyYS04OTYyLTJjMWM1OTNjMTU3MFwvZDlmaWIwdy0wODQ4NjJlNy0wZjg3LTQ4MjAtODk5MS0zODBiMGMxZGQ1OWYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.dGHIF_6eKcjUaWCPWSn9q5_f_VOvxkqBy9AD-ZWSgVo",
  },
  {
    id: 14,
    event:
      "A rebellion brews among your citizens, fueled by dissatisfaction with your rule.",
    swipeLeftText: "Apologize to the people",
    swipeRightText: "Quash the rebellion",
    swipeLeftAfter: { gains: { people: 10 }, loses: { army: 10 } },
    swipeRightAfter: { gains: { money: 10 }, loses: { army: 10 } },
    colorScheme: "red",
    imageUrl:
      "https://static.wikia.nocookie.net/onepiece/images/5/56/Race_Infobox.png",
  },
  {
    id: 15,
    event:
      "A valuable resource is discovered on your island, attracting the attention of neighboring rulers.",
    swipeLeftText: "It's mine",
    swipeRightText: "We can share",
    swipeLeftAfter: { gains: { money: 20 }, loses: { army: 20 } },
    swipeRightAfter: { gains: { people: 20 }, loses: { food: 20 } },
    colorScheme: "black",
    imageUrl:
      "https://cdnb.artstation.com/p/marketplace/presentation_assets/002/873/791/large/file.jpg?1689852726",
  },
  {
    id: 16,
    event: "Giant traders have set anchor on our coastline..",
    swipeLeftText: "Sound the alarm",
    swipeRightText: "Trade with them",
    swipeLeftAfter: { gains: { people: 10 }, loses: { army: 10 } },
    swipeRightAfter: { gains: { food: 10 }, loses: { money: 10 } },
    colorScheme: "red",
    imageUrl:
      "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/03/one-piece-new-giant-warriors-pirates.jpg",
  },
  {
    id: 17,
    event: "The World Government is claiming you're hiding Revolutionaries!",
    swipeLeftText: "Let them search..",
    swipeRightText: "Lie to the Governement..",
    swipeLeftAfter: { gains: { army: 10 }, loses: { people: 10 } },
    swipeRightAfter: { gains: { people: 10 }, loses: { money: 10 } },
    colorScheme: "lightblue",
    imageUrl:
      "https://qph.cf2.quoracdn.net/main-qimg-f0b27f43e20e5ad9f6302ee2738b5880-lq",
  },
  {
    id: 18,
    event: "My King, we have received reports that King of Beasts - Kaido has dropped down in the town square from the sky!",
    swipeLeftText: "Send the Army to fight him!",
    swipeRightText: "Offer him your finest alcohol.",
    swipeLeftAfter: { gains: { }, loses: { army: 50 } },
    swipeRightAfter: { gains: { }, loses: { food: 20 } },
    colorScheme: "gray",
    imageUrl:
      "https://image.myanimelist.net/ui/KjC5Qbstm7gAuv45xSPyOaCW2oma2hN16AJTGuB8Yx6c4F6h1C5Chs_Y3f-pkWA8srWboxYR0KojacFLZ96sD0t-HOBCwUJ3Ff5KCZzpZyDTFfMlPc49aT5mwm5ttvry-KUCkj_YuATQziCNNLV7ags5MEFSWpoxwkhCNRV2lUc",
  },
  {
    id: 19,
    event: "We've received word that there is an illegal Slave Auction House in the Capital Downtown...",
    swipeLeftText: "Free them..",
    swipeRightText: "Do nothing.",
    swipeLeftAfter: { gains: { people:10 }, loses: { food: 10 } },
    swipeRightAfter: { gains: { money:10}, loses: { people: 10 } },
    colorScheme: "pink",
    imageUrl:
      "https://www.opfanpage.com/wp-content/uploads/2018/03/1-15.png",
  },
  {
    id: 20,
    event: "We've recieved reports that Red Haired Shanks is drinking one of our bars dry, what do we do with him?",
    swipeLeftText: "Capture him!",
    swipeRightText: "Leave him be...",
    swipeLeftAfter: { gains: { }, loses: { people: 50 } },
    swipeRightAfter: { gains: {}, loses: { food: 20 } },
    colorScheme: "red",
    imageUrl:
      "https://qph.cf2.quoracdn.net/main-qimg-e30c7a0a8d85ad0dfd65f89c8f5dc019-pjlq",
  },
  {
    id: 21,
    event: "It's an emergency, the emperor Charlotte Linlin is somehow rampaging in our capital, due to her hunger pangs...",
    swipeLeftText: "Give her food...",
    swipeRightText: "Bait her out of here.",
    swipeLeftAfter: { gains: { }, loses: { food: 50 } },
    swipeRightAfter: { gains: {}, loses: { people: 20 } },
    colorScheme: "pink",
    imageUrl:
      "https://i.ytimg.com/vi/WdUDM9Wm7Os/maxresdefault.jpg",
  },
  {
    id: 22,
    event: "A young upstart calling himself Blackbeard is wreaking havoc and stealing our people's hard earned money!",
    swipeLeftText: "Stop him!",
    swipeRightText: "It's just money...",
    swipeLeftAfter: { gains: { }, loses: { army: 50 } },
    swipeRightAfter: { gains: {}, loses: { money: 20 } },
    colorScheme: "black",
    imageUrl:
      "https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/01/Blackbeard-Power.jpg",
  },
  {
    id: 23,
    event: "Sir, it seems that the great pirate Whitebeard is on our coast, asking us for a donation to his hometown, otherwise he'll destroy the island!",
    swipeLeftText: "We'll donate",
    swipeRightText: "He's just bluffing",
    swipeLeftAfter: { gains: { }, loses: { money: 50 } },
    swipeRightAfter: { gains: {}, loses: { army: 20 } },
    colorScheme: "white",
    imageUrl:
      "https://static.wikia.nocookie.net/onepiece/images/b/b7/Edward_Newgate_Anime_Infobox.png",
  },
  {
    id: 24,
    event: "A renowned scholar offers to establish an academy on your island, promising to attract intellectuals and further advance knowledge.",
    swipeLeftText: "Invest in him",
    swipeRightText: "Waste of money",
    swipeLeftAfter: { gains: { people:10 }, loses: { money: 10 } },
    swipeRightAfter: { gains: {army:10}, loses: { people: 10 } },
    colorScheme: "green",
    imageUrl:
      "https://staticg.sportskeeda.com/editor/2024/02/35e49-17089456420190-1920.jpg",
  },
  {
    id: 25,
    event: "A Celestial Dragons family is begging for help from a mob of vigilantees...",
    swipeLeftText: "Turn a blind eye",
    swipeRightText: "Help them",
    swipeLeftAfter: { gains: { people:10 }, loses: { army: 10 } },
    swipeRightAfter: { gains: {money:20}, loses: { people: 10 } },
    colorScheme: "white",
    imageUrl:
      "https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/12/Donquixote-Family-Tragedy-One-Piece-Cropped.jpg",
  },
];
//