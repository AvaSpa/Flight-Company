import React, { Component } from "react";
import { FlightDto } from "../Dtos";
import Flight from "./Flight";
import uuid from "uuid";

interface FlightListProps {
    flights: FlightDto[]
}
export default class FlightList extends Component<FlightListProps>{
    render() {
        return (
            <div id="flightList">
                {this.props.flights.map((item) => <Flight key={uuid()} {...item} />)}
            </div>
        );
    }
}