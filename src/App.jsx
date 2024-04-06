import React, { useState, useEffect } from "react";
import Card from "./Card";
import Nav from "./Nav";
import "./App.css";
import { events } from "./events";
import { generateStartingCard, generateEventOnPassedRound, generateGameOverEvents } from "./requiredEvents";

export const Context = React.createContext();

function App() {
  const [isGameOver, setIsGameOver] = useState({ gameover: false, firstTimePlaying: true });
  const [randomEventList, setRandomEventList] = useState([]);
  const [isNextRound, setIsNextRound] = useState(false);
  const [isGameStart, setIsGameStart] = useState(true);

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
      setIsGameOver({ gameover: false });
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

    if(isGameStart) {
      setRandomEventList([generateEventOnPassedRound(), ...generatedEvents, generateStartingCard()
      ])
      setIsGameStart(false)
    }
    else{
      setRandomEventList([generateEventOnPassedRound(), ...generatedEvents
      ])
    }

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