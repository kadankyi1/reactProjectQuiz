import React, {Component} from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";

class Quizbee extends Component {
    render(){
        return (
            <div className="container">
                <div className="title">Quizbee</div>
            </div>
        );
    }
}

ReactDOM.render(<Quizbee />, document.getElementById("root"));