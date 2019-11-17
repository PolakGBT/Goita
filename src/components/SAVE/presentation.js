import React from "react"
import "./CSS/presentation.css"
import { useStaticQuery, graphql } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-html-renderer'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'


const Presentation = () => {
    const data  = useStaticQuery(
        graphql`
        {
            contentfulPresentation {
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
    `)
    const document = documentToReactComponents(data.contentfulPresentation.paragraphe.json);
    return(
    <>
    <div class ="bar">
        <div></div>
    </div>
    <div class="container">
        <div class="box-p">
            <div class="box-p-img">
                <img src={data.contentfulPresentation.image.fluid.src}></img>
            </div>
            <div class="box-p-info">
                <h1>
                    {data.contentfulPresentation.title}
                </h1>
                {document}
            </div>
        </div>
    </div>
    </>

    )
    }

export default Presentation