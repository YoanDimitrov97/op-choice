import React, { useState, useEffect } from "react";
import Card from "./Card";
import Nav from "./Nav";
import "./App.css";
import { events } from "./events";

export const Context = React.createContext();

function App() {
  const [isGameOver, setIsGameOver] = useState({gameover: false, firstTimePlaying:true});
  const [randomEventList, setRandomEventList] = useState([]);
  const [isNextRound, setIsNextRound] = useState(false);

  const [stats, setStats] = useState({
    food: 50,
    people: 50,
    army: 50,
    money: 50,
  });

  useEffect(() => {
    //player successfully survived the round
    if (isNextRound) {
      generateRound();
      // Reset isNextRound state
      setIsNextRound(false);
    }
  }, [isNextRound]);
  useEffect(() => {
    if (isGameOver['gameover']) {
      console.log('GAME IS OVER');
      generateGameOver();
      setStats({
        food: 50,
        people: 50,
        army: 50,
        money: 50,
      })
      setIsGameOver({gameover:false});
    }
  }, [isGameOver]);

  //generates a random event, keeping track of already shown events for the round
  const getRandomEvent = (events, alreadySelected) => {
    const availableEvents = events.filter(
      (event) => !alreadySelected.includes(event.id)
    );
    const randomNum = Math.floor(Math.random() * availableEvents.length);
    const chosenEvent = availableEvents[randomNum]

    return chosenEvent;
  };

  const generateRound = () => {
    console.log("GENERATING ROUND");
    setRandomEventList([])
    let alreadySelected = [];
    let generatedEvents = [];
    const randomEvents = Array.from({ length: 12 }, (_, index) => {
      let getEvent = getRandomEvent(events, alreadySelected)
      alreadySelected.push(getEvent.id);
      generatedEvents.push(getEvent);
    });

    setRandomEventList([generateEventOnPassedRound(), ...generatedEvents])
    console.log(randomEventList);
  };

  const generateGameOver = () => {
    if (isGameOver['gameover']) {
      generateRound();
      setRandomEventList((prev) => [...prev, generateGameOverEvents(isGameOver['reason'])])
      console.log("MY GAMEOVER EVENT LIST", randomEventList);
      setIsGameOver({ gameover: false })
    }
  }

  const generateEventOnPassedRound = () => {
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
  const generateStartingCard = () => {
    return (
      <Card
        key={1000}
        id={1000}
        event={{
          nextRound: true,
          event:
            "You are the King of a newly formed Country in the Grand Line, you are tasked with balancing food provisions, the needs of the people, the feelings of the army and the coffers of the Kingdom...",
          swipeLeftText: "Okay...",
          swipeRightText: "Bring it on!",
          swipeLeftAfter: { gains: {}, loses: {} },
          swipeRightAfter: { gains: {}, loses: {} },
          colorScheme: "gold",
          imageUrl:
            "https://static.wikia.nocookie.net/onepiece/images/5/54/Bourgeois_Kingdom_Infobox.png",
        }}
      />
    );
  };
  const generateGameOverEvents = (lossReason) => {
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

  return (
    <>
      <Context.Provider
        value={[
          stats,
          setStats,
          setIsNextRound,
          isGameOver,
          setIsGameOver,
          randomEventList,
          setRandomEventList
        ]}
      >
        <Nav />
        <div className="cardHolder">
          {/* Start Card or if game over*/}
          {/* {isGameOver['firstTimePlaying'] && generateStartingCard()} */}
          {randomEventList.length === 0 && generateRound()}
          {randomEventList && randomEventList.map((event, index) => {
            return (<Card key={index + 2} id={index + 2} event={event} />)
          })}
          {/* Generate X random events for the first time */}
          {/* {!isNextRound && generateRound()} */}
        </div>
      </Context.Provider>
    </>
  );
}

export default App;
