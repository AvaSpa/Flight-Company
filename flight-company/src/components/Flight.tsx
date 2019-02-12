import React, { Component } from "react";
import { FlightDto } from "../Dtos";

export default class Flight extends Component<FlightDto>{
    render() {
        return (
            <div className="row" >
                <div className="col-md-2">{this.props.from}</div>
                <div className="col-md-2">{this.props.to}</div>
                <div className="col-md-2">{this.props.flightNumber}</div>
            </div>
        );
    }
}