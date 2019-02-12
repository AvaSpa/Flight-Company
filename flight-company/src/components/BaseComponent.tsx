import { Component } from "react";

export default class BaseComponent<P, S> extends Component<P, S>{

    constructor(props: P) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ [event.currentTarget.name]: event.currentTarget.value } as any);
        event.preventDefault();
    }
}