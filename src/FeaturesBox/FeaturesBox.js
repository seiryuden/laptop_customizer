import React from "react";
import ItemList from "./ItemList";

class FeaturesBox extends React.Component{

    
  render(){
    
    const featureList = Object.keys(this.props.features).map(key => {

      return <div className="feature" key={key}>
      <div className="feature__name">{key}</div>
      <ul className="feature__list">
        <ItemList features={this.props.features} selectedFeatures={this.props.selectedFeatures} updateFeature={this.props.updateFeature} featureKey={key}/>
      </ul>
      </div>
    })

    return ( 
      <section className="main__form">
        <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
        {featureList}
      </section>
      
    )
  }


}

export default FeaturesBox;