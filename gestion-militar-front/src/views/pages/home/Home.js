import React, { Component } from "react";
import { connect } from "react-redux";
import { GetSoldierInfo } from "../../../application/actions/SoldierAction";
import Header from "../../components/Header";


class Home extends Component {

    componentDidMount() {
        this.props.GetSoldierInfo()
    }

    render() {

        return (
            <>
                <Header />
                <div className="container">

                </div>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        GetSoldierInfo: () => dispatch(GetSoldierInfo()),
    }

}

export default connect(null, mapDispatchToProps)(Home);
