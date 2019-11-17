import React from "react"
import "./CSS/banniere.css"
import ONE from  "../images/02.jpg"
import TWO from  "../images/07.jpg"
import THREE from  "../images/22.jpg"
import FOUR from  "../images/23.jpg"
import LOGO from  "../images/logo.png"

const Banniere = () => (
    <div class="banniere" id="Accueil">
        <div class="box">
            <img  class=" reduce-img"src={ONE} alt=""></img>
            <img class="box-img"src={TWO}alt=""></img>
            <img class="box-img"src={THREE}alt=""></img>
            <img class=" reduce-img"src={FOUR}alt=""></img>
            <img class="logo"src={LOGO}alt=""></img>
        </div>
    </div>


)

export default Banniere