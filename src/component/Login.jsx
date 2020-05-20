import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class LoginPage extends React.Component{
    constructor(props){
        super(props);

        this.compileFormData=this.compileFormData.bind(this);
        this.handleEmailChange=this.handleEmailChange.bind(this);
        this.handlePasswordChange=this.handlePasswordChange.bind(this);
        
        this.state={
            email:'',
            password:'',
        };
    }

    handleEmailChange(e){
        this.setState({email:e.target.value});
    }

    handlePasswordChange(e){
        this.setState({password:e.target.value});
    }

    compileFormData(){
        const{loginFunction}=this.props;
        const formData=this.state;
        loginFunction(formData);
    }

    render(){
        return(
            <div className="row justify-countent-center">
            <div className="col-10 col-sm-7 col-md-5 col-lg-4">
                <Form>
                    <FormGroup>
                        <Label for="userEmail">Email</Label>
                        <Input
                        type="email"
                        name="email"
                        id="userEmail"
                        placeholder="noreply@schoolweibo.com" 
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="userPassword">Password</Label>
                        <Input
                        type="password"
                        name="password"
                        id="userPassword"
                        placeholder="password"
                        value={this.state.password}
                        onChange={this.handlePasswordChange}
                        />
                    </FormGroup>
                    <Button onClick={this.compileFormData}>登录</Button>
                </Form>
            </div>
            </div>
        );
    }
}