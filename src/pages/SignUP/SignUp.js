import React, { Component } from 'react';  
import './signUp.css';

class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            password: "",
            gender: "",
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    firsthandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    lasthandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    genderhandler = (event) => {
        this.setState({
            gender: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.firstName} ${this.state.lastName}  Registered Successfully !!!!`)
        console.log(this.state);
        this.setState({
            firstName: "",
            lastName: "",
            password: '',
            gender: "",
        })
     event.preventDefault()
        
    }

    render() {
        return (
            <div className="register-form"
             style={{
                backgroundColor:'lightblue',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '90vh'
                }}
            >
            
                <form className="signup-form" onSubmit={this.handleSubmit}>
                    <h1 className="register-heading">Sign-Up Form</h1>
                    <label>First Name :</label> <input type="text" value={this.state.firstName} onChange={this.firsthandler} placeholder="First Name..." required /><br />
                    <label>Last Name :</label> <input type="text" value={this.state.lastName} onChange={this.lasthandler} placeholder="Last Name..." required/><br />
                    <label>Password :</label> <input type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Password..." required/><br />
                    <label>Gender :</label><select type="options" onChange={this.genderhandler} defaultValue="Select Gender">
                        <option defaultValue>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select><br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
export default SignUp;