import React, { useState, useContext, useEffect } from 'react'
import { Context } from "./App";
import CSS from './Nav.module.css'
import Apple from './assets/apple.png'
import People from './assets/people.png'
import Army from './assets/army.png'
import Money from './assets/money.png'

export default function Nav() {
    const [stats] = useContext(Context);
    const [navStats, setNavStats] = useState();
    console.log(stats);
    useEffect(() => {
      setNavStats(stats)
    }, [stats]);
    return (
      <nav>
        <ul>
          <li>
            <img src={Apple} alt="" />
            <div>
              <p>Food</p>
            </div>
            <p>
              <span>{navStats.food + "%"}</span>
            </p>
            {/* <div className={CSS.apple_full} alt="" style={{height:stats.food+"%"}}></div> */}
          </li>
          <li>
            <img src={People} alt="" />
            <div>
              <p>People</p>
            </div>
            <p>
              <span>{navStats.people + "%"}</span>
            </p>
            {/* <div className={CSS.people_full} alt="" style={{height:stats.people+"%"}}></div> */}
          </li>
          <li>
            <img src={Army} alt="" />
            <div>
              <p>Army</p>
            </div>
            <p>
              <span>{navStats.army + "%"}</span>
            </p>
            {/* <div className={CSS.army_full} alt="" style={{height:stats.army+"%"}}></div> */}
          </li>
          <li>
            <img src={Money} alt="" />
            <div>
              <p>Money</p>
            </div>
            <p>
              <span>{navStats.money + "%"}</span>
            </p>
            {/* <div className={CSS.money_full} alt="" style={{height:stats.money+"%"}}></div> */}
          </li>
        </ul>
      </nav>
    );
}
