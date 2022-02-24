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
                <br></br>
                <h1> Share Details of {this.props.shareName}</h1>
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
         var searchStock = this.props.shareName;
         console.log(searchStock);
        setInterval(() => {
            this.getSharePrice("https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/"+searchStock)
        }, 3000);
    }

    getSharePrice(url){
        let shareDetails = Axios.get(url);
            shareDetails.then((success) => {
                this.setState({
                    shareDetails: success.data.data
                })
            })
    }
}
