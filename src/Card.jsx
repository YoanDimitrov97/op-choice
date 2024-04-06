import React, { useState, useContext } from 'react'
import { Context } from "./App";
import CSS from './Card.module.css'


const Card = (props) => {
  const [stats, setStats, setIsNextRound,isGameOver, setIsGameOver, randomEventList, setRandomEventList] =
    useContext(Context);

  //calculate gains/loses after left/right swipe
  const conclusionCalculation = (eventAfter) => {
    const gains = eventAfter?.gains;
    const loses = eventAfter?.loses;
    const gainsArr = Object.keys(gains);
    const losesArr = Object.keys(loses);

    //calculate gains
    if (gainsArr.length > 0)
      gainsArr.map(gain => {
        let gainCalc = stats[gain] += gains[gain];
        if(gainCalc > 100) gainCalc = 100;
        gains && setStats(prevStats => ({
          ...prevStats,
           [gain]:  gainCalc
        }))
      })

    //calculate loses
    if (losesArr.length > 0) {
      losesArr.map((loss) => {
        loses &&
          setStats((prevStats) => ({
            ...prevStats,
            [loss]: (stats[loss] - loses[loss] <= 0) ? setIsGameOver({gameover:true, reason:loss}) : stats[loss] -= loses[loss],
          }));
      });  
    }

    //clicking the final event that lets you move to next year
    if(props.event?.nextRound) {
      console.log("NEW EVENT");
      setIsNextRound(true)
    }
      

    //loss scenario
    if(stats["food"] <= 0) setIsGameOver({gameover:true, reason:"food"})
    if(stats["people"] <= 0) setIsGameOver({gameover:true, reason:"people"})
    if(stats["army"] <= 0) setIsGameOver({gameover:true, reason:"army"})
    if(stats["money"] <= 0) setIsGameOver({gameover:true, reason:"money"})
    console.log(isGameOver);
    //console.log(gains, "gained", loses, "lost");
    //console.log(Object.keys(gains));
    removeEvent(props.event.id)
  } 
  const removeEvent = (eventId) => {
    console.log("REMOVING EVENT");
    // Filter out the item with the specified itemId
    const updatedEvents = randomEventList.filter(event => event.id !== eventId);
    // Update the state with the new array of items
    setRandomEventList(updatedEvents);
  };
  const handleClickLeft = () => {
    conclusionCalculation(props.event.swipeLeftAfter)
  }
  const handleClickRight = () => {
    conclusionCalculation(props.event.swipeRightAfter)
  }

  return (
    <div
      className={`${CSS.card} `}
      style={{ zIndex: props.id, background: props.event.colorScheme }}
    >
      <div className={CSS.card_top}>
        <img className={CSS.background_img} src={props.event.imageUrl} />
        <div className={CSS.leftSwipe} onClick={handleClickLeft}>
          <div className={CSS.btn_mask}></div>
          <p>{props.event?.swipeLeftText}</p>
        </div>
        <div className={CSS.rightSwipe} onClick={handleClickRight}>
          <div className={CSS.btn_mask}></div>
          <p>{props.event?.swipeRightText}</p>
        </div>
      </div>
      <div className={CSS.card_bottom}>
        <div className={CSS.cardText}>
          <div className={CSS.text_mask}></div>
          <p>{props.event?.event}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;