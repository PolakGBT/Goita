import React from "react"
import ri from "@madebyconnor"
import RichText from '@madebyconnor/rich-text-to-jsx';
ri.registerPlugin(RichText);
/*class rich extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        const tt = documentToReactComponents(this.props.text)
      return (
        {tt}
      );
    }
  }
  export default rich
  */
function rich({text}){
      return (
        <RichText richText={text} />
      );
 }

 export default rich