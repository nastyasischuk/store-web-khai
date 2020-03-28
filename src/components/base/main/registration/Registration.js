import React, {Component} from "react";
import FormRegistration from "./FormRegistration";
import './Registration.css'
class Registration extends Component {
    render() {
        return (
            <div className="registration-component">
            <p className="title-main">Registration</p>
                <FormRegistration/>
            </div>
        );
    }
}

export default Registration
