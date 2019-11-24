import React from "react";
import "./CSS/presentation.css";
import "./CSS/Gallerie.css";
import { useStaticQuery, graphql } from "gatsby";
import {useEffect, useRef ,useState} from 'react';
import {TimelineMax,Power0} from "gsap";
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
          }
        }
      }
  `)
  
  
  let block1 = useRef(null);
  let block2 = useRef(null);
  //let tl = new TimelineMax({repeat:-1});
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
      <h1>
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

  )
  }

export default Gallerie