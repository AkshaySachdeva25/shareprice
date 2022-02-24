import React from "react";
import ReactDOM from "react-dom";
import ShareDetailComponent from "./Components/ShareDetailComponent";


ReactDOM.render(
<div className="ui container">
    <ShareDetailComponent shareName="NLC"></ShareDetailComponent>
    <ShareDetailComponent shareName="NAC"></ShareDetailComponent>
    <ShareDetailComponent shareName="SBI"></ShareDetailComponent>

</div>
,document.getElementById("root"))