import React from 'react';
import BaseComponent from '../components/BaseComponent';
import FlightList from '../components/FlightList';
import { FlightDto } from '../Dtos';

interface FindFlightProps { }
interface FindFlightState {
    from: string,
    to: string
    flights: FlightDto[]
}

class FindFlight extends BaseComponent<FindFlightProps, FindFlightState>{

    constructor(props: FindFlightProps) {
        super(props);
        this.state = {
            from: "",
            to: "",
            flights: []
        }

        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        fetch("http://localhost:5000/api/flights" + "?from=" + this.state.from + "&to=" + this.state.to)
            .then(response => response.json())
            .then(data => this.setState({ flights: data }))
            .catch(e => console.log(e));
    }

    render() {
        return (
            <div className="App-content offset-3">
                <h2>Find a flight</h2>
                <div className="form-group col-md-5 col-sm-10">
                    <label htmlFor="from">From</label>
                    <input type="text" className="form-control" id="from" name="from" value={this.state.from} onChange={this.handleChange} />
                </div>
                <div className="form-group col-md-5 col-sm-10">
                    <label htmlFor="to">To</label>
                    <input type="text" className="form-control" id="to" name="to" value={this.state.to} onChange={this.handleChange} />
                </div>
                <div className="form-group col-2">
                    <input type="button" name="search" value="Search" onClick={this.getData} />
                </div>
                <FlightList flights={this.state.flights} />
            </div>
        );
    }
}

export default FindFlight