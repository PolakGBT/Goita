import React from "react"
import Head from "../components/head"
import Banniere from "../components/banniere"
import Presentation from "../components/presentation"
import Marque from "../components/marque"
import Gallerie from "../components/gallerie"
import Contact from "../components/Contact"

const IndexPage = () => {

  const pre = React.createRef;

return(  
< >
  <Head />
  <Banniere />
  <Presentation />
  <Marque />
  <Gallerie />
  <Contact />


  </>)
}



export default IndexPage
