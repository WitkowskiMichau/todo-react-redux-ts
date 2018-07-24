import React, { Component } from 'react';
import { connect } from 'react-redux';

interface OwnProps {}
type Props =  OwnProps

interface State {
    inputValue: string
}

class AddTodo extends Component<Props, State> {
    state = {inputValue: ''};
    handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({inputValue: event.target.value})
    };
    handleSubmit = (event: React.FormEvent<EventTarget>): void => {
        event.preventDefault();
        this.setState({inputValue: ''})
    };

    render() {
        return (
            <form
                className="submit-form"
                onSubmit={this.handleSubmit}
            >
                <input
                    className="submit-input"
                    value={this.state.inputValue}
                    onChange={this.handleChange}
                />
                <button
                    className="submit-button"
                    type="submit"
                >
                    +
                </button>
            </form>
        )
    }
}

export default AddTodo;