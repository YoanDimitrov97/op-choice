import React, { useState, useContext } from 'react'
import { Context } from "./App";
import CSS from './Card.module.css'


const Card = (props) => {
  const [stats, setStats, setFinishedEvents, setIsNextRound, setIsGameOver] =
    useContext(Context);
  const [isVisible, setIsVisible] = useState(true);

  //calculate gains/loses after left/right swipe
  const conclusionCalculation = (eventAfter) => {
    const gains = eventAfter?.gains;
    const loses = eventAfter?.loses;
    const gainsArr = Object.keys(gains);
    const losesArr = Object.keys(loses);

    //calculate gains
    if (gainsArr.length > 0)
      gainsArr.map(gain => {
        gains && setStats(prevStats => ({
          ...prevStats,
           [gain]:  stats[gain] += gains[gain]
        }))
      })

    //calculate loses
    if (losesArr.length > 0) {
      losesArr.map((loss) => {
        loses &&
          setStats((prevStats) => ({
            ...prevStats,
            [loss]: (stats[loss] -= loses[loss]),
          }));
      });  
    }

    //hide the event
    setIsVisible(false);

    //insert event id in a list of events that already happened this round
    setFinishedEvents((prev) => [...prev, props.event.id]);

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
    //console.log(gains, "gained", loses, "lost");
    //console.log(Object.keys(gains));
  }

  const handleClickLeft = () => {
    conclusionCalculation(props.event.swipeLeftAfter)
  }
  const handleClickRight = () => {
    conclusionCalculation(props.event.swipeRightAfter)
  }

  return (
    <div
      className={`${CSS.card} ${isVisible ? "" : CSS.hidden}`}
      style={{ zIndex: props.id, background: props.event.colorScheme }}
    >
      <div className={CSS.card_top}>
        <img className={CSS.background_img} src={props.event.imageUrl} />
        <div className={CSS.leftSwipe} onClick={handleClickLeft}>
          <div className={CSS.btn_mask}></div>
          <span>{props.event?.swipeLeftText}</span>
        </div>
        <div className={CSS.rightSwipe} onClick={handleClickRight}>
          <div className={CSS.btn_mask}></div>
          <span>{props.event?.swipeRightText}</span>
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