import React, { Component } from 'react';
import { connect } from 'react-redux';
import Redux from 'redux';
import { addTodo } from '../actions';

export interface OwnProps {}
interface DispatchProps {
    addTodo: (inputValue: string) => void
}
type Props = DispatchProps & OwnProps;

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
        this.props.addTodo(this.state.inputValue);
        this.setState({inputValue: ''})
    };

    render() {
        return (
            <form
                className="submit-form"
                onSubmit={this.handleSubmit}
            >
                <input
                    className="submit-form__input"
                    value={this.state.inputValue}
                    onChange={this.handleChange}
                />
                <button
                    className="submit-form__button"
                    type="submit"
                >
                    +
                </button>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch: Redux.Dispatch<any>): DispatchProps => ({
    addTodo: (text) => dispatch(addTodo(text))
});

export default connect(null, mapDispatchToProps)(AddTodo);