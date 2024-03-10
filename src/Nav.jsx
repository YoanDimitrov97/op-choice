import React, { useContext } from 'react'
import { Context } from "./App";
import CSS from './Nav.module.css'
import Apple from './assets/apple.png'
import People from './assets/people.png'
import Army from './assets/army.png'
import Money from './assets/money.png'

export default function Nav() {
    const [stats, setStats] = useContext(Context);
    return (
        <nav>
            <ul>
                <li>
                    <img src={Apple} alt="" />
                    <div className={CSS.apple_full} alt="" style={{height:stats.food+"%"}}></div>
                </li>
                <li>
                    <img src={People} alt="" />
                    <div className={CSS.people_full} alt="" style={{height:stats.people+"%"}}></div>
                </li>
                <li>
                    <img src={Army} alt="" />
                    <div className={CSS.army_full} alt="" style={{height:stats.army+"%"}}></div>
                </li>
                <li>
                    <img src={Money} alt="" />
                    <div className={CSS.money_full} alt="" style={{height:stats.money+"%"}}></div>
                </li>
            </ul>
        </nav>
    )
}
