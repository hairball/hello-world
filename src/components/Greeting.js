import React from "react";
import * as console from "console";

// function Greeting() {
//     return <h1>Hello Chuck!</h1>
// }

// export default Greeting

// Named export using fat arrow function syntax
// export const Greeting = () => <h1>Hello Fhuckles!</h1>

export const Greeting = (props) => {
    console.log(props);
    return <h1>Hello {props.name} a.k.a. {props.heroName}</h1>
}
