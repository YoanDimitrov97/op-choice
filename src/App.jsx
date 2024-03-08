import { useState } from 'react'
import Card from './Card'
import "./App.css";
import Apple from './assets/apple.png'
import People from './assets/people.png'
import Army from './assets/army.png'
import Money from './assets/money.png'
import { events } from './events';

function App() {

  const getRandomNumber = (events) => {
    const randomNum = Math.floor(Math.random() * events.length);
    return randomNum;
  }

  return (
    <>
      <nav>
        <ul>
          <li>
            <img src={Apple} alt="" />
            <div className="apple_full" alt=""></div>
          </li>
          <li>
            <img src={People} alt="" />
            <div className="people_full" alt=""></div>
          </li>
          <li>
            <img src={Army} alt="" />
            <div className="army_full" alt=""></div>
          </li>
          <li>
            <img src={Money} alt="" />
            <div className="money_full" alt=""></div>
          </li>
        </ul>
      </nav>
      <div className="cardHolder">
        {Array.from({ length: 1 }, (_, index) => (
          <Card
            key={index}
            id={index}
            event={events[getRandomNumber(events)]}
          />
        ))}
      </div>
    </>
  );
}

export default App