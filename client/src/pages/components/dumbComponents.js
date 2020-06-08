import React from 'react';


export function getEndOfFlow() {
    return (
        <div>
            <h2>Thanks for sending a message to your state representative!</h2>
        </div>
    )
}

export function getName(onChangeCallback, onClickCallback) {
    return (
        <div>
            <h2>Please Enter your name</h2>  
            <div className="col-md-4 mb-3">
                <div className="input-group">
                    <input type="text" 
                        className="form-control" 
                        placeholder="Name"
                        aria-label="Enter name for email greeting" 
                        onChange={onChangeCallback}
                        required/>
                </div>
            </div>
            <button className="btn btn-primary" 
                type="submit" 
                onClick={onClickCallback}>Submit</button>
        </div>
    )
}

export function getSubject(onChangeCallback, onClickCallback) {
    return (
        <div>
            <h2>Please Enter a Subject</h2>  
            <div className="col-md-4 mb-3">
                <div className="input-group">
                    <input type="text" 
                        className="form-control" 
                        placeholder="Subject" 
                        aria-label="Enter subject for email" 
                        onChange={onChangeCallback}
                        required/>
                </div>
            </div>
            <button className="btn btn-primary" type="submit" onClick={onClickCallback}>Submit</button>
        </div>
    )
}

export function getEmail(onChangeCallback, onClickCallback) {
    return (
        <div>
            <h2>Please Enter Your Email</h2>  
            <div className="col-md-4 mb-3">
                <div className="input-group">
                    <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroupPrepend">@</span>
                    </div>
                    <input type="text" 
                        className="form-control" 
                        id="validationCustomUsername" 
                        placeholder="Email"
                        aria-label="Enter email for message sending"  
                        aria-describedby="inputGroupPrepend" 
                        onChange={onChangeCallback}
                        required/>
                </div>
            </div>
            <button className="btn btn-primary" type="submit" onClick={onClickCallback}>Submit</button>
        </div>
    )
}

export function stateRecipientSelection(onChangeCallback, onClickCallback) {
    return (
        <div>
            <h2>What state officials would you like send emails to?</h2>
            <div className="form-group">
                <label htmlFor="state" className="col-sm-2 control-label">State</label>
                <div className="col-sm-5">
                    <select className="form-control" id="state" name="state" onBlue={onChangeCallback}>
                        <option value="ALL">Send To All</option>
                        <option value="AK">Alaska</option>
                        <option value="AL">Alabama</option>
                        <option value="AR">Arkansas</option>
                        <option value="AZ">Arizona</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DC">District of Columbia</option>
                        <option value="DE">Delaware</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="IA">Iowa</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MD">Maryland</option>
                        <option value="ME">Maine</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MO">Missouri</option>
                        <option value="MS">Mississippi</option>
                        <option value="MT">Montana</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="NE">Nebraska</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NV">Nevada</option>
                        <option value="NY">New York</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="PR">Puerto Rico</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VA">Virginia</option>
                        <option value="VT">Vermont</option>
                        <option value="WA">Washington</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WV">West Virginia</option>
                        <option value="WY">Wyoming</option>
                    </select>
                </div>
            </div>
            <button className="btn btn-primary" type="submit" onClick={onClickCallback} >Submit</button>
        </div>
    );
}

