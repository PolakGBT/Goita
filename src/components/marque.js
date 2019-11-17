import React from "react"
import "./CSS/marque.css"
import { useStaticQuery, graphql } from "gatsby"
import Slide1 from "./composant/slide1"
import Rich from "./composant/rich"



function Marque(){
    const data = useStaticQuery(graphql`
    {
        allContentfulMarque {
        nodes {
            titre
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
    return(
        <>
        <div class ="bar" id="Marque">
            <div></div>
        </div>
        <div 
        style={{
            'margin-top':'40px',
            width:'100%',
            position: 'relative',
            overflow: 'hidden',
            display: "flex",
        }}
        >
            <div class="box-p">
                <div class="box-p-info">
                    <h1>
                        {data.allContentfulMarque.nodes[0].titre} 
                    </h1>
                    <Rich text={data.allContentfulMarque.nodes[0].paragraphe.json}/>
                </div>
                <div class="box-p-img">
                    <Slide1 picture={data.allContentfulMarque.nodes[0].image}/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Marque
