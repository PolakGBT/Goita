import React from "react"
import "./CSS/header.css"
import menu from "../images/menu.svg"
import logo from "../images/goita.png"
import {TweenLite,Power0,CSSPlugin} from "gsap/all.js";
import {useEffect, useRef } from 'react';

const Head = () => {

  function Scrolling(prop){
    var elem = document.getElementById(prop);
    var ypos = elem.offsetTop;
    window.scrollTo(0,ypos-100);
    if(window.innerWidth <= 950){
      oppen();
    }
  }
  let menublock = useRef(null);
  var bool = false;
  function oppen(){
    if(!bool){
      TweenLite.to(menublock,0.5,{height:'350px',ease: Power0.easeNone});
      bool=true;
    }
    else{
      TweenLite.to(menublock,0.2,{height:0,ease: Power0.easeNone});
      bool=false;
    }
  }
  /*window.addEventListener('scroll', Scool);
  
  function Scool(){
    var tab = ["Accueil","Presentation","Marque","Gallerie"];
    for(var i;i<tab.length;i++){
      tab[i][0] = document.getElementById(tab[i]).offsetTop;
      tab[i][1] = document.getElementById(tab[i]).offsetHeight/2+document.getElementById(tab[i]).offsetTop;
      console.log(tab[i][0]);
      console.log(tab[i][1]);
    }
  }*/
  
  /*        <div class="logo-p">
          <img src={logo}></img>
        </div>
          <div class="title">
            <h1>GOÏTA</h1>
          </div>
           */

  return(
  <>
      <div class="header">

          <div class="menu">
            <div class="part1">
              <div class="part"onClick={()=>{Scrolling("Accueil")}}><p>ACCUEIL</p></div>
              <div class="part" onClick={()=>{Scrolling("Presentation")}}><p>SAVOIR-FAIRE</p></div>
            </div>
            <img class="part" src={logo}></img>
            <div class="part2">
              <div class="part"onClick={()=>{Scrolling("Marque")}}><p>MARQUE</p></div>
              <div class="part"onClick={()=>{Scrolling("Gallerie")}}><p>COLLECTION</p></div>
              <div class="part"onClick={()=>{Scrolling("Conntact")}}><p>CONTACT</p></div>
            </div>
          </div>
          <div class="logo-mobile"onClick={()=>{Scrolling("Accueil")}}>
            <img src={logo}></img>
          </div>
          <div class="menu-mobile" onClick={()=>{oppen()}}>
            <img src={menu}></img>
          </div>
      </div>
      <div class="header-mobile" ref={el => menublock = el}>
                <div class="part-mobile"onClick={()=>{Scrolling("Accueil")}}><p>ACCUEIL</p></div>
                <div class="part-mobile" onClick={()=>{Scrolling("Presentation")}}><p>SAVOIR-FAIRE</p></div>
                <div class="part-mobile"onClick={()=>{Scrolling("Marque")}}><p>MARQUE</p></div>
                <div class="part-mobile"onClick={()=>{Scrolling("Gallerie")}}><p>COLLECTION</p></div>
                <div class="part-mobile"onClick={()=>{Scrolling("Conntact")}}><p>CONTACT</p></div>
      </div>
  </>
  )
}






export default Head