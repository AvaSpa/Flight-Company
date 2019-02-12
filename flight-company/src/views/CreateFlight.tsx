import React from 'react';
import BaseComponent from '../components/BaseComponent';
import { FlightDto } from '../Dtos';

interface CreateFlightProps { }

class CreateFlight extends BaseComponent<CreateFlightProps, FlightDto>{
    constructor(props: CreateFlightProps) {
        super(props);
        this.state = {
            from: "",
            to: "",
            flightNumber: ""
        }

        this.createFlight = this.createFlight.bind(this);
    }

    createFlight() {

        if (!this.state.flightNumber || !this.state.from || !this.state.to) {
            return;
        }

        fetch("http://localhost:5000/api/flights", {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => alert(response.statusText))
            .catch(e => console.log(e));
    }

    render() {
        return (
            <div className="App-content offset-3">
                <h2>Create a flight</h2>
                <div className="form-group col-md-5 col-sm-10">
                    <label htmlFor="from">From</label>
                    <input type="text" className="form-control" id="from" name="from" value={this.state.from} onChange={this.handleChange} />
                </div>
                <div className="form-group col-md-5 col-sm-10">
                    <label htmlFor="to">To</label>
                    <input type="text" className="form-control" id="to" name="to" value={this.state.to} onChange={this.handleChange} />
                </div>
                <div className="form-group col-md-5 col-sm-10">
                    <label htmlFor="to">Flight number</label>
                    <input type="text" className="form-control" id="to" name="flightNumber" value={this.state.flightNumber} onChange={this.handleChange} />
                </div>
                <div className="form-group col-2">
                    <input type="button" name="create" value="Create" onClick={this.createFlight} />
                </div>
            </div>
        );
    }
}

export default CreateFlight