import React, { Component } from "react";
import { connect } from "react-redux";
import { SetSoldierInfo } from "../../../application/actions/SoldierAction";


class Home extends Component {
    render() {
        const {SetSoldierInfo} = this.props;
        SetSoldierInfo({name: "Brian"})
        return (
            <>
                <h1>Home View</h1>
            </>
        )
    }
}

const mapDispatchToProps = {
    SetSoldierInfo
}

export default connect(null, mapDispatchToProps)(Home);
