export const events = [
  {
    event:
      "Mama is hosting a Tea Party, we expect you to provide your country's chocolate provisions, unless you want something bad to happen...",
    swipeLeftText: "Sure...",
    swipeRightText: "No way!",
    swipeLeftAfter: [{ loses: { food: 1 } }],
    swipeRightAfter: [{ loses: { army: 1 } }],
    colorScheme: "pink",
    imageUrl: "",
  },
  {
    event:
      "The Revolutionary Army is asking for any kind of donation you can muster, we need everything we can get for our cause!",
    swipeLeftText: "I hate Dragon..",
    swipeRightText: "Viva Revolucion",
    swipeLeftAfter: [{ gains: { army: 1 }, loses: { people: 1 } }],
    swipeRightAfter: [{ gains: { people: 1 }, loses: { money: 1 } }],
    colorScheme: "lightblue",
    imageUrl: "",
  },
  {
    event:
      "My King, it seems like Pirates have reached our port ready to pillage, what should we do?",
    swipeLeftText: "Send the Army",
    swipeRightText: "Bribe them",
    swipeLeftAfter: [{ gains: { people: 1 }, loses: { army: 1 } }],
    swipeRightAfter: [{ gains: { people: 1 }, loses: { money: 1 } }],
    colorScheme: "green",
    imageUrl: "",
  },
];