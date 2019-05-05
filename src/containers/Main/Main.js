import React, { Component } from "react";
import Aux from "../../hoc/Aux/Aux";

import Home from './Home/Home';

class Main extends Component {
    render() {
        return (
            <Aux>
                <Home />
            </Aux>
        )
    }
}

export default Main;