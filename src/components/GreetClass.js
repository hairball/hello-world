import React, {Component} from "react";

class GreetClass extends Component {
    render() {
        return <h1>Howdy {this.props.name} a.k.a {this.props.heroName}</h1>
    }
}

export default GreetClass