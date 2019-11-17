import React from "react";
import "./CSS/presentation.css";
import { useStaticQuery, graphql } from "gatsby";
import {useEffect, useRef } from 'react';
import Rich from "./composant/rich";


const Presentation = () => {
    const data = useStaticQuery(graphql`
    {
      allContentfulPresentation {
        nodes {
            title
            paragraphe {
                json
            }
            image {
                fluid {
                    src
                }
            }
        }
      }
    }
  `)
  const document2 = data.allContentfulPresentation.nodes[1].paragraphe.json;
  return(
  <>
  <div class ="bar" 
  id="Presentation"
  >
      <div></div>
  </div>
  <div class="container">
      <div class="box-p">
          <div class="box-p-img">
              <img src={data.allContentfulPresentation.nodes[1].image.fluid.src}alt=""></img>
          </div>
          <div class="box-p-info">
              <h1>
                  {data.allContentfulPresentation.nodes[1].title}
              </h1>
              <Rich text={document2}/>
          </div>
      </div>
  </div>
  </>

  )
  }

export default Presentation