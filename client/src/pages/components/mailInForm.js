import React, { Component } from 'react';
import { states } from '../constants/states';

class MailInForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statesToShow: [],
        }
    }

    filterStates = (e) => {
        let searchString = e.target.value;
        let searchable_states = []
        if (searchString) {
            searchable_states = states.filter((state) => {
                return state.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1 
            });
        }
        this.setState({
            statesToShow: searchable_states.slice(0, 10) 
        })
    }

    render() {
        return (
            <div>
                <input className="form-control mr-sm-2" type="search" placeholder="Search For Your State Here" aria-label="Search" onChange={this.filterStates}></input>
                    {this.state.statesToShow.map((state) => {
                        return (
                            <div className='dropdown-item' key={state.abbrev}>
                                <a href='#'>{state.name}</a>
                            </div>
                        )
                    })}
            </div>
        )
    }
    
}

export default MailInForm;