import React, { Component } from "react";
import { connect } from "react-redux";
import { GetSoldierInfo } from "../../../application/actions/SoldierAction";


class Home extends Component {
    render() {
        const { GetSoldierInfo } = this.props;
        GetSoldierInfo({ name: "Brian" })
        return (
            <>
                <h1>Home View</h1>
            </>
        )
    }
}

const mapDispatchToProps = {
    GetSoldierInfo
}

export default connect(null, mapDispatchToProps)(Home);
