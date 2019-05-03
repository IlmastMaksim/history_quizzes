import React, { Component } from "react";
import Aux from "../../hoc/Aux/Aux";

import Home from '../../components/Home/Home';

class HomeBuilder extends Component {
    render() {
        return (
            <Aux>
                <Home />
            </Aux>
        )
    }
}

export default HomeBuilder;