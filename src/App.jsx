import React, { useState, useEffect } from "react";
import Card from "./Card";
import Nav from "./Nav";
import "./App.css";
import { events } from "./events";

export const Context = React.createContext();

function App() {
  const [isGameOver, setIsGameOver] = useState(false);
  const [isNextRound, setIsNextRound] = useState(false);
  const [finishedEvents, setFinishedEvents] = useState([]);

  const [stats, setStats] = useState({
    food: 50,
    people: 50,
    army: 50,
    money: 50,
  });

  useEffect(() => {
    console.log(isNextRound);
    if (isNextRound) {
       generateRound();
      // Reset isNextRound state
      setIsNextRound(false);
      // Reset finished events
      setFinishedEvents([]);

     
    }
  }, [isNextRound]);

  //generates a random event, keeping track of already shown events for the round
  const getRandomEvent = (events) => {
    const availableEvents = events.filter(
      (event) => !finishedEvents.includes(event.id)
    );
    const randomNum = Math.floor(Math.random() * availableEvents.length);

    return availableEvents[randomNum];
  };

  const generateRound = () => {
    if (!isNextRound) {
      const randomEvents = Array.from({ length: 12 }, (_, index) => (
        <Card key={index + 2} id={index + 2} event={getRandomEvent(events)} />
      ));
      return [...randomEvents, generateCardOnPassedRound()];
    }
  };

  const generateCardOnPassedRound = () => {
    if (!isNextRound) {
      return (
        <Card
          key={1}
          id={1}
          event={{
            nextRound: true,
            event: "A year of your reign passes successfully...",
            swipeLeftText: "Thank God..",
            swipeRightText: "A year passes.",
            swipeLeftAfter: { gains: {}, loses: {} },
            swipeRightAfter: { gains: {}, loses: {} },
            colorScheme: "orange",
            imageUrl:
              "https://dotesports.com/wp-content/uploads/2023/01/23131823/Lantern-Rite-Promotional-Video-Dream-Upon-a-Lantern%EF%BD%9CGenshin-Impact_-Lantern-Rite-Promotional-Video-Dream-Upon-a-Lantern%EF%BD%9CGenshin-Impact-2023-1-23-9390.833-1080p-streamshot-1024x608.png",
          }}
        />
      );
    }
  };

  return (
    <>
      <Context.Provider
        value={[
          stats,
          setStats,
          finishedEvents,
          setFinishedEvents,
          setIsNextRound,
        ]}
      >
        <Nav />
        <div className="cardHolder">
          {/* Start Card or if game over*/}
          {!isGameOver && (
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
          )}
          {/* Generate X random events for the first time */}
          { generateRound()}
        </div>
      </Context.Provider>
    </>
  );
}

export default App;
