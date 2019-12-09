import React from "react";
import "./CSS/presentation.css";
import "./CSS/Gallerie.css";
import { useStaticQuery, graphql } from "gatsby";
import {useEffect, useRef ,useState} from 'react';
import {TimelineMax,Power0,TweenLite} from "gsap";
import gsap from "gsap";
gsap.registerPlugin(Power0,TimelineMax);


const Gallerie = () => {
    const data = useStaticQuery(graphql`
    {
        contentfulCollection {
          titre
          image {
            fluid {
              src
            }
            id
          }
        }
      }
  `)

  var img = data.contentfulCollection.image;
  var taille = data.contentfulCollection.image.length;
  const list = img.map((img,i) =>
  <img rel="preload" src={img.fluid.src}
  class="imgg"
  alt=""
  id={"img"+i}
  ></img>
  );
  let bool = true;
  let phone = false;
  let position = "#img0";
  var i = 0;

  useEffect(()=>{
    TweenLite.to("#img0",0,{'left':'50%'});
    TweenLite.to("#img0",0,{x:'-50%'});
    inter();
  }); 

function inter(){
  if(bool){
    TweenLite.to(position,1,{'left':'0%'},"same1");
    TweenLite.to(position,1,{x:'-100%'},"same1");
    TweenLite.to(position,0,{'left':'120%',delay:1},"same2");
    TweenLite.to(position,0,{x:'0%',delay:1},"same2");
    position = "#img"+i;
    i++;
    if(i>taille-1){
      i =0;
    }
    TweenLite.to(position,1,{'left':'50%'},"same1");
    TweenLite.to(position,1,{x:'-50%'},"same1");
  }
  gsap.delayedCall(5,inter);
}



function phonee(){
  if(bool){
    bool = false;
    TweenLite.to(position,0,{position: 'fixed'});
    TweenLite.to(position,0,{top:0});
  }
  else{
    bool = true;
    TweenLite.to(position,0,{position: 'absolute'});
    TweenLite.to(position,0,{top:'50%'});
  }

}




  return(
    <>
      <div class ="bar" id="Gallerie">
        <div></div>
      </div>
      <div class="contain">
        <div class="c-contain-img" onDoubleClick={()=>{phonee()}}>
          {list}
        </div>
        <div class="c-contain-text">
          <div class="c-contain-text-first">
            <div style={{
              display:'flex',
              flexDirection:'column',
              marginTop:'50px',
              marginLeft:'50px',
            }}>
              <h1 class="c-contain-title-one">INSPIRATIONS</h1>
              <div style={{
                height:'1x',
                backgroundColor:'#000000',
                width:'60px',
                position:'relative',
                display:'block',
                height:'1px',
              }}>
              </div>
            </div>
            <div style={{
              marginTop:'20px',
              marginLeft:'50px',
              marginRight:'50px',
            }}>
              <h2>Elegance</h2>
              <h2>& Mixité</h2>
            </div>
            <div style={{
              marginTop:'20px',
              marginLeft:'30px',
              marginBottom:'50px',
            }}>
              <p>L’élégance utile qui valorise</p>
              <p>l'Homme et de la Femme </p>
            </div>
          </div>
        </div>
      </div>
    </>
    )
  }

export default Gallerie

/* let block1 = useRef(null);
  let block2 = useRef(null);
  const [tl] = useState(new TimelineMax({repeat:-1}));

  useEffect(()=>{
    tl.to(block1,80,{xPercent:100,ease: Power0.easeNone},"same1");
    tl.set(block1,{xPercent:-100});
    tl.to(block1,80,{xPercent:0,ease: Power0.easeNone});
    tl.to(block2,160,{xPercent:200,ease: Power0.easeNone},"same1");
  }); 


  var img = data.contentfulCollection.image;
  const list = img.map((img) =>
  <img rel="preload" src={img.fluid.src} style={{
    width:'auto',
    marginLeft:'40px',
    marginRight:'40px',
  }}
  class="part2"
  alt=""
  ></img>
);

  
  return(
  <>
  <div class ="bar" id="Gallerie">
      <div></div>
  </div>
  <div class="contain">
    <div style={{
      width:'100%',
      height:"20%",
      position: 'relative',
      overflow: 'hidden',
      display: "flex",
      justifyContent: "center"
    }}>
      <h1 class="faso">
        {data.contentfulCollection.titre}
      </h1>
    </div>
    <div style={{
      height:'90%',
      width:'100%',
      position:'relative',
      display:'flex',
      justifyContent:'center',

      
    }}>
      <div style={{
        height :'100%',
        width :'80%',
        position:'relative',
      }}
      class="part1"
      >
        <div style={{
          height :'100%',
          display:'flex',
          position:'absolute',
          'align-items': 'center',
          justifyContent:'flex-end',
          right:'0',
        }} 
        ref={el => block1 = el}
        class
        >
          {list}
        </div>
        <div style={{
          height :'100%',
          display:'flex',
          position:'absolute',
          'align-items': 'center',
          justifyContent:'flex-end',
          right:'0',
          transform:'translate(-100%)',
        }} 
        ref={el => block2 = el}
        >
          {list}
        </div>
      </div>  
    </div>
  </div>
  </>

  )*/