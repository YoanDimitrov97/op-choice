export const generateStartingCard = () => {
    return {
      id: 1000,
      event:
        "You are the King of a newly formed Country in the Grand Line, you are tasked with balancing food provisions, the needs of the people, the feelings of the army and the coffers of the Kingdom...",
      swipeLeftText: "Okay...",
      swipeRightText: "Bring it on!",
      swipeLeftAfter: { gains: {}, loses: {} },
      swipeRightAfter: { gains: {}, loses: {} },
      colorScheme: "gold",
      imageUrl:
        "https://static.wikia.nocookie.net/onepiece/images/5/54/Bourgeois_Kingdom_Infobox.png",
    }
  };

  export const generateEventOnPassedRound = () => {
    return {
      id: 1,
      nextRound: true,
      event: "A year of your reign passes successfully...",
      swipeLeftText: "Thank God..",
      swipeRightText: "A year passes.",
      swipeLeftAfter: { gains: { food: 10, people: 10, army: 10, money: 10 }, loses: {} },
      swipeRightAfter: { gains: { food: 10, people: 10, army: 10, money: 10 }, loses: {} },
      colorScheme: "orange",
      imageUrl:
        "https://dotesports.com/wp-content/uploads/2023/01/23131823/Lantern-Rite-Promotional-Video-Dream-Upon-a-Lantern%EF%BD%9CGenshin-Impact_-Lantern-Rite-Promotional-Video-Dream-Upon-a-Lantern%EF%BD%9CGenshin-Impact-2023-1-23-9390.833-1080p-streamshot-1024x608.png",
    }
  };

  export const generateGameOverEvents = (lossReason) => {
    console.log("loss reason: ", lossReason);
    if (lossReason === 'food')
      return {
        id: 1001,
        event: "Due to your financial mismanagement, a large portion of your population starved to death, while the rest at your palace door ready to turn you into their next meal...",
        swipeLeftText: "OH God..",
        swipeRightText: "What have I done?!",
        swipeLeftAfter: { gains: {}, loses: {} },
        swipeRightAfter: { gains: {}, loses: {} },
        colorScheme: "red",
        imageUrl:
          "https://i.ytimg.com/vi/QTprW8ojazo/maxresdefault.jpg",
      }

    if (lossReason === 'people')
      return {
        id: 1001,
        event: "Your horrible rule has sparked the flame of Revolution in the heart of the population, they want your head! It is too late now...",
        swipeLeftText: "This can't be!",
        swipeRightText: "I was a horrible ruler...",
        swipeLeftAfter: { gains: {}, loses: {} },
        swipeRightAfter: { gains: {}, loses: {} },
        colorScheme: "red",
        imageUrl:
          "https://lostinanime.com/wp-content/uploads/2014/06/Hunter-X-Hunter-133-Large-01.jpg",
      }

    if (lossReason === 'army')
      return {
        id: 1001,
        event: "You took the hearts and bodies of your soldiers for granted, and now you will feel their rage tenfold, as your General performs a coup and you are virtually defenseless, you can't help but remember all the bad decisions you've made...",
        swipeLeftText: "It's over..",
        swipeRightText: "...",
        swipeLeftAfter: { gains: {}, loses: {} },
        swipeRightAfter: { gains: {}, loses: {} },
        colorScheme: "lightblue",
        imageUrl:
          "https://media.comicbook.com/2020/07/one-piece-anime-manga-1230702.jpeg",
      }


    if (lossReason === 'money')
      return {
        id: 1001,
        event: "You were too loose with the gold in the royal treasury and now the Country is broke, no money for food, to help the people or to pay the army, you've ruined everything...",
        swipeLeftText: "Everybody hates me now..",
        swipeRightText: "I let everyone down!",
        swipeLeftAfter: { gains: {}, loses: {} },
        swipeRightAfter: { gains: {}, loses: {} },
        colorScheme: "gold",
        imageUrl:
          "https://images.hdqwalls.com/wallpapers/joker-money-burning-sg.jpg",
      }
  };