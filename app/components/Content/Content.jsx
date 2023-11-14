'use client'

import { useState } from 'react'
import React from 'react'
import Player from '../Player/Player'
import Cils from "../Projects/Cils"
import Cravan from "../Projects/Cravan"
import Hourvari from "../Projects/Hourvari"
import Ondees from "../Projects/Ondees"
import Poesie from "../Projects/Poesie"
import Raqqa from "../Projects/Raqqa"
import Relative from "../Projects/Relative"
import Sonego from "../Projects/Sonego"
import Live from '../Live/Live'


const Content = () => {
    const [nav, setNav] = useState("home")
    const cravan = "Cravan`||"
    const relative = `Relative Mouton (((`
    return (
        <>
            {nav === "home" && <Player />}
            <div className=" menu">
                <h3>Projets:</h3>
                <ul>
                    <li>
                        <button onClick={() => setNav("ondees")}>{`Ondées·~`}</button>
                    </li>
                    <li>
                        <button onClick={() => setNav("cravan")}>{cravan}</button>
                    </li>
                    <li>
                        <button onClick={() => setNav("hourvari")}>Hourvari˚</button>
                    </li>
                    <li>
                        <button onClick={() => setNav("raqqa")}>Raqqa¦</button>
                    </li>
                    <li>
                        <button onClick={() => setNav("cils")}>{`Cils´`}</button>
                    </li>
                    <li>
                        <button onClick={() => setNav("relative")}>{relative}</button></li>
                    <li>
                        <button onClick={() => setNav("sonego")}>Sonego /\</button>
                    </li>
                    <li>
                        <button onClick={() => setNav("poesie")}>Poésie Þ</button>
                    </li>
                </ul>
            </div>
            <div className="contenu">
                {nav === "home" && <>
                    <div className="infos">
                        <p>
                            {`Nicolas Zentz est un artiste sonore, musicien et improvisateur. À l'aide d'instruments acoustiques, de
                sons enregistrés ou de synthétiseurs programmés il travaille à composer des textures dans le but de
                développer de nouvelles attentions au son. Après plusieurs années à travailler en musique improvisée, il
                développe un langage autour des notions de bruit et de flou, choisissant de questionner les rapports à l'intention d'entendre de l'auditeur et à l'intention de l'artiste de dévoiler, dans une masse, des éléments qui parlent aux sens(s). Dans ce flou, l'oreille dégage et définit des éléments propices à la
                rêverie.`}
                        </p>
                    </div>
                    <Live />
                </>
                }
                {nav === "cils" && <Cils />}
                {nav === "cravan" && <Cravan />}
                {nav === "hourvari" && <Hourvari />}
                {nav === "ondees" && <Ondees />}
                {nav === "poesie" && <Poesie />}
                {nav === "raqqa" && <Raqqa />}
                {nav === "relative" && <Relative />}
                {nav === "sonego" && <Sonego />}
            </div>
            {nav !== "home" && <div className="accueil">
                <button onClick={() => setNav("home")}>
                    Nicolas Zentz
                </button>
            </div>
            }
        </>
    )
}

export default Content