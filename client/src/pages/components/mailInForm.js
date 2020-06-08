import React, { Component } from 'react';
import * as dc from './dumbComponents';

class MailInForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipients: undefined,
            recipientsNotSubmitted: true,
            email: undefined,
            emailNotSubmitted: true,
            subject: undefined,
            subjectNotSubmitted: true,
            name: undefined,
            nameNotSubmitted: true,
            message: undefined,
            autoGenerateMessage: true,
            messageNotSubmitted: true,
        }
    }

    onRecipientSubmit = () => {
        this.setState({
            recipientsNotSubmitted: false
        });
        // network calls and other stuff
    }

    onEmailSubmit = () => {
        this.setState({
            emailNotSubmitted: false
        });
    }

    onSubjectSubmit = () => {
        this.setState({
            subjectNotSubmitted: false
        });
    }

    onNameSubmit = () => {
        this.setState({
            nameNotSubmitted: false
        });
    }

    renderSwitch() {
        if (this.state.recipientsNotSubmitted) {
            return dc.stateRecipientSelection((e) => {
                this.setState({
                    recipients: e.target.value
                })
            }, this.onRecipientSubmit);
        } else if (this.state.emailNotSubmitted) {
            return dc.getEmail((e) => {
                this.setState({
                    email: e.target.value
                });
            }, this.onEmailSubmit);
        } else if (this.state.subjectNotSubmitted) {
            return dc.getSubject((e) => {
                this.setState({
                    subject: e.target.value
                });
            }, this.onSubjectSubmit);
        } else if (this.state.messageNotSubmitted) {
            return this.getMessage();
        } else if (this.state.nameNotSubmitted) {
            return dc.getName((e) => {
                this.setState({
                    name: e.target.value
                });
            }, this.onNameSubmit);
        } else {
            return dc.getEndOfFlow();
        }
    }

    getAutoGeneratedMessageOption = () => {
        // Code
    }

    getMessage() {
        return (
            <form onSubmit={() => { this.setState({ messageNotSubmitted: false })}}>
                <h2>Would you like an auto generated message?</h2>
                <div className="form-check">
                    <label>
                    <input
                        aria-label="select auto generated message"
                        type="radio"
                        name="state-selection"
                        onClick={() => { this.setState({ autoGenerateMessage: true })}}
                        className="form-check-input"
                    />
                    Yes
                    </label>
                </div>

                <div className="form-check">
                    <label>
                    <input
                        aria-label="de-select auto generated message"
                        type="radio"
                        name="state-selection"
                        onClick={() => { this.setState({ autoGenerateMessage: false })}}
                        className="form-check-input"
                    />
                    No
                    </label>
                    {!this.state.autoGenerateMessage &&  
                        (
                            <div>
                                <textarea placeholder='Please type your message for the state representatives here'>   
                                </textarea>
                            </div>
                        )
                    }
                </div>

                <div className="form-group">
                    <button className="btn btn-primary mt-2" type="submit">
                    Submit
                    </button>
                </div>
            </form>
        )
    }

    render() {
        return (
            <div>
                {this.renderSwitch()}
            </div>
        )
    }
    
}

export default MailInForm;