import React from 'react';
import CSS from './Card.module.css'


const Card = (props) => {
    console.log(props);
    return (
      <div className={CSS.card} style={{ background: props.event.colorScheme}}>
        <div className={CSS.card_top}>
          <div className={CSS.leftSwipe}>
            <div className={CSS.btn_mask}></div>
            <span>{props.event?.swipeLeftText}</span>
          </div>
          <div className={CSS.rightSwipe}>
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