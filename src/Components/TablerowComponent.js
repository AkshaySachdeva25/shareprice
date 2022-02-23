import React from "react";

export default function TableRow(props) {
    return (
        <tr>
            <td>{props.shareDetails.DISPID}</td>
            <td>{props.shareDetails.MKTCAP}</td>
            <td>{props.shareDetails.lastupd}</td>
            <td>{props.shareDetails.pricecurrent}</td>
            <td>{props.shareDetails.priceprevclose}</td>
            <td>{props.shareDetails.pricechange}</td>
        </tr>
    )
}