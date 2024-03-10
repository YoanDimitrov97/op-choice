import React, { useState, useContext } from 'react'
import Card from './Card'
import Nav from './Nav';
import "./App.css";
import { events } from './events';


export const Context = React.createContext();

function App() {
  const [stats, setStats] = useState({ food: 50, people: 50, army: 50, money: 50 })

  const getRandomNumber = (events) => {
    const randomNum = Math.floor(Math.random() * events.length);
    return randomNum;
  }

  return (
    <>
      <Context.Provider value={[stats, setStats]}>
        <Nav />
        <div className="cardHolder">
          <Card
            key={1000}
            id={1000}
            event={{
              event:
                "You are the King of a newly formed Country in the Grand Line, you are tasked with balancing food provisions, the needs of the people, the feelings of the army and the coffers of the Kingdom...",
              swipeLeftText: "Okay...",
              swipeRightText: "Bring it on!",
              swipeLeftAfter: {gains: {}, loses: {}},
              swipeRightAfter: {gains: {}, loses:{}},
              colorScheme:"gold",
              imageUrl:"https://static.wikia.nocookie.net/onepiece/images/5/54/Bourgeois_Kingdom_Infobox.png"
            }}
          />
          {Array.from({ length: 12 }, (_, index) => (
            <Card
              key={index+2}
              id={index+2}
              event={events[getRandomNumber(events)]}
            />
          ))}

<Card
            key={1}
            id={1}
            event={{
              event:
                "A year of your reign passes successfully...",
              swipeLeftText: "Thank God..",
              swipeRightText: "A year passes.",
              swipeLeftAfter: {gains: {}, loses: {}},
              swipeRightAfter: {gains: {}, loses:{}},
              colorScheme:"orange",
              imageUrl:"https://dotesports.com/wp-content/uploads/2023/01/23131823/Lantern-Rite-Promotional-Video-Dream-Upon-a-Lantern%EF%BD%9CGenshin-Impact_-Lantern-Rite-Promotional-Video-Dream-Upon-a-Lantern%EF%BD%9CGenshin-Impact-2023-1-23-9390.833-1080p-streamshot-1024x608.png"
            }}
          />
        </div>
      </Context.Provider>
    </>
  );
}

export default App