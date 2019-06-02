import React from "react";
import SumList from "./SumList";
import SumTotal from "./SumTotal";


class SummaryBox extends React.Component{


    render() {

        return (
            <section className="main__summary">
            <h3>NEW GREENLEAF 2018</h3>
                <SumList selectedFeatures = {this.props.selectedFeatures}/>
                <SumTotal selectedFeatures= {this.props.selectedFeatures}/>
            </section>
            
        )

    }
}

export default SummaryBox;

