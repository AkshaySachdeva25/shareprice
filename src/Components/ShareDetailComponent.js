import React from "react";
import { Component } from "react";
import Axios from "axios";
import TableRow from "./TablerowComponent"

export default class ShareDetailComponent extends Component {
    constructor() {
        super();
        this.state = {
            shareDetails: ""
        }
    }

    render() {
        return (
            <div className="ui container">
                <h1 className="heading mt-6"> NLC Share Details</h1>
                <table className="ui blue table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>MKTCAP</th>
                            <th>lastupd</th>
                            <th>pricecurrent</th>
                            <th>priceprevclose</th>
                            <th>pricechange</th>
                        </tr>
                    </thead>
                    <tbody>
                        <TableRow shareDetails={this.state.shareDetails}></TableRow>
                    </tbody>
                </table>
            </div>
        )
    }

    componentDidMount() {
        function getShareDetails(url) {
            let shareDetails = Axios.get("https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/NLC");
            shareDetails.then((success) => {
                this.setState({
                    shareDetails: success.data.data
                })
            })

        }
    }
}
