import React from "react"
import ScrollableComponent from "react"
import "./CSS/header.css"

const Head = () => {

  function Scrolling(prop){
    var elem = document.getElementById(prop);
    var ypos = elem.offsetTop;
    window.scrollTo(0,ypos-100);
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
  

  return(
  <>
      <div class="header">
          <div class="title">
            <h1>GOÏTA</h1>
          </div>
          <div class="menu">
                <div class="part"onClick={()=>{Scrolling("Accueil")}}><p>Accueil</p></div>
                <div class="part" onClick={()=>{Scrolling("Presentation")}}><p>Présentation</p></div>
                <div class="part"onClick={()=>{Scrolling("Marque")}}><p>Marque</p></div>
                <div class="part"onClick={()=>{Scrolling("Gallerie")}}><p>Galerie</p></div>
          </div>
      </div>
  </>
  )
}






export default Head