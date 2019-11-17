import React from "react";
import { useState, useEffect, useRef } from 'react';
import TweenMax from "gsap/all.js";
import gsap from "gsap";
gsap.registerPlugin(TweenMax);

function Slide1({picture}) {
        let [count, setCount] = useState(0);
        
        useInterval(() => {
          if(count<picture.length-1){
            setCount(count + 1);
          }
          else{
              setCount(0);
          } 
          TweenMax.to(".opaque",0,{opacity:'0'});
          TweenMax.to(".opaque",1,{opacity:'1'});
        }, 4000);
      
        return <img class="opaque" src={picture[count].fluid.src}alt=""></img>;
      }
    function useInterval(callback, delay) {
    const savedCallback = useRef();
    
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);
    
    useEffect(() => {
        function tick() {
        savedCallback.current();
        }
        if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
        }
    }, [delay]);
    }

export default Slide1
