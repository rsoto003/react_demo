import React, { Component } from 'react';

class Form extends Component {
    constructor(props){
        super(props);

        this.state = {
                email: '',
                password: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleInputChange(event){
        const { name, value} = event.target;

        this.setState({
            form: {
                ...this.state.form, 
                [name]: value
            }
        });
        
    }
    handleFormSubmit(event){
        event.preventDefault();
        console.log('Submitting Form!');
    }


    render(){
        const formStyle = {
            fontSize: '24px'
        }
        const { email, password } = this.state.form;

        console.log('state: ', this.state);

        return (
            <form onSubmit={this.handleFormSubmit}>
                <h1> I'm a form! </h1>
                <div>
                    <label>Email</label>
                    <br />
                    <input name="email" style={formStyle} type="text" value={email} onChange={this.handleInputChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <br />
                    <input name="password" style={formStyle} type="password" value={password} onChange={this.handleInputChange}/>
                </div>
                <button>Login</button>
            </form>
        )
    }
}

export default Form;