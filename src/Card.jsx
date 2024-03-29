import React, { useState, useContext } from 'react'
import { Context } from "./App";
import CSS from './Card.module.css'


const Card = (props) => {
  const [stats, setStats] = useContext(Context);
  const [isVisible, setIsVisible] = useState(true);

  const conclusionCalculation = (eventAfter) => {
    const gains = eventAfter?.gains;
    const loses = eventAfter?.loses;
    const gainsArr = Object.keys(gains);
    const losesArr = Object.keys(loses);

    //calculate gains
    if (gainsArr.length > 0)
      gainsArr.map(sphere => {
        gains && setStats(prevStats => ({
          ...prevStats,
          sphere: stats[sphere] += gains[sphere]
        }))
      })

    //calculate loses
    if (losesArr.length > 0)
      losesArr.map(sphere => {
        loses &&
          setStats(prevStats => ({
            ...prevStats,
            sphere: stats[sphere] -= loses[sphere]
          }))
      })

    setIsVisible(false);
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
    <div className={`${CSS.card} ${isVisible ? '' : CSS.hidden}`} style={{ zIndex: props.id, background: props.event.colorScheme }}>

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