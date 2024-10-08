import React, { Component } from "react";
import { connect } from "react-redux";

class FrozenDept extends Component {
    render() {
        return(
            <h1>The frozen food department!</h1>
        )
    }
}

export default connect()(FrozenDept);