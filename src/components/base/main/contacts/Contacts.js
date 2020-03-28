import React, {Component} from "react";
import '../BasicMain.css'
import './Contacts.css'

class Contacts extends Component {
    render() {
        return (
            <div className="contacts">
                <p className="title-main">Contacts</p>
                <p className={'simple-text'}>We are always in touch!!</p>
                <div className={"contact-information"}>
                    <p className={'phone'}>Our phone : </p>
                    <input type={'text'} value={'(044) 374 03 83'} className={'phone-1'}/>
                    <input type={'text'} value={'0(800) 50 77 40'} className={'phone-2'}/>
                    <p className={'email'}>Our email : </p>
                    <input type={'email'} value={'makeup@gmail.com'} className={'email-1'}/>
                </div>

                  <p className={'simple-text'}>You can find us here </p>
                  <div className={'map'}>

                  </div>
            </div>
        );
    }
}

export default Contacts
