import React, {Component} from "react";
import './Registration.css'


class FormRegistration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: 'http://',
            lastName: '',
            firstName: ''
        }
    }
    onChangeAddress = (event) => {
        const inputedAddress = event.target.value;
        this.setState({address: inputedAddress});
        if (!inputedAddress.startsWith('http://')) {
            this.setState({address: 'http:// '})
        }

    }
    onChangeFirstName = (event) => {
        const inputedName = event.target.value;
        this.setState({firstName: formatName(inputedName)});
    }
    onChangeLastName = (event) => {
        const inputedName = event.target.value;
        this.setState({lastName: formatName(inputedName)});
    }

    render() {
        return (
            <div className=" form-w ">
                <form name={"regForm"} action={"POST"}>
                    <div className={"form-style-2"}>
                        <label htmlFor={"firstname"}><span>First Name <span className="required">*</span></span><input
                            name={"firstname"}
                            onChange={this.onChangeFirstName}
                            value={this.state.firstName}/> </label>

                        <label htmlFor={"lastname"}> <span>Last Name <span className="required">*</span></span><input
                            name={"lastname"}
                            onChange={this.onChangeLastName}
                            value={this.state.lastName}/></label>

                        <label htmlFor={"email"}> <span>Email</span> <input type={"email"} name={"email"}/></label>
                        <label htmlFor={"email"}> <span>Password</span> <input type={"password"} name={"password"} required={true}/></label>
                        <label htmlFor={"address"}><span> Site address</span><input type={"text"}
                                                                                    name={"address"}
                                                                                    onChange={this.onChangeAddress}
                                                                                    value={this.state.address}/></label>

                        <label><span>Sex</span></label>
                        <div className={"wrapper-radio"}>
                            <div className={'input-radio-1'}><input type={"radio"} name={"sex"} id={"Female"} value={"Female"}/></div><label
                            className={"label-radio-1"} htmlFor={"Female"}>Female</label>
                            <div className={'input-radio-2'}> <input type={"radio"} name={"sex"} id={"Male"} value={"Male"}/></div><label
                            className={"label-radio-2"} htmlFor={"Male"}>Male</label>
                        </div>
                        <label htmlFor={"about"}><span>Tell about yourself</span><textarea className={"textarea-field"}
                                                                                           name={"about"} id/>
                        </label>
                        <input type={"submit"} value={"Send"}/>
                        <input type={"reset"} value={"Reset"}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default FormRegistration

function formatName(inputedName) {
    if (inputedName.length == 1) {
        inputedName = inputedName.toUpperCase()
    }
    return inputedName;
}
